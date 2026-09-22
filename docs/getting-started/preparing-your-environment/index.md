---
title: Preparing your environment
description: Creating an account on the hal.guru platform. Setting the HalGuruApiKey Environment Variable. Configuring a Self-Hosted API Endpoint `HalGuruApiUrl` (if necessary).
author: Chris Prusik
---

Pre-requisite steps: [Visual Studio Code and halguru CLI installed](../../installation/index.md)

## Creating an account on the hal.guru platform

1. **Create an Account**: Register on the hal.guru platform via the [registration page](https://admin.hal.guru) (or use the url to the Self-Hosted Admin Endpoint)
2. **Set Up a Package**: Navigate to the dashboard and create your first `Package` to organize and manage your AI agents.
3. **Generate an API Key**: Within your newly created Package settings, generate an `API Key` and copy it to your clipboard. Store it securely, as it will be required to authenticate CLI operations and agent interactions.

## Setting the HalGuruApiKey Environment Variable

While it is possible to pass your API key with every CLI command using the `--api-key` flag, we strongly recommend configuring it as an environment variable to streamline your workflow.

=== "macOS (Zsh)"

    1. Open your shell configuration file:
    ```bash
    code ~/.zshrc
    ```
    *(You can replace `code` with your preferred editor, such as `nano ~/.zshrc` or `vim ~/.zshrc`)*

    2. Append the following export statement to the end of the file:
    ```bash
    export HalGuruApiKey="{your-api-key-from-clipboard}"
    ```

    3. Reload the configuration in your active terminal session:
    ```bash
    source ~/.zshrc
    ```

=== "Linux (Bash / Zsh)"

    1. Open your profile configuration file (e.g., `~/.bashrc` for Bash or `~/.zshrc` for Zsh):
    ```bash
    code ~/.bashrc
    ```
    *(You can replace `code` with your preferred editor, such as `nano ~/.zshrc` or `vim ~/.zshrc`)*

    2. Add the export line at the end:
    ```bash
    export HalGuruApiKey="{your-api-key-from-clipboard}"
    ```

    3. Apply the changes:
    ```bash
    source ~/.bashrc
    ```

=== "Windows"

    Open a terminal with administrator privileges. Right-click the **Start** button (or press `Win + X`) and select **Terminal (Admin)** or **Windows PowerShell (Administrator)**. Copy and paste the following command.

    ```cmd
    setx HalGuruApiKey "{your-api-key-from-clipboard}"
    ```

    Restart your terminal after setting permanent environment variables for the changes to take effect.

## Configuring a Self-Hosted API Endpoint (`HalGuruApiUrl`)

To maximize reliability and ensure smooth communication with an on-premises or private self-hosted instance of the hal.guru platform, configure the custom API endpoint URL. When using a self-hosted server, the CLI needs to route requests to your specific domain rather than the default cloud infrastructure.

Set the `HalGuruApiUrl` environment variable alongside your `HalGuruApiKey`:

=== "macOS (Zsh)"

    1. Open your shell configuration file:
    ```bash
    code ~/.zshrc
    ```
    *(You can replace `code` with your preferred editor, such as `nano ~/.zshrc` or `vim ~/.zshrc`)*

    2. Append the export statement:
    ```bash
    export HalGuruApiUrl="https://api.yourserver.com"
    ```

    3. Reload the configuration in your active terminal session:
    ```bash
    source ~/.zshrc
    ```

=== "Linux (Bash / Zsh)"

    1. Open your profile configuration file (e.g., `~/.bashrc` for Bash or `~/.zshrc` for Zsh):
    ```bash
    code ~/.bashrc
    ```
    *(You can replace `code` with your preferred editor, such as `nano ~/.zshrc` or `vim ~/.zshrc`)*

    2. Add the export statement at the end:
    ```bash
    export HalGuruApiUrl="https://api.yourserver.com"
    ```

    3. Apply the changes:
    ```bash
    source ~/.bashrc
    ```

=== "Windows"

    Open a terminal with administrator privileges. Right-click the **Start** button (or press `Win + X`) and select **Terminal (Admin)** or **Windows PowerShell (Administrator)**. Copy and paste the following command.

    ```cmd
    setx HalGuruApiUrl "https://api.yourserver.com"
    ```

    Restart your terminal after setting permanent environment variables for the changes to take effect.

## Checking the connection to the hal.guru platform

To check the connection to the hal.guru platform API, execute the command in the terminal:

```bash
halguru platform status
```

You should get a result like:

```
Start: Checking API platform status
Using API URL: https://api.hal.guru/
The API platform is up and running.
The halguru CLI version: 1.93.0
API core version: 1.93.0
API app version: 1.82.0
Done: Platform status retrieved successfully in 300ms
```

To check the validity of your API Key, execute the following command in the terminal:

```bash
halguru platform list
```

You should get a result like:

```
Start: List published agents
Using API URL: https://api.hal.guru/
Using package name: My Package
There are 0 all agents published on the platform.
Done: List successful in 144ms
```

## Next step

Once you have prepared your environment, you can proceed to [Building your first agent](../building-your-first-agent/index.md).
