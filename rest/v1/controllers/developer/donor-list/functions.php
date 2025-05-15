<?php

function checkFilter($object)
{
    $query = $object->filter();
    checkQuery($query, 'Mali ang models mo (filter)');
    return $query;
}

function checkFilterSearch($object)
{
    $query = $object->filterSearch();
    checkQuery($query, 'Mali ang models mo (filter search)');
    return $query;
}
