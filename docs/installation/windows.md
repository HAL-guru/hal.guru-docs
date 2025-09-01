---
title: Installation halguru on Windows
description: Installation halguru on Windows
author: Chris Prusik
---

halguru installation is a straightforward process that can be completed in just a few steps.

For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download).
Next, you need to install the halguru application along with its extension for this editor.

## System Requirements

- Windows operating system
- PowerShell
- Internet connection

> Linux and macOS users should use [this tutorial](macos-and-linux.md)

## Installation Steps

Open PowerShell as a regular user. Copy and paste the following command to download and run 
the installation [script](https://docs.hal.guru/halguru-install.ps1):

```powershell
irm https://docs.hal.guru/halguru-install.ps1 | iex
```

The script will automatically:

1. Download the latest version of halguru
2. Install it in your user profile directory
3. Add the installation directory to your PATH
4. Display a success message upon completion

After installation, you'll need to open a new terminal window and run the command: 
`halguru install` to complete the setup and configure Visual Studio Code Editor for your AI Agents.

## Notes

1. The installer automatically detects your system architecture (x64 or arm64)
2. The installation is performed on a per-user basis, no administrator privileges required
3. All files are installed in the `.halguru` directory in your user profile

If you encounter any problems during installation, the script will display an error message explaining what went wrong.

More details at [Experienced users guide](experienced-users.md)

## Pre-release version

If you want to install the latest pre-release version of halguru, you can use the following command:

```powershell
iex "& { $(irm https://docs.hal.guru/halguru-install.ps1) } --prerelease"
```
