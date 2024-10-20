#!/usr/bin/env bash

echo "Packaging extension"

EXCL=('*.git*' '*.md' '*.sh')
echo "Files to exlucde: ${EXCL[@]}"

NAME=wikipedia-sticky-headers
echo "Writing to: ../$NAME.zip" 

zip -r -FS ../$NAME.zip * --exclude ${EXCL[@]} 

echo "Done"