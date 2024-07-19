<?php require '../connect.php'; ?>
<!doctype html>
<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="description" content="realmode.io">
  <link rel="stylesheet" href="custom.css">
</head><body>
  <h1>QUERY</h1>
  <hr>
  <form id="query" action="https://my.realmode.io:8443" method="post">
    <textarea name="data"></textarea>
    <button type="submit">$</button>
  </form>
  <hr>
  <h1>GRANT</h1>
  <hr>
  <form id="grant" action="https://my.realmode.io:8443" method="post">
    <textarea name="data"></textarea>
    <button type="submit">$</button>
  </form>
  <hr>
  <a href="https://my.realmode.io:8443"><h2>INFO</h2></a>
  <script>

var xhttp = new XMLHttpRequest();

xhttp.addEventListener('load', function() {

  console.log(this.responseText);

  return false;

});

xhttp.open('GET', 'https://my.realmode.io:8443');

xhttp.send();

console.log('okay');

  </script>
</body></html>
