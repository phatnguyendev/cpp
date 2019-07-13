---
published: true
layout: post
title: Constructor và Destructor
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Việc thực hiện các công việc như : khởi tạo giá trị các thuộc tính, cấp phát vùng nhớ cho con trỏ, mở tệp tin hay thu hồi vùng nhớ,... đều được constructor và destructor thực hiện trong OOP<!--more-->
## Constructor
Hàm thiết lập (constructor) là 1 phương thức đặc biệt dùng để khởi tạo thể hiện (instance) của lớp.

Công dụng của constructor là khởi tạo các giá trị mặc định cho các thuộc tính hay các bước thiết lập cần thiết cho lớp (mở tệp, kết nối cơ sở dữ liệu,...).

Constructor có các quy tắc như sau:
- Phạm vi truy xuất phải là public
- Không có kiểu trả về (không phải void, cứ để trống)
- Có tên trùng với tên lớp

Một số đặc tính của constructor là:
- Có thể overloading
- Có thể truyền tham số
- Có thể sử dụng tham số ngầm định

### Default constructor
Hàm thiết lập mặc định (default constructor) làm constructor không chứa tham số. Được gọi ngay khi khai báo biến lớp đó.
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
     
    	public:
    	PhanSo() { //default constructor
    		TuSo = 1;
    		MauSo = 1;
    	}
     
    	int getTuSo() {
    		return TuSo;
    	}
      	int getMauSo() {
    		return MauSo;
    	}
     
    };
     
    int main() {
    	PhanSo ps; //call constructor
     
    	cout << ps.getTuSo() << "/" << ps.getMauSo() << endl;
    	return 0;
    }
{% endhighlight %}
Chúng ta sẽ được kết quả in ra màn hình là: 1/1
### Constructor có tham số
Nhờ đặc tính overloading, chúng ta có thể tạo ra thêm nhiều constructor khác nhau với số lượng và loại tham số khác nhau. Nó sẽ có ích trong trường hợp chúng ta muốn khởi tạo giá trị mong muốn cho lớp ngay khi tạo biến.
{% highlight cpp %}
        #include <iostream>
        using namespace std;
     
        class PhanSo {
        	int TuSo;
        	int MauSo;
     
        	public:
        	PhanSo() { //default constructor
        		TuSo = 1;
        		MauSo = 1;
        	}
        	PhanSo(int t, int m) {
        		TuSo = t;
        		MauSo = m;
        	}
     
        	int getTuSo() {
        		return TuSo;
        	}
          	int getMauSo() {
        		return MauSo;
        	}
     
        };
     
        int main() {
        	PhanSo ps; //call default constructor
        	PhanSo ps1(1,2);
     
        	cout << ps1.getTuSo() << "/" << ps1.getMauSo() << endl;
        	return 0;
        }
{% endhighlight %}
Chúng ta sẽ được kết quả in ra màn hình là: 1/2
  
**Lưu ý:** nếu các bạn đã định nghĩa 1 (hoặc nhiều) constructor có tham số nhưng không định nghĩa constructor mặc định thì việc khởi tạo sau đây là không hợp lệ
{% highlight cpp %}
        #include <iostream>
        using namespace std;
     
        class PhanSo {
        	int TuSo;
        	int MauSo;
     
        	public:
        	PhanSo(int t, int m = 1) {
        		TuSo = t;
        		MauSo = m;
        	}
     
        	int getTuSo() {
        		return TuSo;
        	}
          	int getMauSo() {
        		return MauSo;
        	}
     
        };
     
        int main() {
        	PhanSo ps; // Không được
        	PhanSo ps1(1,2);
     		PhanSo ps2(2); // Được do có tham số ngầm định: 2/1
        	cout << ps1.getTuSo() << "/" << ps1.getMauSo() << endl;
        	return 0;
        }
{% endhighlight %}
Vậy nên khi đã khởi tạo constructor có tham số các bạn phải viết cả constructor mặc định nhé.
