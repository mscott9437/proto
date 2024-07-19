<?php

$doc = new DOMDocument();

$doc -> formatOutput = true;
$doc -> preserveWhiteSpace = false;

$doc -> loadHTML('<!DOCTYPE html><html lang="en" class="no-js"></html>');

$html = $doc -> documentElement;

$head = $doc -> createElement('head');

$title = $doc -> createElement('title');
$text = $doc -> createTextNode('TITLE');
$title -> appendChild($text);
$head -> appendChild($title);

$meta1 = $doc -> createElement('meta');
$meta1 -> setAttribute('name', 'description');
$meta1 -> setAttribute('content', 'meta');
$head -> appendChild($meta1);

$meta2 = $doc -> createElement('meta');
$meta2 -> setAttribute('name', 'viewport');
$meta2 -> setAttribute('content', 'width=device-width, initial-scale=1');
$head -> appendChild($meta2);

$link = $doc -> createElement('link');
$link -> setAttribute('rel', 'stylesheet');
$link -> setAttribute('href', 'css/bulma.min.css');
$head -> appendChild($link);

$script = $doc -> createElement('script');
$script -> setAttribute('type', 'text/javascript');
$script -> setAttribute('href', 'js/main.js');
$head -> appendChild($script);

$html -> appendChild($head);

$body = $doc -> createElement('body');

$html -> appendChild($body);

$tmp = new DOMDocument();
$tmp -> loadHTML($_POST['key']);

$user = $doc -> getElementsByTagName('body') -> item(0);

foreach ($tmp -> getElementsByTagName('body') -> item(0) -> childNodes as $node){

    $node = $doc -> importNode($node, true);

    $user -> appendChild($node);

}
/*
while (nodeToBeRemoved.firstChild){

    nodeToBeRemoved.parentNode.insertBefore(nodeToBeRemoved.firstChild, nodeToBeRemoved);

}

nodeToBeRemoved.parentNode.removeChild(nodeToBeRemoved);
*/
$doc -> saveHTMLFile('posts/user.html');

echo htmlspecialchars($_POST['id']);
print htmlspecialchars($tmp -> saveHTML());

?>
