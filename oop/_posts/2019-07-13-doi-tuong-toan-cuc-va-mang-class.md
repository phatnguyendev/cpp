---
published: true
layout: post
title: Đối tượng toàn cục và mảng class
categories: oop
img: bai114.png
lesson: 7
excerpt_separator: <!--more-->
---
Chúng ta sẽ tìm hiểu về class khi nó là đối tượng toàn cục và khi nó là thành phần trong mảng. Let's go! <!--more-->
## Đối tượng toàn cục
### Bài toán
Chúng ta có chương trình sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main()
    {
    	cout << "Hello,World." << endl;
    	return 0;
    }
{% endhighlight %}
Không thay đổi hàm main, hãy làm chương trình xuất ra dòng chữ:
{% highlight cpp %}
	Entering a C++ program saying...
	Hello, world.
	And then exitting…
{% endhighlight %}
### Cách giải quyết
Chúng ta sẽ ứng dụng constructor và destructor của lớp để giải quyết bài toán sau (với class toàn cục):
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Xuat {
    	public:
    	Xuat() {
    		cout << "Entering a C++ program saying..." << endl;
    	}
    	~Xuat() {
    		cout << "And then exitting…" << endl;
    	}
    };
     
    Xuat dummy;
     
    int main()
    {
    	cout << "Hello,World." << endl;
    	return 0;
    }
{% endhighlight %}
Ta thấy biến dummy được khai báo toàn cục sẽ đồng thời tạo constructor (trong đó có câu lệnh cout) và trước khi chương trình kết thúc cũng là lúc destructor được gọi. Thú vị đúng không nào :)
## Mảng class
Chúng ta xét đoạn code bên dưới:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Tester {
    	public: 
     
    	int value;
     
    	Tester(int v) {
    		value = v;
    	}
     
     
    };
     
    int main() {
    	Tester arr[5];
     
    	return 0;
    }
{% endhighlight %}
Khi chúng ta chạy chương trình, trình biên dịch sẽ báo lỗi
{% highlight cpp %}
prog.cpp: In function ‘int main()’:
prog.cpp:17:14: error: no matching function for call to ‘Tester::Tester()’
{% endhighlight %}
Dựa trên kết quả lỗi, chúng ta nhận thấy khi khởi tạo đối tượng là mảng class Tester 5 phần tử cũng là lúc các constructor của 5 class Tester trong mảng được gọi. Mặt khác không có tham số nào được truyền vào khi khởi tạo nên chúng sẽ gọi constructor mặc định (default constructor) và do chúng ta chưa khai báo nên trình biên dịch đã báo lỗi.
## Tổng kết
Mình sẽ tổng kết lại mấy điều sau khi học bài này:
  - Biến toàn cục được gọi sẽ khởi động constructor và khởi động destructor khi kết thúc chương trình.
  - Khi trình biên dịch gặp câu lệnh khởi tạo mảng class, các class phần tử sẽ khởi động constructor mặc định.
Hẹn gặp lại các bạn trong các bài sau. Pie ~
