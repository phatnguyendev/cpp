---
published: true
layout: post
title: Vấn đề nhập xuất và thư viện iostream
categories: cpp
img: bai5.png
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
{% highlight cpp %}
#include <iostream>

int main()
{
    int x;
    std::cout << "Nhập giá trị x =\n"; 
    std::cin >> x;
    std::cout << "Giá trị x vừa nhập là " << x << endl;
    return 0;
}
{% endhighlight %}
  
### std::endl và '\n'
Sau mỗi dòng cout các bạn thường thấy "<<endl;" hoặc "\n" đúng không? Và chắc nhiều bạn khi chạy chương trình cũng hiểu ra tác dụng của nó rồi. std::endl sẽ thực hiện 2 công việc: đưa con trỏ chuột đến dòng phía dưới và làm sạch output (việc này cout thường xuyên làm nên không quan trọng lắm)

Vì chức năng thứ 2 của endl là không quá cần thiết, nên 1 lựa chọn thay thế hoàn hảo nếu bạn chỉ muốn xuống dòng tiếp theo là '\n' (nó tốt hơn endl về mặt hiệu suất chương trình do không có chức năng thứ 2 của endl) mặt khác nó vừa ngắn hơn vừa có thể thêm vào trong text.

Những điểm lưu ý về '\n':
- Chú ý kí tự '\n' chứ không phải '/n'
- Khi dùng nó một mình bắt buộc thêm dấu ngoặc đơn, khi thêm trong text không cần thiết.
VD:
{% highlight cpp %}
//dùng 1 mình
cout << "Dùng kí tự sau toán tử chèn" << '\n';
//dùng khi thêm trong text
cout <<"Dùng kí tự khi thêm trong text\n";
{% endhighlight %}
<div class="alert alert-info">
Nếu các bạn thấy bất tiện khi mỗi lần dùng đều phải ghi thêm std:: vào trước (chẳn hạn std::cout) thì hãy dùng đoạn code using namspace std trước hàm main() nhé, còn nó là gì thì ở bài sau các bạn sẽ được hiểu rõ hơn 😁
</div>

## Một số vấn đề về nhập xuất và cách giải quyết
### Kiểm tra việc nhập vào sai kiểu giá trị
Giả sử bạn muốn user chỉ nhập vào giá trị từ 1 đến 10, nếu nhập bất cứ kí tự gì khác ngoài số thì bắt nhập lại các bạn làm như sau:
{% highlight cpp %}
#include <iostream>
using namespace std;
 
int main()
{
    int number = 0;
    do
    {
        std::cout << "Nhập số trong khoảng từ 1 đến 10: ";
        std::cin >> number;
 
        // if the user entered an invalid character
        if (std::cin.fail())
            std::cin.clear(); // reset any error flags
 
        std::cin.ignore(32767, '\n'); // ignore any extra characters in the input buffer
 
    } while (number < 1 || number > 10);
  return 0;
}
{% endhighlight %}
  
## Tổng kết
Vậy là chúng ta đã tìm hiểu qua 3 chức năng cơ bản có trong thư viện iostream thông qua **cin, cout** và **endl** ngoài ra còn có kí tự xuống dòng **'\n'**. Trong bài tiếp theo chúng ta sẽ tìm hiểu thêm một số thư viện rất hữu dụng khác có sẵn trong C++ và **namespace**, hẹn gặp lại các bạn ở các bài tiếp theo.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~
