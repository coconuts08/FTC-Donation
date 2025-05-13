<?php

//CHECK DATABASE CONNECTION

$conn = null;
$conn = checkDbConnection();
//USE MODELS
$designation = new Designation($conn);

if (array_key_exists('designationid', $_GET)) {
    // check data
    checkPayload($data);
    // CHECKING DATA
    $designation->designation_aid = $_GET['designationid'];
    $designation->designation_name = checkIndex($data, 'designation_name');
    // $designation->designation_description = checkIndex($data, 'designation_description');
    $designation->designation_updated = date('Y-m-d H:i:s');

    // VALIDATION
    checkId($designation->designation_aid);

    $query = checkUpdate($designation);
    returnSuccess($designation, 'designation update', $query);
}

// exit if not available

checkEndPoint();
