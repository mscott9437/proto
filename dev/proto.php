<!doctype html><?php

	$csrf = bin2hex(random_bytes(64));

	setcookie('csrf', $csrf, [
		'path' => '/',
		'secure' => true,
		'httponly' => true,
		'samesite' => 'Strict'
	]);

	session_start();

?><html lang="en"><head>
	<meta charset="utf-8">
	<meta name="description" content="my.frostfall.io">
	<link rel="stylesheet" href="custom.css">
	<script type="module" src="main.js"></script>
	<title>F.R.O.S.T. [ Main ]</title>
</head><body onload="loadAll()">
	<h2>ZONE Parallax</h2>
	<hr>
	<button is="contact-button"><span class="button">@</span></button>
	<hr>
	<h3><a class="plain" target="_blank" href="html">Frontier2</a></h3>
	<hr>
	<canvas id="canvas" width="150" height=80"></canvas>
	<hr>
	<div id="response"></div>
	<hr>
	<div id="txt"></div>
	<hr>
	<img src="logo.svg">
	<hr>
	<form class="flex" action="query.php" method="post">
		<textarea id="query"></textarea>
		<button type="submit"><span class="button1">#</span></button>
	</form>
	<hr>
<script>
	const xhttp = new XMLHttpRequest()

	xhttp.onload = function() {
		console.log(JSON.parse(this.response))
	}

	function startTime() {
		const today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
		setTimeout(startTime, 1000);
	}

	function checkTime(i) {
		if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
	}

	function drawCanvas() {
		let canvas = document.getElementById('canvas');

		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');

			ctx.fillStyle = 'rgb(200, 0, 0)';
			ctx.fillRect(10, 10, 50, 50);

			ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
			ctx.fillRect(30, 30, 50, 50);
		}
	}

	xhttp.open("GET", "user.json")
	xhttp.send()

	function loadAll() {
		startTime()
		drawCanvas()
	}

</script></body></html>
