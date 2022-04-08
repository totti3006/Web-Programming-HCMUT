<?php
    include_once './controllers/order.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get All Order
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                $auth = Auth::checkAuth(['user','admin']);

                if($_SESSION['role'] == 'admin'){
                    echo OrderController::getAllOrders();
                    http_response_code(200);
                }
                else{
                    echo OrderController::getAllOrdersByUser();
                    http_response_code(200);
                }
            }
            catch(CustomError $e){
                echo json_encode(['message' => $e->getMessage()]);
                http_response_code($e->getStatusCode());
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////
        // Get Detail Order
        /////////////////////////////////////////////////////////////////////////////////////
        else if($url['3'] == 'getdetail' and $method == 'GET'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('order_id', $data)){
                    $auth = Auth::checkAuth(['user','admin']);

                    echo OrderController::getDetailByOrderId($data['order_id']);

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
        /////////////////////////////////////////////////////////////////////////////////////
        // Create Order
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('note', $data) and array_key_exists('status', $data) and array_key_exists('total_money', $data) and array_key_exists('products', $data) and count($data['products']) > 0){ 
                    $auth = Auth::checkAuth(['user']);

                    echo OrderController::createOrder($data);

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
        // Get Order By ID
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'GET'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('order_id', $data)){
                    $auth = Auth::checkAuth(['user','admin']);

                    echo OrderController::getOrderById($data['order_id']);

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
?>