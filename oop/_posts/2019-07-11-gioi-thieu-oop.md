---
published: true
layout: post
title: Giới thiệu OOP
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Lập trình hướng đối tượng (Objiect-oriented Programming) là phương pháp lập trình mà mọi dân lập trình đều phải biết, trong các trường đại học đây là 1 trong những môn nền tảng của ngành CNTT. OOP được đặc trưng bởi 4 tính chất (cần nhớ):
- Trừu tượng (Abstraction)
- Đa hình (Polymorphism)
- Kế thừa (Inheritance)
- Đóng gói (Encapsulation)

Trong series này chúng ta sẽ cùng đi tìm hiểu chi tiết và 4 tính chất trên và cách áp dụng OOP (để làm game). Nào triển thôi!
## Mở đầu
Để lập trình hiệu quả ngoài việc lựa chọn ngôn ngữ lập trình, các bạn cần phải xác định được phương pháp lập trình hiệu quả. Một số ngôn ngữ lai (hybrid) hỗ trợ nhiều phương pháp lập trình khác nhau, cùng điểm qua 1 số phương pháp lập trình như:
- Lập trình tuần tự (tuyến tính)
- Lập trình có cấu trúc (thủ tục)
- Lập trình hướng đối tượng
- Lập trình hướng chức năng
- Lập trình Logic
Sau khi học xong khóa C++ cơ bản, các bạn đã trả qua 1 số phương pháp sau:
- **Lập trình tuần tự:** phương pháp lập trình sơ khai nhất, chúng ta sẽ viết 1 loạt các câu lệnh và chương trình sẽ chạy tuần tự.
- **Lập trình có cấu trúc:** kết hợp việc lập trình tuần tự với các cấu trúc điều khiển (rẽ nhánh, vòng lặp...) giúp việc lập trình được tối ưu hơn so với lập trình tuần tự.
- **Lập trình hướng chức năng:** lúc này chúng ta sẽ kết hợp thêm việc chia chương trình thành các chương trình con, mỗi chương trình con sẽ có logic và giá trị trả về riêng. Giúp việc lập trình sáng sủa, dễ tái sử dụng.
- **Lập trình hướng đối tượng:** sẽ là chủ đề chính của series này, hỗ trợ công nghệ hướng đối tượng. Đơn giản chúng ta sẽ "đối tượng hóa" mọi thứ chúng ta nghĩ được, sau đó chúng ta sẽ code dựa trên những đối tượng này.

## Lập trình hướng đối tượng (OOP)
