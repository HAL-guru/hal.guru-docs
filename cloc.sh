#!/bin/bash

current_dir=$(pwd)

trap 'cd "$current_dir";' EXIT

cd ..



cloc . --not-match-f='\.json$|\.xml$|\.html$|\.css$|\.svg$|\.js$|\.yaml$|\.txt$|\.yml$|\.ini$|\.less$|\.scss$'
