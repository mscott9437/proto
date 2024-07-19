<?php require 'connect.php'; ?>
<!doctype html>
<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="description" content="realmode.io">
  <link rel="stylesheet" href="custom.css">
  <script src="ajax.js" defer></script>
</head><body>
  <h1>QUERY</h1>
  <hr>
  <form id="query" action="javascript:alert('query')" method="post">
    <textarea name="data"></textarea>
    <button type="submit">$</button>
  </form>
  <hr>
  <h1>GRANT</h1>
  <hr>
  <form id="grant" action="javascript:alert('grant')" method="post">
    <textarea name="data"></textarea>
    <button type="submit">$</button>
  </form>
  <hr>
  <button id="info"><h2>INFO</h2></button>
</body></html>
