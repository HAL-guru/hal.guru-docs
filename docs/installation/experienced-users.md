---
title: Advanced installation guide
description: Advanced installation guide
author: Chris Prusik
---

We strongly recommend using the [default installer](index.md). The following guide is for advanced users who want to fully understand the installation process.

For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download).
Next, you need to install the halguru application along with its extension for this editor.

## Visit GitHub Releases

1. Go to [https://github.com/HAL-guru/hal.guru/releases](https://github.com/HAL-guru/hal.guru/releases)
2. Find the latest release version

## Choose Correct Package

1. Determine your system:
    * Windows: `halguru-win-[arch]-[version].zip`
    * macOS: `halguru-osx-[arch]-[version].zip`
    * Linux: `halguru-linux-[arch]-[version].zip`
2. Choose architecture (`[arch]`):
    * For Intel/AMD processors: `x64`
    * For Apple Silicon/ARM: `arm64`

## Download and Extract

1. Download the appropriate ZIP file
2. Create a directory:
    * Windows: `%USERPROFILE%\.halguru`
    * macOS/Linux: `~/.halguru`
3. Extract ZIP contents to this directory

## Set Up System Access

For Windows:

1. Open System Properties → Advanced → Environment Variables
2. Edit User Variables → Path
3. Add new entry: `%USERPROFILE%\.halguru`
4. Click OK to save changes
5. Close and reopen any command prompts

For macOS/Linux:

1. Make the binary executable:

```bash
chmod +x ~/.halguru/halguru
```

2. Create symbolic link (requires sudo):

```bash
sudo ln -sf ~/.halguru/halguru /usr/local/bin/halguru
```

## Initial Configuration

1. Open a new terminal / command prompt
2. Run: `halguru install`
3. Wait for the initial setup to complete the setup and configure Visual Studio Code Editor for your AI Agents

## Verify Installation

1. In the terminal / command prompt run:
2. `halguru --version`
3. Should display the version number

## Troubleshooting

1. If the command is not found:
    * Windows: Verify Path environment variable
    * macOS/Linux: Check a symbolic link in `/usr/local/bin`
2. If permission is denied:
    * Windows: Run terminal as administrator
    * macOS/Linux: Verify file permissions (`chmod +x`)
3. If the binary doesn't start:
    * Verify you downloaded the correct architecture
    * Check antivirus isn't blocking execution

## Updating

To update the existing installation:

1. Download a new version
2. Replace files in `.halguru` directory
3. Run `halguru install` again
