<?php
// check Database connection
$conn = null;
$conn = checkDbConnection();
// use models
$category = new Category($conn);

if (array_key_exists('categoryid', $_GET)) {
    // check data
    checkPayload($data);
    // checking data
    $category->category_aid = $_GET['categoryid'];
    $category->category_name = checkIndex($data, 'category_name');
    $category->category_description = checkIndex($data, 'category_description');
    $category->category_updated = date('Y-m-d H:i:s');

    // validation
    checkID($category->category_aid);

    $query = checkUpdate($category);
    returnSuccess($category, 'category update', $query);
}

//
checkEndpoint();
