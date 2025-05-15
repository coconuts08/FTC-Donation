<?php

class Notification
{
    // DATABASE COLUMN
    public $notification_aid;
    public $notification_is_active;
    public $notification_name;
    public $notification_category_id;
    public $notification_created;
    public $notification_updated;
    public $notification_purpose;
    public $notification_email;


    // DATABASE CONNECTION

    public $connection;
    public $lastInsertedId;

    // DATABASE TABLE
    public $tblnotification;

    public function __construct($db)
    {

        $this->connection = $db;
        $this->tblnotification = 'ftcd_settings_notification';
    }


    //CREATE
    public function create()
    {
        try {
            $sql = "insert into {$this->tblnotification} ";
            $sql .= "( notification_is_active,";
            $sql .= " notification_name,";
            $sql .= " notification_email,";
            $sql .= " notification_purpose,";
            $sql .= " notification_created,";
            $sql .= " notification_updated ) values ( ";
            $sql .= ":notification_is_active, ";
            $sql .= ":notification_name, ";
            $sql .= ":notification_email, ";
            $sql .= ":notification_purpose, ";
            $sql .= ":notification_created, ";
            $sql .= ":notification_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_is_active" => $this->notification_is_active,
                "notification_name" => $this->notification_name,
                "notification_email" => $this->notification_email,
                "notification_purpose" => $this->notification_purpose,
                "notification_created" => $this->notification_created,
                "notification_updated" => $this->notification_updated,
            ]);

            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblnotification} ";
            $sql .= "order by ";
            $sql .= "notification_is_active desc, ";
            $sql .= "notification_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblnotification} set ";
            $sql .= "notification_name = :notification_name, ";
            $sql .= "notification_category_id = :notification_category_id, ";
            $sql .= "notification_updated = :notification_updated ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_name" => $this->notification_name,
                "notification_category_id" => $this->notification_category_id,
                "notification_updated" => $this->notification_updated,
                "notification_aid" => $this->notification_aid,
            ]);
        } catch (PDOException $ex) {
            returnError($ex);
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblnotification} set ";
            $sql .= "notification_is_active = :notification_is_active, ";
            $sql .= "notification_updated = :notification_updated ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_is_active" => $this->notification_is_active,
                "notification_updated" => $this->notification_updated,
                "notification_aid" => $this->notification_aid,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "DELETE FROM {$this->tblnotification} ";
            $sql .= "WHERE notification_aid = :notification_aid";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'notification_aid' => $this->notification_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }
}
