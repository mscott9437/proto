<?php
	if($_POST['max']!=8000000){
		header('Location:error.php?message=size');
		exit();}
	if(isset($_FILES['upload']['error'])&&is_array($_FILES['upload']['error'])){
		header('Location:error.php?message=multi');
		exit();}
	$phpErrors=array(
		0=>'File upload successful.',
		1=>'Maximum file size in php.ini exceeded.',
		2=>'Maximum file size in HTML form exceeded.',
		3=>'Partial upload detected.',
		4=>'No file was uploaded.',
		6=>'Missing temporary folder.',
		7=>'Failed writing to disk.',
		8=>'A PHP extension stopped the file upload.');
	if(isset($_FILES['upload']['error'])&&$_FILES['upload']['error']!=0){
		header('Location:error.php/message=files');
		exit();}
	if(!is_uploaded_file($_FILES['upload']['tmp_name'])){
		header('Location:error.php?fake');
		exit();}
	if($_FILES['upload']['size']>8000000){
		header('Location:error.php?message=limit');
		exit();}
	if(mime_content_type($_FILES['upload']['tmp_name'])!="image/jpeg"&&mime_content_type($_FILES['upload']['tmp_name'])!="image/png"&&mime_content_type($_FILES['upload']['tmp_name'])!="image/gif"){
		header('Location:error.php?message=format');
		exit();}

	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/jpeg"){
		$source=imagecreatefromjpeg($_FILES['upload']['tmp_name']);}
	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/png"){
		$source=imagecreatefrompng($_FILES['upload']['tmp_name']);}
	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/gif"){
		$source=imagecreatefromgif($_FILES['upload']['tmp_name']);}
	$size=getimagesize($_FILES['upload']['tmp_name']);
	$width=floor($size[0]*(150/$size[1]));
	$virtual=imagecreatetruecolor($width,150);
	imagecopyresampled($virtual,$source,0,0,0,0,$width,150,$size[0],$size[1]);

	$uploadDir=DOC_ROOT."/../profile/".$_SESSION['type']."_image/".$_SESSION['name']."/";
	$now=time();
	while(file_exists($uploadPath=$uploadDir.$now.'-'.$_FILES['upload']['name'])){
		$now++;}

	$thumbDir=DOC_ROOT."/../profile/".$_SESSION['type']."_image/".$_SESSION['name']."/thumbs/";
	while(file_exists($thumbPath=$thumbDir.$now.'-'.$_FILES['upload']['name'])){
		$now++;}
	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/jpeg"){
		if(!imagejpeg($virtual,$thumbPath)){
			header('Location:error.php?message=thumb');
			exit();}}
	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/png"){
		if(!imagepng($virtual,$thumbPath)){
			header('Location:error.php?message=thumb');
			exit();}}
	if(mime_content_type($_FILES['upload']['tmp_name'])=="image/gif"){
		if(!imagegif($virtual,$thumbPath)){
			header('Location:error.php?message=thumb');
			exit();}}

	if(!move_uploaded_file($_FILES['upload']['tmp_name'],$uploadPath)){
		header('Location:error.php?message=store');
		exit();}
	$archiveName=str_replace($uploadDir,'',$uploadPath);
	$title=trim($_POST['title']);
	$stmt=mysqli_stmt_init($conn);
	if(mysqli_stmt_prepare($stmt,"INSERT INTO ".$_SESSION['type']."_image(head,path,link) VALUES(?,?,?)")){
		mysqli_stmt_bind_param($stmt,"sss",$title,$archiveName,$_SESSION['id']);
		mysqli_stmt_execute($stmt);
		mysqli_stmt_close($stmt);}
	else{
		header('Location:error.php?message=stmt');
		exit();}
	$message="image";
?>