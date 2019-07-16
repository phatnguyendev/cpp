---
published: true
layout: post
title: Phạm vi truy xuất
categories: oop
img: bai101.png
lesson: 2
excerpt_separator: <!--more-->
---

Ở bài trước mình đã có đề cập đến từ khóa ``public`` để có thể truy xuất vào thuộc tính bên trong class từ bên ngoài và bài này mình sẽ nói rõ hơn về vấn đề truy xuất này. <!--more-->
## Các phạm vi truy xuất
Chúng ta sẽ đề cập đến 3 phạm vi truy xuất phổ biến:
- Public
- Private
- Protected

### Truy xuất public
Với việc khai báo phạm vi này, những thuộc tính và phương thức trong phạm vi public sẽ được truy cập tùy ý bên ngoài. Khai báo bằng từ khóa ``public``. Xem ví dụ dưới:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class Pupil {
     
    	string ID;
     
    	public:
    	string Name;
    	int Age;
    	string Class;
    };
     
    int main() {
     
    	Pupil a;
     
    	a.Name = 'Nguyen A'; //Hợp lệ
    	a.Age = '18';		//Hợp lệ
     
    	a.ID = '001'; //Không được
     
    	return 0;
    }
{% endhighlight %}
Để ý thấy các thuộc tính ``Age`` , ``Name`` nằm dưới từ khóa **public** đều truy xuất được riêng ``ID`` sẽ báo lỗi (nằm trước từ khóa public) vì lúc này ``ID`` đang ở phạm vi **private**.
### Truy xuất Private
Với việc khai báo phạm vi này, những thuộc tính và phương thức trong phạm vi private chỉ được truy xuất ở bên trong class. Mặc định mọi thuộc tính và phương thức đều ở trạng thái private, hoặc nếu bạn muốn phân biệt rõ ràng cũng có thể dùng từ khóa ``private`` tương tự ``public``. Lướt qua đoạn code dưới nào:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class Pupil {
   		
    	private: //Không khai báo mặc định vẫn private
    	string ID;
   		
    	public:
    	string Name;
    	int Age;
    	string Class;
  
  	    void SetID(string id) {
			this->ID = id;
		}
    };
     
    int main() {
     
    	Pupil a;
     
    	a.SetID('001'); //Hợp lệ
     	a.ID = '001'; //Không được
    	return 0;
    }
{% endhighlight %}
Có thể thấy cách để truy xuất thuộc tính private từ bên ngoài là nhờ vào 1 số phương thức public (như SetID sẽ gán giá trị ID bằng giá trị truyền vào) và đó cũng là cách chính thống để tương tác với các thuộc tính private.

**Lưu ý:** Nếu bạn muốn một số thuộc tính nào đó dưới từ khóa ``public`` là ``private`` bạn sẽ phải khai báo từ khóa ``private``.
### Một số chú ý
Phạm vi ảnh hưởng của các từ khóa: mọi thuộc tính và phương thức dưới từ khóa khai báo phạm vi(``public``, ``private`` hoặc ``protected``) đều có phạm vi tương tự cho đến khi gặp 1 từ khóa khai báo phạm vi khác.
{% highlight cpp %}
    class Pupil {
   		
		private:
    	string ID; //private
   		
    	public:
    	string Name; //public
    	int Age; //public
    	string Class; //public
  
  		void SetID(string id) { //public
  			this->ID = id;
  		}
    };
{% endhighlight %}
Hãy sử dụng quy tắc mặc định như sau: xử dụng public cho phương thức và private cho thuộc tính (nếu bạn cần làm khác thì cứ làm tự nhiên).

Tạo phương thức get/set để tương tác với các thuộc tính private.

Còn truy xuất ``protected`` thì sao? Chúng ta sẽ cùng tìm hiểu ở các phần sau.
## Tính đóng gói (Encapsulation)
Có thể hiểu đơn giản tính đóng gói là bảo mật các thông tin private. Chúng ta không thể tương tác trực tiếp với thuộc tính private mà phải thông qua các phương thức private (phương thức get/set). Mặt khác đóng gói cũng có nghĩa là gom các dữ liệu và các function thao tác trên dữ liệu đó lại (như những gì chúng ta làm trong class).

Đóng gói đem lại khá nhiều lợi ích (và cũng khá nhọc nhằn) ví dụ như bạn không cần biết class string hoạt động như thế nào, chúng ta sẽ chỉ cần thao tác với các function mà nó cung cấp (và thường rất tường minh và dễ dụng) như strlen,... Nhưng đối với chương trình của chúng ta, để đảm bảo tính đóng gói thì các thuộc tính private sẽ phải có các phương thức public để bên ngoài tương tác với chúng (sẽ rất nhiều get/set đấy :)). Nhưng quy chung hãy tập thói quen tuân thủ tính đóng gói khi bạn mới bắt đầu để giữ thói quen tốt khi lập trình hướng đối tượng nhé.
## Tổng kết
Hãy nắm những đặc điểm mình nêu trên để đảm bảo được tính đóng gói (Encapsulation) cho chương trình nhé. Pie~
