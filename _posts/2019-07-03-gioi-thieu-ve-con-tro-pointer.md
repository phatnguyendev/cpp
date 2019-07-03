---
published: true
layout: post
title: Cài đặt visual studio 2015
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Cuối cùng cũng đến phần ám ảnh nhất trong ngôn ngữ C++ đó chính là con trỏ (pointer), và trong loại bài viết sắp tới chúng ta sẽ cùng tìm hiểu con trỏ là gì? Những thứ liên quan đến con trỏ mà chúng ta nên biết để không bị "lạc lối". Thư giãn và tập trung high độ nhé :)

## Vài thứ khởi động
Khi chúng ta khai báo 1 biến như sau:
{% highlight cpp %}
int bien = 5;
{% endhighlight %}
Đến bài học này chắc các bạn sẽ biết được ý nghĩa của câu lệnh trên rồi đúng không? Đơn giản là khởi tạo 1 biến kiểu **int** có tên là ``bien``  và gán giá trị cho nó bằng ``5`` và đây không phải là thứ chúng ta sẽ học trong bài này, mặt khác khi khởi tạo biến ``bien`` thì sẽ được cấp phát 1 địa chỉ của vùng nhớ trống nào đó và giá trị 5 sẽ được lưu tại địa chỉ này, giả sử địa chỉ được cấp phát là ``1365`` vậy tóm lại chúng ta có:
{% highlight %}
Tên biến: bien
Giá trị: 5
Địa chỉ: 1365
{% endhighlight %}
Bất cứ khi nào chương trình thấy biến ``bien`` xuất hiện (trong 1 biểu thức hoặc câu lệnh) thì trình biên dịch sẽ  dịch tên biến này thành địa chỉ bộ nhớ được gán cho nó (theo ví dụ là 1365) để lấy được giá trị ra dùng. Vậy làm cách nào từ 1 biến có thể lấy ra được địa chỉ của nó? và khi có được địa chỉ thì có lấy được luôn giá trị không? Cùng đọc tiếp nào.

