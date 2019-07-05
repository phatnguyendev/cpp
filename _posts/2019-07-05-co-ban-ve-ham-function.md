---
published: true
layout: post
title: Cơ bản về hàm
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Hi~ Hôm nay chúng ta sẽ học về hàm (function) trong C++, một trong những thứ sẽ gắn kết với các lập trình viên rất rất dài trên con đường coding :) Cùng khám phá nào
## Hàm (function) là gì?
Theo như định nghĩa hàm lâm thì hàm là

> Một chuỗi các câu lệnh có thể tái sử dụng nhằm giải quyết 1 công việc cụ thể

Định nghĩa khá dễ hiểu đúng không? Hàm luôn xuất hiện khi chúng ta code. Khi tạo 1 project mới trong visual studio chúng ta luôn được cung cấp file.c với hàm **main** (nơi chương trình bắt đầu thực thi khi được chạy), đặc trưng của 1 hàm được thấy rõ nhất là có cặp ngoặc tròn ``()`` đi kèm với tên hàm và trong cặp ngoặc này có thể có tham số (1 hoặc nhiều biến) hoặc không có tham số.
### Tại sao phải dùng hàm?
Khi chương trình bạn phức tạp lên với vài trăm dòng code và bạn đặt tất cả vào hàm main thì thật là khó chịu khi phải nhìn liên tục như vậy, đôi khi bạn đang tìm cách sửa 1 chức năng được 1 nhóm các dòng code đảm nhiệm thì cũng chả biết cái nhóm dòng code đang ở đâu trong số hàng trăm dòng này nữa, vậy nên việc dùng hàm để phân nhóm các chức năng trong chương trình của bạn thật sự là cứu tinh tuyệt vời để mỗi khi bạn muốn tìm cách sửa chức năng nào đó thì cứ search tên hàm đang đảm nhiệm chức năng đó là xong.
## Làm quen với cách dùng hàm
Đầu tiên chúng ta sẽ làm quen với cách tạo ra 1 hàm và cách sử dụng nó.
### Khai báo hàm (Declare function)
Ví dụ mình muốn tạo hàm có tên TinhTong để thực hiện chức năng cộng 2 số kiểu int thì sẽ có như sau:
{% highlight cpp %}

{% endhighlight %}