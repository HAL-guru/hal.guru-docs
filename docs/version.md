A live overview of the stable and pre-release environments. It shows the availability and versions of the documentation, CLI, and API, with direct links to releases and Swagger. The data refreshes automatically to keep you up to date.


## Stable

| Name                                                                 | Status                                                                       | Version                                 |
|----------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------|
| <a href="https://docs.hal.guru">Docs</a>                             | 🟢 Published                             | **{{ config.extra.version }}**          |
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released | <span id="cli-version">No data</span>   |
| <a href="https://api.hal.guru/swagger/index.html">API</a>            | <span id="api-status">⚪ No data</span>                                       | <span id="api-version">No data</span>   |
| <a href="https://admin.hal.guru">Admin</a>                           | <span id="admin-status">⚪ No data</span>                                     | <span id="admin-version">No data</span> |

<div id="warning-message"></div>

## Pre-release

| Name                                                                        | Status                                                                       | Version                                            |
|-----------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------|
| <a href="https://github.com/HAL-guru/hal.guru-docs/releases">CLI</a> | 🟢 Released | <span id="cli-prerelease-version">No data</span>   |
| <a href="https://api-dev.hal.guru/swagger/index.html">API</a>               | <span id="api-prerelease-status">⚪ No data</span>                            | <span id="api-prerelease-version">No data</span>   |
| <a href="https://admin-dev.hal.guru">Admin</a>                              | <span id="admin-prerelease-status">⚪ No data</span>                          | <span id="admin-prerelease-version">No data</span> |

<div id="warning-prerelease-message"></div>

<script type="text/javascript">

document.addEventListener('DOMContentLoaded', async function() {

    const status = await getStatus(
        'api-status', 
        'https://api.hal.guru/platform/status');

    if (status) {
        await getApiVersion(
            'api-version',
            'https://api.hal.guru/platform/versions');
    } else {
        setMessage('api-version', '🛑 Inactive');
        setWarningMessage('warning-message');
    }

    if (!await getFileVersion('cli-version', 
        'https://docs.hal.guru/halguru-cli/version.txt')) {
        setWarningMessage('warning-message');
    }

    const adminStatus = await getStatus(
        'admin-status', 
        'https://admin.hal.guru/platform/status');

    if (adminStatus) {
        await getApiVersion(
            'admin-version',
            'https://admin.hal.guru/platform/versions');
    } else {
        document.getElementById('admin-version').innerHTML = 'Unknown';
        setWarningMessage('warning-message');
    }

    const statusPrerelease = await getStatus(
        'api-prerelease-status', 
        'https://api-dev.hal.guru/platform/status');

    if (statusPrerelease) {
        await getApiVersion(
            'api-prerelease-version',
            'https://api-dev.hal.guru/platform/versions');
    } else {
        document.getElementById('api-prerelease-version').innerHTML = `Unknown`;
        setWarningMessage('warning-prerelease-message');
    }

    if (!await getFileVersion('cli-prerelease-version', 
        'https://docs.hal.guru/halguru-cli/version-prerelease.txt')) {
        setWarningMessage('warning-prerelease-message');
    }

    const adminPrereleaseStatus = await getStatus(
        'admin-prerelease-status', 
        'https://admin-dev.hal.guru/platform/status');

    if (adminPrereleaseStatus) {
        await getApiVersion(
            'admin-prerelease-version',
            'https://admin-dev.hal.guru/platform/versions');
    } else {
        document.getElementById('admin-prerelease-version').innerHTML = 'Unknown';
        setWarningMessage('warning-prerelease-message');
    }
});

async function getStatus(id, url)
{
    setMessage(id, '🔄 Updating...');
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
            setMessage(id, '🟢 Active');
            return true;
        } 
        setMessage(id, '🛑 ' + result);
        return false;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            setMessage(id, '🛑 Inactive');
            return false;
        }
}

async function getApiVersion(id, url)
{
    setMessage(id, 'Updating...');

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
                if (key.toLocaleUpperCase() === 'AI AGENTS CORE' && value !== '' ) {
                    setMessage(id, '<strong>' + value + '</strong>');
                    return value; 
                }
            }
        } 
        setMessage(id, 'Unknown');
        return 'Unknown'; 
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        setMessage(id, 'Unknown');
        return 'Error: ' + error.message;
    }
}

async function getFileVersion(id, url)
{
    setMessage(id, 'Updating...');
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
        setMessage(id, '<strong>' + result.split(' ')[1] ?? 'Unknown' + '</strong>');
        return true;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            setMessage(id, 'Unknown');
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
