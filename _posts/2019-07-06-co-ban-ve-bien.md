---
published: true
layout: post
title: Cơ bản về biến
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Trong bài này, mình sẽ cùng các bạn đi tìm hiểu về kiểu dữ liệu, hằng, biến, các cách tạo ghi chú cùng với các quy ước đặt tên trong C++. 
<!--more-->
 ## Biến (variable)
 
**Biến** là một vùng lưu trữ được đặt tên do hệ điều hành cấp phát cho chương trình C++ nhằm lưu trữ một giá trị dữ liệu. Khi tạo một biến, bộ nhớ sẽ dành một không gian nhớ cho biến đó.
- Biến bao gồm kiểu dữ liệu và tên biến. 
- Chức năng: lưu trữ giá trị xử lý.
- Cú pháp định nghĩa biến

{% highlight cpp %}
<kieu_du_lieu> <ten_bien>; //định nghĩa 1 biến
<kieu_du_lieu> <danh_sach_bien>; //định nghĩa nhiều biến
{% endhighlight %}
Cú pháp khai báo và khởi tạo giá trị cho biến:
{% highlight cpp %}
<kieu_du_lieu> <ten_bien> = <gia_tri>; //khai báo và khởi tạo giá trị 1 biến
{% endhighlight %}
Hãy xem một ví dụ để hình dung rõ hơn về biến
{% highlight cpp %}
#include <iostream>
using namespace std;

int main()
{
  //Phan dinh nghia bien
  int a;
  float b,c;
  
  //Khoi tao gia tri cho bien
  a = 10;
  b = 5.5;
  c = 2.05;
  
  cout<<a<<endl;
  cout<<b + c<<endl;
  
  system("pause");
  return 0;
}
{% endhighlight %}
