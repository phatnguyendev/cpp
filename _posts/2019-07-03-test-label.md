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

Nhưng vì quá nhiều tính năng nên **nhược điểm** lớn nhất của VS tạo ra đối với người dùng là nặng, vâng thật sự đối với các bạn dùng máy cấu hình thấp thì VS sẽ không phải là 1 trải nghiệm tốt, khi đó để học lập trình C++ thì các bạn có thể tải ``Code::Block`` một IDE nhẹ hơn nhưng cung cấp đầy đủ tính năng cho việc học nhưng như tựa đề bài viết thì mình vẫn tiếp tục giới thiệu cho các bạn về VS vì đơn giản là mình đang dùng nó 😛

<div class="alert alert-info">
Note: việc sử dụng IDE nào để học là phụ thuộc vào cấu hình máy tính của các bạn, series này mình hướng đến người dùng VS nhiều hơn nhưng học một ngôn ngữ lập trình thì không quá quan trọng đến IDE nên bạn nào dùng 1 IDE khác vẫn có thể học được nhé và trong quá trình chạy project có gặp khó khăn gì cứ comment mình sẽ giúp các bạn trong khả năng của mình.
</div>

## Cách cài đặt Visual Studio Community 2015
Visual Studio 2015 có 3 phiên bản, nhưng để học tập và để xài free (đương nhiên rồi 😁) thì VS cung cấp cho chúng ta 1 phiên bản miễn phí là Community nhưng lại rất pro như đoạn giới thiệu:

> Free, fully-featured IDE for students, open-source and individual developers

Thời điểm hiện tại VS đã cho ra mắt bản Community 2017 nhưng trong phạm vi series thì 2 phiên bản 15 và 17 không có quá nhiều khác biệt nên các bạn thích thì cứ cài 2017 cho mới nhé.

### Các bước cài đặt
**Bước 1:** Tải bộ cài Visual Studio Community 2015 tại 1 trong 2 link bên dưới:
- [http://taimienphi.vn/download-visual-studio-community-2015-34342](http://taimienphi.vn/download-visual-studio-community-2015-34342)
- [https://visualstudio.microsoft.com/vs/older-downloads/](https://visualstudio.microsoft.com/vs/older-downloads/)

Đối với Link thứ 2 (Link gốc từ Microsoft) sẽ có 1 chút rắc rối hơn, các bạn làm như sau:

Tìm đến bản 2015 và ấn nút Download
![Tìm đến bản 2015 và ấn nút Download]({{site.baseurl}}/https://4.bp.blogspot.com/-4EYpmjuu1ro/XHJEJun96LI/AAAAAAAAAZw/62X9ep6sM0IO8wLfhLZMZyMG1l92fVbAACK4BGAYYCw/s640/v2.PNG)

Tiếp theo các bạn phải đăng nhập tài khoản Microsoft, hãy tự tạo 1 tài khoản cho mình nhé. Sau khi đăng nhập vào sẽ có giao diện như sau:
![]({{site.baseurl}}/https://2.bp.blogspot.com/-tg2jlNmveM4/XHJFFM6VSMI/AAAAAAAAAZ8/CIAVFV6OKPIWyyNZKeXLTga-9p5eynfkACK4BGAYYCw/s640/v3.PNG)

Hiện tại bản Update 3 là mới nhất của 2015, có 3 khung lựa chọn:
x64: các bạn chọn bản 64bit hoặc 32bit (x86) tùy theo máy nhé
English: chọn ngôn ngữ cho VS (nên để English)
EXE: chọn loại file cài đặt (nên để EXE)
Sau đó nhấn nút Download để tải file cài đặt về máy có tên: ``en_visual_studio_community_2015_with_update_3_x86_x64_web_installer_8922963.exe`` (hoặc tương tự vậy) là OK.

**Bước 2:** chạy file exe bộ cài vừa mới tải về và quá trình cài như sau:


⇨ Ở phần "choose the type of installation" các bạn chọn Custom sau đó nhấn Install
![]({{site.baseurl}}/https://2.bp.blogspot.com/-aztHNK_-Zjo/XHJHMZP0BLI/AAAAAAAAAaI/BLheUt7YBDkiTseyYBadZ0z5YdbN1RnHwCK4BGAYYCw/s400/v4.png)

⇨ Đến hộp thoại tiếp theo phần "select features" các bạn chọn Visual C++ trong "Programming Language" sau đó nhấn Next (Nhớ chọn Custom ở phần trước thì mới có hộp thoại này nhé, các bạn chọn càng nhiều tính năng thì việc cài đặt càng lâu) Chờ cho quá trình cài đặt diễn ra.
![]({{site.baseurl}}/https://2.bp.blogspot.com/-4PbP50c-pD0/XHJHYpi7AVI/AAAAAAAAAaY/JMycq35QBTETKS-lf89AguUbdZi1fixuwCK4BGAYYCw/s400/v5.png)

⇨ Quá trình cài đặt diễn ra, các bạn kiên nhẫn chờ nha
![]({{site.baseurl}}/https://2.bp.blogspot.com/-vegSBkvFG20/XHJHsfuU0KI/AAAAAAAAAas/rsNc-5eZ90cLzYvGqtHoN2WLCoxzMuUuwCK4BGAYYCw/s400/v6.png)

⇨ Sau khi xong sẽ có nút Launch hoặc nút **Restart** các bạn cứ nhấn vào để hoàn tất quá trình cài.


⇨ Sau khi cài đặt xong sẽ có hộp thoại đăng nhập (sign in) vào tài khoảng microsoft hiện ra, nếu bạn có tài khoản thì hãy đăng nhập vào còn chưa thì ấn "not now, maybe later."
![]({{site.baseurl}}/https://2.bp.blogspot.com/-sr5zQAQzHuQ/XHJIUxHubZI/AAAAAAAAAa4/AruPodsUhQIZD_MBOoZHL2NQ0v2Rez05wCK4BGAYYCw/s400/v7.png)

Mình khuyên các bạn hãy tạo cho mình 1 tài khoản microsoft, nó free và rất dễ tạo các bạn có thể tham khảo trên mạng hoặc tự vọc vạch cách tạo nhá.


⇨ Tiếp đến là phần chọn giao diện (theme), ở đây có 3 loại giao diện mặc định là: Blue, Dark, Light bạn có thể chọn test từng cái và có thể đổi về sau nếu thích. Sau đó nhấn "Start visual studio"
![]({{site.baseurl}}/https://4.bp.blogspot.com/-8_wp2w2n3kA/XHJIhb-KOKI/AAAAAAAAAbA/9HPALkPv5lotjJ95KV7nGNm72PpGV5AQgCK4BGAYYCw/s400/v8.PNG)

Xong! Đến đây mà không gặp phải lỗi gì thì xem như các bạn đã cài đặt thành công, hãy nhìn giao diện của VS xem thử nào (rất ngầu đúng không)
![]({{site.baseurl}}/https://1.bp.blogspot.com/-cEHFoCwYpBE/XHJCMv_GJKI/AAAAAAAAAZk/Tts4XvcFIw8aL9klWLvm2QDCNfskaJlPQCK4BGAYYCw/s640/vs1.PNG)

## Tổng kết
Oki vậy là đã xong phần cài đặt IDE Visual Studio Community 2015 rồi. Bài viết tiếp theo mình sẽ hướng dẫn cho các bạn làm quen với 1 số thao tác cơ bản trong VS như tạo, lưu, mở một project C++ như thế nào nhé. Nếu có thắc mắc các bạn cứ bình luận bên dưới để mình giải đáp. Pie~