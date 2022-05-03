<?php

include_once './models/news.model.php';
include_once './middleware/error/custom_error.php';

class NewsController{
    //////////////////////////////////////////////////////////////
    //Get All News
    //////////////////////////////////////////////////////////////
    public static function getAllNews(){
        $temp = new News();

        $new = $temp->getAllNews();

        if($new->rowCount() > 0){
            $rows = $new->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("News not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Get News By Id
    //////////////////////////////////////////////////////////////
    public static function getNewsById($news_id){
        $temp = new News();

        $new = $temp->getNewsById($news_id);

        if($new->rowCount() > 0){
            $row = $new->fetch(PDO::FETCH_ASSOC);

            return json_encode(["data" => $row]);
        }

        throw new NotFoundError("News not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Create News
    //////////////////////////////////////////////////////////////
    public static function createNews($info){
        $temp = new News();

        $new_news = $temp->createNews($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Update News
    //////////////////////////////////////////////////////////////
    public static function updateNews($info){
        $temp = new News();

        $new = $temp->getNewsById($info['news_id']);

        if($new->rowCount() == 0){
            throw new BadRequestError('News has not been created!!!');
        }

        $new_news = $temp->updateNews($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Delete News
    //////////////////////////////////////////////////////////////
    public static function deleteNews($news_id){
        $temp = new News();

        $new = $temp->getNewsById($news_id);

        if($new->rowCount() == 0){
            throw new BadRequestError('News has not been created!!!');
        }

        $new_news = $temp->deleteNews($news_id);

        return json_encode(["message" => "Successfully!!!"]);
    }
}

?>