<?php

// regenerate

$hash = '$argon2i$v=19$m=65536,t=4,p=1$QUlmTVAxOTVodkJWOEhiNw$SNCtQW4MTnf5knJD15Ufw2ahicPD4UWHN99ww0ff76o';

if(!password_verify($_POST['key'], $hash)) {

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

  session_start();
  $_SESSION['id'] = $csrf;

}
