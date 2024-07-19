<!doctype html><?php require 'admin/session.php' ?>
<html lang="en-US"><head>

	<meta charset="utf-8">
	<meta name="description" content="<?= $class ?>">
	<title><?= $info ?></title>
	<link rel="stylesheet" href="proto.css">
	<script type="module" src="proto.js"></script>

</head><body>

	<hr>

	<?php include 'src/ClientBrand.htm' ?>

	<hr>

	<?php include 'src/ContactForm.htm' ?>

	<hr>

	<?php include 'src/CanvasArea.htm' ?>

	<noscript>NOSCRIPT</noscript>

	<hr>

	<a href="http://localhost:8888" target="_blank">http://localhost:8888</a>

	<hr>

	<a href="https://real.mode" target="_blank">https://real.mode</a>

	<?php include 'src/UserInfo.htm' ?>

	<?php include 'src/ScrollBuffer.htm' ?>

	<hr>

	<div id="user-csrf" style="overflow-wrap: anywhere"><?= $csrf ?></div>

</body></html>
