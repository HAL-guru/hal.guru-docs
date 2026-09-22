---
title: Installing the halguru CLI Application
description: Step-by-step installation and configuration guide for the halguru CLI application across macOS, Linux, and Windows.
author: Chris Prusik
---

## Installing the Visual Studio Code

For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download).

Run the command `code` to verify that the installation was successful.

## Installing the halguru CLI Application

Next, you need to install the halguru application along with its extension for this editor.

=== "macOS"

    Open your terminal and execute the following command to download and run the installation [script](https://docs.hal.guru/halguru-install.sh):

    ```bash
    curl -sSL https://docs.hal.guru/halguru-install.sh | bash
    ```

    > More details: [macOS and Linux installation tutorial](macos-and-linux.md).

=== "Linux"

    Open your terminal and execute the following command to download and run the installation [script](https://docs.hal.guru/halguru-install.sh):

    ```bash
    curl -sSL https://docs.hal.guru/halguru-install.sh | bash
    ```

    > More details: [macOS and Linux installation tutorial](macos-and-linux.md).

=== "Windows"

    Open a terminal with administrator privileges. Right-click the **Start** button (or press `Win + X`) and select **Terminal (Admin)** or **Windows PowerShell (Administrator)**. Copy and paste the following command to download and run the installation [script](https://docs.hal.guru/halguru-install.ps1):

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force
    irm https://docs.hal.guru/halguru-install.ps1 | iex
    ```

    After the installation, open a new terminal window and run the command: 
    ```powershell
    halguru install
    ```
    to complete the setup and configure the Visual Studio Code editor for your AI agents.

    > More details: [Windows installation tutorial](windows.md).

## Checking installation

Run the command `halguru about` to verify that the installation was successful.

You should get a result like:

```
   █ █
  █ █ █  hal.guru
  █   █
  █ █ █  AI Agents that work
   █ █   for you
   █ █
Command-line interface for the hal.guru platform
halguru 1.93.0
(C) hal.guru sp. z o.o.
More information at https://docs.hal.guru
```

## Experienced users

For a deeper understanding of the installation process, refer to the [advanced users guide](experienced-users.md).

## Next step

Once you have installed the application, you can proceed to [Preparing your environment](../getting-started/preparing-your-environment/index.md).
