---
published: true
layout: post
title: Vòng lặp foreach
categories: basic
img: bai25.png
excerpt_separator: <!--more-->
---
Nếu các bạn đã học struct, foreach là 1 sự tuyệt vời khi các bạn duyệt mảng struct. Let's go :) <!--more-->
## Mảng struct
Giả sử chúng ta có mảng struct lưu trữ thông tin 5 sinh viên gồm: tên, quê quán, lớp. Hãy xem qua những thao tác cơ bản như xuất toàn bộ tên sinh viên trong mảng này nhé
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
    typedef struct SinhVien {
    	string hoTen;
    	string queQuan;
    	string lopHoc;
    }SV;
    int main() {
    	int size = 5;
    	SV sv1 {"Ti","HCM","10A1"};
    	SV sv2 {"Teo","HCM","10A3"};
    	SV sv3 {"Tun","HCM","10A4"};
    	SV sv4 {"Dau","HCM","10A6"};
    	SV sv5 {"Dan","HCM","10A1"};
  
    	SV array[size] = {sv1, sv2, sv3, sv4, sv5};
     
    	for(int i=0;i size; i++)
    	{
    		cout << array[i].hoTen << endl;
    	}
    	return 0;
    }
{% endhighlight %}
Với việc truy xuất mảng dựa trên index (biến chạy i) sẽ gây ra nhiều phiền toái trong quá trình lập trình (chẳng hạn sai giá trị ``size``,...) Nên chúng ta sẽ có 1 cách duyệt mảng thú vị hơn - đó là For each.
## Vòng lặp For each
Khác với vòng lặp for, foreach sử dụng 1 biến lặp có cùng kiểu dữ liệu với mảng và biến lặp này sẽ được gán giá trị của phần tử trong mảng mỗi khi đi qua 1 vòng lặp. Chúng ta hãy cùng xem cách  dùng foreach bằng đoạn code sau
{% highlight cpp %}
#include <iostream>
#include <string>
using namespace std;
typedef struct SinhVien {
	string hoTen;
	string queQuan;
	string lopHoc;
}SV;
int main() {
	int size = 5;
	SV sv1 {"Ti","HCM","10A1"};
	SV sv2 {"Teo","HCM","10A3"};
	SV sv3 {"Tun","HCM","10A4"};
	SV sv4 {"Dau","HCM","10A6"};
	SV sv5 {"Dan","HCM","10A1"};
	SV array[size] = {sv1, sv2, sv3, sv4, sv5};
	
	for(SV element : array)
	{
		cout << element.hoTen << endl;
	}
	return 0;
}
{% endhighlight %}
Ngắn gọn dễ hiểu và tránh được sai sót khi dùng for đúng không nào. Một điểm hay nữa của foreach là kết hợp với từ khóa ``auto`` lúc này bạn sẽ không cần phải bận tâm kiểu dữ liệu của mảng là gì nữa, cứ xài auto là xong ngay :).
{% highlight cpp %}
	...
	for(auto element : array)
	{
		cout << element.hoTen << endl;
	}
	return 0;
}
{% endhighlight %}
### Tham chiếu trong For each
Mỗi lần lặp foreach sẽ copy giá trị của phần tử trong mảng và gán cho biến lặp, điều này sẽ khiến chương trình mất nhiều thời gian hơn cho thao tác copy và nó thực sự không có tác dụng gì. Vậy nên để duyệt nhanh hơn chúng ta sẽ dùng toán tử tham chiếu & cho biến lặp và lúc này biến lặp sẽ tham chiếu trực tiếp đến phần tử trong mảng mà không qua thao tác copy giá trị sang.
  
**Lưu ý:** Khi sử dụng tham chiếu, mọi sự thay đổi giá trị của biến lặp sẽ thay đổi cả giá trị phần tử trong mảng mà nó tham chiếu đến, vậy nên khi bạn cần chắc chắn giá trị của phần tử không thay đổi hãy dùng ``const``
{% highlight cpp %}
	...
	for(const auto &element : array)
	{
		cout << element.hoTen << endl;
	}
	return 0;
}
{% endhighlight %}
## Tổng kết
Sử dụng foreach sẽ giúp code bạn dễ nhìn hơn và đỡ phải dính lỗi về biến lặp như vòng lặp for. Hãy tận dụng nó khi cần nhé :) Pie~
