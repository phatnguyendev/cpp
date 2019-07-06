---
published: true
layout: post
title: Mảng đa chiều (multidimensional array)
categories: cpp
img: image-1.png
excerpt_separator: <!--more-->
---
Hi~! Bài trước mình đã giới thiệu với các bạn về mảng (array), chúng ta có thể tạo mảng để chứa nhiều loại kiểu giá trị khác nhau như mảng kiểu int, char, double, float... và đặc biệt là chứa chính nó. Việc mảng chứa mảng đã tạo nên cái tên cực ngầu: mảng đa chiều (multidimensional array).
## Khai báo mảng đa chiều
Hãy xem qua khai báo đơn giản về mảng 2 chiều như sau
{% highlight cpp %}
	int darr[2][3];
{% endhighlight %}
Nhìn cũng khá dễ hiểu đúng không? Ở mảng bình thường chúng ta chỉ làm việc  với 1 index và ở đây chúng ta có 2 (vì nó 2 chiều mà 😀) và công dụng của nó ở ví dụ trên như sau:
- 2: đây là số hàng (row) của chúng ta, tương tự như index của mảng 1 chiều bình thường
- 3: đây là số cột (column) của chúng ta, ở đây ta có mỗi hàng sẽ có 3 cột.

Các bạn có thể hình dung mảng 2 chiều như một ma trận tương tự như bàn cờ vua vậy đó và ma trận ở ví dụ trên là ma trận 2x3 có thể được mô tả như hình sau:

