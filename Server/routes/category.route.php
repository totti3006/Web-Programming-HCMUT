<?php
    include_once './controllers/category.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get All Category
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo CategoryController::getAllCategory();
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
        // Create Category
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('name', $data)){ 
                    $auth = Auth::checkAuth(['admin']);

                    echo CategoryController::createCategory($data['name']);

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
        // Update Category
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('category_id', $data)){
                    $auth = Auth::checkAuth(['admin']);

                    echo CategoryController::updateCategory($data);
                    
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
        // Delete Category
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'DELETE'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $auth = Auth::checkAuth(['admin']);

                        $category_id = $query['1'];
                    
                        echo CategoryController::deleteCategory($category_id);
    
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