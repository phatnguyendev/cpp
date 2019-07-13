---
published: true
layout: post
title: Giới thiệu OOP
categories: oop
img: bai26.png
excerpt_separator: <!--more-->
---
Lập trình hướng đối tượng (Objiect-oriented Programming) là phương pháp lập trình mà mọi dân lập trình đều phải biết, trong các trường đại học đây là 1 trong những môn nền tảng của ngành CNTT. OOP được đặc trưng bởi 4 tính chất (cần nhớ):
- Trừu tượng (Abstraction)
- Đa hình (Polymorphism)
- Kế thừa (Inheritance)
- Đóng gói (Encapsulation)

Trong series này chúng ta sẽ cùng đi tìm hiểu chi tiết về 4 tính chất trên và cách áp dụng OOP (để làm game). Nào triển thôi!
## Mở đầu
Để lập trình hiệu quả ngoài việc lựa chọn ngôn ngữ lập trình, các bạn cần phải xác định được phương pháp lập trình hiệu quả. Một số ngôn ngữ lai (hybrid) hỗ trợ nhiều phương pháp lập trình khác nhau, cùng điểm qua 1 số phương pháp lập trình như:
- Lập trình tuần tự (tuyến tính)
- Lập trình có cấu trúc (thủ tục)
- Lập trình hướng đối tượng
- Lập trình hướng chức năng
- Lập trình Logic

Sau khi học xong khóa C++ cơ bản, các bạn đã trả qua 1 số phương pháp sau:
- **Lập trình tuần tự:** phương pháp lập trình sơ khai nhất, chúng ta sẽ viết 1 loạt các câu lệnh và chương trình sẽ chạy tuần tự.
- **Lập trình có cấu trúc:** kết hợp việc lập trình tuần tự với các cấu trúc điều khiển (rẽ nhánh, vòng lặp...) giúp việc lập trình được tối ưu hơn so với lập trình tuần tự.
- **Lập trình hướng chức năng:** lúc này chúng ta sẽ kết hợp thêm việc chia chương trình thành các chương trình con, mỗi chương trình con sẽ có logic và giá trị trả về riêng. Giúp việc lập trình sáng sủa, dễ tái sử dụng.
- **Lập trình hướng đối tượng:** sẽ là chủ đề chính của series này, hỗ trợ công nghệ hướng đối tượng. Đơn giản chúng ta sẽ "đối tượng hóa" mọi thứ chúng ta nghĩ được, sau đó chúng ta sẽ code dựa trên những đối tượng này.

## Lập trình hướng đối tượng (OOP)
Xét ví dụ sau: Viết chương trình cho nhập vào thông tin của sinh viên (Họ tên, CMND, lớp) và mỗi sinh viên có thể tự đăng kí 1 môn học yêu thích.
Như đã học ở series cơ bản, chúng ta sẽ dùng struct để biểu diễn đối tượng sinh viên (vì có thể gom được các thuộc tính của sinh viên chung 1 struct) và 1 function giúp sinh viên có thể đăng kí học phần. Cụ thể như sau:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    enum MonHoc {
    	OOP,
    	DATA,
    	WEB,
    	APP
    };
     
    typedef struct SinhVien {
    	string HoTen;
    	string CMND;
    	string Lop;
  		MonHoc monHoc;
    }SV;
     
    void DangKiMonHoc(SV sv);
     
    int main() {
     
    	int soLuong;
    	cin >> soLuong; //nhập số lượng sinh viên
     
    	SV danhSachSV[soLuong];
     
    	for(int i=0;i<soLuong;i++)
    	{
    		cout << "Nhap ho ten: ";
    		getline(cin >> ws, danhSachSV[i].HoTen);
    		cout << "Nhap CMND: ";
    		getline(cin >> ws, danhSachSV[i].CMND);
    		cout << "Nhap Lop: ";
    		getline(cin >> ws, danhSachSV[i].Lop);
    	}
     
    	// Đăng kí môn học cho từng sinh viên
    	for(int i=0;i <> soLuong;i++)
    	{
    		DangKiMonHoc(danhSachSV[i]);
    	}
     
    	return 0;
    }
     
    void DangKiMonHoc(SV sv) {
    	sv.monHoc = MonHoc::OOP;
    }
{% endhighlight %}
Chỉ là 1 ví dụ làm nóng người thôi! Chúng ta đã "đối tượng hóa" sinh viên thông qua struct cùng hành vi (DangKiMonHoc). Tiếp theo chúng ta sẽ học về ``class``, 1 kiểu dữ liệu do người dùng tự định nghĩa tương tự như struct và được sử dụng nhiều trong OOP.
### class
Chúng ta sẽ dùng ``class`` thay cho ``struct``. Về cách khai báo class cũng giống struct với những thứ ưu việt hơn, chúng ta sẽ khai báo class SinhVien như sau:
{% highlight cpp %}
	class SinhVien {
    	string HoTen;
    	string CMND;
    	string Lop;
  		MonHoc monHoc;  		
  	};
{% endhighlight %}
Một vài điểm lưu ý về lớp (class)
- Một lớp bao gồm các thành phần dữ liệu (thuộc tính) và các phương thức (hàm thành phần - member function).
- **Lớp là một mô tả trừu tượng của nhóm các đối tượng cùng bản chất**, ngược lại mỗi một đối tượng là một **thể hiện** cụ thể cho những mô tả trừu tượng đó.
- Lớp là cái ta thiết kế và lập trình. Đối tượng là cái ta tạo (từ một lớp) tại thời gian chạy chương trình.
  
Khai báo lớp:
{% highlight cpp %}
	class <ten_lop>
  	{
    	//thuộc tính
  		
 		//phương thức - hàm thành phần
  	};
{% endhighlight %}
Nhìn khá giống với struct đúng không? Để truy cập đến thuộc tính bên trong class chúng ta cũng dùng toán tử ``.`` tương tự struct. Như với cách khai báo trên khi truy cập đến thuộc tính ``HoTen`` chúng ta sẽ bị báo lỗi - đây là 1 điểm khác biệt so với struct: mọi thuộc tính trong struct mặc định là **public** và có thể được truy cập mọi nơi còn đối với class chúng được mặc định là **private** và không được truy xuất trực tiếp bên ngoài class như vậy. Để giải quyết các bạn thêm từ khóa "public".
{% highlight cpp %}
	class <ten_lop>
  	{
    	private:
  			<khai báo thành phần riêng trong từng đối tượng>
        protected:
            <khai báo thành phần riêng trong từng đối tượng, có thể truy cập từ lớp dẫn xuất>
        public:
             <khai báo thành phần công cộng>
  	};
{% endhighlight %}
- Thuộc tính: Các thuộc tính được khai báo giống như khai báo biến trong C++.
### Member function
Hay còn gọi là phương thức (Method), tượng trưng cho hành vi của đối tượng (như function DangKiMonHoc). Chúng ta tiến hành khai báo và định nghĩa như sau:
{% highlight cpp %}
	class SinhVien {
  		public: // cho phép bên ngoài truy xuất vào
    	string HoTen;
    	string CMND;
    	string Lop;
  		MonHoc monHoc;  		
  		
  		bool DangKiMonHoc() {
    	this->monHoc = MonHoc::OOP;
    	return true;
    	}
  	};
{% endhighlight %}
Thay vì phải truyền đối tượng sinh viên vào như tham số, ở trong class chúng ta thực hiện truy xuất thuộc tính trực tiếp thông qua con trỏ ``this`` (khuyến khích dùng). Một điểm cần lưu ý nữa là chúng ta có thể gọi phương thức được định nghĩa bên dưới phương thức gọi (nếu là function bình thường sẽ không được phép).
### Định nghĩa các phương thức ở bên ngoài khai báo lớp
{% highlight cpp %}
	<
{% endhighlight %}
## Cơ chế tạo lập các lớp
- Xác định các thuộc tính (dữ liệu): những gì mà ta biết về đối tượng - giống như một struct.
- Xác định các phương thức (hành vi): những gì đối tượng có thể làm.
- Xác định các quyền truy xuất: sẽ tìm hiểu kỹ ở bài sau
## Tổng kết
Chúng ta cũng đã từng làm quen với class ``string`` trong loạt series cơ bản hỗ trợ rất tốt khi chúng ta làm việc với chuỗi. Những bài học sau sẽ dùng rất nhiều đến class, các bạn cố gắng ghi nhớ cách sử dụng nhé! Pie~
