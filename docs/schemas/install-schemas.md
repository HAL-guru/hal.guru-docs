---
title: Install Schemas
description:
author: Chris Prusik
draft: true
---

Most modern IDEs support installing schemas to enforce the structure of YAML files, including hal.guru configuration files. By attaching a schema, editors can validate documents in real time, flag invalid fields and types, and provide features like auto-completion, inline documentation, and linting. This leads to fewer errors, more consistent configurations across environments, and smoother collaboration between teams. Schemas can also be used in CI pipelines to automatically validate configuration changes before they are merged.

## For Visual Studio Code

Install the schemas directly using the halguru CLI. Simply run:
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
