---
published: true
layout: post
title: Mối quan hệ giữa các đối tượng
categories: oop
img: bai26.png
lesson: 14
excerpt_separator: <!--more-->
---
Trong hướng đối tượng, các đối tượng cũng có các mẫu, các mối quan hệ và thứ bậc giống như xã hội loài người. Chúng ta đã học cách ánh xạ thuộc tính và hành vi đối tượng vào class và trong loạt bài sắp tới chúng ta sẽ tìm hiểu sâu hơn về những thứ tồn tại xung quanh đối tượng. Let's go!
### Mở đầu bằng các quan hệ
Có rất nhiều loại mối quan hệ trong cuộc sống thực: học sinh là **thành viên** của lớp học, chân ga là **1 phần** của chiếc xe, laptop **có** bàn phím hay hình vuông **là** 1 hình chữ nhật,...

Tương tự như vậy, trong C++ cũng có những mối quan hệ hữu ích cho chúng ta sử dụng. Chúng không khó để nhận biết nhưng không dễ nếu các bạn không nắm được định nghĩa của từng loại quan hệ. Đầu tiên chúng ta cùng điểm qua 1 số loại quan hệ trong lập trình C++: "part-of", "has-a", "uses-a", "depends-on", "member-of" and "is-a". Chúng ta sẽ cùng tìm hiểu cách chúng giúp ích được cho việc lập trình với các lớp, định nghịa của từng loại và cách cài đặt chúng.