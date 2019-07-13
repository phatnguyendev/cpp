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
Vậy nên khi đã khởi tạo constructor có tham số các bạn phải viết cả constructor mặc định nhé. Còn nếu các bạn không định nghĩa constructor nào, 1 constructor mặc định sẽ được ngầm tạo ra (và bên trong thân hàm không có gì cả).
### Copy constructor
Chúng ta có thể tạo 1 kiểu hàm thiết lập sao chép để copy 1 số đặc điểm (do chúng ta quyết định) từ đối tượng này sang đối tượng khác.
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
        	PhanSo(const PhanSo& ps) {
        		this->TuSo = ps.TuSo;
        		this->MauSo = ps.MauSo;
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
        	PhanSo ps1(1,2);
        	PhanSo ps3 (ps1);
        	cout << ps3.getTuSo() << "/" << ps3.getMauSo() << endl;
        	return 0;
        }
{% endhighlight %}
Phân số ``ps3`` đã copy TuSo và MauSo từ ``ps2`` thông qua copy constructor.
## Destructor
Ngược lại với constructor, hàm hủy - destructor sẽ làm nhiệm vụ dọn dẹp mọi thứ khi lớp bị hủy.

Nếu lớp của bạn chỉ có những thuộc tính đơn giản (không cấp phát động) hoặc các phương thức đơn giản (không thao tác với file, không thao tác cơ sở dữ liệu) thì việc tạo 1 destructor là điều không cần thiết. Ta xét ví dụ dùng destructor khi lớp có cấp phát động như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Mang {
    	int *arr;
    	int lenght;
     
    	public:
    	~Mang() {
    		if(arr)
    			delete arr;
    	}
    };
     
    int main() {
    	// your code goes here
    	return 0;
    }
{% endhighlight %}
Destructor cũng có 1 số quy tắc như:
- Thêm dấu ``~`` trước tên
- Tên destructor phải trùng tên lớp
- Không có kiểu trả về (như constructor)
  
## Tổng kết
OK vậy là các bạn đã biết thế nào là constructor và destructor cùng cách sử dụng rồi nha! Nếu có thắc mắc các bạn bình luận bên dưới nhé. Pie~