<?php

session_start();

if(!isset($_SESSION['info']))
{
  header('Location: admin/login.php');
  exit;
}

$info = $_SESSION['info'];
$class = $_SESSION['class'];
$rand = $_SESSION['rand'];

$csrf = bin2hex(random_bytes(64));

setcookie('csrf', $csrf, [
  'secure' => true,
  'httponly' => true,
  'samesite' => 'Strict'
]);
