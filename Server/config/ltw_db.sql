-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 19, 2022 lúc 05:08 PM
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
(1,'OPPO Reno8 Lite ra mắt','OPPO mới đây đã giới thiệu chiếc Reno8 Lite tại thị trường Châu Âu. Mặc dù là sản phẩm thuộc dòng Reno8 nhưng chiếc Reno8 Lite này lại không có điểm chung gì với dòng Reno8 mới ra mắt cách đây không lâu tại thị trường Trung Quốc, trái lại đây lại chỉ là một phiên bản đổi tên của chiếc Reno7 Z và OPPO F21 Pro.',
'https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/6/4/gsmarena100-1654340619380-165434061969224042867.jpg'),
(2,'OPPO ra mắt smartphone 5G giá rẻ',
'OPPO mới đây đã giới thiệu một chiếc smartphone 5G giá rẻ thuộc dòng A series có tên OPPO A77 5G tại thị trường Thái Lan. Chiếc máy này có thiết kế viền vuông khá trendy, màu sắc trẻ trung, có camera 48MP và trang bị viên pin 5000mAh.\r\n\r\nOPPO A77 5G trang bị màn hình 6.56 inch, độ phân giả HD+, sử dụng tấm nền LCD IPS với thiết kế \"giọt nước\". Mặc dù có độ phân giải HD+ nhưng màn hình này lại có tần số quét  90Hz và có độ sáng 600 nits. Camera selfie 16MP đặt ở giữa.',
'https://cdn.tgdd.vn/Files/2022/03/16/1420586/oppo3410-edit_1280x720-800-resize.jpg'),
(3,'iPhone 13 Trung Quốc giá chỉ 1.7 triệu đồng',
'Từ các hình ảnh render, chúng ta có thể LeTV Y1 Pro sở hữu một ngoại hình cực kỳ giống iPhone 13 khi có khung viền vuông, cụm camera kép đặt chéo và có cả \"tai thỏ\" ở mặt trước. Tất nhiên do có giá thành rẻ nên khung máy và mặt lưng chỉ được hoàn thiện từ nhựa mà thôi. Máy có 2 màu trắng và xanh.\r\n\r\nLeTV Y1 Pro trang bị màn hình 6.54 inch LCD với độ phân giải HD+ ở mặt trước. Màn hình này có viền mỏng 2 bên nhưng dày hơn ở cạnh dưới, sử dụng thiết kế \"tai thỏ\" với camera selfie 5MP, tất nhiên sẽ không có cụm camera TrueDepth như iPhone.',
'https://icdn.dantri.com.vn/thumb_w/770/2022/06/03/letv-y1-pro-1654256247258.jpg'),
(4,'vivo T2x ra mắt','vivo mới đây đã giới thiệu thế hệ smartphone mới thuộc dòng T series có tên vivo T2x. Đây là mẫu máy tầm trung tiếp theo của vivo kế nhiệm cho dòng T1 và T1x ra mắt cách đây vài tháng. vivo T2x trang bị một thiết kế ổn, hiệu năng khá với chip Dimensity 1300, một con chip mới ra mắt của MediaTek.',
'https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/5/30/gsmarena003-1653898231860-16538982325321014686612.jpg'),
(5,'Galaxy M13 ra mắt',
'Galaxy M13 có 3 tùy chọn màu sắc là xanh đậm, đồng cam và xanh nhạt. Do là dòng máy giá rẻ nên chỉ được hoàn thiện từ nhựa. Mặt lưng nổi bật với hệ thống 3 camera chính gồm camera góc rộng 50MP, góc siêu rộng 5MP và đo chiều sâu 2MP.\r\n\r\nỞ mặt trước, Galaxy M13 trang bị màn hình 6.6 inch sử dụng tấm nền TFT, độ phân giải FHD+ và có thiết kế \"giọt nước\" Infinity-V. Màn hình này có tần số quét 60Hz cơ bản và có camera selfie 8MP.',
'https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/5/27/010galaxym13orangecopperfrontback-1653630213077-1653630213350463176407.jpg'),
(6,'realme GT Neo3 Naruto Edition ra mắt',
'Là một phiên bản đặc biệt nên realme thiết kế bao bì của máy là một hộp đựng vuộn tròn bên trong chứa điện thoại và các phụ kiện khác. Toàn bộ thân máy, ốp lưng, củ sạc, cáp sạc và pin dự phòng đều được tùy chỉnh theo tông màu chủ đạo đen và cam của nhân vật Naruto. Máy đi kèm một hình poster Naruto khổ nhỏ, bên trong cài đặt một bộ giao diện chủ đề độc quyền với hình nền, nhạc chuông và các biểu tượng riêng của bộ phim.',
            "thumbnail": "https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/5/26/001ucsatgy1h2lk1bw3zzj61900u079m02-1653552789361-1653552789472283817772.jpg"
),
(7,
"Redmi Note 11T Pro/Pro+ ra mắt",
"Redmi Note 11T Pro và Pro+ có 3 tuỳ chọn màu sắc là abajc, xanh và đen. Ngoài ra bản Pro+ còn có thêm một tuỳ chọn Astro Boy giới hạn với hình của nhân vật Astro Boy in ở mặt lưng.\r\n\r\nGiá bán khởi điểm của Redmi Note 11T Pro và Pro+ tại thị trường Trung Quốc lần lượt từ 1699 tệ và 1999 tệ, tương đương 5.9 triệu đồng và 6.9 triệu đồng. Phiên bản giới hạn Astro Boy có giá 2499 tệ, tương đương 8.7 triệu đồng.",
"https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/5/24/006ruxyjly1h2jsyro8e3j31900u0jvo-1653405068066-1653405068758121083931.jpg"
),
(8,"OPPO Reno8 series ra mắt với thiết kế mới",
"Sau nhiều thông tin rò rỉ, OPPO ngày hôm nay (23/5) đã chính thức giới thiệu dòng Reno8 hoàn toàn mới bao gồm 3 phiên bản: Reno8, Reno8 Pro và Reno8 Pro+. Thực chất cả 3 phiên bản đều có ngôn ngữ thiết kế giống nhau, khác biệt chỉ tới từ phần cứng bên trong, kích cỡ màn hình và camera.",
"https://genk.mediacdn.vn/thumb_w/640/139269124445442048/2022/5/23/6bac2f58gy1h2ipeprjcej215o0rsq71-1653318266216-1653318266497859848416.jpg"
);

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
(24, 18, 'Hello', 10000, NULL, 'youtube.com', 'Hello'),
(25, 18, 'Hello', 10000, 100, 'youtube.com', 'Hello');

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
(7, 'user2', '$2y$10$YQON7Ubb.HvFEq6.hVe58ODayBg6O2kNXDbs6teaRtZk6zPlF1H2C', 'user'),
(8, 'user3', '$2y$10$ZTNvk.BwMJxr7YpeK1R2wepW2b3g4qaxkNsB0npwdNCf572EWl1SG', 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_infos`
--

CREATE TABLE `user_infos` (
  `user_id` int NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dateofbirth` date NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `user_infos`
--

INSERT INTO `user_infos` (`user_id`, `fullname`, `phone_number`, `address`, `avatar`, `gender`, `dateofbirth`, `email`) VALUES
(3, 'Thinh', '123456789', 'HCMUT', 'youtube.com', 'Nam', '2001-01-01', 'thinh@gmail.com');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
