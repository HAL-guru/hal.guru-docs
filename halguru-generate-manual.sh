#!/bin/bash

trap 'echo "❌ Script error in the line $LINENO. Command: $BASH_COMMAND"' ERR

set -e

echo "Generate all necessary manual files for the hal.guru platform."

halguru --version || {
    exit 1
}

cd docs || {
    exit 2
}

halguru manual --generate-schemas --overwrite --bad-arg-test || {
    cd ..
    exit 3
}
halguru manual --generate-models-docs --overwrite || {
    cd ..
    exit 4
}
halguru manual --generate-cli-commands-docs --overwrite || {
    cd ..
    exit 5
}
halguru manual --update-mkdocs --overwrite || {
    cd ..
    exit 6
}
