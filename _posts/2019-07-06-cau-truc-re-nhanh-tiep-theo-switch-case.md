---
published: true
layout: post
title: Cấu trúc rẽ nhánh tiếp theo (switch - case statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Hi ~ Hôm nay chúng ta sẽ cùng đến với một dạng cấu trúc rẽ nhánh khác tương tự if-else statement đó là switch-case statement dùng để làm cho code đẹp và tối ưu hơn trong nhiều trường hợp so với if-else, nào chúng ta hãy cùng xem cách nó tối ưu code như thế nào nhé.
<!--more-->
Đầu tiên hãy cùng xem qua cách hoạt động của lệnh swich-case bằng mô hình dưới đây:
![](https://2.bp.blogspot.com/-aOeDhNHUwAg/XHqeNrZ3sgI/AAAAAAAAAe8/4kQSqIOt_O4SqYY6cTTvr5hwQjiubjy7QCK4BGAYYCw/s400/bai6.PNG)

## Cấu trúc cơ bản
Sau khi các bạn đã xem hình, hãy xem qua cấu trúc mã giả của nó:
{% highlight cpp %}
  switch(<expression>)
  {
      case 1:
      <khối lệnh 1>
      break;
      case 2:
      <khối lệnh 2>
      break;
      case 3:
      <khối lệnh 3>
      break;
      default:
      <khối lệnh default>
  }
{% endhighlight %}
Rồi giờ là phần giải thích, lệnh switch-case sẽ đánh giá biểu thức đưa vào (**expression**) và thực thi  khối lệnh ở **case** tương ứng với giá trị của expression đó và nếu không tìm được giá trị case nào phù hợp, khối lệnh ở **default** sẽ được thực thi (tương tự như cách dùng điều kiện else if ở bài if-else statement). Mình sẽ giải thích rõ hơn ở từng câu chữ trong lệnh:
- **<expression>**: đây là biểu thức cần đánh giá, thường sử dụng nhất là đưa vào 1 **biến (variable)** và giá trị của biến đó sẽ quyết định xem nên thực hiện khối lệnh ở case nào.
- **case 1**: chương trình sẽ thực thi khối lệnh 1 khi **giá trị** của expression là 1. VD: bạn có 1 expression kiểu char và muốn khi nó là chữ 'a' thì thực hiện lệnh abc gì đó thì sẽ tạo case như sau: case 'a': <khối lệnh abc> break;
        
	Lưu ý: giá trị của case phải là duy nhất (không thể có 2 case 1)
- **<khối lệnh 1>**: chứa 1 hoặc nhiều lệnh và sẽ được thực thi khi giá trị expression rơi vào case của khối lệnh đó.
- **break**: sau khi thực hiện xong khối lệnh trong 1 case, break sẽ có chức năng thoát ra khỏi switch-case hiện tại, nếu không có break chương trình sẽ tiếp tục thực thi khối lệnh của case bên dưới cho đến khi gặp break.
- **default**: khi giá trị của expression không rơi vào bất cứ case nào, default chính là nơi "cứu rỗi" nó, chương trình sẽ thực thi khối lệnh trong default nếu xảy ra trường hợp như vậy.
	Lưu ý: chỉ có 1 default duy nhất trong 1 lệnh switch-case.
Chúng ta có thể dùng 1 khối lệnh cho nhiều case như ví dụ dưới đây mình có hàm **DayofMonth** kiểu **int** để cho biết tháng nhập vào có bao nhiêu ngày (chúng ta sẽ tìm hiểu về hàm kĩ hơn ở những bài sau)
{% highlight cpp %}
#include <iostream>
using namespace std;
int DayofMonth(int m)
{
  switch(m)
  {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return 28;//ở đây mình mặc định tháng 2 luôn có 28 ngày
    default:
      return 30;  
  }
}
{% endhighlight %}

## Một số điều kiện để dừng một lệnh switch-case
Trong một vài trường hợp nào đó chúng ta chỉ muốn chương trình thực thi xong khối lệnh trong case xyz nào đó rồi thoát ra thì cách đơn giản nhất là dùng thêm câu lệnh break ngay sau đó nhưng đó không phải là cách duy nhất, lệnh switch-case có thể được dừng khi:
- Gặp lệnh goto
- Gặp lệnh return
- Một vài thứ khác như gặp hàm exit() hoặc khi chạy hết lệnh switch-case 😜
       
## Vấn đề phổ biến khi dùng lệnh switch-case
Một trong những vấn đề phổ biến nhất là khai báo và khởi tạo biến trong case, bạn có thể khai báo biến đó trước rồi khởi tạo giá trị cho nó sau chứ không thể vừa khai báo vừa khởi tạo ngay giá trị cho nó được, mặt khác biến được khai báo trong case có thể được sử dụng ở những case khác. Khó hình dung quá nhỉ? cùng xem đoạn code dưới đây để hiểu rõ nào
{% highlight cpp %}
#include <iostream>
int main()
{
  int c;
  switch(c)
  {
    int a; // OK!
    int b = 5; // FAIL! không thể vừa khai báo vừa khởi tạo giá trị trước case
 
    case 1:
        int y; // OK!
        y = 4; // OK!
        break;
 
    case 2:
        y = 5; // OK! (y được khai báo ở case 1)
        break;
 
    case 3:
        int z = 4; // FAIL! không thể vừa khai báo vừa khởi tạo giá trị trong case
        break;
 
    default:
        std::cout << "default case" << std::endl;
        break;      
  }
}

void AnotherWay(int c)
{
  //cách tốt nhất để vừa khai báo vừa khởi tạo giá trị cho biến trong case là thêm {} (tạo ra 1 block)
  switch(c)
  {
    case 1:
      {
        int d = 5; // OK!
        break;
      }
    default:
      return;
  }
}
{% endhighlight %}
Ngoài ra khi code bạn có thể gặp phải nhiều vấn đề nan giải khác và khi đó câu trả lời luôn có sẵn trên Google 😀

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về một cấu trúc rẽ nhánh khác là switch-case trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~