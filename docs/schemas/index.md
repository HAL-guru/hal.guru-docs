---
title: Configuration Files
description:
author: Chris Prusik
---

YAML schemas define the structure, allowed fields, data types, and validation rules for 
hal.guru [configurations files](../configuration-files/index.md). They are used to validate and process YAML files. 

By describing what a valid configuration should look like, schemas help catch errors early, 
ensure consistency across environments, and enable richer tooling such as auto-completion, 
linting, and documentation hints in editors. 

They also make configurations more maintainable and self-descriptive, 
improving collaboration between teams. 
In practice, a schema acts as a contract that both authors and automated systems 
can rely on when creating, validating, and processing YAML files.

## Available Schemas

| File extension | Schema | Status                                            | Core Version                                     |
|----------------|-------|---------------------------------------------------|--------------------------------------------------|
| <a href="https://docs.hal.guru/yaml-agent/">.halguru.yaml</a>           | [halguru-schema.json](halguru-schema.json)               | <span id="agent-schema-status">⚪ No data</span>   | <span id="agent-schema-version">No data</span>   |
| <a href="https://docs.hal.guru/yaml-state/">.halguru-state.yaml</a>     | [halguru-state-schema.json](halguru-state-schema.json)   | <span id="state-schema-status">⚪ No data</span>   | <span id="state-schema-version">No data</span>   |
| <a href="https://docs.hal.guru/yaml-action/">.halguru-action.yaml</a>   | [halguru-action-schema.json](halguru-action-schema.json) | <span id="action-schema-status">⚪ No data</span>  | <span id="action-schema-version">No data</span>  |
| <a href="https://docs.hal.guru/yaml-website/">.halguru-website.yaml</a> | [halguru-schema.json](halguru-schema.json)               | <span id="website-schema-status">⚪ No data</span> | <span id="website-schema-version">No data</span> |

<div id="warning-message"></div>

<div class="page-refresh" style="margin: 0.75rem 0; text-align: center;">
  <button id="refresh-button" class="md-button md-button--gray" type="button" title="Refresh data" onclick="updateAllSchemasStatusAndVersions()">Refresh Status</button>
</div>

## Install Schema

To install these schemas in **Visual Studio Code**, run the following command:
```bash
halguru install
```

## ⮕ [Understanding Schema](https://json-schema.org/understanding-json-schema/reference/schema.html)

<script type="text/javascript">

    document.addEventListener('DOMContentLoaded', async function() {
        await updateAllSchemasStatusAndVersions();
    });

    if (typeof document$ !== 'undefined') {
      document$.subscribe(() => {
        updateAllSchemasStatusAndVersions();
      });
    }
    
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        updateAllSchemasStatusAndVersions();
      }
    });

</script>
