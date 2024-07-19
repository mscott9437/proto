<?php

$csrf = bin2hex(random_bytes(64));
setcookie('csrf', $csrf, [
  'path' => '/',
  'secure' => true,
  'httponly' => true,
  'samesite' => 'Strict'
]);
