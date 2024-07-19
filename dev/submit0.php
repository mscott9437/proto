<?php

switch($_GET['route']) {
  case 'query':
    require '../query.php';
    break;
  case 'grant':
    require '../grant.php';
    break;
  case 'info':
    require '../info.php';
    break;
  default:
    exit;
}
