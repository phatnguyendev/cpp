---
published: true
layout: post
title: Cơ bản về hàm phần 3
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Trong phần này chúng ta sẽ tìm hiểu về function overloading và đệ quy (recursion) - những thứ hay ho khác đến từ hàm trong C++.
## Function overloading
Nói đơn giản, các bạn có nhiều function với tên giống nhau nhưng khác nhau vê số lượng tham số hoặc kiểu giá trị của tham số. Ví dụ bạn có các hàm cùng tên ``double`` với chức năng trả về giá trị gấp 2 lần giá trị tham số truyền vào theo 2 kiểu dữ liệu trả về khác nhau
{% highlight cpp %}
    #include <iostream>
    using namespace std;
    int doubleX(int a)
    {
    	return a*2;
    }
     
    double doubleX(double a)
    {
    	return a*2;
    }
    int main() {
    	cout << doubleX(2) << endl;
    	cout << doubleX(2.2) << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả trả về là
{% highlight cpp %}
	4
	4.4
{% endhighlight %} 
Nếu ở lần cout thứ 2, doubleX là hàm kiểu int thì kết quả trả về phải bằng 4, nhưng ở đây ta được 4.4 tức là thực thi hàm doubleX "phiên bản" double (kiểu dữ liệu trả về là double). Đó chính là function overloading!

Các bạn có thể tìm hiểu thêm về 1 số quy định cho việc overloading trên mạng nhé, trong bài viết này mình chỉ giới thiệu cơ bản thôi.
## Đệ quy (recursion)
Đệ quy thực chất là 1 hàm có thể gọi lại chính nó, xét ví dụ: tính tổng S = 0 + 1 + 2 + ... + n với n tùy ý. Các bạn hãy code bài trên bằng cách các bạn hiểu, ở đây mình sẽ dùng đệ quy như sau
{% highlight cpp %}
    #include <iostream>
    using namespace std;
    int TinhTong(int n)
    {
    	int ketqua;
    	if(n == 0) {
    		return 0;
    	}
    	else
    	{
    		ketqua = n + TinhTong(n-1);
    	}
    	return ketqua;
     
    }
     
    int main() {
    	cout << TinhTong(3) << endl;
    	return 0;
    }
{% endhighlight %}
 Kết quả ta được: 6 (0 + 1 + 2 + 3)
  
**Giải thích:** hơi khó để giải thích bằng văn viết, mình sẽ nêu từng đoạn rõ ràng luôn nhé:
- Lần gọi 1 (tại hàm main): n = 3 => vô else => ketqua = 3 + (gọi lại TinhTong với n = 3 - 1)
- Lần gọi 2 (tại else): n = 2 => vô else => ketqua = 2  + (gọi lại TinhTong với n = 2 - 1)
- Lần gọi 3 (tại else): n = 1 => vô else => ketqua = 1 + (gọi lại TinhTong với n = 1 - 1)
- Lần gọi 4 (tại else): n = 0 => vô if => trả về 0

OK bây giờ hãy thay thế giá trị bên phải dấu cộng (các lần gọi) bằng kết quả của lần gọi sau nó ta được (giờ ta đi từ lần gọi 4 về lần gọi 1 nhé):
- Lần gọi 4: trả về 0
- Lần gọi 3: trả về 1 + 0 = 1
- Lần gọi 2: trả về 2 + 1 = 3
- Lần gọi 1: trả về 3 + 3 = 6

Và kết quả ta được là 6. Đấy đệ quy là vậy đó nếu bạn nào chưa hiểu cứ việc ăn miếng bánh uống miếng nước rồi nghiên cứu sau nha :) search trên mạng có khá nhiều bài đệ qui khác cho các bạn thích tìm tòi đó.
## Tổng kết
Vậy là đã kết thúc bài viết với khá nhiều sự hack não đến từ đệ quy nhưng không sao lập trình mà, nghệ thuật cả đấy chứ. Chúc các bạn học tập tốt Pie~
