#!/bin/bash

trap 'echo "❌ Script error in the line $LINENO. Command: $BASH_COMMAND"' ERR

set -e

echo "Generate all necessary manual files for the hal.guru platform (with the 'autogen-' prefix)."

halguru --version || {
    exit 1
}

halguru manual --generate-version-file docs/autogen-docs-version.txt --overwrite || {
    exit 2
}

halguru manual --generate-cli-docs docs/cli --overwrite || {
    exit 3
}

halguru manual --generate-schemas docs/schemas --overwrite || {
    exit 4
}

halguru manual --generate-agent-yaml-docs docs/yaml-agent --overwrite || {
  exit 5
}

halguru manual --generate-state-yaml-docs docs/yaml-state --overwrite || {
  exit 6
}

halguru manual --generate-action-yaml-docs docs/yaml-action --overwrite || {
  exit 7
}

halguru manual --generate-webscraping-yaml-docs docs/yaml-webscraping --overwrite || {
  exit 8
}
