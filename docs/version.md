This page displays the **AI Agents Core** version and dynamically checks the availability of both the Stable and Pre-release Web Platforms. It fetches version data from the hal.guru APIs, shows whether each platform is active or inactive (with emoji indicators), and provides quick links to the API, Chat, and Admin interfaces. Errors are handled gracefully with clear status messages.

| Name | Status                                 | Version                                   |
|------|----------------------------------------|-------------------------------------------|
| Docs | 🟢 Published                           | **{{ config.extra.version }}**            |
| CLI  | 🟢 Released                            | <span id="cli-version">No data</span> |
| API  | <span id="api-status">⚪ No data</span> | <span id="api-version">No data</span> |

## Pre-release

| Name | Status                                            | Version                                              |
|------|---------------------------------------------------|------------------------------------------------------|
| CLI  | 🟢 Released                                      | <span id="cli-prerelease-version">No data</span> |
| API  | <span id="api-prerelease-status">⚪ No data</span> | <span id="api-prerelease-version">No data</span> |

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', async function() {

    const status = await getStatus('api-status', 'https://api.hal.guru/platform/status');

    if (status) {
        await getApiVersion(
            'api-version',
            'https://api.hal.guru/platform/versions');
    } else {
        document.getElementById('api-version').innerHTML = '🛑 Inactive';   
    }

    const statusPrerelease = await getStatus('api-prerelease-status', 'https://api-dev.hal.guru/platform/status');

    if (statusPrerelease) {
        await getApiVersion(
            'api-prerelease-version',
            'https://api-dev.hal.guru/platform/versions');
    } else {
        document.getElementById('api-prerelease-version').innerHTML = `🛑 Inactive`;   
    }

    await getFileVersion('cli-version', 'https://docs.hal.guru/halguru-cli/version.txt');
    await getFileVersion('cli-prerelease-version', 'https://docs.hal.guru/halguru-cli/version-prerelease.txt');
});

async function getStatus(id, url)
{
    const span = document.getElementById(id);
    span.innerText = '🔄 Updating...';
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
            span.innerHTML = '🟢 Active';
            return true;
        } 
        span.innerHTML = '🛑 ' + result;
        return false;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            span.innerHTML = '🛑 Error:' + error.message;
            return false;
        }
}

async function getApiVersion(id, url)
{
    const span = document.getElementById(id);
    span.innerText = 'Updating...';

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
                    span.innerHTML = '<strong>' + value + '</strong>';
                    return value; 
                }
            }
        } 
        span.innerHTML = value;
        return value; 
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        span.innerHTML = 'Unknown';
        return 'Error: ' + error.message;
    }
}

async function getFileVersion(id, url)
{
    const span = document.getElementById(id);
    span.innerText = 'Updating...';
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
        span.innerHTML = result;
        return result;
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            span.innerHTML = 'Unknown';
            return false;
        }
}
</script>
