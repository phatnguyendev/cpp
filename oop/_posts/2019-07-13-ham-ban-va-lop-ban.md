---
published: true
layout: post
title: Hàm bạn và lớp bạn
categories: oop
img: bai26.png
lesson: 5
excerpt_separator: <!--more-->
---
Ở bài này chúng ta sẽ hack não bằng 2 khái niệm khá thú vị trong C++ đó là hàm bạn (friend function) và lớp bạn (friend class).
## Vấn đề mở đầu
Có 2 loại tiền ảo, Scoin và Gcoin với cách tính như sau:
- Scoin = giá trị * rate ($)
- Gcoin = giá trị * rate + vultra ($)

Biết Scoin có rate = 10, Gcoin có rate = 5 và vultra = 10.
Tính tổng số tiền 5 Scoin + 10 Gcoin ra $?

Chúng ta cài đặt các lớp như sau:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class Scoin {
    	string name;
    	int value;
    	int rate;
     
    };
     
    class Gcoin {
    	string name;
    	int value;
    	int rate;
    	int vultra;
     
    };
     
    int main() {
    	// your code goes here
    	return 0;
    }
{% endhighlight %}
**Vấn đề:** chúng ta đang có 2 đối tượng, vậy phương thức cộng sẽ thuộc đối tượng nào? Đó là khi chúng ta cần đến hàm bạn (friend function).

## Friend function
Hàm bạn không phải là hàm thành phần của 1 lớp nhưng có quyền truy cập các thuộc tính private của lớp đó.

Đây là cách chúng ta dùng để chia sẻ dữ liệu giữa các đối tượng với hàm tùy ý (friend) trong chương trình, để khai báo hàm bạn chúng ta dùng từ khóa ``friend``. Hàm bạn có thể được khai báo ở nhiều lớp khác nhau.

Trở lại với bài toán trên, chúng ta sẽ thiết lập các lớp như sau:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class Gcoin;
     
    class Scoin {
    	string name;
    	int value;
    	int rate;
    	public:
    	Scoin(){};
    	Scoin(int val) {
    		this->value = val;
    		this->rate = 10;
    	}
    	friend int TinhTien(const Scoin& s, const Gcoin& g);
     
    };
     
    class Gcoin {
    	string name;
    	int value;
    	int rate;
    	int vultra;
     
    	public:
    	Gcoin() {};
    	Gcoin(int val) {
    		this->value = val;
    		this->rate = 5;
    		this->vultra = 10;
    	}
    	friend int TinhTien(const Scoin& s, const Gcoin& g);
    };
     
    int TinhTien(const Scoin& s, const Gcoin& g) {
    	return s.value * s.rate + g.value * g.rate + g.vultra;
    }
     
    int main() {
    	Scoin s(5);
    	Gcoin g(10);
     
    	cout <<"Gia tri = " <<TinhTien(s, g) << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình trên là: Gia tri = 110.