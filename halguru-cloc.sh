#!/bin/bash
#
# Calculate lines of code for the project.
# This script runs 'cloc' on the parent directory,
# excluding non-source files such as JSON, XML, HTML, CSS, etc.
#

current_dir=$(pwd)

trap 'cd "$current_dir";' EXIT

cd ..



cloc . --not-match-f='\.json$|\.xml$|\.html$|\.css$|\.svg$|\.js$|\.yaml$|\.txt$|\.yml$|\.ini$|\.less$|\.scss$'
