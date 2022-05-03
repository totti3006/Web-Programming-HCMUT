<?php

include_once './models/user_info.model.php';
include_once './middleware/error/custom_error.php';

class UserInfoController{
    //////////////////////////////////////////////////////////////
    //Get All User Info
    //////////////////////////////////////////////////////////////
    public static function getAllUserInfos(){
        $temp = new UserInfo();

        $user_info = $temp->getAllUserInfos();

        if($user_info->rowCount() > 0){
            $rows = $user_info->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("User info not found!!!");
    }

    //////////////////////////////////////////////////////////////
    //Get User Info By User
    //////////////////////////////////////////////////////////////
    public static function getUserInfo($user_id){
        $temp = new UserInfo();

        $user_info = $temp->getUserInfoByUserId($user_id);

        if($user_info->rowCount() > 0){
            $row = $user_info->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("User info not found!!!");
    }

    //////////////////////////////////////////////////////////////
    //Update User Info By User
    //////////////////////////////////////////////////////////////
    public static function updateUserInfo($user_id, $info){
        $temp = new UserInfo();

        $user_info = $temp->getUserInfoByUserId($user_id);

        if($user_info->rowCount() == 0){
            throw new BadRequestError('User info has not been created!!!');
        }

        $new_user_info = $temp->updateUserInfo($user_id, $info);

        return json_encode(["message" => "Successfully!!!"]);

    }

    //////////////////////////////////////////////////////////////
    //Create User Info By User
    //////////////////////////////////////////////////////////////
    public static function createUserInfo($user_id, $info){
        $temp = new UserInfo();

        $user_info = $temp->getUserInfoByUserId($user_id);

        if($user_info->rowCount() > 0){
            throw new BadRequestError('User info already exists!!!');
        }

        $user_info = $temp->createUserInfo($user_id, $info);

        return json_encode(["message" => "Successfully!!!"]);
    }
}

?>