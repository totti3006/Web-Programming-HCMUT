<?php
include_once './config/db.php';

class Product{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllProduct(){
        try{
            $query = "SELECT product.id, category_id, name as category_name, title, price, discount, thumbnail, description FROM product join category on product.category_id = category.id";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getProductById($product_id){
        try{
            $query = "SELECT * FROM product WHERE id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createProduct($info){
        try{
            $category_id = $info['category_id'];

            $title = $info['title'];

            $price = $info['price'];

            $thumbnail = $info['thumbnail'];

            $description = $info['description'];

            $query = "";

            if(array_key_exists('discount', $info)){
                $discount = $info['discount'];
                $query = "INSERT INTO  product (category_id, title, price, discount, thumbnail, description) VALUES ('$category_id', '$title', '$price', '$discount', '$thumbnail', '$description')";
            }else{
                $query = "INSERT INTO  product (category_id, title, price, discount, thumbnail, description) VALUES ('$category_id', '$title', '$price', NULL, '$thumbnail', '$description')";
            }
            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateProduct($info){
        try{
            $product_id = $info['product_id'];
            
            $category_id = $info['category_id'];

            $title = $info['title'];

            $price = $info['price'];

            $thumbnail = $info['thumbnail'];

            $description = $info['description'];

            $query = "";

            if(array_key_exists('discount', $info)){
                $discount = $info['discount'];
                $query = "UPDATE product SET category_id = '$category_id', title = '$title', price = '$price', discount = '$discount', thumbnail = '$thumbnail', description = '$description' WHERE id = '$product_id'";
            }
            else{
                $query = "UPDATE product SET category_id = '$category_id', title = '$title', price = '$price', discount = NULL, thumbnail = '$thumbnail', description = '$description' WHERE id = '$product_id'";
            }

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteProduct($product_id){
        try{
            $query = "DELETE FROM product WHERE id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>