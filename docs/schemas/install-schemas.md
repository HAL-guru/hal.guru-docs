---
title: Install JSON Schemas
description: Install JSON schemas for Visual Studio Code
author: Chris Prusik
draft: false
---

Most modern IDEs support installing schemas to enforce the structure of YAML files, including hal.guru configuration files. By attaching a schema, editors can validate documents in real time, flag invalid fields and types, and provide features like auto-completion, inline documentation, and linting. This leads to fewer errors, more consistent configurations across environments, and smoother collaboration between teams. Schemas can also be used in CI pipelines to automatically validate configuration changes before they are merged.

## Visual Studio Code

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

## Other Text Editors

A complete list of all JSON schemas can be found in the [JSON Schemas](../autogen-jsonschema-status.md) file. The **File Extension** column specifies the file extension that should be used for YAML files to apply the appropriate JSON schema, while the **JSON Schema URL** column provides a link to the corresponding JSON Schema file.

For example, the AI Agent configuration uses the `.halguru.yaml` extension, and the JSON Schema link is [https://docs.hal.guru/schemas/halguru-schema.json](https://docs.hal.guru/schemas/halguru-schema.json). 

Below you’ll find step-by-step instructions on how to set up JSON Schema validation in specific text editors, using a sample AI Agent configuration file. You can repeat the same steps for the remaining configuration files as well.

If you work with multiple editors, you may want to apply the setup in each one to ensure consistent validation, autocompletion, and early detection of configuration errors.

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

To configure JSON Schema validation in Sublime Text, follow these steps:

1. Make sure you have **Package Control** installed.
2. Install the **LSP** and **LSP-yaml** packages (press `Ctrl+Shift+P` → `Package Control: Install Package`).
3. Open the **LSP-yaml** server settings: `Preferences` → `Package Settings` → `LSP` → `Servers` → `LSP-yaml`.
4. Add a schema mapping under the `settings` section (so the YAML language server knows which schema to use for a given file/pattern):
   ```json
   {
        "settings": {
          "yaml": {
            "schemas": {
              "https://docs.hal.guru/schemas/halguru-schema.json": ".halguru.yaml"
            }
          }
        }
      }
   ```
   > Tip: You can map schemas to file names, glob patterns, or paths depending on your workflow. For example, you might prefer something like `"**/.halguru.yaml"` if you want it to match in any folder.
5. Restart Sublime Text (or reload the LSP server) to make sure the new configuration is picked up.

### Vim using coc.nvim

The simplest approach is to use the `yaml-language-server` language server.

1. Install the `coc-yaml` extension:
   ```vim
   :CocInstall coc-yaml
   ```
2. Open the configuration (`:CocConfig`) and add:
   ```json
   "yaml.schemas": {
     "https://docs.hal.guru/schemas/halguru-schema.json": ".halguru.yaml"
   }
   ```

### Neovim using the built-in LSP

The simplest approach is to use the `yaml-language-server` language server.

1. Make sure you have `yamlls` (yaml-language-server) installed.
2. Configure the server in your `init.lua`:
   ```lua
   require('lspconfig').yamlls.setup {
     settings = {
       yaml = {
         schemas = {
           ["https://docs.hal.guru/schemas/halguru-schema.json"] = ".halguru.yaml",
         },
       },
     },
   }
   ```

   Optional tip: if you keep your config files in a specific directory (e.g., `.config/`), you can map the schema to a path pattern as well—just ensure it matches the actual file location.

### Emacs

In Emacs, one of the most reliable methods is to use `lsp-mode` together with `yaml-language-server`.

1. Install the `yaml-mode` and `lsp-mode` packages.
2. Add the following configuration to your `.emacs` or `init.el`:
   ```elisp
   (add-to-list 'lsp-yaml-schemas '("https://docs.hal.guru/schemas/halguru-schema.json" ".halguru.yaml"))
   ```
3. When opening a `.halguru.yaml` file, make sure `lsp` is active (for example, by enabling `lsp-mode` in that buffer).

### Eclipse

Eclipse supports JSON Schema (and schema-based validation/completions for YAML in supported setups) via the **Wild Web Developer** plugin.

1. Ensure you have **Eclipse Wild Web Developer** installed (available via Eclipse Marketplace).
2. Go to **Window** → **Preferences**.
3. Navigate to **JSON** → **JSON Catalog**.
4. Click **Add** and enter the following:
   - **Catalog Entry**: `https://docs.hal.guru/schemas/halguru-schema.json`
   - **File Name Patterns**: `.halguru.yaml`
5. Click **OK** and apply the changes.

If your Eclipse setup also includes YAML support through the same tooling, you should then get schema-backed validation and autocompletion when editing `.halguru.yaml`.
