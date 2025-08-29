A live overview of the pre-release environment. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger, AI Agent Management and Orchestration (Admin), and other web applications used by hal.guru. The data refreshes automatically to keep you up to date.

This deployment is for internal QA purposes only. The functionality is experimental and may be incomplete. Do not use in production.

| Name                                                                 | Status                                                 | App                                                    | Core                                                                           | Description                    |
|----------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------|
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released                                            | <span id="cli-prerelease-app-version">No data</span>   | <span id="cli-prerelease-core-version">No data</span>                          | Command-line Application       |
| <a href="https://api-dev.hal.guru/swagger/index.html">API</a>        | <span id="api-prerelease-status">⚪ No data</span>      | <span id="api-prerelease-app-version">No data</span>   | <span id="api-prerelease-core-version">No data</span>                          | Web API (OpenAPI/Swagger)      |
| <a href="https://admin-dev.hal.guru">Admin</a>                       | <span id="admin-prerelease-status">⚪ No data</span>    | <span id="admin-prerelease-app-version">No data</span> | <span id="admin-prerelease-core-version">No data</span>                        | AI Agent Management            |
| <a href="https://chat-dev.hal.guru">Chat</a>                         | <span id="chat-prerelease-status">⚪ No data</span>     | <span id="chat-prerelease-app-version">No data</span> | <span id="chat-prerelease-core-version">No data</span>                         | Chat Web Application           |
| <a href="https://login-dev.hal.guru">Login</a>                       | <span id="login-prerelease-status">⚪ No data</span> | <span id="login-prerelease-app-version">No data</span> | <span id="login-prerelease-core-version" style="display: none;">No data</span> | Login and Registration Service |
| <a href="https://webhook-dev.hal.guru">WebHook</a>                   | <span id="webhook-prerelease-status">⚪ No data</span>  | <span id="webhook-prerelease-app-version">No data</span> | <span id="webhook-prerelease-core-version">No data</span>                      | Multi-Channel Webhook Router   |
| <a href="https://internal-dev.hal.guru">Internal</a>                 | <span id="internal-prerelease-status">⚪ No data</span> | <span id="internal-prerelease-app-version">No data</span> | <span id="internal-prerelease-core-version">No data</span>                     | AI Messaging Backend           |

<div id="warning-prerelease-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="checkPlatformPrereleaseEnvironment()">Refresh Status</button>
</div>

The **stable** environment status can be viewed on the dedicated page [here](status.md)

<script type="text/javascript">

    document.addEventListener('DOMContentLoaded', async function() {
        await checkPlatformPrereleaseEnvironment();
    });

    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        checkPlatformPrereleaseEnvironment();
      });
    }
    
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        checkPlatformPrereleaseEnvironment();
      }
    });

</script>
