---
published: true
layout: post
title: Nạp chồng toán tử đơn nguyên
categories: oop
img: bai26.png
lesson: 11
excerpt_separator: <!--more-->
---
Các toán tử đơn nguyên chỉ sử dụng cho 1 toán hạng, chúng ta hay gặp nhất là ++, --, + (positive), - (negative). Vì chỉ cần 1 toán hạng chúng thường sẽ là các phương thức (hàm thành phần - member function) cùng xem cách cài đặt chúng với mình nhé!<!--more-->
### Lớp PhanSo
Để làm ví dụ cho các toán tử đơn nguyên, mình sẽ cài đặt lớp PhanSo như sau:
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
	PhanSo(int n, int m=1) {
		TuSo = n;
		MauSo = m;
	}
	friend ostream& operator<< (ostream &out, const PhanSo &ps) {
    	out << ps.TuSo << "/" << ps.MauSo;
    	return out;
    }
};
 
int main() {
	// your code goes here
  	return 0;
}
{% endhighlight %}