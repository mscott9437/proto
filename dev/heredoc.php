<?php

$doc = <<<'END'
<!doctype html>
<html lang="en-us"><head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="dist">

<title>Dist...</title>

<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<script type="module" src="/bundle.js"></script>

</head><body>
END;

echo file_put_contents('index.html', $doc.PHP_EOL, LOCK_EX)."\n";

$doc = <<<END
<header aria-label="">

  <h1>$_SESSION['info']</h1>
  
</header>

<hr>

<main>

  <div>main</div>

</main>

<hr>

<form method="post" accept-charset="utf-8" action="javascript:alert('okay')" aria-label="">

  <label for="form-0">Form-0</label>

  <input id="form-0" name="form-0" type="text">

  <label for="form-1">Form-1</label>

  <input id="form-1" name="form-1" type="text">

  <button type="submit">Submit</button>

</form>

<hr>

<footer aria-label="">

  <h1 slot="id">Real&nbsp;Mode,&nbsp;LLC</h1>

  <div id="user"></div>

</footer>
END;

echo file_put_contents('index.html', $doc.PHP_EOL, FILE_APPEND | LOCK_EX)."\n";

$doc = <<<END
<noscript>NOSCRIPT</noscript>

</body></html>
END;

echo file_put_contents('index.html', $doc, FILE_APPEND | LOCK_EX)."\n";
file_put_contents('index.html', PHP_EOL, FILE_APPEND | LOCK_EX);

header('Location: admin');
