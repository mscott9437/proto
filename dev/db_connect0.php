<?php

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'realmodellc_com';
$port = '3306';

$conn = new mysqli($host, $user, $pass, $db, $port);

mysqli_close($conn);

/*

echo mysqli_get_host_info($conn);

$query = 'SELECT * FROM wp_postmeta WHERE post_id=6524';

while ($row = mysqli_fetch_row($result)) {
        echo $row[1].PHP_EOL.$row[2].PHP_EOL.$row[3].PHP_EOL;
}

mysqli_free_result($result);

echo $row[1].PHP_EOL.$row[2].PHP_EOL.$row[3].PHP_EOL;

*/
