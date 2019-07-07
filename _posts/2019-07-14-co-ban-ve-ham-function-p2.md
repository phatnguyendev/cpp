---
published: true
layout: post
title: Cơ bản về hàm phần 2
categories: cpp
img: bai13.png
excerpt_separator: <!--more-->
---
Ở phần đầu chúng ta đã cùng tìm hiểu sơ qua về hàm, các kiểu khai báo..v.v Và trong bài hôm nay ta sẽ đi sâu hơn 1 chút về các tham số truyền vào hàm, nào Let's go!
## Các loại tham số
Đầu tiên mình sẽ giới thiệu trước về các loại tham số chúng ta sẽ tìm hiểu trong bài này:
- Truyền tham trị
- Truyền tham chiếu
- Tham số mặc định

### Truyền tham trị
Tham trị là loại tham số truyền theo kiểu bình thường, xét đoạn code sau
{% highlight cpp %}
#include <iostream>
using namespace std;
 
float TinhTong(float a, float b) {
	// thực hiện việc tính tổng
  	a = 4.2;
  	b = 5.6;
	return a + b;
}
 
int main() {
	// your code goes here
	float a {5.44};
	float b {6.14};
	cout << TinhTong(a, b) << endl;
  	cout << a << endl;
  	cout << b << endl;
	return 0;
}
{% endhighlight %}
Kết quả chương trình trên là
{% highlight cpp %}
	9.8
	5.44
	6.14
{% endhighlight %}
Như các bạn thấy, mặc dù trong hàm mình đã đổi giá trị của 2 tham số a và b và trả về tổng của 2 tham số này (với giá trị mới) kết quả là giá trị của hàm xuất ra đúng bằng tổng 2 giá trị mà mình đã thay đổi (4.2 + 5.6) nhưng khi xuất ra biến a và b thì giá trị của nó vẫn không đổi. Đó là cơ chế hoạt động của tham trị.

**Giải thích:** Sau khi biến được truyền vào, biến a và b mà chúng ta thay đổi giá trị thực chất là 1 bản copy của 2 tham số (địa chỉ bộ nhớ khác nhau nhưng giá trị thì được copy sang tức là tạo ra 2 biến a b mới có giá trị như 2 biến được truyền vào) nên mọi thay đổi của chúng ta trong hàm sẽ không làm thay đổi các biến tham số.
### Truyền tham chiếu
Tham chiếu là loại tham số truyền trực tiếp, ngược lại hoàn toàn với tham trị
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    float TinhTong(float &a, float &b) {
    	// thực hiện việc tính tổng
      	a = 4.2;
      	b = 5.6;
    	return a + b;
    }
     
    int main() {
    	// your code goes here
    	float a {5.44};
    	float b {6.14};
    	cout << TinhTong(a, b) << endl;
      	cout << a << endl;
      	cout << b << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình trên là
{% highlight cpp %}
	9.8
	4.2
	5.6
{% endhighlight %}
Bây giờ giá trị 2 biến a và b đã thực sự thay đổi theo giá trị chúng ta gán chúng trong hàm. Giải thích đơn giản là khi truyền bằng tham chiếu (toán tử &) thì sẽ không có bản copy nào được tạo ra như tham trị, thay vào đó chúng ta đang thao tác trực tiếp trên biến mà chúng ta truyền vào. Các bạn có thể kiểm chứng bằng cách cout địa chỉ của 2 biến trong hàm TinhTong với 2 biến trong hàm main như sau
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    void TinhTong(float &a, float &b) {
    	// thực hiện việc tính tổng
      	a = 4.2;
      	b = 5.6;
      	cout << "Dia chi bien a trong TinhTong la " << &a << endl;
      	cout << "Dia chi bien b trong TinhTong la " << &b << endl;
    }
     
    int main() {
    	// your code goes here
    	float a {5.44};
    	float b {6.14};
    	TinhTong(a, b);
      	cout << "Dia chi bien a trong main la " << &a << endl;
      	cout << "Dia chi bien b trong main la " << &b << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả thu được là địa chỉ biến tương ứng trong 2 hàm giống nhau:
{% highlight cpp %}
	Dia chi bien a trong TinhTong la 0x7fff402725a8
	Dia chi bien b trong TinhTong la 0x7fff402725ac
	Dia chi bien a trong main la 0x7fff402725a8
	Dia chi bien b trong main la 0x7fff402725ac
{% endhighlight %}
**Lưu ý:** khi bạn truyền tham số vào hàm là mảng, mặc định nó là kiểu truyền theo tham chiếu nên mọi thứ bạn thay đổi trong mảng sẽ ảnh hưởng trực tiếp đến mảng.
### Tham số mặc định
Ta xét ví dụ sau
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int TinhTong(int a =1, int b=0) {
    	// thực hiện việc tính tổng
    	return a + b;
    }
     
    int main() {
    	// your code goes here
    	float a {5.44};
    	float b {6.14};
    	cout << TinhTong() << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả của chương trình trên là
{% highlight cpp %}
	1
{% endhighlight %}
Để ý thấy ở hàm main, mình không truyền gì vào hàm TinhTong cả nhưng kết quả ta vẫn nhận được là 1. Đó là vì mình đã đặt giá trị mặc định cho 2 tham số a và b bằng cách như đoạn code mình làm, tham số a và b lúc này được gọi là tham số mặc định.

**Lưu ý:** nếu các bạn chỉ muốn đặt a làm tham số mặc định, các bạn phải để nó ở sau cùng, các khai báo bên dưới sẽ không hợp lệ
{% highlight cpp %}
	int TinhTong(int a=0;int b)
{% endhighlight %}
mà phải là
{% highlight cpp %}
	int TinhTong(int b;int a=0)
{% endhighlight %}
Một lưu ý khác đó là khi bạn sử dụng prototype (xem ở bài trước) các bạn chỉ cần đặt giá trị mặc định ở prototype, không được đặt ở cả prototype và phần định nghĩa phía sau, phần code sau sẽ gây ra lỗi:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int TinhTong(int=1, int=0);
     
    int main() {
    	// your code goes here
    	float a {5.44};
    	float b {6.14};
    	cout << TinhTong() << endl;
    	return 0;
    }
  	
    int TinhTong(int a =1, int b=0) { //khai báo giá trị mặc định 1 lần nữa sẽ gây ra lỗi
    	// thực hiện việc tính tổng
    	return a + b;
    }  	
{% endhighlight %}
## Tổng kết
Hãy take note phần này nhé, khi các bạn code về sau sẽ hữu dụng rất nhiều đó. Pie~
