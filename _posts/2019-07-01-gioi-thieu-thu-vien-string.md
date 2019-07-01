---
layout: post
title: Giới thiệu thư viện string
categories: cpp
img: image-4.png
published: true
---
Hi~! Hôm nay chúng ta sẽ cùng tìm hiểu về 1 trong những thư viện chuẩn (standard library) của C++ được sử dụng phổ biến nhất đó là thư viện **std::string**
## Vấn đề mở đầu
Lấy ví dụ 1 chương trình đơn giản cho phép bạn nhập vào họ tên và xuất ra dòng thông báo "xin chào {{tên vừa nhập}}", theo như chúng ta đã học từ bài đầu đến giờ thì sẽ được viết như sau:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main() {
  char HoTen[255];
  cout << "Nhap ho ten: ";
  cin.getline(HoTen, 255);
  cout << "Ho Ten cua ban la " << HoTen << endl;
  return 0;
}
{% endhighlight %}
Và khi chạy chương trình chúng ta nhận được kết quả:
{% highlight cpp %}
  Nhap ho ten: Nguyen Phat
  Ho Ten cua ban la Nguyen Phat
{% endhighlight %}
OK! Không có gì sai cả, nhưng để ý thấy ở đây mình dùng mảng kí tự HoTen và như bài học trước ta thấy mảng kí tự này có rất nhiều thứ cần phải cẩn trọng trong quá trình sử dụng và mặt khác việc fix số lượng kí tự là 255 không phải là cách tốt trong trường hợp này (giả sử nếu bạn cần nhập dữ liệu quá 255 kí tự thì chương trình chỉ in ra 255 kí tự đầu mà thôi). Vậy có cách nào để việc thao tác với các dạng chuỗi kí tự như thế này trở nên dễ dàng hơn không? Dĩ nhiên rồi đó là lí do tồn tại thư viện std::string :) Xem nó là gì nhé!
  
## Thư viện string
### Cách sử dụng
Để sử dụng thư viện string, các bạn link thư viện đó vào bằng cách thêm dòng 
{% highlight cpp %}
  #include <string>
{% endhighlight %}
### Ví dụ đơn giản
Trở lại với ví dụ ban đầu, mình sẽ dùng string thay cho mảng kí tự như sau:
{% highlight cpp %}
#include <iostream>
#include <string> //nhớ thêm dòng này nhé
using namespace std;
int main() {
	string HoTen;
	cout << "Nhap ho ten: ";
	cin >> HoTen;
	cout << "Ho Ten cua ban la " << HoTen << endl;
	return 0;
}
{% endhighlight %}
Và khi chạy chương trình chúng ta nhận được kết quả:
{% highlight cpp %}
  Nhap ho ten: Nguyen Phat
  Ho Ten cua ban la Nguyen
{% endhighlight %}
Nhìn code gọn và dễ hiểu hơn nhiều đúng không nào, nhưng hình như sai sai gì đó? tại sao chỉ in ra mỗi chữ "Nguyen" thôi nhờ. À ha lỗi này là do khi dùng toán tử nhập **>>** thì chỉ đọc dữ liệu đến khoảng trắng đầu tiên thôi các bạn lưu ý nhé!
OK để fix thì chúng ta sẽ dùng std::getline() để có thể đọc được hết những gì nhập vào:
{% highlight cpp %}
  //cin >> HoTen;
  getline(cin >> ws, HoTen);
{% endhighlight %}
Và chạy lại chương trình thì sẽ ra full text như mình mong muốn.
### Hiện tượng "trôi dòng"
Với sự lợi hại của string thì hầu như ai cũng sẽ sử dụng thường xuyên nó và mình cũng vậy, trong quá trình code mình bị 1 lỗi khá "kì quặc" với mình lúc đó. Mình sẽ minh họa lại lỗi bằng ví dụ sau
  
  **Yêu cầu:** Cho người dụng chọn số 1 hoặc 2, sau đó người dùng nhập tên và xuất ra thông báo: "Xin chao, {{tên bạn nhập}}, ban da chon {{số mà bạn chọn}}".
Và đây là phần code (with bug):
{% highlight cpp %}
#include <string>
#include <iostream>
int main()
{
   cout << "Chọn 1 hoặc 2: ";
   int choice { 0 };
   cin >> choice;
 
   cout << "Nhap ten cua ban: ";
   string name;
   getline(cin, name); 
   cout << "Xin chao, " << name << ", ban da chon " << choice << endl;
    return 0;
}
{% endhighlight %}
Nhìn có vẻ ổn và biên dịch cũng không báo lỗi gì nhưng khi bạn nhập số 1 hoặc 2 cho phần cin đầu tiên thì bạn không có cơ hội để nhập tên nữa và nó sẽ xuất thẳng thông báo với tên trống, tức là nó đã bỏ qua dòng **getline(std::cin, name)** bằng 1 cách nào đó và đó chính là hiện tượng trôi dòng!
  
  **Giải thích lỗi:** Lỗi này phát sinh do dùng cin, ví dụ bạn nhập giá trị 1 thì lúc này cin sẽ lấy giá trị nhập thực sự là "1\n". "1" sẽ được cho vào biến choice và "\n" sẽ bị kẹt lại trong input stream vì thế nên khi lện getline()thực thi nó sẽ nhận sẵn "\n" đang có trong input stream và đi đến dòng thông báo. Chuyện xảy ra vậy đó!
  
  **Sửa lỗi:** Có vài lưu ý cho việc fix lỗi trên các bạn nhớ note lại nhé
  - Khi dùng cin: sau cin bạn nên dùng câu lệnh cin.ignore(32767, '\n');
  - Khi dùng getline(): bạn chú ý phần getline() ban đầu mình dùng getline(**cin >> ws**, {{tên biến}});, và đó là cách fix -> luôn dùng cin >> ws khi sử dụng getline().
  
### Nối các chuỗi trong string
Bạn có string Ho và 1 string Ten, bây giờ bạn muốn gộp dữ liệu trong 2 string này lại thì hãy sử dụng toán tử +
{% highlight cpp %}
string Ho = "Nguyen";
string Ten = "An";
string Full = Ho + Ten; // Full = "NguyenAn"
{% endhighlight %}
### Mở rộng
String còn hỗ trợ thêm rất nhiều function tiện ích như length() - để lấy độ dài chuỗi, clear() - xóa nội dung chuỗi, empty() - kiểm tra chuỗi rỗng ..v.v Khi muốn sử dụng thêm chức năng các bạn vào [http://www.cplusplus.com/reference/string/string/](http://www.cplusplus.com/reference/string/string/) để tìm nhé.

## Tổng kết
Thư viện string rất hữu ích trong suốt quá trình code C++ nên các bạn nhớ các nội dung mình đã nói phía trên để tiện dùng nha :) Pie~
  fdfsdfgfdgdfg
