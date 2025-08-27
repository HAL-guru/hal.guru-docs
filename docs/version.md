This page displays the AI Agents Core version and dynamically checks the availability of both the Stable and Pre-release Web Platforms. It fetches version data from the hal.guru APIs, shows whether each platform is active or inactive (with emoji indicators), and provides quick links to the API, Chat, and Admin interfaces. Errors are handled gracefully with clear status messages.

## The Documentation 

🟢 Published

AI Agents Core version **{{ config.extra.version }}**

<div id="versions">
  <p>Loading versions...</p>
</div>

---

<div id="versions-prerelease">
  <p>Loading pre-release versions...</p>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', async function() {

    const status = await getStatus('https://api.hal.guru/platform/status');

    if (status === 'OK') {
        await getApiVersions(
            'versions',
            'The Stable Web Platform',
            '');
    } else {
        document.getElementById('versions').innerHTML = 
            `<h4>The Stable Web Platform</h4><p>🛑 Currently inactive.<br/>Please try again later.</p>`;   
    }

    const statusPrerelease = await getStatus('https://api-dev.hal.guru/platform/status');

    if (statusPrerelease === 'OK') {
        await getApiVersions(
            'versions-prerelease',
            'The Pre-release Web Platform',
            '-dev');
    } else {
        document.getElementById('versions-prerelease').innerHTML = 
            `<h4>The Pre-release Web Platform</h4><p>🛑 Currently inactive.<br/>Please try again later.</p>`;   
    }
});

async function getStatus(url)
{
    try { 
        const statusResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            }
        });
        if (!statusResponse.ok) {
            throw new Error(`HTTP ${statusResponse.status}: ${statusResponse.statusText}`);
        }
        return await statusResponse.text();
        } catch (error) {
            console.error('Error occurred during downloading:', error);
            return `Error: ${error.message}`;
        }
}

async function getApiVersions(id, title, subDomainPostfix)
{
    const versionsDiv = document.getElementById(id);
    versionsDiv.innerText = 'Processing...';

    try { 
        const versionsResponse = await fetch(
            `https://api` + subDomainPostfix + `.hal.guru/platform/versions`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!versionsResponse.ok) {
            throw new Error(`HTTP ${versionsResponse.status}: ${versionsResponse.statusText}`);
        }

        const versions = await versionsResponse.json();
        
        let html = `<h3>${title}</h3>`;
        
        if (versions && typeof versions === 'object') {
            for (const [key, value] of Object.entries(versions)) {
                if (!key.startsWith('web') && !key.startsWith('Web')) {
                    html += `<p>🟢 Active</p>`;
                    html += `<p>${key} version <strong>${value}</strong></p>`;
                    html += '<a href="https://api' + subDomainPostfix + '.hal.guru">api' + subDomainPostfix + '.hal.guru</a> * ';
                    html += '<a href="https://chat' + subDomainPostfix + '.hal.guru">chat' + subDomainPostfix + '.hal.guru</a> * ';
                    html += '<a href="https://admin' + subDomainPostfix + '.hal.guru">admin' + subDomainPostfix + '.hal.guru</a>';
                }
            }
        } else {
            html += '<li>No data</li>';
        }
        
        versionsDiv.innerHTML = html;
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        versionsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
</script>
