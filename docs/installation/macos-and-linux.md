---
title: Installation halguru on MacOS and Linux
description: Installation halguru on MacOS and Linux
date: 2025-03-07
author: Chris Prusik
---

halguru can be easily installed on macOS and Linux systems using a simple shell script.

For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download).
Next, you need to install the halguru application along with its extension for this editor.

## System Requirements

- macOS or Linux operating system
- `curl` command-line tool
- `unzip` utility
- `sudo` privileges
- Internet connection

> Windows users should use [Windows tutorial](windows.md)

## Installation Steps

Open your terminal window and execute the following command to download and run 
the installation [script](https://docs.hal.guru/halguru-install.sh):

```bash
curl -sSL https://docs.hal.guru/halguru-install.sh | bash
```
 
The script will automatically:

1. Download the latest version of HAL.guru
2. Install it in your home directory under `.halguru`
3. Create a symbolic link in `/usr/local/bin`
4. Set appropriate permissions
5. Run initial setup `halguru install`

After successful installation, you can start using halguru immediately by typing `halguru` in your terminal

## Notes

1. The installer automatically detects your:
   * Operating system (macOS or Linux)
   * System architecture (x64 or arm64)
2. The installation requires sudo privileges to create the symbolic link
3. Primary installation location is in the `.halguru` directory in your home folder

If any errors occur during installation, the script will display appropriate error messages and exit.

See the [Experienced Users Guide](experiences-users.md) for more details.

## Pre-release version

If you want to install the latest pre-release version of halguru, you can use the following command:

```bash
curl -sSL https://docs.hal.guru/installation/install.sh | bash -s --prerelease
```
