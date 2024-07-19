<?php

$token = file_get_contents('token');

$hmac = hash_hmac('sha1', 'realmodellc@gmail.com', $token);

$id = $_POST['dat-2'];

if($hmac != $id){

  print 'ERROR';

  exit();

}
