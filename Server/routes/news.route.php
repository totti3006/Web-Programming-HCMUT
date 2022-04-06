<?php
    include_once './controllers/news.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get All News
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo NewsController::getAllNews();
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
        // Get News By Id
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'GET'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $news_id = $query['1'];
                    
                        echo NewsController::getNewsById($news_id);
    
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
        /////////////////////////////////////////////////////////////////////////////////////
        // Create News
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('title', $data) and array_key_exists('content', $data) and array_key_exists('thumbnail', $data)){
                    
                    $auth = Auth::checkAuth(['admin']);

                    echo NewsController::createNews($data);
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
        // Update News
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('news_id', $data) and array_key_exists('title', $data) and array_key_exists('content', $data) and array_key_exists('thumbnail', $data)){
                    
                    $auth = Auth::checkAuth(['admin']);

                    echo NewsController::updateNews($data);
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
        // Delete News
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'DELETE'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $auth = Auth::checkAuth(['admin']);

                        $news_id = $query['1'];
                    
                        echo NewsController::deleteNews($news_id);
    
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

    session_destroy();

?>