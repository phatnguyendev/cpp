---
published: true
layout: post
title: Chuỗi kí tự (C-style string)
categories: cpp
img: image-2.png
excerpt_separator: <!--more-->
---
Hi~! Chúng ta đã cùng học qua về mảng trong những bài trước, bài này chúng ta sẽ tìm hiểu về loại mảng hỗ trợ cho chuỗi kí tự đó là C-style strings. Nào bắt đầu thôi!
## C-style trings là gì?
Là một kiểu mảng chứa các kí tự và được kết thúc bằng '\0' (kí tự kết thúc hay null terminator, có mã ascii là 0). Để định nghĩa một c-style string chúng ta thực hiện khai báo sau:
{% highlight cpp %}
	char cstring[] = "Hello";
{% endhighlight %}
Ở mảng trên chúng ta khai báo chuỗi "Hello" với độ dài là 5 kí tự nhưng độ dài thực sự của nó sẽ là 6 vì nó luôn được tự động thêm vào ở cuối chuỗi 1 kí tự kết thúc '\0' . Để thấy được điều đó bạn có thể dùng cách kiểm tra độ dài mảng ở bài [Giới thiệu về mảng](https://phatnguyendev.github.io/cpp/gioi-thieu-ve-mang/)
## Vài vấn đề liên quan
Bạn có thể truy xuất hoặc thay đổi giá trị của từng phần tử trong mảng kí tự như cách truy xuất ở mảng bình thường.

Đối với phần xuất mảng sẽ có 1 vài thứ bạn cần lưu ý đến. Đầu tiên là cách xuất 1 mảng kí tự bằng std::cout đơn giản hơn so với mảng bình thường đó là bạn chỉ cần gọi tên mảng ra mà không cần phải dùng for duyệt hết phần tử có trong mảng.

Thứ 2 là lỗi thiếu hoặc không có kí tự kết thúc '\0', lúc này std::cout sẽ in ra màn hình những gì? Nó sẽ tiếp tục in ra những gì nằm trong các ô nhớ gần kề cho đến khi gặp kí tự kết thúc khác, đây không phải là những gì chúng ta mong đợi được in ra màn hình nên các bạn cần tránh nó bên dưới là 2 cách để triệt tiêu kí tự kết thúc mà các bạn nên biết (để tránh):
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
	char cstring[] = "Hello"; // OK! mọi thứ đều ổn
	char pstring[20]; // OK! có thể vẫn ổn
  // thử khởi tạo cho nó 1 vài phần tử
  pstring[0] = 'H';
  pstring[1] = 'e';
  pstring[2] = 'l';
  pstring[3] = 'l';
  pstring[4] = 'o';
  
  // bắt đầu chơi ngu dính lỗi
  cstring[5] = '!' //À ha! bạn đang ghi đè lên kí tự kết thúc rồi đấy
  
	cout << cstring << endl; //in ra ngoài mong đợi chắc rồi!
  
	cout << pstring << endl; // còn mảng này thì sao?
                           // hình như chúng ta quên thứ gì đó rồi! à là kí tự kết thúc :)
  
  // VÀ KẾT QUẢ CHƯƠNG TRÌNH IN SAI BE BÉT
	return 0;
}
{% endhighlight %}

<div class="alert alert-info">
Như các bạn thấy ở mảng ``pstring`` khi bạn phải tự khai báo phần tử thì đừng quên thêm vào kí tự kết thúc '\0' và tốt nhất là đừng nên khai báo như vậy, hãy tìm hiểu cách khai báo mảng kí tự hiệu quả ở bên dưới nhé.
</div>

Cách khai báo chuẩn nhất và hay dùng nhất là:
- Khai báo cho mảng có chuỗi kí tự sẵn
{% highlight cpp %}
	char cstring[20] = "Hello";
{% endhighlight %}
- Khai báo cho mảng chưa có chuỗi kí tự
{% highlight cpp %}
	char cstring[50];// ước tính kích thước mảng
	//sao cho có thể dư chứ không được thiếu
{% endhighlight %}
### cin.getline()
Hàm này dùng để làm gì? Nó giải quyết cho chúng ta 2 vấn đề phổ biến sau:
- Khi nhập chuỗi kí tự có khoảng trắng (ấn space) từ cin thì mảng của chúng ta chỉ nhận được 1 chuỗi trước khoảng trắng đầu tiên, bạn có thể thử nhập "Hello World" xem chương trình của mình in ra chữ gì nha.
- Bạn khởi tạo mảng kí tự tức là đã cố định kích thước của mảng, vậy khi bạn nhập quá kích thước của mảng thì sao? Bạn hãy code thử xem sao :)

Nếu bạn gặp lỗi gì đó với 2 vấn đề mình nói trên thì đến lúc bạn dùng đến hàm cin.getline() rồi đó, công dụng của nó là đưa cả những kí tự khoảng trắng được nhập vào trong mảng và bỏ qua những kí tự thừa khi bạn nhập vượt quá kích thước mảng. Tiện lợi quá đúng không nào và để xử dụng nó các bạn làm như sau:
{% highlight cpp %}
char cstring[20];
cin.getline(cstring, 20);
{% endhighlight %}
### Thư viện cstring
Để hổ trợ tốt hơn trong khi làm việc với mảng kí tự, C++ đã tích hợp nhiều function có ích trong thư viện cstring, chúng ta cùng xem qua 1 vài function hữu ích nhất mà mình biết nhé:

``strlen()`` - Lấy độ dài của mảng kí tự.  
  
``strcpy_s()`` - Coppy nội dung của mảng này sang mảng khác. 
  
``strcat()`` - Nối một chuỗi vào chuỗi khác (nguy hiểm)
  
``strncat()`` - Nối một chuỗi vào chuỗi khác (với kiểm tra độ dài bộ đệm).
  
``strcmp()`` - So sánh hai chuỗi (trả về 0 nếu bằng nhau).
  
``strncmp()`` - So sánh hai chuỗi với một số ký tự cụ thể (trả về 0 nếu bằng nhau).
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về mảng kí tự (C-style strings) trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page [Tui Tự Code](https://www.facebook.com/shareAboutIT) để cập nhật các bài viết mới nhé. Pie~