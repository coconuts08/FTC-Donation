<?php

//CHECK DATABASE CONNECTION

$conn = null;
$conn = checkDbConnection();
//USE MODELS
$category = new Category($conn);

if (array_key_exists('categoryid', $_GET)) {
    // check data
    checkPayload($data);
    // CHECKING DATA
    $category->category_aid = $_GET['categoryid'];
    $category->category_name = checkIndex($data, 'category_name');
    $category->category_description = checkIndex($data, 'category_description');
    $category->category_updated = date('Y-m-d H:i:s');

    $category_name_old = $data['category_name_old'];

    // VALIDATION
    checkId($category->category_aid);

    compareName(
        $category,  // PASS THE MODELS 1
        $category->category_name, // PASS THE NAME 2
        $category_name_old // PASS THE OLD NAME || PARAMETER 3
    );

    $query = checkUpdate($category);
    returnSuccess($category, 'category update', $query);
}

// exit if not available

checkEndPoint();
