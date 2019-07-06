---
published: true
layout: post
title: Cấu trúc lặp WHILE (while statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Trong C++, 2 cấu trúc điều khiển tiêu biểu và hay sử dụng nhất là cấu trúc rẽ nhánh mà mình đã tìm hiểu ở các bài trước và cấu trúc lặp. Để bắt tay vào tìm hiểu cấu trúc lặp, chúng ta sẽ đi tìm hiểu về **cấu trúc WHILE** đầu tiên vì nó là dạng cấu trúc đơn giản nhất trong cấu trúc lặp mà C++ cung cấp và nó có định nghĩa rất giống với câu lệnh IF.
<div class="alert alert-info">
**Cấu trúc lặp (Loops)** sẽ làm cho chương trình thực hiện lặp đi lặp lại một chuỗi các câu lệnh cho đến khi không còn thỏa mãn một điều kiện nào đó.
</div>
Đầu tiên hãy cùng xem qua cách hoạt động của lệnh while bằng mô hình dưới đây:
![](https://4.bp.blogspot.com/-u36r5lEHYtA/XHvvKX7lnEI/AAAAAAAAD7s/CdoadZ09gRs0Wa2Sw_-rJ0b-5ma-fWT2ACLcBGAs/s400/WHILE.PNG)

## Cấu trúc cơ bản
Sau khi các bạn đã xem mô hình, hãy xem qua cấu trúc mã giả của nó:
{% highlight cpp %}
while (<expression>) //dieu kien
{
    statements; //cac cau lenh
}
{% endhighlight %}
Một câu lệnh **while** được khai báo bằng **từ khóa while**. Khi một câu lệnh while được thực thi, biểu thức điều kiện trong while sẽ được xem xét. Nếu biểu thức điều kiện là đúng (khác không), các câu lệnh trong while (statements) sẽ được thực thi. Tuy nhiên, không giống câu lệnh IF, một khi câu lệnh trong while đã thực thi xong, chương trình sẽ quay về đầu câu lệnh while và quá trình được lặp lại.

Hãy xem một ví dụ để rõ hơn về vòng lặp while:
{% highlight cpp %}
#include<iostream>
using namespace std;

int main()
{
	int ChuSo = 0;
	while (ChuSo < 5)
	{
		cout <<"Nhap mot chu so bat ky: "<<endl;
		cin >> ChuSo;
	}	
	
	cout<<"Ket thuc."<<endl;
	
	system("pause");
	return 0;
}
{% endhighlight %}
Cùng xem kết quả chương trình:
![](https://3.bp.blogspot.com/-SBqzItebP9o/XHwBDNhHPtI/AAAAAAAAD8c/U1ZWtafCEqck44CrlzowjZzQwTyNMIYmgCLcBGAs/s1600/WHILE1.PNG)