<?php
include_once './models/comment.model.php';
include_once './middleware/error/custom_error.php';

class CommentController{
    //////////////////////////////////////////////////////////////
    //Get All Comment
    //////////////////////////////////////////////////////////////
    public static function getAllComment(){
        $temp = new Comment();

        $comments = $temp->getAllComments();

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Get Comment By Product Id
    //////////////////////////////////////////////////////////////
    public static function getCommentByProductId($product_id){
        $temp = new Comment();

        $comments = $temp->getCommentByProductId($product_id);

        if($comments->rowCount() > 0){
            $rows = $comments->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Comments not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Create Comment
    //////////////////////////////////////////////////////////////
    public static function createComment($info){
        $temp = new Comment();

        $new_comment = $temp->createComment($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Update Comment
    //////////////////////////////////////////////////////////////
    public static function updateComment($info){
        $temp = new Comment();

        $comment = $temp->getCommentById($info['comment_id']);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment has not been created!!!');
        }

        $new_comment = $temp->updateComment($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Delete Comment
    //////////////////////////////////////////////////////////////
    public static function deleteComment($comment_id){
        $temp = new Comment();

        $comment = $temp->getCommentById($comment_id);

        if($comment->rowCount() == 0){
            throw new BadRequestError('Comment has not been created!!!');
        }

        $new_comment = $temp->deleteComment($comment_id);

        return json_encode(["message" => "Successfully!!!"]);
    }
}
?>