
Documentation agents core version: {{ config.extra.version }}

{{ macros.now() }}

<div id="versions">
  <p>Loading...</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const widget = document.getElementById('versions');

    try {
        const response = fetch('https://api-dev.hal.guru/platform/versions', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });


        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const versions = response.json();
        
        let html = '<h4>Available versions:</h4><ul>';
        
        if (versions && typeof versions === 'object') {
            for (const [key, value] of Object.entries(versions)) {
                html += `<li><strong>${key}:</strong> ${value}</li>`;
            }
        } else {
            html += '<li>No data</li>';
        }
        
        html += '</ul>';
        
        widget.innerHTML = html;
        
    } catch (error) {
        console.error('Error occurred during downloading:', error);
        widget.innerHTML = `
            <p style="color: red;">
                <strong>Error:</strong> ${error.message}
            </p>
        `;
    }
});
</script>
