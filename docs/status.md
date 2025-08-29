A live overview of the stable environment. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger, AI Agent Management and Orchestration (Admin), and other web applications used by hal.guru. The data refreshes automatically to keep you up to date.

| Name                                                                 | Status                                                 | App                                                    | Core                                            | Description                    |
|----------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|-------------------------------------------------|--------------------------------|
| <a href="https://docs.hal.guru">Docs</a>                             | 🟢 Published                             |           | **{{ config.extra.version }}**                  | This documentation             |
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released                                            | <span id="cli-app-version">No data</span>   | <span id="cli-core-version">No data</span>      | Command-line Application       |
| <a href="https://api-dev.hal.guru/swagger/index.html">API</a>        | <span id="api-status">⚪ No data</span>      | <span id="api-app-version">No data</span>   | <span id="api-core-version">No data</span>      | Web API (OpenAPI/Swagger)      |
| <a href="https://admin-dev.hal.guru">Admin</a>                       | <span id="admin-status">⚪ No data</span>    | <span id="admin-app-version">No data</span> | <span id="admin-core-version">No data</span>    | AI Agent Management            |
| <a href="https://chat-dev.hal.guru">Chat</a>                         | <span id="chat-status">⚪ No data</span>     | <span id="chat-app-version">No data</span> | <span id="chat-core-version">No data</span>     | Chat Web Application           |
| <a href="https://login-dev.hal.guru">Login</a>                       | <span id="login-status">⚪ No data</span> | <span id="login-app-version">No data</span> | <span id="login-core-version" style="display: none;">No data</span> | Login and Registration Service |
| <a href="https://webhook-dev.hal.guru">WebHook</a>                   | <span id="webhook-status">⚪ No data</span>  | <span id="webhook-app-version">No data</span> | <span id="webhook-core-version">No data</span>  | Multi-Channel Webhook Router   |
| <a href="https://internal-dev.hal.guru">Internal</a>                 | <span id="internal-status">⚪ No data</span> | <span id="internal-app-version">No data</span> | <span id="internal-core-version">No data</span> | AI Messaging Backend           |

<div id="warning-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="checkPlatformStableEnvironment()">Refresh Status</button>
</div>

More information about the platform’s status over time can be found on the [Uptime Robot](https://stats.uptimerobot.com/RlcI7xLSp8) page.

The **pre-release** environment status can be viewed on the dedicated page [here](status-prerelease.md)

<script type="text/javascript">

    document.addEventListener('DOMContentLoaded', async function() {
        await checkPlatformStableEnvironment();
    });

    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        checkPlatformStableEnvironment();
      });
    }
    
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        checkPlatformStableEnvironment();
      }
    });

</script>
