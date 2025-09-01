---
title: Installation
description: Installation
author: Chris Prusik
---

You can edit AI agent configuration files with any text editor, but we recommend Visual Studio Code. It offers schema‑based autocompletion, inline validation, and helpful command suggestions by automatically installing and activating YAML schemas for your agent files. This makes editing faster, safer, and less error‑prone.

With VS Code you get:

- Smart autocompletion for YAML keys and values, driven by the schema of your agent files
- Real‑time validation with clear error messages
- Hover hints and inline documentation for available fields
- Quick fixes and snippets to speed up common edits
- Seamless setup: the recommended extension can auto‑configure the YAML schemas for you

Prefer a different editor? That’s fine—YAML schemas can be installed and mapped manually in most popular editors (e.g., by enabling a YAML language server and pointing it to the appropriate schema files). Once configured, you’ll get similar benefits: completion, validation, and hints tailored to your agent configuration.


For developing AI agents, we recommend using the **Visual Studio Code** editor, which can be downloaded from [Microsoft's website](https://code.visualstudio.com/download). 
Next, you need to install the halguru application along with its extension for this editor.

## MacOS and Linux users

Open your terminal and execute the following command to download and run the installation [script](https://docs.hal.guru/halguru-install.sh):

```bash
curl -sSL https://docs.hal.guru/halguru-install.sh | bash
```

> More details: [macOS and Linux installation tutorial](macos-and-linux.md).

## Windows users

Open PowerShell as a regular user. Copy and paste the following command to download and run the installation [script](https://docs.hal.guru/halguru-install.ps1):

```powershell
irm https://docs.hal.guru/halguru-install.ps1 | iex
```

After the installation, open a new terminal window and run the command `halguru install` 
to complete the setup and configure the Visual Studio Code editor for your AI agents.

> More details: [Windows installation tutorial](windows.md).

## Experienced users

For a deeper understanding of the installation process, refer to the [advanced users guide](experienced-users.md).
