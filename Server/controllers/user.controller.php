<?php

include_once './models/user.model.php';
include_once './middleware/error/custom_error.php';

use Firebase\JWT\JWT;

class UserController{

    /////////////////////////////////////////////////////////////////////////////////////
    // Login
    /////////////////////////////////////////////////////////////////////////////////////
    public static function login($username, $password){
        $temp = new User();

        $user = $temp->getUserByUsername($username);

        if($user->rowCount() > 0){
            $row = $user->fetch(PDO::FETCH_ASSOC);

            if(password_verify($password, $row['password'])){
                $key = $_SERVER['SECRET_KEY'];

                $getDate = new DateTimeImmutable();

                $row['created_time'] = $getDate->modify('+1 hour')->getTimestamp();

                $jwt = JWT::encode($row, $key, 'HS256');
                
                return json_encode([
                    "data" => [
                        'id' => $row['id'],
                        'username' => $row['username'],
                        'role' => $row['role'],
                        'token' => $jwt
                    ]
                ]);
            }
        }

        throw new BadRequestError('Invalid username or password');
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // Change Password
    /////////////////////////////////////////////////////////////////////////////////////
    public static function changePassword($username, $password){
        $temp = new User();

        $user = $temp->getUserByUsername($username);

        if($user->rowCount() > 0){
            
            $password = password_hash($password, PASSWORD_BCRYPT);

            $new_user = $temp->changePassword($username, $password);

            return json_encode(["message" => "Successfully!!!"]);
        }

        throw new NotFoundError('Username not found!!!');
    }

    /////////////////////////////////////////////////////////////////////////////////////
    // Signup
    /////////////////////////////////////////////////////////////////////////////////////
    public static function signup($username, $password){
        $temp = new User();

        $user = $temp->getUserByUsername($username);

        if($user->rowCount() == 0){
            $password = password_hash($password, PASSWORD_BCRYPT);

            $user = $temp->insertUser($username, $password);

            $new_user = $temp->getUserByUsername($username);

            $row = $new_user->fetch(PDO::FETCH_ASSOC);

            $key = $_SERVER['SECRET_KEY'];

            $jwt = JWT::encode($row, $key, 'HS256');
            
            return json_encode([
                "data" => [
                    'id' => $row['id'],
                    'username' => $row['username'],
                    'role' => $row['role'],
                    'token' => $jwt
                ]
            ]);
            
        }

        throw new BadRequestError('Username already exists!!!');
    }
}
?>