#!/bin/bash
#
# @file halguru-generate-manual.sh
# @brief Generates all necessary manual files for the hal.guru platform.
#
# This script uses the 'halguru' CLI to generate version information,
# CLI documentation, JSON schemas, and YAML documentation.
# All generated files are placed in the 'docs' directory with an 'autogen-' prefix.
#

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

halguru manual --generate-yaml-docs docs --overwrite || {
  exit 5
}
