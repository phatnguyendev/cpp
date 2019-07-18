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