#!/bin/sh

cp $1/preact.spec.js src/__tests__/
cp $1/Components.js src/
rm src/__tests__/ClickCounter.spec.js

