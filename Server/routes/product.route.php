<?php
    include_once './controllers/product.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get All Product
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo ProductController::getAllProduct();
                http_response_code(200);
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
        // Create Product
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('category_id', $data) and array_key_exists('title', $data) and array_key_exists('price', $data) and array_key_exists('thumbnail', $data) and array_key_exists('description', $data)){ 
                    $auth = Auth::checkAuth(['admin']);

                    echo ProductController::createProduct($data);

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
        // Update Product
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('product_id', $data)){
                    $auth = Auth::checkAuth(['admin']);

                    echo ProductController::updateProduct($data);
                    
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
        // Delete Product
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'DELETE'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $auth = Auth::checkAuth(['admin']);

                        $product_id = $query['1'];
                    
                        echo ProductController::deleteProduct($product_id);
    
                        http_response_code(200);
                    }
                    else{
                        echo json_encode(['message' => 'Invalid input']);
                        http_response_code(400);
                    }
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
    session_destroy()
?>