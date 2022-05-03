<?php
include_once './models/order.model.php';
include_once './middleware/error/custom_error.php';

class OrderController{
    //////////////////////////////////////////////////////////////
    //Get All Order By Admin
    //////////////////////////////////////////////////////////////
    public static function getAllOrders(){
        $temp = new Order();

        $orders = $temp->getAllOrders();

        if($orders->rowCount() > 0){
            $rows = $orders->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Orders not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Get All Order By User
    //////////////////////////////////////////////////////////////
    public static function getAllOrdersByUser(){
        $temp = new Order();

        $orders = $temp->getAllOrdersByUser();

        if($orders->rowCount() > 0){
            $rows = $orders->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Orders not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Get Order By Order ID
    //////////////////////////////////////////////////////////////
    public static function getOrderById($orderId){
        $temp = new Order();

        $orders = $temp->getOrderById($orderId);

        if($orders->rowCount() > 0){
            $rows = $orders->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Order not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Get Order Detail By Order ID
    //////////////////////////////////////////////////////////////
    public static function getDetailByOrderId($orderId){
        $temp = new Order();

        $orders = $temp->getDetailByOrderId($orderId);

        if($orders->rowCount() > 0){
            $rows = $orders->fetchAll(PDO::FETCH_ASSOC);

            return json_encode(["data" => $rows]);
        }

        throw new NotFoundError("Order not found!!!");
    }
    //////////////////////////////////////////////////////////////
    //Create Order
    //////////////////////////////////////////////////////////////
    public static function createOrder($info){
        $temp = new Order();

        $new_order = $temp->createOrder($info);

        return json_encode(["message" => "Successfully!!!"]);
    }
}
?>