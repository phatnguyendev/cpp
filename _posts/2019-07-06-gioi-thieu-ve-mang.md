---
published: true
layout: post
title: Giới thiệu về mảng (array)
categories: cpp
img: image-2.png
excerpt_separator: <!--more-->
---
Hi~! Hôm nay chúng ta sẽ tìm hiểu về mảng - một kiểu dữ liệu tổng hợp giúp chúng ta truy cập đế nhiều biến có cùng kiểu dữ liệu thông qua 1 biến duy nhất, mảng là 1 phần vô cùng quan trọng trong lập trình vì vậy các bạn hãy xem bài viết này thật kĩ nhé. Nào bắt đầu thôi. <!--more-->
## Mảng là gì?
### Cách khởi tạo
Ví dụ chúng ta muốn lưu ID của 10 học viên trong 1 lớp học và với kiến thức cho đến hiện tại chúng ta sẽ cần 10 biến kiểu số nguyên để làm được điều này, không nói đến hiệu suất chương trình các bạn ngồi gõ khai báo 30 biến đó thôi cũng mệt rồi đúng không? Đó là lí do chúng ta sẽ học về mảng để tối giản code của chúng ta và còn nhiều hơn thế nữa. Với ví dụ trên mình sẽ khai báo 1 mảng như sau:
{% highlight cpp %}
int studentId[10];
{% endhighlight %}
Ở đây mình khai báo 1 biến studenId với cặp ngoặc vuông để khởi tạo 1 biến mảng kiểu int và chứa được 10 phần tử có cùng kiểu giá trị bên trong (gọi là độ dài của mảng).

Các phần tử trong mảng không có tên riêng, nếu bạn muốn lấy ra 1 phần tử nào đó trong mảng giả sử ở đây mình lấy ra giá trị phần tử thứ 2 vào biến ``two`` thì sẽ làm như sau
{% highlight cpp %}
int two = studentId[1]; // số 1 được gọi là index của phần tử trong mảng
{% endhighlight %}
<div class="alert alert-info">
Lưu ý: phần tử trong mảng bắt đầu được đánh dấu từ số 0 và phần tử cuối cùng sẽ có số thứ tự là N-1 (với N là độ dài của mảng)
</div>

Ngoài ra khi khai báo chúng ta còn có thể định giá trị trước cho các giá trị trong mảng như sau
{% highlight cpp %}
int arr[5] = {1, 2, 3, 4, 5};
{% endhighlight %}

