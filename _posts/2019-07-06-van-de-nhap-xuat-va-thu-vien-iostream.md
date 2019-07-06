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
Nhớ là phải viết đúng tên thư viện nhé 😄 Và tiếp theo mình sẽ giới thiệu một số chức năng hữu ích và rất hay dùng khi code trong thư viện này.

### std::cout
Đây là 1 biến được thư viện iostream định nghĩa trước rất quen thuộc khi lập trình C++ console, chức năng của nó là gửi dữ liệu đến console để in ra dạng text trên màn hình và là từ viết tắt của **character output**. Cách sử dụng đơn giản, ví dụ để in chữ "Have a nice day!" các bạn viết như sau:
{% highlight cpp %}
std::cout << "Have a nice day!\n";
{% endhighlight %}
<div class="alert alert-info">
Lưu ý: nhớ phải có đủ phần khai báo thư viện iostream, hàm main() nữa thì mới chạy, nếu quên các bạn có thể xem lại bài 2 để coi cấu trúc của một chương trình C++ đơn giản nhé.
</div>
Ngoài xuất kiểu chuỗi kí tự như trên, std::cout còn cho phép bạn xuất hầu hết kiểu dữ liệu khác như các kiểu số học: int, float, double.. kí tự char và đối với kiểu bool mặc đính nó sẽ xuất ra 1(true) hoặc 0(false) kiểu int nếu các bạn muốn xuất ra chữ true hoặc false thì thêm dòng
{% highlight cpp %}
std::cout << boolalpha;
{% endhighlight %}
vào trước dòng cần xuất giá trị bool là OK!

Nếu các bạn muốn in ra nhiều dữ liệu trên 1 dòng thì chỉ cần đặt thêm **toán tử chèn (<<)** vào giữa những dữ liệu đó là được.

### std::cin
Khác với std::cout, std::cin (**character input**) được sử dụng để đọc dữ liệu từ bàn phím thông qua **toán tử khai thác (>>)**, phía sau toán tử >> phải là 1 biến được định nghĩa để hứng giá trị từ bàn phím nhập vào.
Khi chạy chươn trình và gặp std::cin, chương trình sẽ dừng lại và đợi người dùng nhập giá trị vào, nếu các bạn lỡ bấm enter mà chưa nhập giá trị gì thì nó sẽ vẫn tiếp tục đợi cho đến khi có giá trị được nhập vào và nếu bạn nhập mà không nhấn enter thì cũng không có cách nào để chấp nhận dữ liệu bạn nhập vào cả (trừ khi dùng thư viện bên thứ 3). Cách sử dụng std::cin như sau: