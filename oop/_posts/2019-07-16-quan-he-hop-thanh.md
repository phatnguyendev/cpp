---
published: true
layout: post
title: Quan hệ hợp thành (composition)
categories: oop
img: bai26.png
lesson: 15
excerpt_separator: <!--more-->
---
Chúng ta sẽ cùng tìm hiểu quan hệ hợp thành (composition) hay còn gọi là "has-a". Trong cuộc sống thực mọi cấu trúc phức tạp đều được hình thành từ những thứ cơ bản... Chiến thôi nào!
## Composition là gì?
Sự hợp thành (composition) là quá trình xây dựng các đối tượng phức tạp dựa trên những đối tượng đơn giản. VD: 1 người bao gồm đầu - mình - chân - tay.. v.v và mỗi bộ phận lại được cấu thành từ những mô - cơ - thịt - máu - gân .. v.v Lớp trong C++ cũng được cấu thành từ các kiểu dữ liệu khác nhau bên trong (thuộc tính) nên được gọi là kiểu dữ liệu hỗn hợp.

Sự hợp thành còn có cách gọi khác như quan hệ bao hàm, quan hệ bộ phận - toàn thể hoặc quan hệ "has-a". Laptop "has-a" keyboard, a car "has-a" steering wheel,...
### Điều kiện để trở thành composition
Một đối tượng hoặc 1 phần nào đó phải có mối quan hệ sau:
- Phải là 1 phần của đối tượng(thuộc lớp)
- Chỉ thuộc về đối tượng (thuộc lớp) tại 1 thời điểm
- Sự tồn tại của nó được quản lý bởi đối tượng (thuộc lớp)
- Không biết về sự tồn tại của đối tượng (thuộc lớp)

Có khó hiểu quá không? Lấy ví dụ thực tế để giải thích kĩ hơn nhé: quan hệ giữa con người và tim:
- Chắc chắn tim là 1 bộ phận của con người
- Tim được tạo ra khi cơ thể con người được tạo ra
- Khi cơ thể không hoạt động nữa -> tim cũng không hoạt động theo (death relationship)
- Cơ thể biết sự tồn tại của tim, nhưng tim không biết mình là 1 phần trong cấu trúc cơ thể

## Composition in class
Sau khi đã nắm được lí thuyết chúng ta sẽ tiến hành cài đặt nó trên class, có 1 câu nói thế này:
> Nếu bạn có thể thiết kế lớp sử dụng composition, bạn nên thiết kế như vậy. Nó sẽ giúp lớp chúng ta đơn giản, linh hoạt và mạnh mẽ (trong việc dọn dẹp). - learncpp.com

Vậy nên cùng đến với cách thiết kế lớp sử dụng composition thôi nào (Chúng ta sẽ tạo thêm file .h riêng cho các lớp vì chúng ta có nhiều lớp cần cài đặt).
#### Diem.h
{% highlight cpp %}
    #ifndef DIEM_H
    #define DIEM_H
     
    #include <iostream>
     
    using namespace std;
     
    class Diem
    {
    private:
     
        int x;
        int y;
     
    public:
     
    	Diem() {
    		x = y = 0;
        }
     
        Diem(int x, int y) {
        	this->x = x;
        	this->y = y;
        }
     
        friend std::ostream& operator<<(std::ostream& out, const Diem &d)
        {
            out << "(" << d.x << ", " << d.y << ")";
            return out;
        }
        
        friend std::istream& operator>>(istream& in, Diem &d)
		{
		in >> d.x;
		in >> d.y;

		return in;
		}
    };
    #endif
{% endhighlight %}
#### DoanThang.h
{% highlight cpp %}
    #ifndef DOAN_THANG_H
    #define DOAN_THANG_H
     
    #include "Diem.h"
     
    class DoanThang
    {
    private:
     
        Diem A;
        Diem B;
     
    public:
     
    	DoanThang() : A(0,0), B(0,0) {
        }
     
        DoanThang(const Diem& a, const Diem& b) : A(a), B(b) {
        }
     
        friend std::ostream& operator<<(std::ostream& out, const DoanThang &dt)
		{
		out << dt.A << "->" << dt.B;
		return out;
		}
    };
    #endif
{% endhighlight %}
Và file **source.cpp** chứa hàm main cho chương trình
{% highlight cpp %}
    #include "DoanThang.h"
     
    int main() {
    	Diem xx, yy;
     
    	cin >> xx;
    	cin >> yy;
     
    	DoanThang dt(xx, yy);
     
    	cout << dt << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình:
{% highlight cpp %}
	1
    2
    3
    4
    (1,2) -> (3,4)
{% endhighlight %}
Có thể phát biểu rằng : DoanThang "has-a" Diem
## Tổng kết
Done! Chúng ta đã tìm hiểu về mối quan hệ "has-a", bài sau chúng ta sẽ tìm hiểu đến "is-a" - đặc tính kế thừa trong C++, có thắc mắc về bài học các bạn bình luận bên dưới để tụi mình giải đáp nhé. Pie~