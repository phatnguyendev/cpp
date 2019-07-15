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
OK Tiến hành nào!
### Nạp chồng toán tử ++, \--
Tư tưởng của 2 loại toán tử này lần lượt là tăng và giảm giá trị đi 1 đơn vị, đối với lớp PhanSo chúng ta sẽ +1 và -1. Ví dụ:
{% highlight cpp %}
	PhanSo ps = 1/2
  	ps++ => ps = 1/2 + 1 = 3/2
  	Toán tử -- tương tự.
{% endhighlight %}
**Nhận xét:** phân số +1 thực chất là (tử số + mẫu số) / mẫu số. Một điểm lưu ý nữa toán tử ``++`` (và ``--``) đứng trước và sau toán hạn đều có ý nghĩa khác nhau, các bạn xem bảng so sánh bên dưới nhé:
  
<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Toán tử</th>
<th>Ý nghĩa</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">temp = ++ps</td>
<td markdown="span">Tăng ps lên 1 đơn vị trước rồi gán giá trị mới cho temp</td>
</tr>
<tr>
<td markdown="span">temp = ps++</td>
<td markdown="span">Gán giá trị ps cho temp rồi mới tăng ps lên 1 đơn vị
</td>
</tr>
</tbody>
</table>

  
Chúng ta sẽ cài đặt như sau:
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
        PhanSo TangDonVi() {
        	this->TuSo += this->MauSo;
        }
     
        /*
        * Toán tử bên dưới là loại: ++ps
        */
        PhanSo& operator++() {
        	TangDonVi();
        	return *this;
        }
     
        /*
        * Toán tử bên dưới là loại: ps++
        */
        PhanSo& operator++(int) {
        PhanSo temp = *this;
        TangDonVi();
        return temp;
        }
    };
     
    int main() {
    	// your code goes here
    	PhanSo ps(1,2);
     
    	cout << ++ps << endl;
    	return 0;
    }
{% endhighlight %}

  