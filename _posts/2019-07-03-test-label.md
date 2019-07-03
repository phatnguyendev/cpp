---
layout: post
title: Giới thiệu thư viện string
categories: cpp
img: image-4.png
published: true
excerpt_separator: <!--more-->
---
Bài viết này sẽ hướng dẫn các bạn cách cài đặt và sử dụng một IDE khá quen thuộc để lập trình C++ trên Windows đó là **Visual Studio**
<!--more-->
## Tổng quan về Visual Studio
Có thể nói Visual Studio cung cấp rất đầy đủ những tính năng, tiện ích dành cho việc học tập ngay cả với phiên bản **Miễn phí (Community)**. 

Một số **ưu điểm** của Visual Studio có thể kể đến như: 
- Là một thư viện lớn và luôn luôn phát triển
- IntelliSense
- Trang tổng quan tùy chỉnh và các cửa sổ có thể gắn được
- Quy trình đơn giản và phân cấp tập tin
- Theo dõi chi tiết hiệu suất theo thời gian thực
- Công cụ tự động hóa
- Dễ dàng tái cấu trúc và chèn code
- Hỗ trợ chia màn hình
- Liệt kê danh sách lỗi, cho phép debug trong khi build ứng dụng
- Chấp nhận kiểm tra khi triển khai ứng dụng qua ClickOnce, Windows Installer hoặc Publish Wizard

Nếu các bạn mới bước vào lập trình thì sẽ có những ưu điểm hơi "thừa" đối với các bạn, nhưng nhìn chung sử dụng VS cho việc học lập trình là hoàn toàn hợp lí và các bạn sẽ có kinh nghiệm làm quen sử dụng VS để học tiếp các ngôn ngữ khác như C# chẳng hạn (và để làm các dự án lớn trong tương lai nữa).

Nhưng vì quá nhiều tính năng nên **nhược điểm** lớn nhất của VS tạo ra đối với người dùng là nặng, vâng thật sự đối với các bạn dùng máy cấu hình thấp thì VS sẽ không phải là 1 trải nghiệm tốt, khi đó để học lập trình C++ thì các bạn có thể tải Code::Block một IDE nhẹ hơn nhưng cung cấp đầy đủ tính năng cho việc học nhưng như tựa đề bài viết thì mình vẫn tiếp tục giới thiệu cho các bạn về VS vì đơn giản là mình đang dùng nó 😛

<div class="alert alert-info">
Note: việc sử dụng IDE nào để học là phụ thuộc vào cấu hình máy tính của các bạn, series này mình hướng đến người dùng VS nhiều hơn nhưng học một ngôn ngữ lập trình thì không quá quan trọng đến IDE nên bạn nào dùng 1 IDE khác vẫn có thể học được nhé và trong quá trình chạy project có gặp khó khăn gì cứ comment mình sẽ giúp các bạn trong khả năng của mình.
</div>

viết vài dòng xem cách thế nào
