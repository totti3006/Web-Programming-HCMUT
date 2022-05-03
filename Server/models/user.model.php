<?php

include_once './middleware/error/custom_error.php';

class User{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getUserByUsername($username){

        try{
            $query = "SELECT * FROM users WHERE username = '$username'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }

    }

    public function insertUser($username, $password){

        try {
            $query = "INSERT INTO users (username, password, role) VALUES ('$username', '$password', 'user')";

            $result = $this->conn->prepare($query);

            $result->execute();
            
            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }

    }

    public function changePassword($username, $password){

        try {
            $query = "UPDATE users SET password = '$password' WHERE username = '$username'";

            $result = $this->conn->prepare($query);

            $result->execute();
            
            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }

    }

}
?>