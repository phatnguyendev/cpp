---
published: true
layout: post
title: Vấn đề nhập xuất và thư viện iostream
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Trong bài này chúng ta sẽ tìm hiểu về **std::cout, std::cin, std::endl** nằm trong chương trình Hello World! ở bài 02. Mục đích là giúp các bạn hiểu hơn về cách hiển thị dữ liệu lên màn hình console, cách lấy dữ liệu nhập vào từ người dùng. Nào bắt đầu nhé!
<!--more-->

## Thư viện iostream
Thư viện iostream là 1 trong những thư viện thuộc **thư viện chuẩn C++** (C++ standard library) dùng để làm việc với việc nhập và xuất. Chức năng hay được dùng và cơ bản nhất trong thư viện iostream là lấy dữ liệu nhập vào từ bàn phím (**input**) và hiển thị dữ liệu ra màn hình console (**output**) ta có thể thấy được thông qua 2 chữ cái đầu trong tên thư viện này (io = input/output).

Để sử dụng các chức năng trong thư viện này hoặc nếu các bạn muốn sử dụng bất kì chức năng ở thư viện nào thì đơn giản chỉ cần "thêm" nó vào bằng cách dùng câu lệnh
{% highlight cpp %}
// nếu dùng cho thư viện chuẩn trong C++
#include <tên thư viện>
// nếu dùng cho file header (.h)
#include "<tên file header>.h"
//EXAMPLE: thêm thư viện iostream vào
#include <iostream>
{% endhighlight %}
