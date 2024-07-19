@echo off

zig run try.zig

:zig run main.zig

:zig run try.zig  --test-cmd-bin --test-cmd "test headers"

:zig run main.zig  --test-cmd-bin --test-cmd -i

:zig test wasi.zig --test-cmd-bin --test-cmd %1 --test-runner .\test_runner.zig

pause
