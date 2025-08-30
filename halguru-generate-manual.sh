#!/bin/bash

trap 'echo "❌ Script error in the line $LINENO. Command: $BASH_COMMAND"' ERR

set -e

echo "Generate all necessary manual files for the hal.guru platform."

halguru --version || {
    exit 1
}

halguru manual --generate-version-file docs/autogen-cli-version.txt --overwrite || {
    exit 2
}

halguru manual --generate-cli-docs docs/cli --overwrite || {
    exit 3
}

halguru manual --generate-schemas docs/schemas --overwrite || {
    exit 4
}

#halguru manual --generate-models-docs --overwrite || {
#    exit 5
#}
