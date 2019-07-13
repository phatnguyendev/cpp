---
published: true
layout: post
title: Làm việc với header file
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Trước tiên đi qua những phần quan trọng tiếp theo, chúng ta sẽ cùng tìm hiểu cách tạo file ``.h`` (header file). Let's go!
## Mở đầu
Khi chương trình bạn đủ lớn, việc khai báo prototype (mình đã giải thích prototype trong phần basic) sẽ trở nên cần thiết. Ít nhất là khi bạn muốn tìm kiếm lại 1 hàm nào đó bạn chỉ phải tìm kiếm trong danh sách các hàm được liệt kê gần nhau (chứ không phải là tìm hết từng dòng code) và để dễ dàng hơn chúng ta sẽ tạo riêng cho các prototype 1 file để việc tìm là thuận tiện nhất.
## Header basic
Trước tiên chúng ta sẽ tìm hiểu về cách hoạt động của 1 file header cơ bản mà lúc nào cũng phải có - iostream.

![Ảnh learncpp.com](https://www.learncpp.com/images/CppTutorial/Section1/IncludeLibrary.png)

Đây là cách hoạt động của nó. Mình sẽ giải thích qua 1 chút: ở phần ``compile`` (biên dịch) mọi nội dung của header file iostream (các khai báo prototype, ví dụ khai báo function ``cout``) sẽ được copy vào file main.o, nhưng lúc này chúng ta chỉ mới có khai báo của hàm (không có thân hàm - nếu bạn chưa rõ phần này đọc lại [Khai báo hàm và định nghĩa hàm](https://tuitucode.github.io/cpp/co-ban-ve-ham-function/#khai-b%C3%A1o-h%C3%A0m-declare-function-%C4%91%E1%BB%8Bnh-ngh%C4%A9a-h%C3%A0m-define-function-v%C3%A0-s%E1%BB%AD-d%E1%BB%A5ng-h%C3%A0m-fuction-call)) vì vậy chúng ta sẽ đến bước Link - kết nối đến thư viện chuẩn để lấy được thân hàm của những hàm đã khai báo trong iostream. Lúc này các hàm đã có đủ khai báo và thân hàm nên chúng ta đã sử dụng được (file hoàn chỉnh là main.exe).

Ok dựa trên iostream chúng ta sẽ tự tạo cho mình file header theo nguyên tắc:
> Header file chỉ chứa những khai báo hàm (prototype)

