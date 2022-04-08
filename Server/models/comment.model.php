<?php
include_once './config/db.php';

class Comment{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllComments(){
        try{
            $query = "SELECT * FROM comment";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCommentById($comment_id){
        try{
            $query = "SELECT * FROM comment WHERE id = '$comment_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getCommentByProductId($product_id){
        try{
            $query = "SELECT * FROM comment WHERE product_id = '$product_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createComment($info){
        try{
            $user_id = $_SESSION['user_id'];

            $product_id = $info['product_id'];
            
            $content = $info['content'];

            $query = "INSERT INTO comment (user_id, product_id, content) VALUES ('$user_id', '$product_id', '$content')";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateComment($info){
        try{
            $id = $info['comment_id'];

            $content = $info['content'];

            $query = "UPDATE comment SET content = '$content' WHERE id = '$id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function deleteComment($comment_id){
        try{
            $query = "DELETE FROM comment WHERE id = '$comment_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>