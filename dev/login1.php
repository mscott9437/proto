<!doctype html><?php

	$csrf = bin2hex(random_bytes(64));

	setcookie('csrf', $csrf, [
	  'path' => '/',
	  'secure' => true,
	  'httponly' => true,
	  'samesite' => 'Strict'
	]);

?><html lang="en-us"><head>

	<meta charset="utf-8">
	<meta name="description" content="login">
	<title>Login...</title>
	<link rel="stylesheet" href="admin.css">

</head><body>

<hr>

<form id="admin-form" method="post" accept-charset="utf-8" action="submit.php" aria-label="">

	<label for="form-0">Form-0</label>
	<input id="form-0" name="form-0" type="text">

	<label for="form-1">Form-1</label>
	<input id="form-1" name="form-1" type="text">

	<label for="form-2">Form-2</label>
	<textarea id="form-2" name="form-2"></textarea>

	<label for="form-3">Form-3</label>
	<input id="form-3" name="form-3" type="file">

	<button type="submit">$</button>

</form>

<script>

	const urlSearchParams = new URLSearchParams(window.location.search);

	var i = 0

	for(var pair of urlSearchParams.entries()) {

	  document.querySelector('#form-' + i).value = pair[1];
	  i++;

	}

</script>

<hr>

<h1 class="user-info">Real&nbsp;Mode,&nbsp;LLC</h1>

<hr>

<a href="?form-0=mscott9437%40gmail.com&form-1=asdf&form-2=" rel="external nofollow noopener noreferrer">?form-0=mscott9437%40gmail.com&form-1=asdf&form-2=</a>

<hr>

<div id="user-info"></div>

<hr>

<div id="user-csrf" style="overflow-wrap: anywhere"><?= $csrf ?></div>

<script>

	var token = document.querySelector('#user-info');
	var array = new Uint32Array(1);

	window.crypto.getRandomValues(array);

	for (var i = 0; i < array.length; i++) {
	  console.log(array[i]);
	}

	token.textContent = array[0];

	document.cookie = 'rand=' + array[0] + '; Secure; SameSite=strict; Path=/';

</script>

<noscript>NOSCRIPT</noscript>

</body></html>
