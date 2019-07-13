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

