---
published: true
layout: post
title: Hàm hủy ảo và cơ chế hoạt động của phương thức ảo
categories: oop
img: bai26.png
lesson: 19
excerpt_separator: <!--more-->
---
Trong bài học này chúng ta sẽ tìm hiểu cách sử dụng hàm hủy ảo (virtual constructor) và tìm hiểu cơ chế hoạt động của của phương thức ảo (như mình đã nói ở bài giới thiệu về đa hình). Let's go!<!--more-->
## Hàm hủy ảo (virtual destructor)
Như chúng ta đã học ở phần destructor, khi lớp chúng ta có thuộc tính cấp phát động (con trỏ) thì chúng ta phải xây dựng destructor để làm nhiệm vụ dọn dẹp vùng nhớ và trả lại cho Hệ điều hành (C++ không có cơ chế tự động thu dọn), nhưng khi sử dụng kế thừa (inheritance) và đa hình (polymorphism) chúng ta nên sử dụng hàm hủy ảo, vì sao? hãy xem ví dụ sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Base {
    	public:
    	~Base() {
    		cout << "Base destructor..." << endl;
    	}
    };
     
    class Derived : public Base {
    	int *arr;
    	int length;
    	public:
    	Derived(int l) {
    		arr = new int[l];
    	}
    	~Derived() {
    		if(arr) {
    			delete arr;
    			arr = nullptr;
    		}
    		cout << "Derived destructor..." << endl;
    	}
    };
     
    int main() {
    	// your code goes here
    	Base* ptr = new Derived(5);
    	delete ptr; // chú ý: chúng ta phải tự delete
    				// do C++ không tự hủy con trỏ.
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình: 

	Base destructor...

Với destructor bình thường (không có virtual) chương trình chỉ gọi destructor của lớp cha mà bỏ qua destructor ở lớp con. Vì đối tượng lớp cha là con trỏ nên khi hủy chương trình sẽ xem xét có hàm hủy ảo hay không, nếu không thì nó giả định rằng chỉ cần gọi constructor của lớp cha là được -> thuộc tính `arr` ở lớp con không được dọn dẹp vùng nhớ!

### Sử dụng virtual cho destructor
Đơn giản như các phương thức ảo, để biến destructor thành virtual destructor ta sử dụng từ khóa `virtual` trước khai báo hàm (ở lớp cha hoặc cả ở lớp con). Chúng ta sửa lại ví dụ trên cho chuẩn sử dụng virtual destructor như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Base {
    	public:
    	virtual ~Base() {
    		cout << "Base destructor..." << endl;
    	}
    };
     
    class Derived : public Base {
    	int *arr;
    	int length;
    	public:
    	Derived(int l) {
    		arr = new int[l];
    	}
    	virtual ~Derived() {
    		if(arr) {
    			delete arr;
    			arr = nullptr;
    		}
    		cout << "Derived destructor..." << endl;
    	}
    };
     
    int main() {
    	// your code goes here
    	Base* ptr = new Derived(5);
    	delete ptr; // chú ý: chúng ta phải tự delete
    				// do C++ không tự hủy con trỏ.
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình:
  
		Derived destructor...
		Base destructor...


<div class="alert alert-info">
Bất cứ khi nào bạn dùng kế thừa, nên chắc chắn destructor của bạn là virtual destructor. Khi khai báo virtual ở lớp cơ sở thì mặc định destructor ở các lớp con cũng là virtual destructor (dù bạn có khởi tạo nó hay không).
</div>
 
## Cơ chế hoạt động của phương thức ảo
Vậy là chúng ta đã tìm hiểu thêm 1 phương thức ảo nữa - hàm hủy ảo nên chúng ta ít nhất sẽ cần (hoặc tò mò) biết cách phương thức ảo thực hiện ra sao (vì chúng vô cùng hữu dụng), ok mình sẽ giải thích nó như sau:

Cơ chế đa hình (phương thức ảo) được thực hiện nhờ ở mỗi đối tượng có thêm một bảng phương thức ảo (virtual table). Bảng ảo đơn giản là 1 mảng tĩnh được trình biên dịch khởi tạo ngầm định khi thiết lập đối tượng, bảng ảo sẽ chứa các mục (entry) và trong mỗi mục sẽ chứa con trỏ hàm (function pointer) - con trỏ hàm này sẽ trỏ đến phương thức ảo.
