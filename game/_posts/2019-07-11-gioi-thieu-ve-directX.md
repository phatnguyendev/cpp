---
published: true
layout: post
title: Giới thiệu về DirectX
categories: game
img: bai24.png
excerpt_separator: <!--more-->
---
Trong khóa Game này, chúng ta sẽ tìm hiểu về DirectX, các nền tảng API mà DirectX hỗ trợ, game Ninja Gaiden, cách lập trình game Ninja Gaiden với công cụ hỗ trợ là Visual Studio 2015 và DirectX9 với ngôn ngữ C++.
<!--more-->

Link game: [Ninja Gaiden (NES) - No Death Walkthrough](https://www.youtube.com/watch?v=ueeKMQSS4bw&feature=youtu.be&fbclid=IwAR0reolyKRosEbMsZcp85G4tFYrQSbl6LlS1R7hrMBqf5PyeRelqMRmgN8E)

## Mục tiêu
- Vận dụng được nền tảng DirectX trong phát triển game.
- Tạo được game Ninja Gaiden tương tự game Ninja Gaiden NES stage 3-1, 3-2, 3-3. 

## Yêu cầu:
- Đã học xong C++ cơ bản.
- Đã học xong lập trình hướng đối tượng (OOP).
- Cài đặt Visual Studio 2015

Nếu chưa:
- Bạn có thể học C++ cơ bản tại đây: [C++ cơ bản](https://tuitucode.github.io/cpp/)
- Bạn có thể học OOP tại đây: [OOP](https://tuitucode.github.io/cpp/oop/)
- Hướng dẫn cài đặt Visual Studio 2015: [Cài đặt Visual Studio 2015](https://tuitucode.github.io/cpp/cai-dat-visual-studio-2015/)

## Tổng quan về DirectX:
DirectX về thực chất là một hệ thống các giao diện lập trình ứng dụng (API) phục vụ cho quá trình phát triển các game trên nền tảng hệ điều hành Windows. Bản chất nhiệm vụ chính của nó là cung cấp một giao diện (interface) cho phép ứng dụng có thể truy cập trực tiếp đến các tính năng cấp thấp (low – level) của nhiều loại phần cứng – trong đó có card đồ họa – từ đó xây dựng lên một thư viện các hàm thống nhất và ổn định dành cho các game không dựa vào nền tảng Windows API hoặc GDI. Do cho phép ứng dụng truy cập trực tiếp vào phần cứng nên DirectX nhanh hơn đáng kể so với GDI và đây là lí do khiến DirectX rất phù hợp cho game. Hiện nay, phiên bản mới nhất là DirectX 12.
### Các thành phần chính của DirectX
- **DirectX Graphic**: đảm nhiệm tất cả chức năng kết xuất đồ họa của hệ thống. Nó cung cấp các hàm API để người dùng quản lý quá trình vẽ 2D cũng như 3D. Ngoài ra nó cũng hỗ trợ cả quá trình khởi tạo và xác lập độ phân giải cho game của bạn
- **Direct Input**: tất cả những gì người dùng nhập vào sẽ được quản lý bởi các hàm API trong thành phần này, bao gồm khả năng hỗ trợ các thiết bị như bàn phím, chuột, joystick, gamepad…
- **Direct Play**: cung cấp giao diện cho các trò chơi mạng hỗ trợ cho cơ chế lobby (nơi game tập trung lại, chat, trao đổi với nhau trước khi vào chơi game).
- **Dirext Sound**: giúp bạn chèn thêm các hiệu ứng âm thanh hoặc nhạc nền, cho phép tải và chơi một hoặc nhiều file nhạc dạng WAV cũng như toàn bộ khả năng điều khiển quá trình chơi nhạc đó. Tóm lại, Direct Sound sẽ "bao sân" toàn bộ nhu cầu về âm nhạc và âm thanh trên PC.    
- **DirectSetup**: Sau khi game của bạn đã hoàn thành, bạn sẽ muốn phát hành. DirectSetup cung cấp cho bạn những chức năng giúp ứng dụng có thể tự động cài đặt những phiên bản DirectX mới nhất lên hệ thống của người sử dụng. 

## Cài đặt
Nếu trong máy của bạn đã có sẵn cái folder SDK Jun10 như hình bên dưới thì ko cần quan tâm đến phần này.

![](https://1.bp.blogspot.com/-QI0jeBcQeD4/XSdPCz_tKlI/AAAAAAAAEB0/muKMMjM-1WIgdu_sMLEc3avFDheaoml_ACLcBGAs/s1600/sdk.jpg)

Nếu máy bạn chưa có, hãy truy cập link bên dưới để download:
[Download DirectSDK](https://www.microsoft.com/en-us/download/details.aspx?id=6812)
## Tài liệu tham khảo
1.Tài liệu Nhập môn phát triển game – Trường ĐH CNTT – ĐHQG TPHCM
2.[https://nesmaps.com/maps/NinjaGaiden/NinjaGaiden.html](https://nesmaps.com/maps/NinjaGaiden/NinjaGaiden.html)
3.[http://gameprogrammingpatterns.com/spatial-partition.html](http://gameprogrammingpatterns.com/spatial-partition.html)

## Tổng kết
Vậy là mình đã tìm hiểu qua những điều cần thiết và tổng quát về khóa Game này rồi. Bài viết tiếp theo mình sẽ hướng dẫn cho các bạn làm quen với cấu trúc chương trình Window bằng C++. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~
