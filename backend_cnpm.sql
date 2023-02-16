USE backend_cnpm;

INSERT INTO `roles` (`ID_Role`, `name`, `createdAt`, `updatedAt`) 
VALUES ('1', 'admin', current_timestamp(), current_timestamp()),
	   ('2', 'user', current_timestamp(), current_timestamp());

INSERT INTO `users` (`ID_User`, `ID_Role`, `fullname`, `email`, `phone_number`, `avatar`, `address`, `password`, `createdAt`, `updatedAt`) 
VALUES ('1', '1', 'Admin', 'admin@gmail.com', '0123456789', NULL, 'Số 1 Đại Cồ Việt', '$2a$10$Pzk.F.xNkWEYVvCCCMm4CeYlslFxX8giI7tWqi4Ckl.qDidvY1qUO', current_timestamp(), current_timestamp()),
('2', '2', 'Tester', 'tester@gmail.com', '0123456789', NULL, 'Số 1 Đại Cồ Việt', '$2a$10$c.CuXtWXx/swd0CgQOcp6OocssQMtyI/dOmLBJGJmnbAgD81U05wC', current_timestamp(), current_timestamp());

INSERT INTO `categories` (`ID_Category`, `name`, `createdAt`, `updatedAt`) 
VALUES (1, 'Nến thơm', current_timestamp(), current_timestamp()),
	   (2, 'Tinh dầu', current_timestamp(), current_timestamp()),
       (3, 'Sáp thơm', current_timestamp(), current_timestamp());
       
INSERT INTO `products` (`ID_Product`, `ID_Category`, `title`, `price`, `discount`, `description`, `createdAt`, `updatedAt`) 
VALUES ('1', '1', 'NẾN THƠM PHÒNG CAO CẤP 30 HƯƠNG YÊU THÍCH NHẤT ĐƯỢC CHỌN LỌC', '200000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('2', '1', 'Nến thơm thiên nhiên trang trí phòng ấm áp, nến cốc SCANTED CANDEL 4x6cm decor không khói', '300000', '20000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('3', '1', 'Nến Thơm Bath And Body Works 1 Bấc', '200000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('4', '3', 'Sáp THƠM PHÒNG CAO CẤP', '200000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('5', '3', 'Sáp thơm phòng khử mùi Mr. Fresh 230g', '200000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('6', '3', 'Sáp thơm phòng Simidaising', '400000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('7', '2', 'Tinh dầu thiên nhiên Noison 10ml', '500000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('8', '2', 'Tinh dầu thiên nhiên Bath and body shop', '120000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('9', '2', 'Tinh dầu thiên nhiên hermes', '240000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp()),
('10', '2', 'Tinh dầu thiên nhiên Louis vuitton', '250000', '10000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau được yêu thích và đánh giá cao nhất hiện nay,với tiêu chí giúp khách hàng có những trải nghiệm tốt nhất với sở thích của chính mình.\r\nNến thơm 100% tự nhiên từ sáp đậu nành,an toàn sức khoẻ\r\nSản phẩm tinh túy chiết xuất từ các mùi hương độc đáo nhất cho bạn lựa chọn', current_timestamp(), current_timestamp());

INSERT INTO `vouchers` (`ID_Voucher`, `name`, `value`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Voucher khuyến mãi nhân dịp năm mới 2023', '20000', current_timestamp(), current_timestamp()),
	('2', 'Merry Christmas', '50000', current_timestamp(), current_timestamp()),
	('3', 'Khuyến mãi nhân dịp lễ tình nhân valentine', '10000', current_timestamp(), current_timestamp()),
	('4', 'Hè rộn vang, tha hồ mua sắm', '20000', current_timestamp(), current_timestamp());

INSERT INTO `voucher_users` (`ID_VU`, `ID_Voucher`, `ID_User`, `createdAt`, `updatedAt`) 
VALUES (1, '4', '2', current_timestamp(), current_timestamp()),
(2, '3', '2', current_timestamp(), current_timestamp()),
(3, '2', '2', current_timestamp(), current_timestamp()),
(4, '1', '2', current_timestamp(), current_timestamp());
