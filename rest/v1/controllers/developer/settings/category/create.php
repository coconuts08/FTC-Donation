<?php

$conn = null;
$conn = checkDbConnection();


$category = new Category($conn);


if (array_key_exists("categoryid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$category->category_name = checkIndex($data, 'category_name');
$category->category_description = checkIndex($data, 'category_description');
$category->category_is_active = 1;
$category->category_created = date("Y-m-d H:i:s");
$category->category_updated = date("Y-m-d H:i:s");

$query = checkCreate($category);
returnSuccess($category, 'Category create', $query);
