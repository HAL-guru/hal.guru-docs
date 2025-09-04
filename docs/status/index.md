---
title: Status of the Stable Environment
description: >-
  Live status of the stable environment: availability, app versions, and links to releases, API, and Admin.
author: Chris Prusik
---

A live overview of the stable environment. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger, AI Agent Management and Orchestration (Admin), and other web applications used by hal.guru. The data refreshes automatically to keep you up to date.

| Name                                                                 | Status                                      | App                                            | Core                                            | Description                     |
|----------------------------------------------------------------------|---------------------------------------------|------------------------------------------------|-------------------------------------------------|---------------------------------|
| <a href="https://docs.hal.guru">Docs</a>                             | 🟢 Published                                |                                                | <span id="docs-core-version">No data</span>     | This documentation              |
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released                                 | <span id="cli-app-version">No data</span>      | <span id="cli-core-version">No data</span>      | Command-line Application        |
| <a href="https://api.hal.guru/swagger/index.html">API</a>        | <span id="api-status">⚪ No data</span>      | <span id="api-app-version">No data</span>      | <span id="api-core-version">No data</span>      | Web API (OpenAPI/Swagger)       |
| <a href="https://admin.hal.guru">Admin</a>                       | <span id="admin-status">⚪ No data</span>    | <span id="admin-app-version">No data</span>    | <span id="admin-core-version">No data</span>    | AI Agent Management             |
| <a href="https://chat.hal.guru">Chat</a>                         | <span id="chat-status">⚪ No data</span>     | <span id="chat-app-version">No data</span>     | <span id="chat-core-version">No data</span>     | Chat Web Application            |
| <a href="https://login.hal.guru">Login</a>                       | <span id="login-status">⚪ No data</span>    | <span id="login-app-version">No data</span>    |                                                 | Login and Registration Service  |
| <a href="https://webhook.hal.guru">WebHook</a>                   | <span id="webhook-status">⚪ No data</span>  | <span id="webhook-app-version">No data</span>  | <span id="webhook-core-version">No data</span>  | Multi-Channel Webhook Router    |
| <a href="https://internal.hal.guru">Internal</a>                 | <span id="internal-status">⚪ No data</span> | <span id="internal-app-version">No data</span> | <span id="internal-core-version">No data</span> | AI Messaging Backend            |
| <a href="https://docs.hal.guru/schemas">Schemas</a>                  | <span id="schemas-status">⚪ No data</span>  |                                                | <span id="schemas-core-version">No data</span>  | Schemas for Configuration Files |

<div id="warning-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="updateStablePlatformStatusAndVersions()">Refresh Status</button>
</div>

### ↗ [Status History](https://stats.uptimerobot.com/RlcI7xLSp8)
### → [Pre-release Status](prerelease.md)

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
