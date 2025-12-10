param(
    [switch]$prerelease,
    [switch]$help
)

$RepoOwner = "HAL-guru"
$RepoName = "hal.guru-docs"
$InstallDir = "$env:USERPROFILE\.halguru"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$CommonHeaders = @{
    "User-Agent" = "halguru-installer"
    "Accept"     = "application/vnd.github+json"
}

function Write-Error {
    param([string]$Message)
    Write-Host "ERROR: $Message" -ForegroundColor Red
}

function Get-LatestVersion {
    try {
        $release = Invoke-RestMethod -Uri "https://api.github.com/repos/$RepoOwner/$RepoName/releases/latest" -Headers $CommonHeaders -ErrorAction Stop
        return $release.tag_name
    }
    catch {
        throw "Failed to get latest version. Check your internet connection and ensure the repository exists."
    }
}

function Get-LatestPrereleaseVersion {
    try {
        $rels = Invoke-RestMethod -Uri "https://api.github.com/repos/$RepoOwner/$RepoName/releases?per_page=30" -Headers $CommonHeaders -ErrorAction Stop
        $pre = $rels | Where-Object { $_.prerelease -eq $true -and $_.draft -ne $true } |
                Sort-Object { [datetime]$_.published_at } -Descending |
                Select-Object -First 1
        if (-not $pre -or -not $pre.tag_name) { throw "Prelease not available." }
        return $pre.tag_name
    } catch {
        throw "Failed to get latest version. Check your internet connection and ensure the repository exists."    }
}

function Get-SystemArch {
    try {
        if (-not [Environment]::Is64BitOperatingSystem) {
            throw "Only 64-bit systems are supported"
        }

        if ([System.Runtime.InteropServices.RuntimeInformation]::ProcessArchitecture -eq [System.Runtime.InteropServices.Architecture]::Arm64) {
            return "arm64"
        }
        return "x64"
    }
    catch {
        throw "Unable to determine system architecture: $_"
    }
}

function Install-Halguru {
    try {
        Write-Host "Installer for the 'halguru' CLI (Windows)"

        if ($help) {
            Write-Host "Usage: halguru-install.ps1 [-prerelease|-help]"
            exit
        }

        # Creating installation directory
        New-Item -ItemType Directory -Force -Path $InstallDir -ErrorAction Stop | Out-Null

        # Getting system info and version
        $arch = Get-SystemArch
        $version = if ($prerelease) { Get-LatestPrereleaseVersion } else { Get-LatestVersion }

        $folder = "halguru-win-$arch-$version"
        $filename = "$folder.zip"
        $downloadUrl = "https://github.com/$RepoOwner/$RepoName/releases/download/$version/$filename"
        $downloadPath = Join-Path $InstallDir $filename

        Write-Host "Downloading $filename..." -ForegroundColor Cyan

        # Downloading file
        Invoke-WebRequest -Uri $downloadUrl -OutFile $downloadPath -Headers @{ "User-Agent" = "halguru-installer" } -ErrorAction Stop

        # Unpacking
        Expand-Archive -Path $downloadPath -DestinationPath $InstallDir -Force -ErrorAction Stop
        Move-Item -Path "$InstallDir\$folder\*" -Destination $InstallDir -Force -ErrorAction Stop
        Remove-Item $downloadPath -ErrorAction SilentlyContinue
        Remove-Item "$InstallDir\$folder" -ErrorAction SilentlyContinue

        # Updating PATH
        $userPath = [Environment]::GetEnvironmentVariable("Path", "User")
        if ($userPath -notlike "*$InstallDir*") {
            [Environment]::SetEnvironmentVariable("Path", "$userPath;$InstallDir", "User")
        }

        Write-Host "Installation of halguru v$version completed successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "To install Visual Studio Code extension for halguru CLI"
        Write-Host "Open a new terminal window and execute the command: halguru install" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "To generate manual README.md file for halguru CLI"
        Write-Host "Execute the command: halguru manual $InstallDir\README.md --overwrite" -ForegroundColor Yellow
    }
    catch {
        throw "Installation error: $_"
    }
}

# Main script execution
try {
    Install-Halguru
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
