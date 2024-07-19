<?php

$hash=password_hash('asdf', PASSWORD_ARGON2I);

echo $hash . "\n";

echo password_verify('asdf', $hash);
