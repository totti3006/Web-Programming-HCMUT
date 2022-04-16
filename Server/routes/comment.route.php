<?php
    include_once './controllers/comment.controller.php';
    include_once './middleware/auth.php';

    $url = array_filter(explode('/', $_SERVER['REQUEST_URI']));

    $method = $_SERVER['REQUEST_METHOD'];

    session_start();

    if(array_key_exists('3', $url)){
        /////////////////////////////////////////////////////////////////////////////////////
        // Get All Comment
        /////////////////////////////////////////////////////////////////////////////////////
        if($url['3'] == 'getall' and $method == 'GET'){
            try{
                echo CommentController::getAllComment();
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
        // Create Comment
        /////////////////////////////////////////////////////////////////////////////////////
        if($method == 'POST'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('product_id', $data) and array_key_exists('content', $data)){
                    $auth = Auth::checkAuth(['user']);

                    echo CommentController::createComment($data);

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
        // Update Comment
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'PUT'){
            try{
                $data = (array) json_decode(file_get_contents('php://input'));

                if($data != [] and array_key_exists('comment_id', $data) and array_key_exists('content', $data)){
                    $auth = Auth::checkAuth(['user']);

                    echo CommentController::updateComment($data);
                    
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
        // Delete Comment
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'DELETE'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('id', $query)){
                        $auth = Auth::checkAuth(['user']);

                        $comment_id = $query['1'];
                    
                        echo CommentController::deleteComment($comment_id);
    
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
        // Get Comment By Product Id
        /////////////////////////////////////////////////////////////////////////////////////
        else if($method == 'GET'){
            try{
                $query = array_filter(explode('=', $_SERVER['REDIRECT_QUERY_STRING']));

                if(count($query) == 2){
                    if(in_array('product_id', $query)){

                        $product_id = $query['1'];
                    
                        echo CommentController::getCommentByProductId($product_id);
    
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