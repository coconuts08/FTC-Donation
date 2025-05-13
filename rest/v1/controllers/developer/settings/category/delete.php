<?php


$conn = null;
$conn = checkDbConnection();

$category = new Category($conn);

$body = file_get_contents("php://input");


if (array_key_exists('categoryid', $_GET)) {
    $category->category_aid = $_GET['categoryid'];
    checkId($category->category_aid);
    $query = checkDelete($category);
    returnSuccess($category, 'category delete', $query);
}
