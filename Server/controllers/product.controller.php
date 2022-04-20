<?php
include_once './models/product.model.php';
include_once './middleware/error/custom_error.php';

class ProductController{
    //////////////////////////////////////////////////////////////
    //Get All Product
    //////////////////////////////////////////////////////////////
    public static function getAllProduct(){
        $temp = new Product();

        $products = $temp->getAllProduct();

        if($products->rowCount() > 0){
            $rows = $products->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Products not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Create Product
    //////////////////////////////////////////////////////////////
    public static function createProduct($info){
        $temp = new Product();

        $new_product = $temp->createProduct($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Update Product
    //////////////////////////////////////////////////////////////
    public static function updateProduct($info){
        $temp = new Product();

        $product = $temp->getProductById($info['product_id']);

        if($product->rowCount() == 0){
            throw new BadRequestError('Product has not been created!!!');
        }

        $new_product = $temp->updateProduct($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
    //////////////////////////////////////////////////////////////
    //Delete Product
    //////////////////////////////////////////////////////////////
    public static function deleteProduct($product_id){
        $temp = new Product();

        $product = $temp->getProductById($product_id);

        if($product->rowCount() == 0){
            throw new BadRequestError('Product has not been created!!!');
        }

        $new_product = $temp->deleteProduct($product_id);

        return json_encode(["message" => "Successfully!!!"]);
    }
}
?>