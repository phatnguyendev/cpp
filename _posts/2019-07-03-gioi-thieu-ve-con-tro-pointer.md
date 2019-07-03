---
published: true
layout: post
title: Cài đặt visual studio 2015
categories: cpp
img: image-4.png
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
Vấn đề là sao mà nhớ với ghi nổi địa chỉ dài loằng ngoằng vậy nên thường con trỏ sẽ được gán giá trị là địa chỉ của 1 biến nào đó bằng cách:
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
À ha! Vậy có thể thấy ``ptr`` giống y như ``&a`` vậy, thực thi ``*ptr`` cũng chính là thực thi ``*(&a)`` đúng không nào.