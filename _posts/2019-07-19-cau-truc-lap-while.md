---
published: true
layout: post
title: Cấu trúc lặp WHILE (while statement)
categories: basic
img: bai8.png
excerpt_separator: <!--more-->
---
Trong C++, 2 cấu trúc điều khiển tiêu biểu và hay sử dụng nhất là cấu trúc rẽ nhánh mà mình đã tìm hiểu ở các bài trước và cấu trúc lặp. Để bắt tay vào tìm hiểu cấu trúc lặp, chúng ta sẽ đi tìm hiểu về **cấu trúc WHILE** đầu tiên vì nó là dạng cấu trúc đơn giản nhất trong cấu trúc lặp mà C++ cung cấp và nó có định nghĩa rất giống với câu lệnh IF.
<!--more-->
<div class="alert alert-info">
Cấu trúc lặp (Loops) sẽ làm cho chương trình thực hiện lặp đi lặp lại một chuỗi các câu lệnh cho đến khi không còn thỏa mãn một điều kiện nào đó.
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
  
Ở ví dụ trên, khi biến ChuSo không còn thỏa điều kiện (ChuSo <  5) nữa thì vòng lặp while mới kết thúc. Nên ta thấy khi số nhập vào là 6, chương trình in ra dòng "Ket thuc.", tức là mệnh đề (ChuSo <  5) được xem xét là false, vòng lặp ngừng thực thi ngay sau đó.
<div class="alert alert-info">
Với vòng lặp while, ta không biết trước số lần lặp lại khối công việc. Ta chỉ biết nó sẽ ngừng thực thi khi nào biểu thức điều kiện trong while cho giá trị false.
</div>
## Vòng lặp vô hạn (Infinite loops)
Mặt khác, nếu biểu thức điều kiện while luôn luôn đúng, vòng lặp while sẽ được thực thi mãi mãi. Đây được gọi là vòng lặp vô hạn. 
Ví dụ:
{% highlight cpp %}
#include <iostream>
using namespace std;
 
int main()
{
    int count = 0;
    while (count < 10) // dieu kien nay luon dung
        cout << count << " "; // cau lenh nay se duoc lap mai mai
    return 0; // cau lenh nay se ko duoc thuc thi. Chuong trinh khong ket thuc.
}
{% endhighlight %}
Chúng ta cũng có thể cố ý khai báo một vòng lặp vô hạn như sau:
{% highlight cpp %}
while (true) //dieu kien luon dung
{
    statements; //cac cau lenh
}
{% endhighlight %}
→ Cách duy nhất để thoát khỏi một vòng lặp vô hạn là thông qua câu lệnh return, câu lệnh break, câu lệnh exit, câu lệnh goto, một ngoại lệ được ném hoặc người dùng dừng chương trình. 

## Loop variables
Thông thường, khi ta muốn vòng lặp thực hiện công việc một số lần nhất định, ta thường sử dụng một biến vòng lặp (loop variables), thường được gọi là bộ đếm. Biến vòng lặp là biến số nguyên được khai báo cho mục đích duy nhất là đếm số lần vòng lặp đã thực hiện. 
Các biến vòng lặp thường được đặt tên đơn giản, chẳng hạn như i, j hoặc k. Một ý tưởng tốt hơn nữa là sử dụng tên biến "thực", chẳng hạn như đếm/count hoặc tên gợi nhớ chi tiết hơn về những gì bạn đang đếm.
Ví dụ: Tính tổng các số từ 1 đến n với n nhập từ bàn phím.
{% highlight cpp %}
#include <iostream> 
using namespace std;
 
int main() 
{
  // nhap n
  int n;
  cout<<"n = ";
  cin>>n;
  
  // tinh tong
  int s = 0;
  int i = 0; //loop variable
  while (i <= n)
  {
      s = s+i;
      i++;
  }
  
  //in ket qua
  cout<<"\n Tong = "<<s<<endl;
 
  system("pause");
  return 0;  
}
{% endhighlight %}
<div class="alert alert-info">
Cách tốt nhất là sử dụng số nguyên có dấu (signed int) cho các biến vòng lặp. Sử dụng số nguyên không dấu (unsigned int) có thể dẫn đến các vấn đề không mong muốn.
</div>
## Vòng lặp lồng nhau (Nested loops)
Tương tự như các cấu trúc khác, chúng ta có thể đặt các vòng lặp while bên trong các vòng lặp while khác. Xem ví dụ để hình dung rõ hơn:
![](https://4.bp.blogspot.com/-WYg09PyVFGQ/XH4h8BCZmSI/AAAAAAAAD9M/CaSystmU2eMl09FJ50Mn-wWPxKJuPzCQACLcBGAs/s1600/WHILE2.PNG)
<div class="alert alert-info">
Lưu ý: Bởi vì thân vòng lặp (WHILE/DO-WHILE/FOR) thường là một khối và bởi vì khối đó bắt đầu và kết thúc với mỗi lần lặp nên bất kỳ biến nào được khai báo bên trong thân vòng lặp đều được tạo và sau đó bị hủy với mỗi lần lặp.
</div>
## Bài tập:
1. Thay đổi ví dụ Nested loops để in ra kiểu dưới đây:
{% highlight cpp %}
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
{% endhighlight %}
2. Tính tổng các số chẵn từ 0 đến n (với n nhập từ bàn phím) và in kết quả ra màn hình. 

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về **vòng lặp WHILE**...Các bạn hãy luyện tập code lại các ví dụ trong bài để nắm và hiểu rõ hơn về cách hoạt động của nó nhé.😉
Các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới. Pie~😘
