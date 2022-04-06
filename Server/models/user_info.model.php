<?php

include_once './middleware/error/custom_error.php';

class UserInfo{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getUserInfoByUserId($user_id){
        try{
            $query = "SELECT * FROM user_infos WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function updateUserInfo($user_id, $info){
        try{
            $fullname = $info['fullname'];

            $phone_number = $info['phone_number'];

            $address = $info['address'];

            $avatar = $info['avatar'];

            $query = "UPDATE user_infos SET fullname = '$fullname', phone_number = '$phone_number', address = '$address', avatar = '$avatar' WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }

    }

    public function createUserInfo($user_id, $info){
        try{
            $fullname = $info['fullname'];

            $phone_number = $info['phone_number'];

            $address = $info['address'];

            $avatar = $info['avatar'];

            $query = "INSERT INTO user_infos VALUES ('$user_id', '$fullname', '$phone_number', '$address', '$avatar')";

            $result = $this->conn->prepare($query);

            $result->execute();

        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>