// import *  as http from 'http';
// import *  as fs from 'fs';
const http = require('http');
const fs = require('fs');
// const queryObject = require('url').parse(url,true).query;
// console.log('query object: '+queryObject.id);
// if(responseBody.body == 'id=0&key=8xJNI5Ia1WYixBx0ZFBuD+jxVQQ='){res.write('okay')}else{res.write('no');}
// res.statusCode = 200;
// res.setHeader('Content-Type', 'application/json');
// res.end(fs.readFileSync('auth.json'));

http.createServer(function(req, res) {

	const {headers, method, url} = req;

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');

	if (req.method === 'POST') {

		let body = [];

		req.on('error', (err) => {

		  console.error(err);

		}).on('data', (chunk) => {

		  body.push(chunk);

		}).on('end', () => {

			body = Buffer.concat(body).toString();

			res.on('error', (err) => {
			  console.error(err);
			});

			const responseBody = {headers, method, url, body};

			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseBody));

		});

	} else if (req.url === '/login') {

res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

res.write(`<!doctype html>
<html lang="en" class="no-js"><head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="login">
	<title>Login...</title>
	<link rel="stylesheet" href="base.css">

</head><body>

<style>

	#base-form {
	  background: #fff;
	  display: flex;
	  flex-direction: column;
	  font-weight: bold;
	}

	#base-form input, #base-form textarea {
	  width: 35%;
	}

	#base-form button {
	  border: 0;
	  width: 20%;
	  background-color: rgba(112, 128, 144, 0.95);
	  color: #fff;
	  font-weight: inherit;
	  margin: 7px 0 7px 0;
	}

	.user-info {
	  color: white;
	  background-color: rgba(112, 128, 144, 0.75);
	}

</style>

<hr>
<form id="base-form" method="post" accept-charset="utf-8" action="/" aria-label="">

	<label for="form-0">Form-0</label>
	<input id="form-0" name="form-0" type="text">

	<label for="form-1">Form-1</label>
	<input id="form-1" name="form-1" type="text">

	<label for="form-2">Form-2</label>
	<textarea id="form-2" name="form-2"></textarea>

	<button type="submit">#</button>

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

<hr><h1 class="user-info">Real&nbsp;Mode,&nbsp;LLC</h1>

<div id="user-info"></div>

<script>

	var token = document.querySelector('#user-info');
	var array = new Uint32Array(1);

	window.crypto.getRandomValues(array);

	for (var i = 0; i < array.length; i++) {
	  console.log(array[i]);
	}

	token.textContent = array[0];

	document.cookie = 'rand=' + array[0] + '; Secure; SameSite=strict';

</script>

<hr>

<a href="login?form-0=mscott9437%40gmail.com&form-1=asdf&form-2=" rel="external nofollow noopener noreferrer">login?form-0=mscott9437%40gmail.com&form-1=asdf&form-2=</a>

<noscript>NOSCRIPT</noscript>

</body></html>`);

res.end();

	} else if (req.url === '/base.css') {

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/css');
		res.end(fs.readFileSync('base.css'));

	} else if (req.method === 'GET') {

		let body = [];

		req.on('error', (err) => {

		  console.error(err);

		}).on('data', (chunk) => {

		  body.push(chunk);

		}).on('end', () => {

			body = Buffer.concat(body).toString();

			res.on('error', (err) => {
			  console.error(err);
			});

			const responseBody = {headers, method, url};

			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseBody));

		});

	} else {

		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(fs.readFileSync('auth.json'));

	}

	console.log(req.url);
	console.log(req.method);

}).listen(8888, (err) => {

  console.log('localhost:8888');

});
