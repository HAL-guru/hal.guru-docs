#!/bin/bash

trap 'echo "❌ Script error in the line $LINENO. Command: $BASH_COMMAND"' ERR

set -e

echo "Clear all manual files for the Hal.guru platform (with the 'autogen-' prefix)."

TARGET_DIR="docs"

if [ ! -d "$TARGET_DIR" ]; then
  echo "Directory '$TARGET_DIR/' not found. Nothing to do."
  exit 0
fi

echo "Scanning for files starting with 'autogen-' under '$TARGET_DIR/' ..."
matches=$(find "$TARGET_DIR" -type f -name 'autogen-*' | wc -l | tr -d '[:space:]')

if [ "$matches" = "0" ]; then
  echo "No files to remove."
  exit 0
fi

echo "Removing $matches file(s):"
# Wyświetl usuwane pliki i usuń je
find "$TARGET_DIR" -type f -name 'autogen-*' -print -delete

echo "Done."
