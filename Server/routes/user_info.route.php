<?php
    include_once './controllers/user_info.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get User Info By User
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                $auth = Auth::checkAuth(['admin']);

                echo UserInfoController::getAllUserInfos();
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
    }
    else if(!array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get User Info By User
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'GET'){
            try{
                $auth = Auth::checkAuth(['user', 'admin']);

                echo UserInfoController::getUserInfo($_SESSION['user_id']);
                http_response_code(200);
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////
        // Update User Info By User
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));
                
                if($data != [] and array_key_exists('fullname', $data) and array_key_exists('phone_number', $data) and array_key_exists('address', $data) and array_key_exists('avatar', $data) and array_key_exists('gender', $data) and array_key_exists('dateofbirth', $data) and array_key_exists('email', $data)){

                    $auth = Auth::checkAuth(['user']);

                    echo UserInfoController::updateUserInfo($_SESSION['user_id'], $data);
                    http_response_code(200);
                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////
        // Create User Info By User
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('fullname', $data) and array_key_exists('phone_number', $data) and array_key_exists('address', $data) and array_key_exists('avatar', $data) and array_key_exists('gender', $data) and array_key_exists('dateofbirth', $data) and array_key_exists('email', $data)){
                    
                    $auth = Auth::checkAuth(['user']);

                    echo UserInfoController::createUserInfo($_SESSION['user_id'], $data);
                    http_response_code(200);

                }
                else{
                    echo json_encode(['message' => 'Invalid input']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        else{
            http_response_code(404);
            echo json_encode(["message" => 'Not found API!!!']);
        }
    }
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Not found API!!!']);
    }

    session_destroy();

?>