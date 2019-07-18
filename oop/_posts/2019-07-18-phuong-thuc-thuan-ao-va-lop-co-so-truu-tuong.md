---
published: true
layout: post
title: Phương thức thuần ảo và lớp cơ sở trừu tượng
categories: oop
img: bai26.png
lesson: 20
excerpt_separator: <!--more-->
---
Có những phương thức ở cơ sở không có ý nghĩa về mặt nội dung (như phương thức Ve trong lớp Hinh) nhưng lại cần phải khai báo để các lớp con kế thừa, để hỗ trợ việc này tốt hơn, C++ đã cung cấp phương thức thuần ảo cho chúng ta, Let's go!<!--more-->
## Phương thức thuần ảo
Phương thức thuần ảo là 1 phương thức ảo (virtual) nhưng không có nội dung (không có thân hàm) và được khai báo bằng cách gán giá trị 0 như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Hinh {
    	public:
    	virtual void Ve() = 0;
    };
     
    int main() {
    	// your code goes here
    	return 0;
    }
{% endhighlight %}
**Lưu ý:** chỉ có hàm ảo (có từ khóa virtual) mới được phép gán giá trị 0.
 
Nhìn ví dụ chúng ta cũng hiểu khi nào nên dùng phương thức thuần ảo rồi đúng không? chúng ta có hàm Ve để vẽ được hình chữ nhật, hình vuông, tam giác,... nhưng ở lớp hình chúng ta không có gì để vẽ ra cả -> phương thức vẽ nên là phương thưc thuần ảo.
  
Khi sử dụng phương thức thuần ảo cần phải biết:
  - Nếu 1 lớp có 1 hoặc nhiều phương thức thuần ảo thì lớp đó được gọi là lớp cơ sở trừu tượng (abstract base class).
  - Không thể khởi tạo 1 đối tượng thuộc lớp cơ sở trừu tượng.
  - Nếu lớp con kế thừa từ lớp cha (với lớp cha là 1 lớp cơ sở trừu tượng) thì lớp con bắt buộc phải định nghĩa thân hàm cho hàm thuần ảo -> Nếu không làm (hoặc thiếu xót) lớp con đó sẽ được xem như là 1 lớp cơ sở trừu tượng.

Xem rõ hơn bằng đoạn code bên dưới:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class Hinh {
    	protected:
    	string Ten;
    	public:
    	virtual void Ve() = 0;
    };
     
    class HinhChuNhat : public Hinh {
    	public:
    	HinhChuNhat() {
    		Ten = "hinh chu nhat";
    	}
    	void Ve() {
    		cout << "dang ve " << Ten << endl;
    	}
    };
     
    class TamGiac : public Hinh {
    	public:
    	TamGiac() {
    		Ten = "hinh chu nhat";
    	}
    	/*
    	*Lớp tam giác không định nghĩa thân hàm Ve nên được
    	*xem như là 1 lớp cơ sở trừu tượng.
    	*/
    };
     
    int main() {
    	// your code goes here
    	Hinh *hinh; //hợp lệ
     
    	HinhChuNhat hcn; //hợp lệ
     
    	TamGiac tamgiac; //không hợp lệ do TamGiac là lớp
    					 //cơ sở trừu tượng nên ko tạo đối tượng được.
    	return 0;
    }
{% endhighlight %}
Chương trình báo lỗi:

		error: cannot declare variable ‘tamgiac’ to be of abstract type ‘TamGiac’
  
Nên hãy thận trọng khi sử dụng nhé!
  
## Tổng kết
Phù ~ Bạn có để ý không? chúng ta đã học luôn đặc tính thứ 4 - trừu tượng (Abstraction) và cũng là bài học lý thuyết cuối cùng trong chuỗi series OOP rồi đó ;) Chúc mừng bạn đã kiên trì và hoàn thành được series này! Bài sau sẽ là 1 bài tập lớn - project cho series này, tự tin làm nhé ;). Đừng quên theo dõi fanpage [Tui Tự Code](https://www.facebook.com/shareAboutIT/) để cập nhật thêm những khóa học hay khác nhé. Chúc các bạn thành công trên con đường lập trình viên. Pie~