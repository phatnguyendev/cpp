---
published: true
layout: post
title: Làm việc với header file
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Trước tiên đi qua những phần quan trọng tiếp theo, chúng ta sẽ cùng tìm hiểu cách tạo file ``.h`` (header file). Let's go!
## Mở đầu
Khi chương trình bạn đủ lớn, việc khai báo prototype (mình đã giải thích prototype trong phần basic) sẽ trở nên cần thiết. Ít nhất là khi bạn muốn tìm kiếm lại 1 hàm nào đó bạn chỉ phải tìm kiếm trong danh sách các hàm được liệt kê gần nhau (chứ không phải là tìm hết từng dòng code) và để dễ dàng hơn chúng ta sẽ tạo riêng cho các prototype 1 file để việc tìm là thuận tiện nhất.
## Header basic
Trước tiên chúng ta sẽ tìm hiểu về cách hoạt động của 1 file header cơ bản mà lúc nào cũng phải có - iostream.

![Ảnh learncpp.com](https://www.learncpp.com/images/CppTutorial/Section1/IncludeLibrary.png)

Đây là cách hoạt động của nó. Mình sẽ giải thích qua 1 chút: ở phần ``compile`` (biên dịch) mọi nội dung của header file iostream (các khai báo prototype, ví dụ khai báo function ``cout``) sẽ được copy vào file main.o, nhưng lúc này chúng ta chỉ mới có khai báo của hàm (không có thân hàm - nếu bạn chưa rõ phần này đọc lại [Khai báo hàm và định nghĩa hàm](https://tuitucode.github.io/cpp/co-ban-ve-ham-function/#khai-b%C3%A1o-h%C3%A0m-declare-function-%C4%91%E1%BB%8Bnh-ngh%C4%A9a-h%C3%A0m-define-function-v%C3%A0-s%E1%BB%AD-d%E1%BB%A5ng-h%C3%A0m-fuction-call)) vì vậy chúng ta sẽ đến bước Link - kết nối đến thư viện chuẩn để lấy được thân hàm của những hàm đã khai báo trong iostream. Lúc này các hàm đã có đủ khai báo và thân hàm nên chúng ta đã sử dụng được (file hoàn chỉnh là main.exe).

Ok dựa trên iostream chúng ta sẽ tự tạo cho mình file header theo nguyên tắc:
> Header file chỉ chứa những khai báo hàm (prototype).

## Header file với class
Header file là 1 truyền thống khi chúng ta sử dụng class, kết hợp với nguyên tắc trong header basic, chúng ta có nguyên tắc viết header file cho class như sau:
> Header file cho class chứa thuộc tính và các prototype của các phương thức.

### Bắt đầu sử dụng
Giờ chúng ta sẽ viết 1 chương trình quản lý học sinh nho nhỏ với yêu cầu: chương trình nhập thông tin học sinh và xuất nó ra.

Trước tiên chúng ta sẽ phác thảo sơ đồ file cho chương trình gồm:
- source.cpp: nơi chứa hàm main
- HocSinh.h: header file của class HocSinh
- HocSinh.cpp: chứa các thân hàm của class HocSinh

Chúng ta sẽ đi cụ thể từng class, bắt đầu với **HocSinh.h**:
{% highlight cpp %}
    #pragma once
    #include <iostream>
	#include <string>
	using namespace std;
  
    class HocSinh {
    	string ID;
    	string HoTen;
    	string Lop;
     
    	public:
    	void Nhap();
    	void Xuat();
    };
{% endhighlight %}
#### HocSinh.cpp
{% highlight cpp %}
    #include "HocSinh.h"
     
    void HocSinh::Nhap() {
    	cout << "Nhap ID:  ";
    	getline(cin >> ws, this->ID);
    	cout << "Nhap ten:  ";
    	getline(cin >> ws, this->HoTen);
    	cout << "Nhap Lop:  ";
    	getline(cin >> ws, this->Lop);
    }
     
    void HocSinh::Xuat() {
    	cout << "Nhap ID:  " << this->ID << endl;
    	cout << "Nhap ten:  " << this->HoTen << endl;
    	cout << "Nhap Lop:  " << this->Lop << endl;
    }
{% endhighlight %}
#### source.cpp
{% highlight cpp %}
    #include "HocSinh.h"
     
    int main() {
    	int n;
     
    	cout << "Nhap so luong hoc sinh: ";
    	cin >> n;
     
    	HocSinh dsHocSinh[n];
     
    	//Nhập thông tin học sinh
    	for(int i=0;i<n;i++) {
    		dsHocSinh[i].Nhap();
    	}
     
    	//Xuất học sinh
    	for(int i=0;i<n;i++) {
    		dsHocSinh[i].Xuat();
    	}
    	return 0;
    }
{% endhighlight %}
  