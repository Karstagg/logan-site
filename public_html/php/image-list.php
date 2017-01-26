<?php
$imgDir = "img/work-thumbnails";
$protoImgArray = scandir($imgDir);
unset($protoImgArray[0]);
unset($protoImgArray[1]);
$imgArray = $protoImgArray;
