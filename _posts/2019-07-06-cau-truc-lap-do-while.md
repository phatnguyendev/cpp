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
  
Một điều thú vị về ví dụ trên là biến **choose** phải được khai báo bên ngoài khối **do**. Tại sao lại như vậy? Nếu biến **choose** được khai báo bên trong khối **do**, nó sẽ bị hủy khi khối do kết thúc, điều này xảy ra trước khi điều kiện while được thực thi. Nhưng chúng ta cần biến **choose** để kiểm tra điều kiện trong **while**. Do đó, biến **choose** phải được khai báo bên ngoài khối **do**.

## Tổng kết

Chúng ta đã cùng nhau tìm hiểu về **vòng lặp DO - WHILE...**Hãy lưu ý là vòng lặp do - while sẽ thực thi câu lệnh trước rồi mới kiểm tra điều kiện, còn lại thì nó tương tự như vòng lặp while. Các bạn hãy luyện tập code lại các ví dụ trong bài để nắm và hiểu rõ hơn về cách hoạt động của nó nhé.😉
Các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới. Pie~😘