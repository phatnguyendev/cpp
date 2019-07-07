---
published: true
layout: post
title: Cơ bản về biến
categories: cpp
img: bai3.png
excerpt_separator: <!--more-->
---
Trong bài này, mình sẽ cùng các bạn đi tìm hiểu về kiểu dữ liệu, hằng, biến, các cách tạo ghi chú cùng với các quy ước đặt tên trong C++. 
<!--more-->
## Biến (variable)
 
**Biến** là một vùng lưu trữ được đặt tên do hệ điều hành cấp phát cho chương trình C++ nhằm lưu trữ một giá trị dữ liệu. Khi tạo một biến, bộ nhớ sẽ dành một không gian nhớ cho biến đó.
- Biến bao gồm kiểu dữ liệu và tên biến. 
- Chức năng: lưu trữ giá trị xử lý.
- Cú pháp định nghĩa biến

{% highlight cpp %}
<kieu_du_lieu> <ten_bien>; //định nghĩa 1 biến
<kieu_du_lieu> <danh_sach_bien>; //định nghĩa nhiều biến
{% endhighlight %}
- Cú pháp khai báo và khởi tạo giá trị cho biến

{% highlight cpp %}
<kieu_du_lieu> <ten_bien> = <gia_tri>; //khai báo và khởi tạo giá trị 1 biến
{% endhighlight %}
Hãy xem một ví dụ để hình dung rõ hơn về biến
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  //Phan dinh nghia bien
  int a;
  float b,c;
  
  //Khoi tao gia tri cho bien
  a = 10;
  b = 5.5;
  c = 2.05;
  
  cout<<a<<endl;
  cout<<b + c<<endl;
  
  system("pause");
  return 0;
}
{% endhighlight %}
Khi định nghĩa nhiều biến, có hai lỗi phổ biến mà các lập trình viên mới có xu hướng mắc phải (Không quan trọng lắm vì trình biên dịch sẽ phát hiện lỗi và yêu cầu bạn sửa chúng)
  
→ **Lỗi đầu tiên** là:
  {% highlight cpp %}
int a, int b;  //Sai (compiler error)
int a, b;  //corect
{% endhighlight %}
→ **Lỗi thứ hai** là đặt hai biến có kiểu dữ liệu khác nhau trên cùng một câu lệnh. Điều này không được phép, các biến có kiểu dữ liệu khác nhau phải được xác định trong hai câu lệnh riêng biệt. 
   {% highlight cpp %}
int a, double b;  //Sai (compiler error)
int a; double b;  //Đúng (không nên dùng)
//Đúng và nên dùng
int a;
double b;
{% endhighlight %}
### Phạm vi biến
  Trong C++, không phải biến nào cũng được sử dụng mọi lúc mọi nơi. Có 2 loại biến:
- Biến toàn cục:  được đặt bên ngoài tất cả các hàm, khối lệnh, có ảnh hưởng tới toàn bộ chương trình, có thể sử dụng ở mọi nơi. Biến không bị hủy sau khi hàm kết thúc, biến chỉ bị hủy khi chương trình đã dừng.
- Biến cục bộ: được đặt bên trong hàm, khối lệnh, chỉ có ảnh hưởng nội bộ bên trong hàm, cấu trúc đó, tính đến cặp dấu ngoặc nhọn {} gần nhất. Biến sẽ bị hủy sau khi hàm thực hiện xong công việc của mình
  
Hãy xem ví dụ bên dưới để hiểu rõ hơn về phạm vi của biến:
{% highlight cpp %}
#include <iostream>
using namespace std;

int b = 0;

int main()
{
  if(true)
  {
      int a = 10;
      cout << b << endl; //OK! vi bien "b" duoc khai bao toan cuc
  }
  cout << a << endl; //error: bien "a" chi duoc dung trong cap if{}
  cout << b << endl; //OK! vi bien "b" duoc khai bao toan cuc
  
  return 0;
}
{% endhighlight %}
<div class="alert alert-info">
Một chương trình có thể có biến toàn cục và biến cục bộ cùng tên nhau nhưng trong một hàm thì giá trị của biến cục bộ sẽ được ưu tiên.
</div>
## Kiểu dữ liệu
  
  **Kiểu dữ liệu** là thành phần bắt buộc khi khai báo biến. Dựa trên kiểu dữ liệu của một biến, hệ thống sẽ cấp phát bộ nhớ và giúp chương trình xác định giới hạn giá trị mà biến đó có thể lưu trữ.
Dưới đây là hai bảng mô tả một số kiểu dữ liệu cơ bản trong C++, kích thước bộ nhớ nó dùng để lưu trữ giá trị trong bộ nhớ và khoảng giá trị mà kiểu dữ liệu đó có thể lưu trữ:
![](https://2.bp.blogspot.com/-ylUVrJfbiAU/XHgLYnxmxUI/AAAAAAAAD5U/U69d_Rk7rDwJmvSxxHR2YOqe2tv9SlSsACLcBGAs/s1600/KDL.PNG)
![](https://2.bp.blogspot.com/-Si86771FYhA/XHgP_LorHtI/AAAAAAAAD5s/e4uTtMRK3wAV7iISy6BHmONPJ2YQkBunACLcBGAs/s1600/KDL1.png)
  
Kích cỡ của kiểu dữ liệu bên trên chỉ là kích thước nhỏ nhất có thể của kiểu dữ liệu đó. Thực tế thì kích thước này phụ thuộc vào từng Compiler và kiến trúc máy tính của bạn và bạn cũng không cần phải nhớ chi cho mệt . Nếu bạn muốn xác định kích thước của các kiểu dữ liệu trên máy tính của bạn, C++ cung cấp một toán tử có tên là sizeof(). Đây là toán tử cho phép nhận một kiểu hoặc một biến và trả về kích thước của nó. Bạn có thể biên dịch và chạy chương trình sau để biết kích thước các kiểu dữ liệu của máy tính bạn:
{% highlight cpp %}
#include <iostream>
using namespace std;
 
int main()
{
    cout << "bool:\t\t" << sizeof(bool) << " bytes" << endl;
    cout << "char:\t\t" << sizeof(char) << " bytes" << endl;
    cout << "wchar_t:\t" << sizeof(wchar_t) << " bytes" << endl;
    cout << "char16_t:\t" << sizeof(char16_t) << " bytes" << endl; // C++11, may not be supported by your compiler
    cout << "char32_t:\t" << sizeof(char32_t) << " bytes" << endl; // C++11, may not be supported by your compiler
    cout << "short:\t\t" << sizeof(short) << " bytes" << endl;
    cout << "int:\t\t" << sizeof(int) << " bytes" << endl;
    cout << "long:\t\t" << sizeof(long) << " bytes" << endl;
    cout << "long long:\t" << sizeof(long long) << " bytes" << endl; // C++11, may not be supported by your compiler
    cout << "float:\t\t" << sizeof(float) << " bytes" << endl;
    cout << "double:\t\t" << sizeof(double) << " bytes" << endl;
    cout << "long double:\t" << sizeof(long double) << " bytes" << endl;
  
    system("pause") //giữ cửa sổ chương trình đang chạy hỗ trợ cho Visual Studio
    return 0;
}
{% endhighlight %}
Đây là kích thước các kiểu dữ liệu của máy mình:
  
![](https://4.bp.blogspot.com/-oLY2v0Khgys/XHjwO1EIs5I/AAAAAAAAD6I/RtDiECdVHSY5jwfkkNDp8R9Z_zQI--dfgCEwYBhgL/s1600/KDL2.PNG)
  
Trong ví dụ Example.cpp, biến a của chúng ta được đưa ra kiểu int, có nghĩa là biến a sẽ đại diện cho một giá trị nguyên. Một số nguyên là một số có thể được viết mà không có thành phần phân số như 4, -2, 0 ... Nói tóm lại, chúng ta có thể nói rằng **a là một biến số nguyên**.
Trong C++, kiểu dữ liệu của biến phải được biết tại thời điểm chương trình được biên dịch và nó không thể thay đổi nếu không biên dịch lại chương trình. Điều này có nghĩa là một biến số nguyên chỉ lưu giữ các giá trị nguyên. Nếu bạn muốn lưu trữ một loại giá trị khác, bạn sẽ cần sử dụng một biến khác.
C++ cũng cho phép bạn tự tạo một kiểu dữ liệu do bạn định nghĩa bằng cách sử dụng **typedef**. Cú pháp đơn giản như sau: 
{% highlight cpp %}
typedef <kieu_du_lieu> <ten_kieu_du_lieu_moi>;
//example
typedef int SoNguyen;
SoNguyen SoHocSinh;
{% endhighlight %} 
Ở ví dụ trên ta tạo một kiểu dữ liệu mới có tên là SoNguyen thuộc kiểu int. Ta khai báo biến SoHocSinh có kiểu dữ liệu là SoNguyen.
### Ép kiểu dữ liệu
Chúng ta thực hiện ép kiểu dữ liệu (casting) trong trường hợp ta muốn biểu diễn giá trị dưới những định dạng kiểu dữ liệu khác nhau hay nói cách khác là chuyển đổi qua lại giữa các kiểu dữ liệu hoặc trong một số trường hợp tính toán cụ thể. Với ngôn ngữ C++, có 2 loại ép kiểu:
- Ép kiểu ngầm định (implicit type conversion)
  
{% highlight cpp %}
float value = 1 //khởi tạo giá trị của biến số thực là giá trị nguyên 1
{% endhighlight %}
Trong ví dụ trên, Complier sẽ chuyển giá trị nguyên 1 thành số thực 1.0 sau đó gán giá trị 1.0 cho biến value. 
- Ép kiểu tường minh (explicit type conversion): là việc chuyển đổi dữ liệu một cách tường mình theo yêu cầu của lập trình viên. Có nhiều loại ép kiểu tường minh nhưng mình sẽ hướng dẫn cách phổ biến nhất.
  
{% highlight cpp %}
//Cach 1:
int a = 10;
float b = (float)a;

//Cach 2:
int a = 10;
float b = float(b);
{% endhighlight %}
Chúng ta sẽ hay gặp trường hợp này trong lập trình và thường xảy ra kết quả sai đó là hai số nguyên chia nhau nhưng kết quả lại ra một số nguyên. Giờ bạn muốn kết quả là số thực để ra kết quả đúng bạn phải thực hiện ép kiểu. Hãy xem đoạn code dưới đây để hiểu rõ hơn:
![](https://4.bp.blogspot.com/-SdTA_OjIFic/XHkRqGrkiYI/AAAAAAAAD6k/R34ai_nqSlEgTQJqUd0ckr7sPmN9fhoPwCLcBGAs/s1600/KDL3.PNG)

  <div class="alert alert-info">
C++ mặc định độ chính xác sau dấy phẩy là 6 chữ số, nhưng bạn có thể thay đổi độ chính xác này bằng cách sử dụng hàm setprecision() thuộc thư viện iomanip.
</div>
  ![](https://4.bp.blogspot.com/-3e2jPXNmLWM/XHkUUE2MU4I/AAAAAAAAD68/PdyTfE3wyYUuY-SaiDs1xYd7G8e3ykrBgCEwYBhgL/s1600/KDL4.PNG)
## Hằng (Constant)
Đôi khi lập trình C++, có một số giá trị ta chỉ muốn khởi tạo một lần duy nhất và giữ nguyên giá trị đó trong suốt thời gian chương trình hoạt động như PI = 3,14....Những giá trị đó gọi là hằng số. Hằng số tương tự như biến chỉ khác ở chỗ giá trị của chúng không thể thay đổi sau khi định nghĩa. Có 2 cách định nghĩa hằng trong C++:
- Sử dụng từ khóa const:
  
	Cú pháp:
  {% highlight cpp %}
const <kieu_du_lieu> <ten_bien> = <gia_tri>;
{% endhighlight %}
  <div class="alert alert-info">
* Lưu ý: Bạn phải khởi tạo giá trị cho hằng số ngay khi định nghĩa nếu không biên dịch chương trình sẽ bị lỗi.
</div>
  Ví dụ:
  {% highlight cpp %}
#include <iostream>
using namespace std;

const int CHIEUDAI = 5;
const int CHIEURONG  = 3;
const char NEW_LINE = '\n';

int main()
{
  int dientich = CHIEUDAI * CHIEURONG; 
  cout << dientich << NEW_LINE;
  
  system("pause");
  return 0;
}
{% endhighlight %}
- Sử dụng bộ tiền xử lý #define:
  
	Cú pháp:
  {% highlight cpp %}
#define <ten_bien> <gia_tri>;
{% endhighlight %}
  Ví dụ:
  {% highlight cpp %}
#include <iostream>
using namespace std;

#define CHIEUDAI  5;
#define CHIEURONG   3;
#define NEW_LINE  '\n';

int main()
{
  int dientich = CHIEUDAI * CHIEURONG; 
  cout << dientich << NEW_LINE;
  
  system("pause");
  return 0;
}
{% endhighlight %}
## Comment
Khi lập trình, hầu hết các lập trình viên đều sử dụng comment để ghi chú lại các lời diễn giải hoặc điều mình muốn nói về đoạn code đó. Điều này giúp mình có thể hiểu được code của chính mình vào ngày hôm sau nhìn lại hoặc cũng giúp bất kỳ ai đọc source code dễ dàng hơn (vì càng sau này thì tần suất làm nhóm càng cao nên việc comment là cần thiết cho các đoạn code phức tạp).
Có 2 kiểu chủ yếu để comment:
- Một dòng comment sẽ đứng sau hai dấu //.
  
   {% highlight cpp %}
cout<<"Tui tu code"<<end; //in ra man hinh dong chu Tui tu code
{% endhighlight %}
- Một đoạn comment sẽ nằm trong cặp dấu /* */
  
   {% highlight cpp %}
/* Day la mot doan comment
Dong 1
Dong 2
...
*/
{% endhighlight %}
## Qui ước đặt tên
→ Hằng số nên được đặt bằng chữ in hoa. Ví dụ: PI, CHIEUDAI, CHIEURONG...
  
→ Biến:
- Tên biến không được bắt đầu bằng ký tự số.
- Nên viết hoa từng chữ cái đầu dòng. Ví dụ: int SoLuong, int HoTen...
- Nên đặt tên biến sao cho ngắn gọn nhưng thể hiện được ý nghĩa của biến
- Có thể sử dụng ký tự gạch chân khi đặt tên biến. Ví dụ: int So_Luong, int Ho_Ten...
- C++ không phân biệt chữ hoa và chữ thường nên hai biến sau int count và int Count là hai biến khác nhau.
- Trong một khối lệnh {} không được có 2 biến trùng nhau.
  
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về **_định nghĩa, chức năng, cú pháp của biến, kiểu dữ liệu, hằng số, cách ép kiểu, cách comment và các quy ước đặt tên là như thế nào..._**Các bạn hãy luyện tập code lại các ví dụ trong bài để nắm và hiểu rõ hơn về cách hoạt động của nó nhé.😉
  
**Bài tập nho nhỏ:**
Tạo hai biến và khởi tạo giá trị cho nó theo ý của bạn, sau đó in ra kết quả các phép toán +, -, *, / của hai biến đó ra màn hình.
 
Các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới. Pie~😘
