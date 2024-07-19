<?php
	if($_POST['max']!=128000000){
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
	if($_FILES['upload']['size']>128000000){
		header('Location:error.php?message=limit');
		exit();}
	if(mime_content_type($_FILES['upload']['tmp_name'])!="video/mp4"&&mime_content_type($_FILES['upload']['tmp_name'])!="video/webm"&&mime_content_type($_FILES['upload']['tmp_name'])!="application/ogg"){
		header('Location:error.php?message=format');
		exit();}

	$uploadDir=DOC_ROOT."/../profile/".$_SESSION['type']."_video/".$_SESSION['name']."/";
	$now=time();
	while(file_exists($uploadPath=$uploadDir.$now.'-'.$_FILES['upload']['name'])){
		$now++;}

	if(!move_uploaded_file($_FILES['upload']['tmp_name'],$uploadPath)){
		header('Location:error.php?message=store');
		exit();}
	$archiveName=str_replace($uploadDir,'',$uploadPath);
	$title=trim($_POST['title']);
	$stmt=mysqli_stmt_init($conn);
	if(mysqli_stmt_prepare($stmt,"INSERT INTO ".$_SESSION['type']."_video(head,path,link) VALUES(?,?,?)")){
		mysqli_stmt_bind_param($stmt,"sss",$title,$archiveName,$_SESSION['id']);
		mysqli_stmt_execute($stmt);
		mysqli_stmt_close($stmt);}
	else{
		header('Location:error.php?message=stmt');
		exit();}
	$message="video";
?>