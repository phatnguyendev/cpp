---
published: true
layout: post
title: Giới thiệu nạp chồng toán tử
categories: oop
img: bai107.png
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
Trước tiên chúng ta sẽ tìm hiểu qua cơ chế hoạt đọng của trình biên dịch
### Cơ chế
- Nếu các toán hạng là kiểu dữ liệu cơ bản, trình biên dịch sẽ tìm 1 phiên bản toán tử phù hợp với kiểu dữ liệu đó, nếu không có trình biên dịch sẽ trả lỗi.
- Đối với kiểu dữ liệu do người dùng định nghĩa (class, struct, enum,..) trình biên dịch sẽ xem có phiên bản nạp chồng toán tử nào phù hợp không? Nếu tìm thấy nó sẽ sử dụng toán tử đó và nếu không nó sẽ tìm cách chuyển đổi các toán hạng thành kiểu dữ liệu cơ bản để có thể dùng toán tử phù hợp và nếu thất bại trình biên dịch sẽ trả lỗi.

### Nguyên tắc
Tiếp theo chúng ta cùng đến với 1 số nguyên tắc khi nạp chồng toán tử:
- Không cài đặt phép toán mới, chỉ thực hiện trên các phép toán đã có sẵn.
- Ít nhất 1 trong các toán hạng là kiểu dữ liệu người dùng tự định nghĩa (VD: integer + PhanSo: được, integer + float: không nạp chồng toán tử được).
- Nên cài đặt phép toán theo cách mà nó thực hiện ngay lúc đầu (không nên nay đổi chức năng ban đầu).

## Tổng kết
Chúng ta đã điểm qua những điều cơ bản trong nạp chồng toán tử, các bạn nhớ những đặc điểm trên để vận dụng chính xác nhé. Chúng ta sẽ cùng nhau thực hành ở những bài sau. Pie~
