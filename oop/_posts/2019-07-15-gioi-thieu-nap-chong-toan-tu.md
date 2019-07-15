---
published: true
layout: post
title: Giới thiệu nạp chồng toán tử
categories: oop
img: bai26.png
lesson: 8
excerpt_separator: <!--more-->
---
Chúng ta thường thấy các toán tử +, -, *, / cho số nguyên, số thực,.. vậy toán tử dành cho phân số thì sao? Làm thế nào để cộng 2 phân số bằng cách dùng toán tử + và cũng như thực hiện các toán tử khác? Welcome to Operator overloading! <!--more-->
## Toán tử và hàm
Các toán tử cho phép chúng ta sử dụng các kí hiệu toán học đối với các kiểu dữ liệu trong C++ nhưng bản chất chúng vẫn là các **hàm**. Ví dụ chương trình sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	int a = 2, b = 3;
    	cout << a + b << endl;
    	return 0;
    }
{% endhighlight %}
Đương nhiên ai cũng biết output của chương trình này :) như chúng ta thấy trình biên dịch cho ta 1 phiên bản của toán tử ``+`` cho phép chúng ta cộng 2 số nguyên a và b. Có thể biểu diễn thành hàm như sau:
{% highlight cpp %}
	operatorPlus(a, b);
{% endhighlight %}
Tiếp đến chúng ta cùng thử làm như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
    	public:
    	PhanSo() {
    		TuSo = 1;
    		MauSo = 1;
    	}
    	PhanSo(int t =1, int m=1) {
    		TuSo =  t;
    		MauSo = m;
    	}
    };
     
    int main() {
    	PhanSo ps1(1,2);
    	PhanSo ps2(2,3);
    	cout << ps1 + ps2 << endl;
    	return 0;
    }
{% endhighlight %}
Mục đích của chương trình là muốn cộng 2 phân số với nhau, nhưng nhìn chắc các bạn cũng thấy nó thiếu gì chứ đúng không? Nếu vẫn thấy đúng thì cùng đến với kết quả khi run:
{% highlight cpp %}
prog.cpp: In function ‘int main()’:
prog.cpp:21:14: error: no match for ‘operator+’ (operand types are ‘PhanSo’ and ‘PhanSo’)
{% endhighlight %}
Theo như lỗi báo, trình biên dịch không tìm được toán tử + nào cho việc cộng 2 kiểu dữ liệu PhanSo. Để cho chương trình chạy đúng như mong muốn, chúng ta sẽ phải cài đặt thêm phép toán cộng cho kiểu dữ liệu PhanSo -> Tiến hành nạp chồng toán tử (operator overloading).
## Toán tử và lớp - nạp chồng toán tử
  