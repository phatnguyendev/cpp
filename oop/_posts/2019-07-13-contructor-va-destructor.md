---
published: true
layout: post
title: Constructor và Destructor
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Việc thực hiện các công việc như : khởi tạo giá trị các thuộc tính, cấp phát vùng nhớ cho con trỏ, mở tệp tin hay thu hồi vùng nhớ,... đều được constructor và destructor thực hiện trong OOP<!--more-->
## Constructor
Hàm thiết lập (constructor) là 1 phương thức đặc biệt dùng để khởi tạo thể hiện (instance) của lớp.

Công dụng của constructor là khởi tạo các giá trị mặc định cho các thuộc tính hay các bước thiết lập cần thiết cho lớp (mở tệp, kết nối cơ sở dữ liệu,...).

Constructor có các quy tắc như sau:
- Phạm vi truy xuất phải là public
- Không có kiểu trả về (không phải void, cứ để trống)
- Có tên trùng với tên lớp
