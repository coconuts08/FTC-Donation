<?php


//use http header
require '../../../../core/header.php';
//use function
require '../../../../core/functions.php';
//use needed models
require '';
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    //get
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }

    //create
    if ($_SERVER['REQUEST_METHOD'] == 'post') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
}

http_response_code(200);
checkEndpoint();
