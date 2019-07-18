---
published: true
layout: post
title: Cấu trúc lặp FOR (for statement)
categories: basic
img: bai10.png
lesson: 10
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
- **\<khởi tạo giá trị lặp i\>**: tại đây chúng ta sẽ khởi tạo giá trị i để so sánh với biểu thức điều kiện, việc này chỉ được thực thi duy nhất 1 lần trong quá trình vòng lặp for được thực thi và có thể khởi tạo trước vòng lặp hoặc ngay tại đây cũng được.
	Lưu ý: khi bạn khởi tạo biến trong for thì biến sẽ bị hủy ngay sau khi kết thúc vòng lặp.
- **\<điều kiện lặp\>**: điều kiện để tiếp tục hoặc thoát khỏi vòng lặp.
- **\<thay đổi giá trị i\>**: chúng ta sẽ cần thay đổi giá trị của i để tạo sự linh hoạt cho vòng lặp.

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
  
Khá tiện lợi đúng không nào nhưng nhớ nhìn cẩn thận kẻo lại rơi vào lỗi fix mãi không ra đấy.
### Vòng lặp lồng nhau
Trong vòng lặp bạn vẫn có thể kết hợp 1 hoặc nhiều vòng lặp khác nhau nữa để giải quyết bài toán, việc sử dụng dạng này các bạn làm bài tập nhiều sẽ đụng đến và nó tùy thuộc vào logic mà bạn sử dụng cho chương trình của mình nên mình không xét thêm về loại này.
## Các lỗi thường gặp khi dùng vòng lặp for
### Lỗi "Off-by-one"
Đây là lỗi logic khi chúng ta dùng vòng lặp for, ví dụ bạn cần in ra số từ 1 đến 10 nhưng điều kiện trong for của bạn là
> for( int i=1; i < 10; i++ )
                       
Nhìn thì có vẻ đúng và chạy chương trình cũng không lỗi nhưng khi ra kết quả thì nó chỉ in ra đến số 9 là dừng trong khi đề bài cần in đến số 10 đây chính là lỗi "Off-by-one" khi số vòng lặp của chúng ta bị thiếu hoặc bị thừa (thường là dư hoặc thừa 1 lần), các bạn nhớ chú ý đến vấn đề này nhé.

### Lỗi lặp vô hạn (infinity loop)
Thường lỗi này là do logic code của bạn có chút vấn đề  dẫn đến không có điều kiện dừng vòng lặp, trong đó có 1 trường hợp cần chú ý là việc bạn bỏ qua một số thành phần trong điều kiện  for, chẳng hặn bạn có thể viết code cho bài in từ 1 đến 10 như sau:
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  int i=0;
  for(;i <= 10;)
  {
    cout << i << endl;
    i++;
  }
  return 0;
}
{% endhighlight %}
Nhìn giống như bạn đang dùng for như vòng lặp while vậy nhưng nó cũng không sao, quan trọng là nếu bạn tối ưu đến mức không có 1 điều kiện gì trong for như
> for(;;)
  
Vâng và nó sẽ trở thành 1 vòng lặp vô hạn với sự ngắn gọn này 😂

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về một cấu trúc lặp cực kì phổ biến trong C++ là vòng lặp for, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~
