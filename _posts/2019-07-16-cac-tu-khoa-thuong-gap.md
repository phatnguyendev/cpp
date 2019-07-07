---
published: true
layout: post
title: 'Goto, Break và Continue'
categories: cpp
img: bai11.png
excerpt_separator: <!--more-->
---
Trong bài này chúng ta sẽ cùng tìm hiểu qua 1 số câu lệnh bổ trợ trong quá trình sử dụng các cấu trúc rẽ nhánh và cấu trúc lặp như nhảy đến 1 dòng xác định, thoát khỏi vòng lặp tức thời,.. đó là các từ khóa ``goto``,``break``, ``continue``. Nào bắt đầu thôi!<!--more-->
## Goto statement
Thường thấy trong các câu lệnh if-else hoặc switch-case, lệnh goto giúp chúng ta "nhảy" đến 1 dòng code nào đó được xác định bởi label chúng ta sẽ cùng xem qua ví dụ dưới đây về cách dùng nó:
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  int n;
  ThuLai:
  cout << "Nhap vao so: "; cin >> n;
  
  if(n < 0)
  {
    cout << "Ban nhap vao so am, vui long nhap lai!" << endl;
    goto ThuLai;
  }
  cout << "Ban da nhap 1 so duong" <<endl;
  return 0;
}
{% endhighlight %}
Chúng ta có thể thấy đề bài yêu cầu nhập 1 số dương, nếu nhập số âm sẽ xuất ra thông báo "Ban nhap vao so am, vui long nhap lai!" và cho người dùng quay về dòng code nhập lại số, đó chính là tác dụng của cặp đôi goto-label này 😃 label ở đây mình tạo là ThuLai và đoạn goto ThuLai nằm ở điều kiện if(n < 0) tương đương số nhập vào là số âm, kết quả chương trình khi mình test 1 vài số:
![](http://3.bp.blogspot.com/-vG6FMyga8OM/XH4z-Q9lD7I/AAAAAAAAAgM/9RaTKue6ViA-TK_uOC75LpnGcfwgEil-wCK4BGAYYCw/s1600/bai_3.6.1.PNG)

Với goto các bạn có thể vọc vạch để tạo ra 1 menu trên console cho phép người dùng nhập lựa chọn nhìn cũng rất ngầu, các bạn tự suy nghĩ và làm thử nếu thắc mắc gì bình luận bên dưới mình giúp nhé.

Không thể dùng goto để nhảy xuống label được viết phía sau dòng goto (hay còn gọi là goto và label không thể trong cùng 1 block)
## Break statement
Trong switch-case, break được đặt sau mỗi case để dánh dấu kết thúc cho case đó và bạn có thể dùng break với chức năng tương tự cho các cấu trúc vòng lặp như while, do-while hoặc for.
### Break cho vòng lặp for
Dùng để thoát ra khỏi vòng lặp bất cứ khi nào bạn cần mà không cần đợi đến phần xét điều kiện, chương trình sau cho phép người dùng nhập tối đa vào 10 số, mỗi lần nhập sẽ in ra số đó, nếu nhập số -1 sẽ thoát khỏi vòng lặp và không in số -1.
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  int n {0};
  for(int allow=0;allow < 10;allow++)
  {
    cout << "Nhap so (nhap -1 de thoat): ";
    cin >> n;
    if(n == -1)
      break;
    cout << "so vua nhap: " << n << endl;
  }
  return 0;
}
{% endhighlight %}
Nó sẽ cực kì tiện lợi khi bạn muốn custom vòng lặp for của mình để hạn chế việc chạy hết vòng lặp.
### Break cho vòng lặp while
Như việc bạn dùng với vòng lặp for ở trên và ngoài ra ở while thường dùng break để có thể thoát ra khỏi vòng lặp vô hạn, chúng ta cùng nhau làm lại ví dụ ở phần goto statement và lần này sẽ dùng vòng lặp vô hạn kết hợp với break nhé
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  int n {0};
  while(true) // khởi tạo vòng lặp vô hạn
  {
    cout << "Nhap vao so duong: ";
    cin >> n;
    if(n>0)
    {
      cout << "Ban nhap vao 1 so duong, thoat khoi vong lap while"<<endl;
      break;
    }
    cout << "Ban nhap vao so am, vui long nhap lai!\n";
  }
  return 0;
}
{% endhighlight %}
Khi chạy chương trình chúng ta nhận được kết quả tương tự
![](https://2.bp.blogspot.com/-M-ThH04zLTU/XH46hRAcyGI/AAAAAAAAAgY/gxskhl7DjCkrAprsu_gRQPVTBlCyjFGdQCK4BGAYYCw/s640/bai_3.6.2.PNG)

Ở mức độ cơ bản, chúng ta sử dụng cách dùng goto-lablel hoặc while-break đều không có quá nhiều khác biệt, khi đụng đến bài tập các bạn nhớ được ít nhất 1 cách là OK!

<div class="alert alert-info">
Cần phân biệt tác dụng của break và return: break giúp thoát khỏi vòng lặp hiện tại và thực thi câu lệnh đầu tiên phía dưới vòng lặp còn return sẽ thoát khỏi hàm thực thi nó.
</div>

## Continue statement
Lệnh continue được sử dụng cho cấu trúc lặp với chức năng bỏ qua lần lập hiện tại và đến lần lập tiếp theo, chương trình sau sẽ in ra số từ 1 đến 10 và bỏ qua số 5
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  for(int i=1; i <= 10;i++)
  {
    if(i==5)
      continue;
    cout << i << "\t";
    
    //lệnh continue khi dc thực thi sẽ đi đến đây và chạy đến lần lập tiếp theo (bỏ qua cout)
  }

  return 0;
}
{% endhighlight %}
Khi dùng continue cho while (hoặc do-while) các bạn chú ý phần bỏ qua của continue, bạn có thể cho bỏ qua cả phần thay đổi giá trị biến lặp khiến cho vòng lặp biến thành vòng lặp vô hạn.
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về goto, break và continue trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page [Tui Tự Code](https://www.facebook.com/shareAboutIT) để cập nhật các bài viết mới nhé. Pie~
