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
  
<table class="table">
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
        PhanSo operator++(int) {
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
Mình sẽ giải thích thêm như sau:
  - Đầu tiên là tham số của 2 hàm: đây chỉ là tham số giả để trình biên dịch phân biệt 2 hàm thôi.
  - Đối với ++ps: Trước tiên chúng ta sẽ tăng đơn vị theo cách tính mình đã trình bày ở phần nhận xét bằng hàm tăng đơn vị (TangDonVi), sau đó trả về *this (implicit object) để có thể tham gia vào các toán tử khác (vd: ++ps + 2).
  - Đối với ps++: Cũng trả về *this, nhưng lúc này ps chưa tăng giá trị vì chúng ta gán ở biến temp trước khi gọi hàm TangDonVi hàm trả về temp(tức là đang có giá trị cũ) để tham gia thực hiện cùng các toán tử khác.

Các bạn hãy suy ngẫm, mình tin bạn sẽ sớm hiểu được thôi ;)
### Nạp chồng toán tử !
Toán tử ``!`` được sử dụng để phủ định, nó sẽ trả về giá trị là ``true`` hoặc ``false``. Mình sẽ kiểm tra 1 phân số có phải là phân số tối giản hay không dùng toán tử ``!`` nhé.
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
	PhanSo(int n, int m = 1) {
		TuSo = n;
		MauSo = m;
	}
	friend ostream& operator<< (ostream &out, const PhanSo &ps) {
		out << ps.TuSo << "/" << ps.MauSo;
		return out;
	}
	bool isHasUSCLN(int a, int b) {
		int r;
		while (a%b != 0)
		{
			r = a%b;
			a = b;
			b = r;
		}

		if (b == 1) {
			return false;
		}

		return true;

	}
	// Nếu là phân số tối giản trả về true
	bool operator!() {
		return !isHasUSCLN(TuSo, MauSo) && MauSo;
	}
};

int main() {
	// your code goes here
	PhanSo ps(4, 6);
	if (!ps) {
		cout << "Phan so toi gian" << endl;
	}
	else {
		cout << "Phan so chua toi gian" << endl;
	}
	return 0;
}
{% endhighlight %}
Các bạn xem và hiểu được cách mình thực hiện là chính thôi chứ thực chất công dụng mình đang sử dụng là sai so với công dụng của toán tử ! ban đầu.
## Tổng kết
Vậy là chúng ta đã biết thêm cách nạp chồng toán tử đơn nguyên, các bạn luyện tập thêm để nhớ cách sử dụng nhé. Có thắc mắc bạn bình luận bên dưới để tụi mình giải đáp nhé. Pie~