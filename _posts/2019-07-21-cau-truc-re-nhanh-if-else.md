---
published: true
layout: post
title: Cấu trúc rẽ nhánh (If - else statement)
categories: cpp
img: bai6.png
excerpt_separator: <!--more-->
---
Một trong những cấu trúc điều khiển đơn giản và phổ biến nhất trong lập trình là cấu trúc rẽ nhánh và hầu hết bất cứ ngôn ngữ lập trình nào cũng đều sử dụng đến nó chỉ là câu lệnh có khác hơn nhưng chức năng sử dụng là như nhau. Bạn đã từng nghe câu "cứ IF ELSE là ra thôi" chưa? Hãy cùng xem qua sức mạnh thần thánh của câu lệnh đó nhé.
<!--more-->

## Cấu trúc cơ bản
Dưới đây là cấu trúc cơ bản nhất của cặp lệnh **if...else**:
{% highlight cpp %}
  if(<điều kiện>)
  {
      //khối lệnh if
      <thực hiện lệnh gì đó>;
      <thực hiện thêm lệnh nữa>;
      ...
  }
  else
  {
      //khối lệnh else
      <thực hiện lệnh không nằm trong khối lệnh if>;
      <thực hiện thêm lệnh nữa vẫn không nằm trong khối lệnh if>;
  }
{% endhighlight %}

Mình sẽ giải thích qua một ví dụ cụ thể luôn để các bạn nhìn thấy cách đặt nó như thế nào trong 1 file cpp nhé.
**Bài toán thực tế:** một rạp xem phim có chế độ ưu đãi cho thành viên như sau: nếu bạn có thẻ thành viên thì giá vé xem phim là 45k còn không có thì giá vé sẽ là 60k. Cho người dùng nhập vào số 1(là thành viên) hoặc 0 (không là thành viên) và tính ra giá vé.

**Phân tích bài toán:**

Nếu dùng câu lệnh **if...else** để giải quyết thì phải tạo ra \<điều kiện\> trong ngoặc của **if** trước, dự theo yêu cầu ta thấy được điều kiện ở đây là có hoặc không có thẻ thành viên nên chúng ta sẽ tạo 1 biến **bool** _isMember_ để làm điều kiện.
<div class="alert alert-info">
"điều kiện": là một mệnh đề chỉ trả ra kết quả đúng hoặc sai, có thể dùng biến bool, toán tử so sánh: ==
Chúng ta có thể kết hợp nhiều mệnh đề với nhau thông qua toán tử && (và), || (hoặc).
</div>
Ta sẽ có: khi người dùng nhập vào 1: isMember = true và nhập vào 0: isMember = false
Sau khi đã giải quyết điều kiện, chúng ta xét đến những gì cần làm khi điều kiện đúng hoặc sai, đó là những lệnh nằm trong khối lệnh if và khối lệnh else. Đối với bài toán trên ta nhận thấy:
> if(isMember) giá vé = 45k else giá vé = 60k 

vậy chúng ta chỉ cần tạo biến giá vé để lưu trị giá là xong. OK vậy là đã giải quyết xong bài toán của chúng ta. Dưới đây là code toàn bộ chương trình:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
  // khai báo các biến
  int Input;
  bool isMember;
  int price;
  
  cout << "Bạn là thành viên? Nhập 1(có) hoặc 0(không): ";
  cin >>Input;
  
  isMember = (bool)Input;
  
  // sử dụng biến bool
  if(isMember)
    price = 45000;
  else
    price = 60000;
  
  cout << "Giá 1 vé của bạn là: " << price << endl;
  // dùng để dừng màn hình trong Visual Studio
  system("pause");
  return 0;
}
{% endhighlight %}

## Mở rộng
### Điều kiện else if
Ngoài cấu trúc cơ bản như trên chúng ta còn có cấu trúc sau:
{% highlight cpp %}
  if(<điều kiện 1>)
  {
      //khối lệnh 1
      <thực hiện lệnh gì đó>;
      <thực hiện thêm lệnh nữa>;
      ...
  }
  else if(<điều kiện 2>)
  {
      //khối lệnh 2
      <thực hiện lệnh 2>;
      <thực hiện thêm lệnh 3>;
  }
  else 
  {
      //khối lệnh 3
      <thực hiện lệnh nè>;
      <thực hiện tiếp nữa nè>;
  }
{% endhighlight %}
Cách hoạt động như sau: khi điều kiện 1 không thỏa nó sẽ xét đến else và nó sẽ xét tiếp điều kiện 2 trong else đó, nếu điều kiện 2 không thỏa nữa thì thực hiện khối lệnh 3 nằm trong else cuối cùng.


### Toán tử 3 ngôi
Một cách sử dụng câu lệnh if else ngắn gọn chỉ với 1 dòng đó là dùng toán tử 3 ngôi như sau:
{% highlight cpp %}
  (<điều kiện>)? <thực hiện khi đúng> : <thực hiện khi sai>;
{% endhighlight %}
Cách này tương tự như cấu trúc cơ bản nhưng ở phần lệnh thực thi bạn chỉ thưc thi được 1 lệnh duy nhất (cấu trúc cơ bản có thể thực thi nhiều lệnh trong khối lệnh).

## Bài toán thực tế
Sau khi học xong thì hãy ôn tập kiến thức qua bài toán dưới đây nhé:
        
**Bài toán trả lương:** một công ty trả lương cho nhân viên theo cách sau:
- Nhân viên sơ cấp: lương += thưởng mức 1
- Nhân viên trung cấp: lương += thưởng mức 2
- Nhân viên siêu cấp: lương += thưởng mức 3
        
Nếu trong quá trình làm, nhân viên bị phạt sẽ tính trừ vào lương như sau:
- Vi phạm cơ bản: lương -= phạt mức 1
- Đại tội: lương -= phạt mức 2
       
Mức lương ban đầu là 10.000.000 (10 triệu)
Cho nhân viên nhập vào cấp độ (sơ - trung - siêu cấp) và loại vi phạm, tính lương cho nhân viên đó.
        
**Bài toán bán hàng:** một quán cơm cần tạo chương trình thanh toán tiền cơm như sau:
- Nếu có thẻ thành viên:
        
    ⇨ Tháng 2: giảm giá 10%
        
    ⇨ Các tháng còn lại: giảm 20%
- Không có thẻ thành viên:
        
    ⇨ Giá gốc
        
    ⇨ Nếu đăng kí thành viên: giảm 50% (một lần duy nhất khi đăng kí)
Giá gốc mỗi phần cơm là 20k. Hãy xác nhận thành viên và tính tiền giá cơm cho người dùng.

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về cấu trúc rẽ nhánh if-else trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~
