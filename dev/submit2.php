<?php

$ch = curl_init();

//curl_setopt($ch, CURLOPT_POST, 1);

$options = array(
	CURLOPT_URL => 'http://localhost:3000/contact',
	CURLOPT_RETURNTRANSFER => 'true',
//	CURLOPT_HTTPHEADER => array(
//		'Authorization: Bearer '.$row['sig'],
//		'Cookie: rand='.$rand
//	)
);

curl_setopt_array($ch, ($options));
echo curl_exec($ch);
//curl_close($ch);

?><!doctype html>
<html lang="en"><head>
	<meta charset="utf-8">
	<meta name="description" content="frostfall.io">
	<link rel="stylesheet" href="proto.css">
	<script src="proto.js" defer></script>
	<title>F.R.O.S.T. [ Submit ]</title>
</head><body>
	<hr>
	<a href="/html">ESC</a>
</body></html>
