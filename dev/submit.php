<?php

$token = file_get_contents('token');

$hmac = hash_hmac('sha1', 'realmodellc@gmail.com', $token);

$id = $_POST['dat-2'];

if($hmac != $id){

  print 'ERROR';

  exit();

}

$x = new DOMImplementation;
$doc = $x -> createDocument('realmode.io', 'html', $x -> createDocumentType('html', '', 'about:legacy-compat'));

$doc -> xmlStandalone = true;
$doc -> formatOutput = true;
$doc -> xmlVersion = '1.0';
$doc -> encoding = 'utf-8';

$html = $doc -> documentElement;
$head = $doc -> createElement('head');
$title = $doc -> createElement('title');
$text = $doc -> createTextNode('TITLE');
$body = $doc -> createElement('body');

$title -> appendChild($text);
$head -> appendChild($title);
$html -> appendChild($head);
$html -> appendChild($body);

$doc -> save('user.xhtm');

$root = $doc -> getElementsByTagName('html') -> item(0);
$root -> removeAttributeNS('realmode.io', '');

$doc -> saveHTMLFile('user.htm');
print $doc -> saveHTML();

?>
