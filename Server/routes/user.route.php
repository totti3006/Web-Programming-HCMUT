<?php

    include_once './controllers/user.controller.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){ 
        /////////////////////////////////////////////////////////////////////////////////////
        // Login
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'login' and $method == 'POST'){
            try{
                $data = json_decode(file_get_contents('php://input'));

                if($data and $data->username and $data->password){

                    echo UserController::login($data->username, $data->password);

                    http_response_code(200);
                }
                else{
                    echo json_encode(["message" => 'Login failed!!!']);
                    http_response_code(400);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                
                http_response_code($e->getStatusCode());
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////
        // Signup
        /////////////////////////////////////////////////////////////////////////////////////
        else if($url['3'] == 'signup' and $method == 'POST'){
            try{
                $data = json_decode(file_get_contents('php://input'));

                if($data and $data->username and $data->password){
                    echo UserController::signup($data->username, $data->password);
                    
                    http_response_code(200);
                }
                else{
                    echo json_encode(["message" => 'Signup failed!!!']);

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
    session_destroy()
?>