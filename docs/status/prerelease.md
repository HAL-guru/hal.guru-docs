---
title: Status of the Pre-release Environment
description: Configuring AI Agents
author: Chris Prusik
---

A live overview of the pre-release environment. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger, AI Agent Management and Orchestration (Admin), and other web applications used by hal.guru. 

> This deployment is for internal QA purposes only. The functionality is experimental and may be incomplete. Do **NOT** use in production.

| Name                                                                         |               Status                | App | Core | Description                     |
|------------------------------------------------------------------------------|:-----------------------------------:|-----|------|---------------------------------|
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">halguru</a> | 🟢                                 | <span id="cli-app-version">No data</span>           | <span id="cli-core-version">No data</span>      | Command-line Application       |
| <a href="https://api-dev.hal.guru/swagger/index.html">api-dev.hal.guru</a>   | <span id="api-status">⚪</span>      | <span id="api-app-version">No data</span>           | <span id="api-core-version">No data</span>      | Web API (OpenAPI/Swagger)      |
| <a href="https://admin-dev.hal.guru">admin-dev.hal.guru</a>                  | <span id="admin-status">⚪</span>    | <span id="admin-app-version">No data</span>         | <span id="admin-core-version">No data</span>    | AI Agent Management            |
| <a href="https://chat-dev.hal.guru">chat-dev.hal.guru</a>                    | <span id="chat-status">⚪</span>     | <span id="chat-app-version">No data</span>          | <span id="chat-core-version">No data</span>     | Chat Web Application           |
| login-dev.hal.guru                                                           | <span id="login-status">⚪</span>    | <span id="login-app-version">No data</span>         | <span id="login-core-version">No data</span>    | Login and Registration Service |
| webhook-dev.hal.guru                                                         | <span id="webhook-status">⚪</span>  | <span id="webhook-app-version">No data</span>       | <span id="webhook-core-version">No data</span>  | Multi-Channel Webhook Router   |
| internal-dev.hal.guru                                                        | <span id="internal-status">⚪</span> | <span id="internal-app-version">No data</span>      | <span id="internal-core-version">No data</span> | AI Messaging Backend           |

<div id="warning-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="updatePrereleasePlatformStatusAndVersions()">Refresh Status</button>
</div>

## → [Stable Environment](index.md)
## → [Technical Project Summary](project-summary.md)

<script type="text/javascript">

    document.addEventListener('DOMContentLoaded', async function() {
        await updatePrereleasePlatformStatusAndVersions();
    });

    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        updatePrereleasePlatformStatusAndVersions();
      });
    }
    
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        updatePrereleasePlatformStatusAndVersions();
      }
    });

</script>
