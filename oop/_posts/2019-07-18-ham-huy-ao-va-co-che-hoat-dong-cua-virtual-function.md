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

Cơ chế đa hình (phương thức ảo) được thực hiện nhờ ở mỗi đối tượng có thêm một bảng phương thức ảo (virtual table). Bảng ảo đơn giản là 1 mảng tĩnh được trình biên dịch khởi tạo ngầm định khi thiết lập đối tượng, bảng ảo sẽ chứa các mục (entry) và trong mỗi mục sẽ chứa **con trỏ hàm** (function pointer) - con trỏ hàm này sẽ trỏ đến phương thức ảo(mà gần nhất với class đó).

Tiếp theo, trình biên dịch sẽ tạo ra 1 con trỏ ẩn đặt trong lớp cha (với tên `__vptr`), lưu ý là con trỏ này khác với con trỏ `this` chúng ta hay dùng trong class vì thế nó sẽ khiến mỗi đối tượng của lớp đó có kích thước lớn hơn kích thước của 1 con trỏ và con trỏ `__vptr` cũng sẽ được các lớp con kế thừa.
  
OK Chúng ta sẽ có 1 ví dụ đơn giản để tổng kết ngắn những gì mình nói phía trên:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Base {
    	// FunctionPointer *__vptr; sẽ được trình biên dịch ngầm tạo ra
        virtual void function_1() {};
        virtual void function_2() {};
    };
     
    class Derived_one : public Base {
    	public:
    	void function_1() {};
    	void function_2() {};	
    };
     
    class Derived_two : public Base {
    	public:
    	void function_1() {};
    	void function_2() {};
    };
     
    int main() {
    	// your code goes here
  		Base *a; //tạo đối tượng lớp Base, `__vptr` sẽ trỏ
  				//đến bảng ảo của lớp Base
    	return 0;
    }
{% endhighlight %}
Khi 1 đối tượng của lớp được tạo, con trỏ `__vptr` sẽ trỏ đến bảng ảo của lớp đó, tiếp theo là việc bỏ dữ liệu vào bảng ảo.
  
Nói về bảng ảo, trong ví dụ trên chúng ta có 2 hàm ảo (function_1, function_2) nên bảng ảo sẽ có 2 mục (1 cho function_1 và 1 cho function_2):
  - Đối với lớp Base (lớp cha): đối tượng của lớp cha không thể truy cập đến các hàm của `Derived_one` và `Derived_two`, do đó chúng ta sẽ đặt đơn giản: mục cho function_1 sẽ trỏ đến **Base::function_1()** và mục cho function_2 thì trỏ đến **Base::function_2()**.
  -