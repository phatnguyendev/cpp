---
published: true
layout: post
title: Nạp chồng toán tử nhập xuất
categories: oop
img: bai26.png
lesson: 10
excerpt_separator: <!--more-->
---
Khi kiểu dữ liệu bạn định nghĩa có nhiều thuộc tính, mỗi lần xuất ra phải nhờ vào hàm xuất do bạn tự định nghĩa vậy sao không định nghĩa luôn toán tử nhập xuất của iostream cho ngầu :) Let's do it! <!--more-->
### Kiểu dữ liệu mẫu
Không quá mới, chúng ta sẽ lấy lại kiểu dữ liệu PhanSo ở bài trước:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
    	public:
    	PhanSo() {
    		TuSo = 1;
    		MauSo = 1;
    	}
     
    };
     
    int main() {
    	// your code goes here
    	return 0;
    }
{% endhighlight %}
### Định nghĩa toán tử xuất (<<)
Trước tiên chúng ta sẽ xem xét các toán hạng, lấy ví dụ:
{% highlight cpp %}
	...
  	cout << 2;
  	...
{% endhighlight %}
Với toán tử ```` chúng ta có 2 toán hạng:
  - Bên trái: cout (đối tượng kiểu ostream)
  - Bên phải: 2 (đối tượng kiểu int)

Vậy để định nghĩa cho lớp PhanSo, chúng ta sẽ sử dụng hàm bạn với cách viết như sau:
{% highlight cpp %}
	...
  	friend ostream& operator<< (std::ostream &out, const PhanSo &ps);
  	...
{% endhighlight %}
Tiến hành cài đặt nào
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
    	public:
    	PhanSo() {
    		TuSo = 1;
    		MauSo = 1;
    	}
    	friend ostream& operator<< (std::ostream &out, const PhanSo &ps) {
    		out << ps.TuSo << "/" << ps.MauSo;
    		return out;
    	}
     
    };
     
    int main() {
    	PhanSo ps;
    	cout << ps << endl;
    	return 0;
    }
{% endhighlight %}
Các bạn chú ý phần thâm hàm, ``out`` chứ không phải ``cout`` nhé.
### Định nghĩa toán tử nhập (>>)
Về toán hạng cũng tương tự như toán tử xuất, chỉ khác điều ``cin`` là đối tượng thuộc kiểu istream nên chúng ta sẽ viết như sau:
{% highlight cpp %}
	...
  	friend istream& operator>> (std::istream &in, const PhanSo &ps);
  	...
{% endhighlight %}
Và cách áp dụng:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
    	public:
    	PhanSo() {
    		TuSo = 1;
    		MauSo = 1;
    	}
    	friend ostream& operator<< (std::ostream &out, const PhanSo &ps) {
    		out << ps.TuSo << "/" << ps.MauSo;
    		return out;
    	}
  		friend istream& operator>> (std::istream &in, PhanSo &ps) {
  			cout << "Nhap tu so: ";
  			in >> ps.TuSo;
  			cout << "Nhap mau so: ";
  			in >> ps.MauSo;
  			return in;
  		}
     
    };
     
    int main() {
    	PhanSo ps;
    	cin >> ps;
  		cout << ps << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình:
{% highlight cpp %}
	Nhap tu so: 2
	Nhap mau so: 3
	2/3
{% endhighlight %}
## Tổng kết
Vậy là chúng ta đã biết cách nạp chồng toán tử nhập xuất. Các bạn luyện tập lại các ví dụ trên nhé, có thắc mắc các bạn bình luận bên dưới để tụi mình giải đáp. Pie~