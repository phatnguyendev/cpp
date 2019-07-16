---
published: true
layout: post
title: Nạp chồng 1 số toán tử khác
categories: oop
img: bai111.png
lesson: 12
excerpt_separator: <!--more-->
---
Trong bài học này chúng ta sẽ cùng tìm hiểu cách nạp chồng 1 số toán tử khác như toán tử so sánh, toán tử định vị,... Nào cố lên!<!--more-->
### Nạp chồng toán tử gán
Toán tử gán (assignment operator - kí hiệu: ``=``) là toán tử thường thấy nhất trong mọi câu lệnh, chúng ta sẽ dùng nó để gán giá trị cho đối tượng lớp PhanSo. Code nào:
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
    	PhanSo& operator=(const PhanSo& ps) {
    		TuSo = ps.TuSo;
    		MauSo = ps.MauSo;
    		return *this;
    	}
    };
     
    int main() {
    	// your code goes here
    	PhanSo ps1(3, 2);
    	PhanSo ps2;
    	ps2 = ps1;
    	cout << ps2 << endl;
    	return 0;
    }
{% endhighlight %}
Cũng không có gì để giải thích, nhìn qua thì giống copy constructor thôi, lưu ý trả về đối tượng ``*this`` nhé.
### Nạp chồng toán tử so sánh
Các toán tử so sánh thường gặp như: ==, !=, <=, >=. Cách cài đặt chúng không quá khó, các bạn chỉ cần nắm được logic hoạt động của nó là được, chúng ta sẽ cài đặt chúng 1 lần nữa trên lớp PhanSo và mình sẽ lấy 2 toán tử là ``==`` và ``>`` để cài đặt, các toán tử kia các bạn tự triển khai nha!
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

	bool operator==(const PhanSo& ps) {
		double val1 = double(this->TuSo) / this->MauSo;
		double val2 = double(ps.TuSo) / ps.MauSo;
		return val1 == val2;
	}

	bool operator>(const PhanSo& ps) {
		double val1 = double(this->TuSo) / this->MauSo;
		double val2 = double(ps.TuSo) / ps.MauSo;
		return val1 > val2;
	}

};

int main() {
	// your code goes here
	PhanSo ps1(3, 2);
	PhanSo ps2(1);

	if (ps1 == ps2) {
		cout << "2 phan so bang nhau" << endl;
	}
	else if (ps1 > ps2) {
		cout << "Phan so " << ps1 << " lon hon " << "phan so " << ps2 << endl;
	}
	else
	{
		cout << "Phan so " << ps1 << " nho hon " << "phan so " << ps2 << endl;
	}
	return 0;
}
{% endhighlight %}
Cũng khá dễ hiểu các bạn đọc và code lại nhé.
### Nạp chồng toán tử chỉ mục
Toán tử chỉ mục ``[]`` (subscript operator) được dùng để xác định phần tử trong mảng dựa trên chỉ mục (index). Khi class của bạn có thuộc tính là mảng, đây là cách tốt nhất để truy cập các phần tử trong mảng đó từ đối tượng của class. Cùng xem cách mình cài đặt nhé (đương nhiên không phải trên lớp PhanSo nữa rồi):
{% highlight cpp %}
    #include <iostream>
  	#include <cassert>
    using namespace std;
     
    class ListCode {
    	int code_arr[10];
    	public:
    	ListCode() {
    		for(int i=0; i < 10; i++) {
    			code_arr[i] = i;
    		}	
    	}
    	int& operator[](const int& index) {
  			assert(index >= 0 && index < 10);
    		return code_arr[index];
    	}
    };
     
    int main() {
    	// your code goes here
    	ListCode ls;
    	int index = 3;
    	cout << "Value of index " << 3 << " is " << ls[index] << endl;
    	return 0;
    }
{% endhighlight %}
Chúng ta không cần phải cài đặt lại toán tử xuất vì giá trị trả về của toán tử chỉ mục có kiểu int - kiểu cơ bản có thể được xuất ra bình thường.

Trong phần cài đặt mình có dùng hàm ``assert`` của thư viện ``cassert`` để kiểm tra và báo lỗi khi giá trị index nhập vào không hợp lệ! Các bạn có thể chạy xem thử nhé
### Nạp chồng toán tử ngoặc đơn
Giống toán tử chỉ mục, toán tử ngoặc đơn cũng dùng để xác định vị trí của phần tử trong mảng nhưng là mảng đa chiều. Đoạn code dưới sẽ giúp các bạn dễ hình dung hơn:
{% highlight cpp %}
    #include <iostream>
    #include <cassert>
    using namespace std;
     
    class ListCode {
    	int code_arr[2][2];
    public:
    	ListCode() {
    		for (int i = 0; i < 2; i++) {
    			for(int j = 0; j < 2; j++)
    			code_arr[i][j] = i + j;
    		}
    	}
    	int& operator()(const int& row, const int& col) {
    		assert(row >= 0 && row < 2);
    		assert(col >= 0 && col < 2);
    		return code_arr[row][col];
    	}
    };
     
    int main() {
    	// your code goes here
    	ListCode ls;
    	int row = 1, col = 0;
    	cout << "Value of index (" << row <<"," << col <<")" << " is " << ls(row,col) << endl;
    	return 0;
    }
{% endhighlight %}
## Tổng kết
Phù ~ Vậy là chúng ta đã cũng đã tìm hiểu khá nhiều cách cài đặt 1 số toán tử cho class rồi đúng không? Các bạn nhớ ôn lại để nắm được logic code và câu lệnh cài đặt nhé. Có thắc mắc các bạn bình luận bên dưới để tụi mình giải đáp nha. Pie~
