---
published: true
layout: post
title: Cấu trúc lặp FOR (for statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Chúng ta đã cùng nhau tìm hiểu về 2 loại cấu trúc lặp là while và do-while rất thích hợp dùng khi số vòng lặp chưa biết trước và hôm nay chúng ta sẽ cùng nhau tìm hiểu về 1 cấu trúc lặp có thể coi là phổ biến nhất trong C++ dùng để sử dụng khi biết trước số vòng lặp đó là cấu trúc lặp for (hay gọi đơn giản là vòng lặp for). Nào bắt đầu thôi!
<!--more-->
Đầu tiên chúng ta sẽ cùng xem qua mô hình hoạt động của vòng lặp for dưới đây:
![](https://2.bp.blogspot.com/-I1T4t8Z5Zv4/XHzYDS4O7zI/AAAAAAAAAfg/9yBg9RrVlFEXs4BV1Ank2Fa9MMT_B4X_ACK4BGAYYCw/s640/bai_3.5.1.PNG)

## Cấu trúc cơ bản
Như thường lệ chúng ta sẽ xem qua mã giả để hiểu cách sử dụng nó:
{% highlight cpp %}
for(<khởi tạo giá trị lặp i>;<điều kiện lặp>;<thay đổi giá trị i>)
{
    statements; //cac cau lenh
}
{% endhighlight %}
Mô hình này tương tự như while nhưng phức tạp hơn trong cặp ngoặc (), đầu tiên chúng ta cần thiết lâp 3 thứ vào trong for:
- **<khởi tạo giá trị lặp i>**: tại đây chúng ta sẽ khởi tạo giá trị i để so sánh với biểu thức điều kiện, việc này chỉ được thực thi duy nhất 1 lần trong quá trình vòng lặp for được thực thi và có thể khởi tạo trước vòng lặp hoặc ngay tại đây cũng được.
	Lưu ý: khi bạn khởi tạo biến trong for thì biến sẽ bị hủy ngay sau khi kết thúc vòng lặp.
- **<điều kiện lặp>**: điều kiện để tiếp tục hoặc thoát khỏi vòng lặp.
- **<thay đổi giá trị i>**: chúng ta sẽ cần thay đổi giá trị của i để tạo sự linh hoạt cho vòng lặp.

Đọc thì có vẻ khó hiểu nên mình sẽ tiến hành "công nghệ siêu tốc" là cho các bạn 1 ví dụ cụ thể, chúng ta có đề bài đơn giản: "in ra các số từ 1 đến 10".
Nhân tiện mình sẽ làm bài này bằng cả while và for cho các bạn so sánh 2 vòng lặp này nhá, chúng ta có code dưới đây:
{% highlight cpp %}
// đề bài: in ra số từ 1 đến 10 sử dụng WHILE và FOR
#include <iostream>
using namespace std;

int main()
{
  #region XỬ DỤNG VÒNG LẶP WHILE
  int i = 1;
  while(i <= 10)
  {
    cout << i << endl;
    i++;
  }
  #endregion
  
  #region XỬ DỤNG VÒNG LẶP FOR
  for(int i=1;i <= 10;i++)
  {
    cout << i << endl;
  }
  #endregion
  return 0;
}
{% endhighlight %}
Các bạn thấy sự khác biệt giữa 2 vòng lặp chứ 😁 với vòng lặp for chúng ta có được code đơn giản và dễ nhìn nữa và chắc qua ví dụ này cùng với kiến thức ở bài vòng lặp while thì các bạn đã hiểu được cách dùng vòng lặp for rồi đúng không nào.
## Vòng lặp đôi
Vòng lặp đôi là việc bạn sử dụng nhiều hơn 1 biến lặp để quản lí vòng lặp này, mình sẽ viết 1 chương trình in 2 dãy số: dãy 1 là từ 1 đến 10, dãy 2 là từ 10 đến 20,  các bạn xem bên dưới:
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  for(int i=1,j=10;i<=10,j<=20;i++;j++)
  {
    cout << i <<"\t"<< j << endl;
  }
  return 0;
}
{% endhighlight %}
Và chúng ta có được kết quả
![](https://3.bp.blogspot.com/-WBbll8HaEZM/XHzltnUGqmI/AAAAAAAAAfs/zv_ATDX-z3UFOGToXzKF4snV1--lqUMOwCK4BGAYYCw/s640/bai_3.5.2.PNG)