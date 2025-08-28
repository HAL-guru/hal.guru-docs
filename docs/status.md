A live overview of the stable and pre-release environments. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases, Swagger and AI Agent Orchestrator (Admin). The data refreshes automatically to keep you up to date.


## Stable

| Name                                                                 | Status                                                 | App                                                    | Core                                            | Description                    |
|----------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|-------------------------------------------------|--------------------------------|
| <a href="https://docs.hal.guru">Docs</a>                             | 🟢 Published                             |           | **{{ config.extra.version }}**                  | This documentation             |
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released                                            | <span id="cli-app-version">No data</span>   | <span id="cli-core-version">No data</span>      | Command-line Application       |
| <a href="https://api-dev.hal.guru/swagger/index.html">API</a>        | <span id="api-status">⚪ No data</span>      | <span id="api-app-version">No data</span>   | <span id="api-core-version">No data</span>      | Web API (OpenAPI/Swagger)      |
| <a href="https://admin-dev.hal.guru">Admin</a>                       | <span id="admin-status">⚪ No data</span>    | <span id="admin-app-version">No data</span> | <span id="admin-core-version">No data</span>    | AI Agent Management            |
| <a href="https://chat-dev.hal.guru">Chat</a>                         | <span id="chat-status">⚪ No data</span>     | <span id="chat-app-version">No data</span> | <span id="chat-core-version">No data</span>     | Chat Web Application           |
| <a href="https://login-dev.hal.guru">Login</a>                       | <span id="login-status">⚪ No data</span> | <span id="login-app-version">No data</span> |                                                 | Login and Registration Service |
| <a href="https://webhook-dev.hal.guru">WebHook</a>                   | <span id="webhook-status">⚪ No data</span>  | <span id="webhook-app-version">No data</span> | <span id="webhook-core-version">No data</span>  | Multi-Channel Webhook Router   |
| <a href="https://internal-dev.hal.guru">Internal</a>                 | <span id="internal-status">⚪ No data</span> | <span id="internal-app-version">No data</span> | <span id="internal-core-version">No data</span> | AI Messaging Backend           |

<div id="warning-message"></div>

## Pre-release

This build is for internal QA purposes. The functionality is experimental and may be incomplete. Do not use in production.

| Name                                                                 | Status                                                 | App                                                    | Core                                                       | Description                    |
|----------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------|--------------------------------|
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released                                            | <span id="cli-prerelease-app-version">No data</span>   | <span id="cli-prerelease-core-version">No data</span>      | Command-line Application       |
| <a href="https://api-dev.hal.guru/swagger/index.html">API</a>        | <span id="api-prerelease-status">⚪ No data</span>      | <span id="api-prerelease-app-version">No data</span>   | <span id="api-prerelease-core-version">No data</span>      | Web API (OpenAPI/Swagger)      |
| <a href="https://admin-dev.hal.guru">Admin</a>                       | <span id="admin-prerelease-status">⚪ No data</span>    | <span id="admin-prerelease-app-version">No data</span> | <span id="admin-prerelease-core-version">No data</span>    | AI Agent Management            |
| <a href="https://chat-dev.hal.guru">Chat</a>                         | <span id="chat-prerelease-status">⚪ No data</span>     | <span id="chat-prerelease-app-version">No data</span> | <span id="chat-prerelease-core-version">No data</span>     | Chat Web Application           |
| <a href="https://login-dev.hal.guru">Login</a>                       | <span id="login-prerelease-status">⚪ No data</span> | <span id="login-prerelease-app-version">No data</span> |                                                            | Login and Registration Service |
| <a href="https://webhook-dev.hal.guru">WebHook</a>                   | <span id="webhook-prerelease-status">⚪ No data</span>  | <span id="webhook-prerelease-app-version">No data</span> | <span id="webhook-prerelease-core-version">No data</span>  | Multi-Channel Webhook Router   |
| <a href="https://internal-dev.hal.guru">Internal</a>                 | <span id="internal-prerelease-status">⚪ No data</span> | <span id="internal-prerelease-app-version">No data</span> | <span id="internal-prerelease-core-version">No data</span> | AI Messaging Backend           |

<div id="warning-prerelease-message"></div>

<script type="text/javascript">

document.addEventListener('DOMContentLoaded', async function() {

    await checkPlatformEnvironment('', '');

    await checkPlatformEnvironment('-prerelease', '-dev');
});

async function checkPlatformEnvironment(idPostfix, subdomainPostfix) 
{
    await checkFileVersion(
        'cli' + idPostfix,
        'https://docs.hal.guru/halguru-cli/version' + idPostfix + '.txt',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'api' + idPostfix,  
        'https://api' + subdomainPostfix + '.hal.guru/platform/status',
        'https://api' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'admin' + idPostfix,
        'https://admin' + subdomainPostfix + '.hal.guru/platform/status',
        'https://admin' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'chat' + idPostfix,
        'https://chat' + subdomainPostfix + '.hal.guru/platform/status',
        'https://chat' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'webhook' + idPostfix,
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/status',
        'https://webhook' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'internal' + idPostfix,
        'https://internal' + subdomainPostfix + '.hal.guru/platform/status',
        'https://internal' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');

    await checkPlatformStatusAndVersion(
        'login' + idPostfix,
        'https://login' + subdomainPostfix + '.hal.guru/platform/status',
        'https://login' + subdomainPostfix + '.hal.guru/platform/versions',
        'warning' + idPostfix + '-message');
}

async function checkPlatformStatusAndVersion(idPrefix, statusUrl, versionUrl, warningId) {
    const status = await getStatus(idPrefix + '-status', statusUrl);

    if (status) {
        await getApiVersion(idPrefix, versionUrl);
    } else {
        setMessage(idPrefix + '-app-version', '🛑 Inactive');
        setMessage(idPrefix + '-core-version', '🛑 Inactive');
        setWarningMessage(warningId);
    }
}

async function checkFileVersion(idPrefix, url, warningId) {

    if (!await getFileVersion(idPrefix, url)) {
        setWarningMessage(warningId);
    }
}

async function getStatus(statusId, url) {
    setMessage(statusId, '🔄 Updating...');
    try { 
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const result = await response.text();
        if (result === 'OK') {
            setMessage(statusId, '🟢 Active');
            return true;
        } 
        setMessage(statusId, '🛑 ' + result);
        return false;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            setMessage(statusId, '🛑 Inactive');
            return false;
        }
}

async function getApiVersion(idPrefix, url) {
    setMessage(idPrefix + '-app-version', 'Updating...');
    setMessage(idPrefix + '-core-version', 'Updating...');

    try { 
        const versionsResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!versionsResponse.ok) {
            throw new Error(`HTTP ${versionsResponse.status}: ${versionsResponse.statusText}`);
        }

        const versions = await versionsResponse.json();
        if (versions && typeof versions === 'object') {
            for (const [key, value] of Object.entries(versions)) {
                setMessage(idPrefix + '-' + key + '-version', '<strong>' + value + '</strong>');
            }
        } 
        return true; 
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage(idPrefix + '-app-version', 'Unknown');
        setMessage(idPrefix + '-core-version', 'Unknown');
        return false;
    }
}

async function getFileVersion(idPrefix, url)
{
    setMessage(idPrefix, 'Updating...');
    try { 
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const version = (await response.text()).split(' ')[1] ?? 'Unknown';
        setMessage(idPrefix + '-app-version', '<strong>' + version + '</strong>');
        setMessage(idPrefix + '-core-version', '<strong>' + version + '</strong>');
        return true;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            setMessage(idPrefix + '-app-version', 'Unknown');
            setMessage(idPrefix + '-core-version', 'Unknown');
            return false;
        }
}

function setMessage(id, message)
{
    const span = document.getElementById(id);
    if (!span) {
        console.warn(`id="${id}" not found. Make sure you have a span with this id in the HTML. Example: <span id="${id}"></span>.`);
        return;
    }
    span.innerHTML = message;
}

function setWarningMessage(id)
{
    setMessage(id, '<blockquote>Please check back later.</blockquote>');
}
</script>
