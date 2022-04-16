<?php
include_once './config/db.php';

class Order{
    private $conn;

    public function __construct(){
        // Connect database
        $db = new db();
        $conn = $db->connect();

        $this->conn = $conn;
    }

    public function getAllOrders(){
        try{
            $query = "SELECT * FROM orders";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getAllOrdersByUser(){
        try{
            $user_id = $_SESSION['user_id'];

            $query = "SELECT * FROM orders WHERE user_id = '$user_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getOrderById($order_id){
        try{
            $query = "SELECT * FROM orders WHERE id = '$order_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function getDetailByOrderId($order_id){
        try{
            $query = "SELECT * FROM order_detail WHERE order_id = '$order_id'";

            $result = $this->conn->prepare($query);

            $result->execute();

            return $result;
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }

    public function createOrder($info){
        try{
            $id = (string) uniqid("ORD");

            $user_id = $_SESSION['user_id'];

            $note = $info['note'];

            date_default_timezone_set("Asia/Ho_Chi_Minh");

            $order_date = (string) date('Y-m-d h:m:s');

            $status = $info['status'];

            $total_money = $info['total_money'];

            $query = "INSERT INTO  orders (id, user_id, note, order_date, status, total_money) VALUES ('$id', '$user_id', '$note','$order_date', '$status', '$total_money')";
            
            $result = $this->conn->prepare($query);

            $result->execute();

            $query = "INSERT INTO order_detail (order_id, product_id, num, total_money) VALUES (:order_id, :product_id, :num, :total_money)";

            $result = $this->conn->prepare($query);

            $result->bindParam(':order_id', $order_id);

            $result->bindParam(':product_id', $product_id);

            $result->bindParam(':num', $num);

            $result->bindParam(':total_money', $total_money);

            $products = $info['products'];

            foreach($products as $key => $product){
                $product = (array) $product;
                $order_id = $id;
                $product_id = $product['product_id'];
                $num = $product['num'];
                $total_money = $product['total_money'];
                $result->execute();
            }
        }
        catch (PDOException $e){
            throw new InternalServerError('Server Error!!!');
        }
    }
}
?>