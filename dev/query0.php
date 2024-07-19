<?php

session_start();

if(!isset($_SESSION['id'])) {

  header('HTTP/1.0 401 Unauthorized');

  $csrf = bin2hex(random_bytes(64));
  setcookie('csrf', $csrf, [
    'path' => '/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
  ]);

  include 'error.htm';
  exit;

} else {

  $csrf = bin2hex(random_bytes(64));
  setcookie('csrf', $csrf, [
    'path' => '/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
  ]);

  echo '<h1>QUERY</h1><hr>';
  echo htmlspecialchars($_POST['query']);

  $_SESSION['id'] = $csrf;

}
