---
layout: post
title: Đọc ghi file 
categories: cpp
img: image-4.png
published: true
excerpt_separator: <!--more-->
---
Yo~ Trong bài này chúng ta sẽ cùng nhau tìm hiểu cách C++ tương tác với các file như thế nào nhé. Let's go!<!--more-->
## Giới thiệu qua về File I/O
Cũng giống với I/O bình thường thôi, ở đây chúng ta có 3 lớp cần quan tâm: ifstream, ofstream và fstream. Việc sử dụng như thế nào thì cùng tìm hiểu phía dưới nhé!
## Ghi file 
Để ghi dữ liệu vào file, các bạn dùng thư viện ``fstream``
{% highlight cpp %}
#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;

int main() {
	
	//chọn file sample.txt để ghi vào
    ofstream outf("sample.txt");
 
    //nếu không mở được file thì xuất lỗi
    if (!outf)
    {
        //Xuất lỗi với cerr
        cerr << "Khong the mo file!" << endl;
        exit(1);
    }
 
    //Viết vài dòng gì đó
    outf << "Dong dau tien" << endl;
    outf << "Dong thu 2" << endl;
 
	return 0;
}
{% endhighlight%}
Nếu dùng Visual Studio các bạn vào thư mục project sẽ xuất hiện 1 file sample.txt cùng cấp với thư mục Debug với nội dung:
{% highlight cpp %}
	Dong dau tien
	Dong thu 2
{% endhighlight%}
Đơn giản đúng không nào!
## Đọc file
Chúng ta sẽ đọc file vừa tạo trên console như sau:
{% highlight cpp %}
#include <fstream>
#include <iostream>
#include <string>
#include <cstdlib>
 
int main()
{
    using namespace std;
 
    //sử dung ifstream
    ifstream inf("sample.txt");
 
    //xuất lỗi khi không mở được file.
    if (!inf)
    {
        cerr << "khong the mo file!" << endl;
        exit(1);
    }
	
	//trong khi vẫn còn đọc được
    while (inf)
    {
        
        string strInput;
        getline(inf, strInput);
        cout << strInput << endl;
    }
    
    return 0;
}
{% endhighlight%}
Và màn hình console khi chạy sẽ xuất ra 2 dòng trong file của chúng ta.
## Vấn đề với close()
Ngoài cách truyền tên file trực tiếp vào, chúng ta có thể dùng hàm ``open()``
{% highlight cpp %}
  	//ofstream outf("sample.txt");
  	ofstream outf;
  	outf.open("sample.txt");
{% endhighlight%}
Và trong trường hợp bạn muốn đóng file lại sau khi thao tác xong (và không muốn chờ đến khi chương trình tự đóng) các bạn dùng hàm ``close()``
{% highlight cpp %}
  	outf.close();
{% endhighlight%}
Sau khi đóng bằng close, các bạn vẫn có thể dùng open để mở file ra thao tác tiếp như bình thường nếu muốn.
## Một số mode đọc ghi file
C++ hỗ trợ chúng ta 1 số mode sau:
![](https://raw.githubusercontent.com/nguyenchiemminhvu/CPP-Tutorial/master/10-files-streams/10-3-mot-so-thao-tac-ghi-du-lieu-vao-file-trong-cpp/0.png)
Ví dụ mới mode ``app`` trong trường hợp các bạn mở 1 file đã có dữ liệu và muốn ghi tiếp vào file đó thì chúng ta phải dùng mode này (bằng không chúng ta sẽ ghi đè lên toàn bộ dữ liệu cũ). Để sử dụng mode các bạn thêm tham số mode như sau:
{% highlight cpp %}
  //sử dụng mode app (append)
	ofstream outf("sample.txt", ios::app);
{% endhighlight%}
## Tổng kết
Vậy là chúng ta đã biết cách đọc ghi file trong C++, các bạn nhớ chú ý ghi nhớ để tận dụng trong quá trình code nhé. Pie~
