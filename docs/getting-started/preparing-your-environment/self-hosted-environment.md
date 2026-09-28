---
title: Self-hosted environment
description: Creating an account on the hal.guru platform. Setting the HalGuruApiKey Environment Variable. Configuring a Self-Hosted API Endpoint `HalGuruApiUrl` (if necessary).
author: Chris Prusik
---

When using a self-hosted server, the CLI needs to route requests to your specific domain rather than the default cloud infrastructure. 

Set the `HalGuruApiUrl` environment variable alongside your `HalGuruApiKey`:

=== "macOS (Zsh)"

    1. Open your shell configuration file:
    ```bash
    code ~/.zshrc
    ```
    *(You can replace `code` with your preferred editor, such as `nano ~/.zshrc` or `vim ~/.zshrc`)*

    2. Append the export statement:
    ```bash
    export HalGuruApiUrl="https://api.yourserver.com/"
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
    export HalGuruApiUrl="https://api.yourserver.com/"
    ```

    3. Apply the changes:
    ```bash
    source ~/.bashrc
    ```

=== "Windows"

    Open a terminal with administrator privileges. Right-click the **Start** button (or press `Win + X`) and select **Terminal (Admin)** or **Windows PowerShell (Administrator)**. Copy and paste the following command.

    ```cmd
    setx HalGuruApiUrl "https://api.yourserver.com/"
    ```

    Restart your terminal after setting permanent environment variables for the changes to take effect.

To check the connection to the hal.guru platform API, execute the command in the terminal:

```bash
halguru platform status
```

You should get a result like:

```
Start: Checking API platform status
Using API URL: https://api.yourserver.com/
The API platform is up and running.
The halguru CLI version: 1.93.0
API core version: 1.93.0
API app version: 1.82.0
Done: Platform status retrieved successfully in 300ms
```

## Next step

Once you have prepared your environment, you can proceed to [Building your first agent](../building-your-first-agent/index.md).
