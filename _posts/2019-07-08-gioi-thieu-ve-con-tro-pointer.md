---
published: true
layout: post
title: 'Giới thiệu về con trỏ '
categories: basic
img: bai19.png
excerpt_separator: <!--more-->
---
Cuối cùng cũng đến phần ám ảnh nhất trong ngôn ngữ C++ đó chính là con trỏ (pointer), và trong loại bài viết sắp tới chúng ta sẽ cùng tìm hiểu con trỏ là gì? Những thứ liên quan đến con trỏ mà chúng ta nên biết để không bị "lạc lối". Thư giãn và tập trung high độ nhé :)

## Vài thứ khởi động
Khi chúng ta khai báo 1 biến như sau:
{% highlight cpp %}
int bien = 5;
{% endhighlight %}
Đến bài học này chắc các bạn sẽ biết được ý nghĩa của câu lệnh trên rồi đúng không? Đơn giản là khởi tạo 1 biến kiểu **int** có tên là ``bien``  và gán giá trị cho nó bằng ``5`` và đây không phải là thứ chúng ta sẽ học trong bài này, mặt khác khi khởi tạo biến ``bien`` thì sẽ được cấp phát 1 địa chỉ của vùng nhớ trống nào đó và giá trị 5 sẽ được lưu tại địa chỉ này, giả sử địa chỉ được cấp phát là ``1365`` vậy tóm lại chúng ta có:
{% highlight cpp %}
Tên biến: bien
Giá trị: 5
Địa chỉ: 1365
{% endhighlight %}
Bất cứ khi nào chương trình thấy biến ``bien`` xuất hiện (trong 1 biểu thức hoặc câu lệnh) thì trình biên dịch sẽ  dịch tên biến này thành địa chỉ bộ nhớ được gán cho nó (theo ví dụ là 1365) để lấy được giá trị ra dùng. Vậy làm cách nào từ 1 biến có thể lấy ra được địa chỉ của nó? và khi có được địa chỉ thì có lấy được luôn giá trị không? Cùng đọc tiếp nào.
## Một số toán tử liên quan
### Toán tử &
Để lấy được chính xác địa chỉ đã được cấp phát cho 1 biến, ta sử dụng toán tử & (The address-of operator)như sau:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
    int bien = 5;
    cout << &bien << endl;
    return 0;
}
{% endhighlight %}
Kết quả khi mình chạy trên [Ideone.com](https://ideone.com/9aFkY5) là:
{% highlight cpp %}
0x7ffe3e1f7b1c
{% endhighlight %}
Nếu các bạn đọc qua bài về ``Function`` để ý thấy có loại truyền tham số vào hàm là tham chiếu cũng có cách khai báo với toán tử & và mục đích sử dụng mình cũng đã nói ở bài đó, bạn nào chưa xem thì xem tại {Link bài function}
### Toán tử *
Khi chúng ta có được địa chỉ bằng toán tử &, làm sao lấy ra được giá trị từ địa chỉ đó? Câu trả lời là sử dụng toán tử * (The dereference operator):
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
    int bien = 5;
    cout << "Dia chi cua bien la " << &bien << endl;
    cout << "Gia tri tai dia chi cua bien la " << *(&bien) << endl;
    return 0;
}
{% endhighlight %}
Kết quả khi mình tiếp tục chạy trên [Ideone.com](https://ideone.com/9aFkY5) là:
{% highlight cpp %}
Dia chi cua bien la 0x7ffd0899cc3c
Gia tri tai dia chi cua bien la 5
{% endhighlight %}
OK vậy là các bạn đã biết qua cách dùng 2 toán tử & và *, đồ nghề đã đủ đến lúc chúng ta đi săn "con trỏ" thôi!
## Con trỏ - nổi ám ảnh đến từ C++
### Định nghĩa
Con trỏ (pointer) trong C++ là biến mà giá trị của nó chứa địa chỉ bộ nhớ.
### Cài đặt con trỏ
Biến con trỏ được khai báo như biến bình thường với dấu * ở phía trước tên (không phải toán tử * đâu nhé chỉ là * để cho dễ phân biệt theo C++ qui định thôi)
  
Định nghĩa 1 vài con trỏ như bên dưới:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
    int *ptr1; // con trỏ kiểu int
    double *ptr2; // con trỏ kiểu double
    float* ptr3; // con trỏ kiểu float
    char * ptr4; //con trỏ kiểu char
    return 0;
}
{% endhighlight %}
  
**Chú ý:** việc đặt dấu * ở đâu trong 3 vị trí mình viết ở trên đều được, nhưng để tránh lỗi như thế này:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
    int* ptr1, ptr2;
    //ptr1 là con trỏ
  	//ptr2 không phải là con trỏ
    return 0;
}
{% endhighlight %}
Thì tốt nhất là thống nhất đặt dấu * ở ngay sau tên biến ``int *ptr1``(trừ trường hợp khai báo con trỏ function).
  
### Giá trị của con trỏ là ... địa chỉ?!
Như đã nói, giá trị của con trỏ là địa chỉ bộ nhớ nên bạn chỉ được gán giá trị là địa chỉ mà thôi:
{% highlight cpp %}
#include <iostream>
using namespace std;
int main()
{
    int* ptr1;
    ptr1 = 0x7ffe3e1f7b1c;
}
{% endhighlight %}
Và C++ không cho phép chúng ta gán như vậy, vậy nên thường con trỏ sẽ được gán giá trị là địa chỉ của 1 biến nào đó bằng cách:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	int a =  5;
    	int *ptr = &a; //đọc là: con trỏ ptr trỏ đến biến a
    	return 0;
    }
{% endhighlight %}
Giờ chúng ta sẽ "mổ xẻ" con trỏ 1 chút qua vài dòng code:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	int a =  5;
    	int *ptr = &a;
    	cout << *ptr << endl;
    	cout << ptr << endl;
    	cout << &a << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả khi mình chạy trên [Ideone.com](https://ideone.com/gytDuG) là:
{% highlight cpp %}
5
0x7ffeba2929cc
0x7ffeba2929cc
{% endhighlight %}
À ha! Vậy có thể thấy ``ptr`` giống y như ``&a`` vậy, thực thi ``*ptr`` cũng chính là thực thi ``*(&a)`` đúng không nào, các bạn có thể kiểm chứng bằng cách dùng lệnh:
{% highlight cpp %}
cout << typedef(&a);
{% endhighlight %}
sẽ trả về kết quả là ``int *`` như những gì chúng ta nghĩ.
  
**Thực hành tí:** Bây giờ các bạn hãy làm trường hợp: tạo con trỏ ``ptr1`` trỏ đến con trỏ ``ptr`` và xem con trỏ ``ptr1`` sẽ có những gì theo cách mổ xẻ mình mới vừa làm nhé.
  
### Thay đổi giá trị biến bằng con trỏ
``*ptr`` giữ giá trị của ``a`` nên chúng ta cũng có thể thay đổi giá trị của ``*ptr`` bằng 1 giá trị khác, và khi bạn thay đổi giá trị của ``*ptr`` giá trị của biến ``a`` sẽ thay đổi theo tương ứng:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	int a =  5;
    	int *ptr = &a;
    	*ptr = 12;
  		cout << "Gia tri cua a la " a << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chúng ta có được:
{% highlight cpp %}
Gia tri cua a la 12
{% endhighlight %}
### Không kiểm soát được con trỏ
Trường hợp mất kiểm soát con trỏ là 1 cú "shutdown" cho chương trình của chúng ta, đơn giản nhất là bạn khai báo con trỏ và... để không như thế và sau đó vô tình "xuất" nó ra:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	int *ptr;
  
  		//code thứ gì đó không liên quan dến ptr
  
  		cout << *ptr << endl; //bổng xuất ra cho vui
    }
{% endhighlight %}
Lúc này con trỏ đang trỏ đến 1 vùng nhớ nào đó (hay gọi là trỏ đến 1 vùng nhớ rác), đó có thể là vùng nhớ đang trống hoặc là vùng nhớ mà 1 chương trình nào đó đang sử dụng và khi chúng ta xuất ``*ptr`` nó không đơn giản như chúng ta nghĩ là "ở vùng nhớ rác đó có giá trị gì thì xuất đại đi có sao đâu!", thực chất Hệ điều hành sẽ có cơ chế ngăn chặn mọi sự truy cập trái phép đến 1 vùng nhớ nào đó mà nó không được cấp cho ứng dụng đang truy cập. Vậy nên sẽ dẫn đến "crash" ứng dụng.

Kích thước của con trỏ phụ thuộc vào kiến trúc tập lệnh được thực thi (nếu là 32 bit thì con trỏ có kích thước 32bit (4 byte) và là 8 byte nếu sử dụng 64 bit).

## Tổng kết
Tóm lại bài học thì chắc các bạn vẫn chưa thấy được cái gì đặc sắc từ con trỏ cả đúng không? Các bạn cứ yên tâm nắm được hết trong bài học này để phần "hấp dẫn" phía sau không bị ngất xỉu giữa chừng nhé. Chúng ta sẽ cùng tiếp tục tìm hiểu tiếp về con trỏ ở những bài sau. Pie~
