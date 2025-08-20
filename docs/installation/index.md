---
title: Installation
description: Installation
date: 2025-03-07
author: Chris Prusik
---

halguru installation is a straightforward process that can be completed in just a few steps.

For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download). 
Next, you need to install the halguru application along with its extension for this editor.

## MacOS and Linux users

Open your terminal and execute the following command to download and run the installation [script](https://docs.hal.guru/installation/install.sh):

```bash
sudo curl -sSL https://docs.hal.guru/installation/install.sh | bash
```

> More details: [MacOS and Linux installation tutorial](macos-and-linux.md).

## Windows users

Open PowerShell as a regular user. Copy and paste the following command to download and run the installation [script](https://docs.hal.guru/installation/install.ps1):

```powershell
irm https://docs.hal.guru/installation/install.ps1 | iex
```

After the installation, open a new terminal window and run the command `halguru install` 
to complete the setup and configure the Visual Studio Code editor for your AI agents.

> More details: [Windows installation tutorial](windows.md).

## Experienced users

For a deeper understanding of the installation process, refer to the [advanced users guide](experienced-users).
