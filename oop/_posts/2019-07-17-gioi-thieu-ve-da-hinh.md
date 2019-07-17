---
published: true
layout: post
title: Giới thiệu về đa hình
categories: oop
img: bai26.png
lesson: 18
excerpt_separator: <!--more-->
---
Đóng gói, kế thừa và tiếp theo chúng ta sẽ tìm hiểu về đa hình - đặc tính xuất hiện khi có sự kế thừa giữa các lớp. Đây là đặc tính quan trọng và liên quan nhiều đến con trỏ, cùng chiến nào!<!--more-->
## Bài toán về đa hình
Có 2 lớp TamGiac và HinhChuNhat kế thừa từ lớp Hinh, chúng ta cần 1 phương thức để tính diện tích tương ứng với mỗi lớp. Để tối ưu, mình sẽ dùng đặc tính kế thừa -> thiết kế phương thức TinhDienTich ở lớp cha nhưng có vấn đề xảy ra vì cách tính diện tích mỗi hình là không giống nhau vậy làm sao để 1 phương thức lại đáp ứng đúng cách tính cho hình cụ thể?
### Giải quyết bài toán
Ngoài trừ việc bạn muốn bỏ kế thừa để viết từng hàm tính diện tích, bạn sắp tìm hiểu đến 1 cách tuyệt vời và đẹp đẽ (cho code) đó là dùng **đa hình**.
## Đa hình là?
> Là hiện tượng các đối tượng thuộc các lớp khác nhau có khả năng hiểu cùng một thông điệp theo các cách khác nhau.

Chúng ta đến với ví dụ: quản lý danh sách các smartphone (có thể) khác kiểu nhau, các smartphone có thể có kiểu Android, IOS, Blackberry hoặc Windowphone.

Để giải quyết ví dụ trên, chúng ta quan tâm 2 hoạt động: lưu trữ và thao tác xử lý
	- Lưu trữ: thao tác trên mảng, các thư viện (list, vector,...)
    - Thao tác xử lý: phải đảm bảo tính đa hình (vì các loại đối tượng khác nhau sẽ phải dùng thao tác xử lý khác nhau). Để thỏa mãn tính đa hình chúng ta có 2 cách: **vùng chọn kiểu** và **phương thức ảo**
    
Trong trường hợp này chúng ta sẽ dùng con trỏ (giảm đi bước khởi tạo nhiều đối tượng vì con trỏ đối tượng của lớp cha tham chiếu được đến đối tượng kiểu lớp con thông qua con trỏ):
{% highlight cpp %}

{% endhighlight %}
    