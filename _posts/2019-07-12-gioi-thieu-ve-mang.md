---
published: true
layout: post
title: Giới thiệu về mảng (array)
categories: cpp
img: bai15.png
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
Ở đoạn khai báo trên chúng ta đã đặt giá trị cho cả 5 phần tử trong mảng, nếu bạn chỉ cấp phát 4 giá trị trong khi có 5 phần tử thì điều gì sẽ xảy ra nhỉ? Giá trị của phần tử thứ 5 sẽ được gán bằng giá trị "rác" nào đó và chương trình sẽ không bị lỗi.

Một số cách khai báo khác:
{% highlight cpp %}
int arr[5] = {}; //khởi tạo giá trị =0 cho mọi phần tử
int arr[] = {1, 2, 3, 4, 5}; //trình biên dịch tự biết độ dài của mảng
{% endhighlight %}
**Lỗi thường gặp:** một trong những lỗi thường gặp nhất trong việc khai báo mảng là cấp phát sai giá trị độ dài của mảng, hãy xem qua đoạn code sau để hiểu rõ hơn:

**Lỗi khi đưa mảng vào hàm:** khi bạn đưa mảng như 1 tham số vào trong hàm, khác với 1 biến thông thường nếu bạn thay đổi giá trị 1 phần tử nào đó của mảng ở trong hàm thì phần tử đó sẽ bị thay đổi luôn giá trị của mình khi ra khỏi hàm (với biến bình thường chúng ta cần truyền tham trị & thì mới đổi giá trị khi ra khỏi hàm).
## Các thao tác cơ bản
### Nhập xuất mảng
Thông thường việc nhập mảng sẽ là công việc của người dùng nhập vào, chúng ta có chương trình nhập vào mảng từ bàn phím và xuất ra các phần tử trong mảng như sau:

Chạy trương trình lên và cho ra kết quả (à nhập giá trị vào mới có kết quả nhé 😄)
![](http://2.bp.blogspot.com/-OR8bgitYZkE/XH9JAkGKQaI/AAAAAAAAAg4/yMLq3awbsNchbjiZjilMQp4OLHE92FU4wCK4BGAYYCw/s1600/bai_5.1.PNG)

### Độ dài của mảng (length)
Có 1 cách hay để lấy được độ dài của mảng, các bạn dùng theo công thức:
{% highlight cpp %}
	sizeof(arr) / sizeof(arr[0])
{% endhighlight %}
Chúng ta làm như sau
{% highlight cpp %}
int arr[5];
int length = sizeof(arr) / sizeof(arr[0]);
{% endhighlight %}
Giải thích đôi chút ta luôn có: kích thước mảng = chiều dài mảng * kích thước phần tử. Vậy để tìm chiều dài của mảng thì chúng ta quy đổi đại số là ra như trên với:
- sizeof(arr): kích thước mảng
- sizeof(arr[0]): kích thước phần tử

Cách khác: xử dụng hàm size() trong thư viện iterator và đây là cách dễ nhớ nhất cho các bạn lười chuyển đổi đại số như cách trên, chi tiết:
{% highlight cpp %}
#include<iterator>
  ...
size(arr) //hàm lấy kích thước mảng
{% endhighlight %}
### Truy xuất phần tử trong mảng
Để truy xuất 1 phần tử trong mảng ta truyền index của phần tử đó vào mảng là được, cách thức như sau
{% highlight cpp %}
//truy xuất phần tử thứ 3 (index = 2)
int element3 = arr[2];
{% endhighlight %}
Nếu bạn truy xuất vượt quá giới hạn của mảng bạn tạo (index > N - 1) thì bạn nghĩ chương trình sẽ làm gì? Yên tâm là nó sẽ không báo lỗi gì cho bạn nhưng sẽ có giá trị "rác" được truy xuất và đương nhiên phần tử đó không hề có trong mảng của bạn. Nó thường là giá trị từ vùng nhớ nào đó mà bạn đã lỡ truy xuất đến, nếu vùng nhớ đó đang được dùng bạn sẽ nhận được thông báo lỗi, bạn sẽ hiểu hơn về vùng nhớ ở phần con trỏ.

Mảng chúng ta đang dùng trong bài viết này là mảng cố định với số phần tử trong mảng biết trước, vậy nếu chúng ta không biết trước được có bao nhiêu phần tử trong mảng khi mới khai báo thì làm thế nào? Bạn có thể khai báo dư độ dài cho mảng nhưng cách này không đem lại hiệu quả vì thế chúng ta sẽ có 1 loại mảng khác ưu việt hơn là mảng động (dynamic array) với việc khai báo mà không cần cho trước độ dài mảng.
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về mảng (array) trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.

Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page [Tui Tự Code](https://www.facebook.com/shareAboutIT) để cập nhật các bài viết mới nhé. Pie~
