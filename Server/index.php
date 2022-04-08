<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With, Authorization, X-Auth-Token');

    include_once './vendor/autoload.php';
        
    $dotenv = Dotenv\Dotenv::createMutable(__DIR__);
    $dotenv->load();

    include_once './config/db.php';

    if(isset($_SERVER['REDIRECT_URL'])){
        $url = array_filter(explode('/', $_SERVER['REDIRECT_URL']));

        if(array_key_exists('2', $url)){
            if($url['2'] == 'users'){
                include './routes/user.route.php';
            }
            else if($url['2'] == 'user'){
                include './routes/user_info.route.php';
            }
            else if($url['2'] == 'news'){
                include './routes/news.route.php';
            }
            else if($url['2'] == 'category'){
                include './routes/category.route.php';
            }
            else if($url['2'] == 'product'){
                include './routes/product.route.php';
            }
            else if($url['2'] == 'order'){
                include './routes/order.route.php';
            }
            else if($url['2'] == 'comment'){
                include './routes/comment.route.php';
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
    }
    else{
        http_response_code(404);
        echo json_encode(["message" => 'Not found API!!!']);
    }
?>