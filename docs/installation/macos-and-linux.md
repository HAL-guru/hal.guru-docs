---
title: Installation halguru on macOS and Linux
description: Installation halguru on macOS and Linux
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

> Windows users should use [this tutorial](windows.md)

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

See the [Experienced Users Guide](experienced-users.md) for more details.

## Pre-release version

If you want to install the latest pre-release version of halguru, you can use the following command:

```bash
curl -sSL https://docs.hal.guru/halguru-install.sh | bash -s -- --prerelease
```

## Errror list

| Code | Message                                                                       |
|------|-------------------------------------------------------------------------------|
| 1    | Missing required tools: $TOOL_NAME                                            |
| 2    | Failed to fetch latest version                                                |
| 3    | Received empty version value                                                  |
| 4    | Unsupported architecture: $ARCHITECTURE                                       |
| 5    | Unsupported operating system: $OS                                             |
| 6    | The downloaded file is too small                                              |
| 7    | The file could not be downloaded.                                             |
| 8    | Failed to download file after $COUNT attempts                                 |
| 9    | Cannot change directory                                                       |
| 10   | Unknown argument: $1                                                          |
| 11   | Failed to extract archive                                                     |
| 12   | It was not possible to move the unpacked files to the directory: $INSTALL_DIR |
| 13   | Cannot set execution permissions                                              |
| 14   | Unable to create directory or symbolic link                                   |
| 15   | Failed to configure halguru                                                   |
| 16   | Cannot create directory $INSTALL_DIR                                          |
| 17   | Cannot create log file $LOG_FILE                                              |
| 18   | Cannot generate README.md file                                                |
