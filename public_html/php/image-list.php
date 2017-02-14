<?php
$imgDir = "img/work-thumbnails";
$protoImgArray = scandir($imgDir);
unset($protoImgArray[0]);
unset($protoImgArray[1]);
$imgArray = $protoImgArray;

$comic1Dir = "img/comic1";
$protoComic1Array = scandir($comic1Dir);
unset($protoComic1Array[0]);
unset($protoComic1Array[1]);
$comic1Array = $protoComic1Array;