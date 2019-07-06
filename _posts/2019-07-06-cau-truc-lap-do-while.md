---
published: true
layout: post
title: Cấu trúc lặp do - while (do - while statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Một điều thú vị về vòng lặp while là nếu điều kiện vòng lặp ban đầu là sai, vòng lặp while sẽ hoàn toàn không thực thi. Vậy nếu chúng ta muốn một vòng lặp thực thi ít nhất một lần, chẳng hạn như khi hiển thị một menu thì phải làm sao? Để giúp tạo điều kiện thuận lợi cho điều đó, C ++ cung cấp vòng lặp do-while.
<!--more-->
Đầu tiên hãy cùng xem qua cách hoạt động của lệnh while bằng mô hình dưới đây:
![](https://3.bp.blogspot.com/-Q4bVmEmAp4Q/XH-CDM3N3lI/AAAAAAAAD98/LvpmDK3rdFAISiFKeX2J6TDzsqMNcUlMwCLcBGAs/s320/DO1.PNG)

## Cấu trúc cơ bản
Sau khi các bạn đã xem mô hình, hãy xem qua cấu trúc mã giả của nó:
{% highlight cpp %}
do
{
    statements; //cac cau lenh
} while (<expression>);
{% endhighlight %}
**Câu lệnh trong vòng lặp do-while luôn thực thi ít nhất một lần**. Sau khi câu lệnh đã được thực thi, vòng lặp do-while sẽ kiểm tra điều kiện. Nếu điều kiện là đúng, đường dẫn thực hiện sẽ nhảy trở lại đầu vòng lặp do-while và thực hiện lại các câu lệnh trong khối lệnh do.
Dưới đây là một ví dụ về việc sử dụng vòng lặp do-while để hiển thị menu cho người dùng và đợi người dùng đưa ra lựa chọn hợp lệ:
{% highlight cpp %}
#include <iostream>
using namespace std;
 
int main()
{
    // biến choose phải khai báo ngoài khối lệnh do
    int choose;
 
    do
    {
        cout << "_____Menu______: \n(Vui long chon)\n";
        cout << "1) Cong\n";
        cout << "2) Tru\n";
        cout << "3) Nhan\n";
        cout << "4) Chia\n";
        cin >> choose;
    }
    while (choose != 1 && choose != 2 &&
        choose != 3 && choose != 4);
 
    // Làm gì đó với sự lựa chọn trên
    // Ví dụ như switch - case
 
    cout << "ban da chon #" << choose << "\n";
  
    system("pause");
    return 0;
}
{% endhighlight %}
Hãy xem kết quả của đoạn chương trình trên: 
![](https://1.bp.blogspot.com/-LzEOh2H5jvI/XH-Ia8BzwkI/AAAAAAAAD-U/W6Z-sIBJAMQmVE-ONYDyAQHpkaHDRjb0wCLcBGAs/s1600/DO2.PNG)