<?php
header("Content-type:text/html;charset=utf-8");
$connect=mysql_connect("localhost","root","root");
mysql_select_db("mydatabase",$connect);
$addtb="insert into vip(userId,userName,sex) values('0004','沈腾','女')";
mysql_query($addtb,$connect);
mysql_close($connect);
?>