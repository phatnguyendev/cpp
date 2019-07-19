---
published: true
layout: post
title: Project cuối khóa OOP
categories: oop
img: bai120.png
lesson: 21
excerpt_separator: <!--more-->
---
Để kết thúc quá trình "tu luyện" OOP, chúng ta sẽ cùng thực chiến bằng project nhé!<!--more-->
### Quy định build project
Một số cách thức để code project:
- Có thể dùng IDE hoặc trình Editor để code (sử dụng phần mềm nào có chức năng biên dịch được là OK).
- Nên chia class ra các file header (tham khảo bài [Làm việc với header file](https://tuitucode.github.io/cpp/oop/header-file/) để biết rõ hơn).
- Áp dụng các đặc tính của OOP để viết chương trình.

Sau khi viết xong, các bạn có thể chạy chương trình với bộ testcase mình đưa sẵn hoạc nén file zip đưa lên drive và để link dưới phần bình luận (hoặc inbox fanpage [Tui Tự Code](https://www.facebook.com/shareAboutIT/)). Chúc các bạn thành công!
### Project 1 - Quản lý dịch vụ khách sạn
#### Mức độ: cơ bản
#### Mô tả:
Một khách sạn cung cấp hai loại dịch vụ là: giặt ủi và thuê xe. 

-> **Dịch vụ giặt ủi:** tiền giặt ủi = số kg quần áo * đơn giá (12.000 vnđ/kg) + tiền dịch vụ cộng thêm. Nếu số kg trên 10 kg thì giảm 5%. Tiền dịch vụ cộng thêm là phí phụ thu dành cho các sản phẩm cần chế độ giặt ủi đặc biệt như áo tơ tằm, áo len, áo da,…. Tiền dịch vụ cộng thêm = số lượng quần/áo (có chế độ giặt ủi đặc biệt, đơn vị tính cái) * 25.000 vnđ.

-> **Dịch vụ thuê xe:** tiền thuê xe = số giờ thuê * đơn giá. Nếu thuê quá 12 giờ giảm
10%.
#### Yêu cầu:
Xây dựng lớp HoaDon cho phép thực hiện nhập thông tin hóa đơn và xuất giá trị của
hóa đơn tính tiền sử dụng dịch vụ khách sạn. Thông tin hóa đơn gồm makh (mã khách
hàng), tenkh (họ tên khách hàng), và n (0<n<200) dịch vụ mà khách hàng đã sử dụng,
trigia (trị giá hóa đơn).
Hàm main phải thỏa mãn dạng tương tự như sau:
{% highlight cpp %}
int main()
{
HoaDon h; // tạo đối tượng hóa đơn
h.Nhap(); // nhập vào thông tin hóa đơn
h.xuat(); //in ra thông tin hóa đơn bao gồm makh, tenkh, thông tin n
//dịch vụ tương ứng với số tiền phải trả cho từng dịch vụ đã sử dụng, in
//ra tổng trị giá của hóa đơn.
system(“pause”);
return 0;
{% endhighlight %}
### Project 2 - Đang cập nhật
