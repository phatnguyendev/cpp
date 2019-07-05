---
published: true
layout: post
title: Cơ bản về hàm
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Hi~ Hôm nay chúng ta sẽ học về hàm (function) trong C++, một trong những thứ sẽ gắn kết với các lập trình viên rất rất dài trên con đường coding :) Cùng khám phá nào
## Hàm (function) là gì?
Theo như định nghĩa hàm lâm thì hàm là

> Một chuỗi các câu lệnh có thể tái sử dụng nhằm giải quyết 1 công việc cụ thể

Định nghĩa khá dễ hiểu đúng không? Hàm luôn xuất hiện khi chúng ta code. Khi tạo 1 project mới trong visual studio chúng ta luôn được cung cấp file.c với hàm **main** (nơi chương trình bắt đầu thực thi khi được chạy), đặc trưng của 1 hàm được thấy rõ nhất là có cặp ngoặc tròn ``()`` đi kèm với tên hàm và trong cặp ngoặc này có thể có tham số (1 hoặc nhiều biến) hoặc không có tham số.
### Tại sao phải dùng hàm?
Khi chương trình bạn phức tạp lên với vài trăm dòng code và bạn đặt tất cả vào hàm main thì thật là khó chịu khi phải nhìn liên tục như vậy, đôi khi bạn đang tìm cách sửa 1 chức năng được 1 nhóm các dòng code đảm nhiệm thì cũng chả biết cái nhóm dòng code đang ở đâu trong số hàng trăm dòng này nữa, vậy nên việc dùng hàm để phân nhóm các chức năng trong chương trình của bạn thật sự là cứu tinh tuyệt vời để mỗi khi bạn muốn tìm cách sửa chức năng nào đó thì cứ search tên hàm đang đảm nhiệm chức năng đó là xong.
## Làm quen với cách dùng hàm
Đầu tiên chúng ta sẽ làm quen với cách tạo ra 1 hàm và cách sử dụng nó.
### Khai báo hàm (Declare function), định nghĩa hàm (Define function) và sử dụng hàm (fuction call)
Ví dụ mình muốn tạo hàm có tên TinhTong để thực hiện chức năng cộng 2 số kiểu int thì sẽ có như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int TinhTong(int a, int b) {
    	// thực hiện việc tính tổng
  		return a + b;
    }
     
    int main() {
    	int a = TinhTong(2, 3);
    	return 0;
    }
{% endhighlight %}
Một số thông số của hàm TinhTong:
 - Kiểu trả về là ``int`` : có nghĩa là sau khi thực hiện xong việc tính tổng 2 số, kết quả thu được sẽ được trả về với kiểu int (cộng 2 kiểu int đương nhiên ra kiểu int rồi), cái này do chúng ta tự định nghĩa tùy theo ý muốn.
 - Tên hàm là ``TinhTong`` : tên này do các bạn đặt, phù hợp với chức năng và dễ nhớ là OK.
 - Tham số truyền vào là a (kiểu int) và b (kiểu int): đây là 2 tham số chúng ta cần cho việc tính tổng, 2 tham số này sẽ được truyền ở trong hàm gọi hàm TinhTong (trường hợp trên là ở hàm main và tham số a = 2, b = 3).
 - Phần body (bên trong cặp ngoặc nhọn - block): bên trong chúng ta sẽ code vài dòng lệnh để thực hiện việc tính tổng.
 - Trong phần body có 1 điểm cần lưu ý đó là từ khóa ``return``, đây là từ khóa giúp đưa dữ liệu bạn muốn ra cho "ai" đã gọi hàm này (trường hợp trên return sẽ trả về giá trị 2 + 3 và biến a sẽ nhận giá trị này). Đây là từ khóa bắt buộc khi hàm có kiểu trả về (ngoại trừ kiểu void).

<div class="alert alert-info">Với hàm main chúng ta thấy với kiểu trả về là int thì hàm luôn phải có từ khóa return và trong trường hợp này hàm main trả về 0 với ý nghĩa chương trình chạy ổn.</div>
  
Cách gọi hàm khá đơn giản như mình đã gọi hàm TinhTong trong hàm main để thực thi lệnh 2 + 3 và gán kết quả cho biến a.
  
### function prototype
Đây là cách khai báo mà không cần phải định nghĩa thân hàm (body), mình sẽ tạo function prototype cho hàm TinhTong như sau
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
	//function prototype TinhTong
    int TinhTong(int, int);
     
    int main() {
    	int a = TinhTong(2, 3);
    	return 0;
    }
  
     int TinhTong(int a, int b) {
    	// thực hiện việc tính tổng
  		return a + b;
    }   
{% endhighlight %}
 Nếu bạn muốn cho hàm main gọi 1 hàm được khai báo bên dưới hàm main, trình biên dịch sẽ báo lỗi nếu bạn không dùng prototype, với prototype trình biên dịch sẽ "tin tưởng" rằng sẽ có 1 hàm TinhTong được khởi tạo và vì thế chương trình sẽ không gặp vấn đề gì cả. Thực tế bạn sẽ dùng prototype khi làm việc với file .h (sẽ được học ở phần sau).
  
Việc khai báo prototype rất đơn giản và dễ nhớ, đặc biệt trong phần tham số truyền vào bạn không cần thiết phải đặt tên cho tham số đó (như mình chỉ ghi mỗi int,int).
### Hàm void
Đặc trưng của hàm void là không cần dùng từ khóa return, nếu bạn thích có thể dùng từ khóa return như 1 lệnh ngắt cho hàm (khi gặp return hàm sẽ tự động kết thúc), mình sẽ khởi tạo 1 hàm void như sau:
{% highlight cpp %}
    #include <iostream>
	#include <string>
    using namespace std;
     
	//function prototype TinhTong
    void XinChao(string name) {
  		//return;
  		cout << "Xin chao " << name << endl;
  	}
     
    int main() {
    	XinChao("Ti");
    	return 0;
    }  
{% endhighlight %}
Trong hàm void XinChao mình có in ra 1 câu xin chào với tên (là tham số kiểu string được truyền vào). Bạn hãy chú ý vài điều sau về hàm void:
