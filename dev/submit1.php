<?php

$host = '127.0.0.1';
$db   = 'proto';
$user = 'proto';
$pass = 'asdf';
$port = "3306";
$charset = 'utf8mb4';

$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";

$pdo = new PDO($dsn, $user, $pass, $options);

try {

	if(empty($_POST['form-0']) || empty($_POST['form-1']))
	{
	  echo 'no';
	  exit;
	}

	$stmt = $pdo->prepare("SELECT * FROM data WHERE user = ?");
	$stmt->execute(array($_POST['form-0']));
	$row = $stmt->fetch();

	if (!$row || !password_verify($_POST['form-1'], $row['auth']))
	{
	  echo 'ACCESS DENIED';
	  exit;
	}

	else
	{
	  session_start();

	  $_SESSION['info'] = $row['info'];
	  $_SESSION['class'] = $row['class'];
	  $_SESSION['rand'] = $row['rand'];

	  header('Location: /');

	  exit;
	}

} catch (PDOException $e) {

  throw new PDOException($e->getMessage(), (int)$e->getCode());

}
