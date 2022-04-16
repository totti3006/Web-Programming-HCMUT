<?php
include_once './config/db.php';

class Category{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllCategory(){
        try{
            $query = "SELECT * FROM category";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCategoryByName($name){
        try{
            $query = "SELECT * FROM category WHERE name = '$name'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCategoryById($category_id){
        try{
            $query = "SELECT * FROM category WHERE id = '$category_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createCategory($name){
        try{
            $query = "INSERT category (name) VALUES ('$name')";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateCategory($info){
        try{
            $name = $info['name'];

            $category_id = $info['category_id'];

            $query = "UPDATE category SET name = '$name' WHERE id = '$category_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteCategory($category_id){
        try{
            $query = "DELETE FROM category WHERE id = '$category_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>