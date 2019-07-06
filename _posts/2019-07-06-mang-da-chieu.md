---
published: true
layout: post
title: Mảng đa chiều (multidimensional array)
categories: cpp
img: image-1.png
excerpt_separator: <!--more-->
---
Hi~! Bài trước mình đã giới thiệu với các bạn về mảng (array), chúng ta có thể tạo mảng để chứa nhiều loại kiểu giá trị khác nhau như mảng kiểu int, char, double, float... và đặc biệt là chứa chính nó. Việc mảng chứa mảng đã tạo nên cái tên cực ngầu: mảng đa chiều (multidimensional array).
## Khai báo mảng đa chiều
Hãy xem qua khai báo đơn giản về mảng 2 chiều như sau
{% highlight cpp %}
	int darr[2][3];
{% endhighlight %}
Nhìn cũng khá dễ hiểu đúng không? Ở mảng bình thường chúng ta chỉ làm việc  với 1 index và ở đây chúng ta có 2 (vì nó 2 chiều mà 😀) và công dụng của nó ở ví dụ trên như sau:
- 2: đây là số hàng (row) của chúng ta, tương tự như index của mảng 1 chiều bình thường
- 3: đây là số cột (column) của chúng ta, ở đây ta có mỗi hàng sẽ có 3 cột.

Các bạn có thể hình dung mảng 2 chiều như một ma trận tương tự như bàn cờ vua vậy đó và ma trận ở ví dụ trên là ma trận 2x3 có thể được mô tả như hình sau:
![](https://4.bp.blogspot.com/-o7xkJGrY2bc/XH-Sa4TnMzI/AAAAAAAAAhc/7wHgqcF8GcAgUq3xsN4KB5ZPmLQMczp_QCK4BGAYYCw/s1600/bai_5.2.PNG)
<div class="alert alert-info">
Luôn nhớ index của chúng ta đều bắt đầu từ 0 nhé.
</div>

Trong lập trình ma trận đa chiều hay sử dụng nhất chính là ma trận 2 chiều và 2 index tượng trưng cho hàng (row) và cột (col) lần lượt là i và j.

Một số cách khai báo thông dụng của mảng đa chiều thường gặp
{% highlight cpp %}
int darr[2][3] =
{
 {1, 2, 3}, // giá trị 3 cột hàng 1
 {4, 5, 6} // giá trị 3 cột hàng 2
}
{% endhighlight %}
Chúng ta có thể bỏ qua việc khai báo số dòng mà chỉ khai báo số cột như sau
{% highlight cpp %}
int darr[][3] =
{
 {1, 2, 3}, // giá trị 3 cột hàng 1
 {4, 5, 6} // giá trị 3 cột hàng 2
}
{% endhighlight %}
Hoặc như mảng 1 chiều, tạo đồng loạt giá trị 0 cho toàn bộ phần tử trong mảng
{% highlight cpp %}
int darr[2][3] = {0} // cần đầy đủ số hàng, cột
{% endhighlight %}
<div class="alert alert-info">
Không thể khai báo mà bỏ qua hết các giá trị index như: int darr[][]
</div>

Ngoài mảng 2 chiều, chúng ta có thể khai báo mảng đa chiều khác chẳng hạn mảng 3 chiều
{% highlight cpp %}
int darr[2][3][4];
{% endhighlight %}
Nó sẽ có phần phức tạp hơn trong việc quản lí nên bài viết chỉ dừng lại ở mảng 2 chiều thôi nha.
## Thao tác trên mảng 2 chiều
Ở phần này chúng ta sẽ học cách thao tác nhập xuất cơ bản trên mảng 2 chiều, các thao tác khác không quá khó khăn so với mảng 1 chiều bình thường.
Đầu tiên chúng ta cần biết cách truy xuất 1 phần tử trong mảng thông qua 2 index hàng và cột của nó, chẳng hạn mình cần lấy ra phần tử ở hàng thứ 2 cột thứ 3 trong mảng 2 chiều có 2x3 phần tử, chúng ta có đoạn code
{% highlight cpp %}
int element = darr[1][2]
{% endhighlight %}
Cần chú ý thứ thự đọc bình thường và thứ tự index khi truy xuất trong mảng có sự khác nhau vì thứ tự index được bắt đầu từ 0 còn thứ tự đọc bắt đầu từ 1.

Để gán hoặc xuất ra giá trị cho 1 mảng 2 chiều, cách thông dụng nhất là chúng ta dụng lệnh for lồng nhau, với 1 for ngoài chạy biến i theo hàng và for bên trong sẽ chạy biến j theo cột. Để hình dung rõ hơn chúng ta cùng xem đoạn code ở bên dưới in bản cửu chương ra màn hình:
{% highlight cpp %}
#include <iostream>
 
int main()
{
    // Declare a 10x10 array
    const int numRows = 10;
    const int numCols = 10;
    int product[numRows][numCols] = { 0 };
 
    // Gán giá trị
    for (int row = 0; row < numRows; ++row)
        for (int col = 0; col < numCols; ++col)
            product[row][col] = row * col;
 
    // in ra màn hình
    for (int row = 1; row < numRows; ++row)
    {
        for (int col = 1; col < numCols; ++col)
            std::cout << col << "*" <<row<< "=" << product[row][col] << "\t";
 
        std::cout << '\n';
    }
 
    return 0;
}
{% endhighlight %}
Kết quả khi chạy trên Visual Studio
![](https://2.bp.blogspot.com/-5bX8SePCPUg/XH-YrjqqMRI/AAAAAAAAAho/w7j7O-mCxy4Jk2n4ChIsH2cv7FeWh6vAwCK4BGAYYCw/s1600/bai_5.3.PNG)

Các bạn để ý ở đây chúng ta không có nhân cho 10, đối với yêu cầu in ra bản cửu chương thì chúng ta đang bị 1 lỗi logic mà mình từng đề cập trước đó là off-by-one, các bạn tự sửa xem sao nhá.
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về mảng đa chiều (multidimensional array) trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~