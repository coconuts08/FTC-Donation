<?php

class category
{
    public $category_aid;
    public $category_is_active;
    public $category_name;
    public $category_description;
    public $category_created;
    public $category_updated;

    public $connection;
    public $lastInsertedId;


    public $tblCategory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCategory = 'ftcd_settings_category';
    }

    //create

    public function create()
    {
        try {
            $sql = "insert into {$this->tblCategory}";
            $sql .= "(category_is_active,)";
            $sql .= "category_name";
            $sql .= "category_description";
            $sql .= "category_created";
            $sql .= "category_updated ) values (";
            $sql .= "category_is_active";
            $sql .= "category_name";
            $sql .= "category_description";
            $sql .= "category_created";
            $sql .= "category_updated";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "category_is_active" => $this->category_is_active,
                "category_name" => $this->category_name,
                "category_description" => $this->category_description,
                "category_updated" => $this->category_updated,
            ]);

            $this->lastInsertedId = $this->connection->lastInsertedId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
