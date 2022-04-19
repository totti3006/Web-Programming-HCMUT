<?php
include_once './models/category.model.php';
include_once './middleware/error/custom_error.php';

class CategoryController{
    //////////////////////////////////////////////////////////////
    //Get All Category
    //////////////////////////////////////////////////////////////
    public static function getAllCategory(){
        $temp = new Category();

        $categories = $temp->getAllCategory();

        if($categories->rowCount() > 0){
            $rows = $categories->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Categories not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Create Category
    //////////////////////////////////////////////////////////////
    public static function createCategory($name){
        $temp = new Category();

        $category = $temp->getCategoryByName($name);

        if($category->rowCount() > 0){
            throw new BadRequestError('Category already exists!!!');
        }

        $new_category = $temp->createCategory($name);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Update Category
    //////////////////////////////////////////////////////////////
    public static function updateCategory($info){
        $temp = new Category();

        $category = $temp->getCategoryById($info['category_id']);

        if($category->rowCount() == 0){
            throw new BadRequestError('Category has not been created!!!');
        }

        $new_category = $temp->updateCategory($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Delete Category
    //////////////////////////////////////////////////////////////
    public static function deleteCategory($category_id){
        $temp = new Category();

        $category = $temp->getCategoryById($category_id);

        if($category->rowCount() == 0){
            throw new BadRequestError('Category has not been created!!!');
        }

        $new_category = $temp->deleteCategory($category_id);

        return json_encode(["message" => "Successfully!!!"]);
    }
}
?>