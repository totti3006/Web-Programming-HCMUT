-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 08, 2022 lúc 03:37 PM
-- Phiên bản máy phục vụ: 8.0.26
-- Phiên bản PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ltw_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(18, 'Apple'),
(19, 'Samsung'),
(20, 'Xiaomi'),
(21, 'Oppo'),
(22, 'Vivo'),
(23, 'Vsmart'),
(24, 'Sony'),
(25, 'Nokia'),
(26, 'Huawei'),
(31, 'Hello');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `product_id`, `content`, `created_at`, `updated_at`) VALUES
(1, 2, 15, 'Rất chất lượng', '2022-04-08 12:07:02', '2022-04-08 19:07:45'),
(2, 2, 15, 'Rất chất lượng2', '2022-04-08 12:07:02', '2022-04-08 19:07:02'),
(3, 3, 15, 'tooi chio tex thoi yhahaha', '2022-04-08 12:07:02', '2022-04-08 19:07:02'),
(5, 3, 16, 'ngon múp rụp nước', '2022-04-08 12:07:02', '2022-04-08 19:07:02'),
(7, 2, 15, 'Hi', '2022-04-08 12:53:13', '2022-04-08 19:53:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` longtext,
  `thumbnail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `thumbnail`) VALUES
(1, 'Hi', 'Hi', 'youtube.com'),
(2, 'Hi', 'blabla', 'youtube.com'),
(3, 'Hello', 'Hi', 'youtube.com'),
(4, 'Hello', 'Hi', 'youtube.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` varchar(16) NOT NULL,
  `user_id` int DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `status` int DEFAULT NULL,
  `total_money` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `note`, `order_date`, `status`, `total_money`) VALUES
('ORD624f071b911e8', 2, '', '2021-11-13 16:00:14', 0, 0),
('ORD624f1e296e8bc', 2, 'Hello', '2022-04-08 12:04:53', 0, 1000000),
('ORD624f1e68a75d6', 2, 'Hello', '2022-04-08 12:04:56', 0, 1000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int NOT NULL,
  `order_id` varchar(16) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `num` int DEFAULT NULL,
  `total_money` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`id`, `order_id`, `product_id`, `num`, `total_money`) VALUES
(3, 'ORD624f1e296e8bc', 15, 2, 500000),
(4, 'ORD624f1e68a75d6', 15, 1, 500000),
(5, 'ORD624f1e68a75d6', 16, 1, 500000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `description` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `title`, `price`, `discount`, `thumbnail`, `description`) VALUES
(15, 18, 'Điện thoại iPhone 13 Chính hãng VN/A 128GB', 21550000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/iphone-13-xanh.jpg', 'Apple ra mắt iPhone 13 Chính hãng VN/A (thế hệ 13) năm 2021 được coi là sự nâng cấp đáng giá so với iPhone 12 ra mắt năm ngoái. Điều đầu tiên nhất đó là phần tai thỏ (Notch) đã được thu hẹp lại đáng kể. Apple đã khắc phục rất tốt nhược điểm của các đời iPhone trước đó, mang đến cho iPhone 13 Chính hãng VN/A màn hình đẹp hơn rất nhiều.'),
(16, 18, 'Điện thoại iPhone 12 Pro Max Chính hãng 128GB', 25750000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/iphone-12-pro-max-den.jpg', 'iPhone 12 Pro Max Chính hãng không thay đổi trong thiết kế màn hình, vẫn là màn hình tai thỏ giống với phiên bản tiền nhiệm nhưng kích thước màn hình có thay đổi lớn hơn 1 chút. Màn hình của iPhone 12 Pro Max Chính hãng được trang bị là Super Retina XDR OLED 6.7\'\', với độ phân giải Full HD+ mang đến trải nghiệm vô cùng tốt cho người dùng.'),
(17, 18, 'iPhone 11 Pro Max 64GB', 20050000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/07/w300/iphone-11-pro-max-trang.jpg', 'Được Apple giới thiệu từ 2019, iPhone 11 Pro Max là siêu phẩm được rất nhiều người mong chờ vì có thiết kế sang trọng bậc nhất kết hợp với màn hình lớn, cấu hình mạnh mẽ. Dù đã trải qua một thời gian nhưng đến nay, iPhone 11 Pro Max cũ vẫn luôn là sự lựa chọn hàng đầu khi nghĩ đến một chiếc Flagship cũ. '),
(18, 19, 'Điện thoại Samsung Galaxy M22', 4300000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/galaxy-m22-den.jpg', 'Samsung Galaxy M22 tiếp tục là một mẫu điện thoại tầm trung thuộc dòng Galaxy M của nhà Samsung. Điện thoại Samsung Galaxy M22 sở hữu màn hình lớn, cấu hình mạnh trong phân khúc.'),
(19, 19, 'Điện thoại Samsung Galaxy M12', 3650000, NULL, 'https://cdn.mobilecity.vn/mobilecity-vn/images/2021/10/w300/samsung-galaxy-m12-den.jpg', 'Smartphone thuộc dòng Galaxy M vốn được ưa chuộng bởi hiệu năng vượt trội và cấu hình ấn tượng trong phân khúc giá rẻ. Chiếc smartphone này được nâng cấp mạnh mẽ không chỉ sở hữu cấu hình ấn tượng với vi xử lý 8 nhân kết hợp tần số quét 90Hz đầu tiên trong phân khúc, mà Samsung Galaxy M12 còn có dung lượng pin bền bỉ 5000mAh có hỗ trợ sạc siêu tốc và bộ 4 camera 48MP đỉnh cao.'),
(23, 18, 'Hello', 10000, 1, 'youtube.com', 'Hello');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(2, 'thinhnguyen', '$2y$10$B74HCWBw90vM1g.JFjSrCezxxsbg2L0BEPhCjagRZq8CwG7HuvQJW', 'user'),
(3, 'thinhnguyenndcs', '$2y$10$VQnNAVv5ZBnwmPh4AUXofO/YCMe/qC6.IE11G/QlL0ffE1fyQpL9O', 'user'),
(4, 'thinhnguyenhls', '$2y$10$NDmYtZYFx0auBPtfcWa6z./SeoDlfzTTar2N9M7GCSJ4unB7QiT82', 'user'),
(5, 'admin', '$2y$10$B74HCWBw90vM1g.JFjSrCezxxsbg2L0BEPhCjagRZq8CwG7HuvQJW', 'admin'),
(6, 'user1', '$2y$10$21Xmxynpev5aXIj0UqjsEO14pxVUahMsH1LWif/wez42Ia0xZ5Zl2', 'user'),
(7, 'user2', '$2y$10$YQON7Ubb.HvFEq6.hVe58ODayBg6O2kNXDbs6teaRtZk6zPlF1H2C', 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_infos`
--

CREATE TABLE `user_infos` (
  `user_id` int NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `user_infos`
--

INSERT INTO `user_infos` (`user_id`, `fullname`, `phone_number`, `address`, `avatar`) VALUES
(4, 'Thinhj', '123456789', 'HCMUT', 'youtube.com'),
(5, 'Thinh Nguyen', '0123456789', 'HCM', 'https://i.pinimg.com/564x/2b/12/d2/2b12d24004fa07adff784b4829e6c0ac.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_ibfk_1` (`category_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_infos`
--
ALTER TABLE `user_infos`
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Các ràng buộc cho bảng `user_infos`
--
ALTER TABLE `user_infos`
  ADD CONSTRAINT `user_infos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
