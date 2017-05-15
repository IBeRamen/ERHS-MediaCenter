<?php

$server = "localhost";
$username = "username";
$password = "password";
$db = "mediacenter";

$connection = new mysqli($server, $username, $password, $db);

$studentid = strip_tags(htmlspecialchars($_POST['studentid']));
$validID = substr($studentid, 0, 3);
$date = date('Y-m-d H:i:s');

if ($connection->connect_errno) {
    die("Connection failed: " . $connection->connect_error);
}

if (!empty($studentid)) {

    if ($validID == 480) {

        mysqli_query($connection, "INSERT INTO signin (studentid,signindate)VALUES('$studentid','$date')");

        $connection->close();

        echo "true";
    }
    else {
        echo "false";
    }

}