---
published: true
layout: post
title: Mối quan hệ giữa các đối tượng
categories: oop
img: bai116.png
lesson: 14
excerpt_separator: <!--more-->
---
Trong hướng đối tượng, các đối tượng cũng có các mẫu, các mối quan hệ và thứ bậc giống như xã hội loài người. Chúng ta đã học cách ánh xạ thuộc tính và hành vi đối tượng vào class và trong loạt bài sắp tới chúng ta sẽ tìm hiểu sâu hơn về những thứ tồn tại xung quanh đối tượng. Let's go!
### Mở đầu bằng các quan hệ
Có rất nhiều loại mối quan hệ trong cuộc sống thực: học sinh là **thành viên** của lớp học, chân ga là **1 phần** của chiếc xe, laptop **có** bàn phím hay hình vuông **là** 1 hình chữ nhật,...

Tương tự như vậy, trong C++ cũng có những mối quan hệ hữu ích cho chúng ta sử dụng. Chúng không khó để nhận biết nhưng không dễ nếu các bạn không nắm được định nghĩa của từng loại quan hệ. Đầu tiên chúng ta cùng điểm qua 1 số loại quan hệ trong lập trình C++: "part-of", "has-a", "uses-a", "depends-on", "member-of" and "is-a". Trong đó chúng ta có 2 loại quan hệ cần chú ý nhất là "is-a" (Inheritance - kế thừa) và "has-a" (Composition - hợp thành).

Đây là 1 trong những phần quan trọng giúp chúng ta bước đầu chinh phục đặc tính kế thừa trong OOP cũng như hiểu hơn về các đối tượng trong C++, trước khi học các bài kế tiếp đảm bảo bạn đã học hết những bài trước cũng như nắm được cơ bản về cách class vận hành.

Chúng ta sẽ cùng tìm hiểu cách chúng giúp ích được cho việc lập trình với các lớp, định nghịa của từng loại và cách cài đặt chúng ở các bài sau. Hãy truy cập vào [Series OOP - TuiTuCode](https://tuitucode.github.io/cpp/oop/) để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~
