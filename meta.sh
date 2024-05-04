#!/bin/bash

mkdir -p .meta
find ./packages -name 'package.json' -type f -exec cp --parents "{}" ./.meta \;
cp package.json .meta/package.json
cp package-lock.json .meta/package-lock.json