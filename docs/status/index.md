---
title: Status of the Stable Environment
description: >-
  Live status of the stable environment: availability, app versions, and links to releases, API, and Admin.
author: Chris Prusik
---

A live overview of the stable environment. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger, AI Agent Management and Orchestration (Admin), and other web applications used by hal.guru. 

| Name                                                                     |               Status                | App | Core | Description                     |
|--------------------------------------------------------------------------|:-----------------------------------:|-----|------|---------------------------------|
| <a href="https://docs.hal.guru">Docs</a>                                 |                 🟢                  |                                                | <span id="docs-core-version">No data</span> | This documentation              |
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">halguru</a> |                 🟢                  | <span id="cli-app-version">No data</span>      | <span id="cli-core-version">No data</span> | Command-line Application        |
| <a href="https://api.hal.guru/swagger/index.html">api.hal.guru</a>       |   <span id="api-status">⚪</span>    | <span id="api-app-version">No data</span>      | <span id="api-core-version">No data</span> | Web API (OpenAPI/Swagger)       |
| <a href="https://admin.hal.guru">admin.hal.guru</a>                      |  <span id="admin-status">⚪</span>   | <span id="admin-app-version">No data</span>    | <span id="admin-core-version">No data</span> | AI Agent Management             |
| <a href="https://chat.hal.guru">chat.hal.guru</a>                        |   <span id="chat-status">⚪</span>   | <span id="chat-app-version">No data</span>     | <span id="chat-core-version">No data</span> | Chat Web Application            |
| login.hal.guru                                                           |  <span id="login-status">⚪</span>   | <span id="login-app-version">No data</span>    | <span id="login-core-version">No data</span> | Login and Registration Service  |
| webhook.hal.guru                                                         | <span id="webhook-status">⚪</span>  | <span id="webhook-app-version">No data</span>  | <span id="webhook-core-version">No data</span> | Multi-Channel Webhook Router    |
| internal.hal.guru                                                        | <span id="internal-status">⚪</span> | <span id="internal-app-version">No data</span> | <span id="internal-core-version">No data</span> | AI Messaging Backend            |
| license.hal.guru                                                         | <span id="license-status">⚪</span>  | <span id="license-app-version">No data</span>  | <span id="license-core-version">No data</span> | License Server                  |
| <a href="https://docs.hal.guru/schemas">Schemas</a>                      | <span id="schemas-status">⚪</span>  |                                                | <span id="schemas-core-version">No data</span> | Schemas for Configuration Files |

<div id="warning-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="updateStablePlatformStatusAndVersions()">Refresh Status</button>
</div>

### ↗ [Status History](https://stats.uptimerobot.com/RlcI7xLSp8)
### → [Pre-release Status](prerelease.md)
### → [Technical Project Summary](project-summary.md)

<script type="text/javascript">

    document.addEventListener('DOMContentLoaded', async function() {
        await updateStablePlatformStatusAndVersions();
    });

    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        updateStablePlatformStatusAndVersions();
      });
    }
    
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        updateStablePlatformStatusAndVersions();
      }
    });

</script>
