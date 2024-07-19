@echo off

node frost.js

:wasmtime --dir=./tmp ff.wasm

:tsc http.ts --module es2022 --target es2022 --moduleResolution node16 --allowSyntheticDefaultImports true

pause
