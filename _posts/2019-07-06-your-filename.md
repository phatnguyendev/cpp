---
published: true
layout: post
title: Chương trình Hello World!
categories: cpp
img: image-3.png
excerpt_separator: <!--more-->
---
Đầu tiên, mình sẽ làm quen cách viết một chương trình cơ bản và tìm hiểu các điều cần có trong chương trình để chương trình thực thi được thông qua một chương trình Hello World đơn giản.<!--more-->

**Yêu cầu:** Viết chương trình in ra màn hình "Hello World!"

**Code**
{% highlight cpp %}
// Example program
//Khai bao thu vien iostream
#include <iostream>

//tuong duong std::
using namespace std;

//ham int main() la noi su thuc thi chuong trinh bat dau
int main()
{
    //in ra man hinh Hello World!
    cout<<"Hello World!"<<endl;
    
    system("pause");
    //gia tri tra ve cua ham int main()
    return 0;
}
{% endhighlight %}
Giờ hãy tìm hiểu chi tiết các thành phần cần thiết của một chương trình:

- **#include <iostream> :** là một chỉ thị tiền xử lý chứa nội dung của tập tin header chuẩn của C++. <iostream> là một tập tin header/thư viện chuẩn của C++ chứa các định nghĩa cho các dòng xuất/nhập, đầu vào/đầu ra tiêu chuẩn của chương trình. Các định nghĩa này được bao gồm trong namespace std.
- **using namespace std:** thông báo cho complier là mình đang sử dụng std namespace. Thay vì các bạn phải khai báo std:: trước mỗi lần sử dụng cout hoặc cin... (ví dụ: std::cout<<"Hello World!"<<std::endl;) thì đây là cách mà có thể tiết kiệm thời gian và tránh việc thiếu sót khi các bạn sử dụng các thành phần trong std namespace.
- **Hàm main():** là hàm chính, nơi sự thực thi chương trình bắt đầu, bắt buộc phải có và chỉ có một hàm main duy nhất trong chương trình và ở đây do int đứng trước main() nên nó phải luôn trả về một kiểu số int. Có nhiều cách khai báo hàm main. Đối với các bạn mới học C++ mình khuyến khích các bạn sử dụng cách khai báo hàm main như trên.
- **int:** được gọi là kiểu trả về của hàm. Hàm sẽ không yêu cầu giá trị trả về nếu nó là hàm void
- **Các câu lệnh (statements)** được viết trong cặp dấu ngoặc nhọn, kết thúc bằng dấu ``;``. Chương trình sẽ thực hiện lần lượt một cách có thứ tự từ trên xuống dưới từng dòng lệnh trong cặp ngoặc nhọn {} phía sau hàm main.
- **Lệnh cout:** có tác dụng in ra màn hình tất cả những gì nằm trong dấu ngoặc " ".
- **Lệnh endl:** cho phép ta xuống dòng. Cách khác: cout<<"Hello World \n";
- **Lệnh return 0:** kết thúc hàm main và trả về một giá trị. Ở đây ta trả về 0. Đây là giá trị thường được sử dụng để làm giá trị trả về của hàm int main().
- **//**: dùng để ghi chú trong chương trình

## Tổng kết
Cấu trúc của một chương trình C++ cơ bản gồm:

- Thêm các thư viện và không gian tên cần thiết
- Hàm main (bắt buộc phải có)
	- Kiểu trả về: int
	- Tên hàm: main
	- Thân hàm main: {}
- Giá trị trả về của hàm main: 0 hoặc một số khác kiểu int.
- Các dòng lệnh bên trong hàm main và phải được kết thúc bằng dấu ;
- // dùng cho ghi chú (có thể có hoặc không).

Bài viết tiếp theo mình sẽ làm quen với các kiểu dữ liệu, hằng, biến, macro, quy ước tên. Nếu có thắc mắc, lỗi các bạn cứ bình luận bên dưới để mình giải đáp. Theo dõi page: [Tui Tự Code](https://www.facebook.com/shareAboutIT/) để cập nhật các bài viết mới nhé.😘