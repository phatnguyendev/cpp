---
published: true
layout: post
title: Đối tượng toàn cục
categories: oop
img: bai26.png
lesson: 7
excerpt_separator: <!--more-->
---
Đối tượng toàn cục là 1 class? Cùng xem nó làm được gì nhé! <!--more-->
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
Ta thấy biến dummy được khai báo toàn cục sẽ đồng thời tạo constructor (trong đó có câu lệnh cout) và trước khi chương trình kết thúc cũng là lúc destructor được gọi. Thú vụ đúng không nào :) Hẹn gặp các bạn trong các bài tiếp theo. Pie~