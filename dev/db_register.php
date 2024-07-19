<?php

require_once 'db_connect.php';

try {

  $email = 'User1';
  $hash = 'asdf';

  $data = [
    'email' => $email,
    'hash' => $hash,
  ];

  $sql = "INSERT INTO user (email, hash) VALUES (:email, :hash)";

  $stmt = $pdo->prepare($sql);

  $stmt->execute($data);

  echo 'okay';

} catch (PDOException $e) {

  throw new PDOException($e->getMessage(), (int)$e->getCode());

}
