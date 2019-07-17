---
published: true
layout: post
title: Cơ bản về kế thừa
categories: oop
img: bai26.png
lesson: 16
excerpt_separator: <!--more-->
---
Ở bài trước chúng ta đã tìm hiểu về hợp thành (composition) có thể giúp chúng ta xây dựng 1 cấu trúc phức tạp dựa vào những bộ phận đơn giản hơn bên trong, đây là 1 trong 2 cách mà C++ hỗ trợ chúng ta để xây dựng nên 1 mô hình phức tạp và cách thứ 2 chính là dùng kế thừa (inheritance).<!--more-->
## Kế thừa...thừa kế
Kế thừa là một đặc điểm của ngôn ngữ dùng để biểu diễn mối quan hệ đặc biệt hóa – tổng quát hóa giữa các lớp (quan hệ "is-a"). Các lớp được trừu tượng hóa và được tổ chức thành một sơ đồ phân cấp lớp.

Trước tiên, các bạn hãy nhìn ví dụ thông qua ảnh bên dưới
![Kế thừa - TuiTuCode](https://1.bp.blogspot.com/-xK39l74JKN8/XS2l8yl3z0I/AAAAAAAAAkU/2R2HGoO9JOEhTnp3jXYI3KBVUrmVwZwuACLcBGAs/s1600/Capture.PNG)

Ta có thể thấy 1 cây sơ đồ trong hình với ý nghĩa phân loại động vật, tuy động vật trên cạn và động vật dưới nước có những đặc tính khác nhau, mỗi loại đều có những đối tượng cụ thể (trên cạn: mèo, ngựa.. dưới nước: cá, mực,..) với những đặc điểm riêng nhưng chúng đều được xếp loại chung thành lớp động vật, đều thừa hưởng mọi đặc tính từ động vật (như có tên, có thể thở,..).

Sơ đồ trên còn được gọi là sơ đồ phân cấp: động vật dưới nước là "cha" của loài cá đồng thời lại là "con" của động vật.

Qua ví dụ trên các bạn chắc cũng đã nắm được phần nào những đặc điểm của kế thừa rồi đúng không? Chúng ta có thể tổng hợp thành 2 từ xúc tích: thừa hưởng đặc điểm và phân cấp. Bây giờ chúng ta sẽ đi vào tìm hiểu kế thừa trong C++ sẽ được thực hiện như thế nào nhé!

## Kế thừa trong C++
Đầu tiên chúng ta cùng đi đến mô hình cài đặt kế thừa trong C++ thông qua class như sau:
{% highlight cpp %}
	class Base {
    	// Thành phần của lớp cơ sở
    };
    
    class Derived : [private/protected/public] Base {
    	// Thành phần riêng của lớp dẫn xuất
    };
{% endhighlight %}

Phân tích: Chúng ta sẽ dùng toán tử ``:`` để tiến hành kế thừa lớp Base theo 1 trong 3 cách kế thừa: private, protected và public.

### Kế thừa private, protected và public
Mỗi loại kế thừa đều có những đặc điểm khác nhau, xem bảng bên dưới so sánh sự khác nhau giữa 3 loại kế thừa:

<table class="table">
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Truy cập</th>
<th>private</th>
<th>protected</th>
<th>public</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">Bên trong lớp</td>
<td markdown="span">Có</td>
<td markdown="span">Có</td>
<td markdown="span">Có</td>
</tr>
<tr>
<td markdown="span">Lớp kế thừa</td>
<td markdown="span">Có</td>
<td markdown="span">Có</td>
<td markdown="span">Có</td>
</tr>
<tr>
<td markdown="span">Bên ngoài lớp</td>
<td markdown="span">Không</td>
<td markdown="span">Không</td>
<td markdown="span">Có</td>
</tr>
</tbody>
</table>




