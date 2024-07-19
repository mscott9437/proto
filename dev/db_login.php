<?php

require_once 'db_connect.php';

try {

  $stmt = $pdo->query('SELECT * FROM users');

  $row = $stmt->fetch();

  echo $row['id'] . "\n";
  echo $row['key'] . "\n";

} catch (PDOException $e) {

  throw new PDOException($e->getMessage(), (int)$e->getCode());

}
