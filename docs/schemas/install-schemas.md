---
title: Install JSON Schemas
description: Install JSON schemas for Visual Studio Code
author: Chris Prusik
draft: false
---

Most modern IDEs support installing schemas to enforce the structure of YAML files, including hal.guru configuration files. By attaching a schema, editors can validate documents in real time, flag invalid fields and types, and provide features like auto-completion, inline documentation, and linting. This leads to fewer errors, more consistent configurations across environments, and smoother collaboration between teams. Schemas can also be used in CI pipelines to automatically validate configuration changes before they are merged.

## For Visual Studio Code

Install the JSON schemas directly using the halguru CLI. Simply run:
```bash
halguru install
```

<!-- halguru install --locally -->
You can find the halguru CLI installation guide here: [Installation instructions](../installation/index.md).

Tips:

- Make sure you have Visual Studio Code closed during installation if the extension modifies settings.
- On Windows, you may need to run your terminal as Administrator; on macOS/Linux, prepend sudo if required.
- After installation, restart Visual Studio Code to ensure the schemas are picked up automatically.

## For other editors

A complete list of all JSON schemas can be found in the [JSON Schemas](../autogen-jsonschema-status.md) file. The **File Extension** column specifies the file extension that should be used for YAML files to apply the appropriate JSON schema, while the **JSON Schema URL** column provides a link to the corresponding JSON Schema file.

For example, the AI Agent configuration uses the `.halguru.yaml` extension, and the JSON Schema link is [https://docs.hal.guru/schemas/halguru-schema.json](https://docs.hal.guru/schemas/halguru-schema.json).

### JetBrains IDEs

To install JSON Schemas in a JetBrains IDE (for example, IntelliJ IDEA, WebStorm, or PyCharm), follow these steps:

1. Open **Settings / Preferences** by pressing:
    - `Ctrl+Alt+S` on Windows/Linux, or
    - `Cmd+,` on macOS.
2. Navigate to **Languages & Frameworks** → **Schemas and DTDs** → **JSON Schema Mappings**.
3. Click the **+** (Add) icon to create a new mapping.
4. In the **Name** field, enter a friendly name (e.g., `hal.guru AI Agent`).
5. In the **URL** field, paste the schema link:  
   `https://docs.hal.guru/schemas/halguru-schema.json`
6. Under **File path patterns**, click **+** and add the filename pattern:  
   `.halguru.yaml`
7. Click **OK** (or **Apply**) to save your changes.

After you configure this, any `.halguru.yaml` files will be validated automatically. The IDE will also provide autocompletion and inline hints for available fields, helping you spot mistakes early and fill out the file faster.

### Sublime Text

### Vim / Neovim

### Emacs

### Eclipse
