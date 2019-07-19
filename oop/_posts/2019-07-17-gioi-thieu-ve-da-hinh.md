---
published: true
layout: post
title: Giới thiệu về đa hình
categories: oop
img: bai115.png
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
- Thao tác xử lý: phải đảm bảo tính đa hình (vì các loại đối tượng khác nhau sẽ phải dùng thao tác xử lý khác nhau). Để làm được chúng ta có 2 cách: **vùng chọn kiểu** và **phương thức ảo**
    
Chúng ta sẽ dùng theo cách thông thường (không áp dụng đa hình) để xem có thể giải quyết được không nhé! Trong trường hợp này chúng ta sẽ dùng con trỏ (giảm đi bước khởi tạo nhiều đối tượng vì con trỏ đối tượng của lớp cha tham chiếu được đến đối tượng kiểu lớp con thông qua con trỏ):
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class SmartPhone {
    	protected:
    	string Ten;
    	string NSX;
    	public:
    	SmartPhone();
    	SmartPhone(string t, string n) {
    		Ten = t;
    		NSX = n;
    	}
    	void Xuat() {
    		cout << "Dien thoai co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class Android : public SmartPhone {
    	int CHplay;
    	public:
    	Android(int s, string t, string n) : SmartPhone(t, n) {
    		CHplay = s;
    	}
    	void Xuat() {
    		cout << "Android co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class IOS : public SmartPhone {
    	int AppleStore;
    	public:
    	IOS(int s, string t, string n) : SmartPhone(t, n) {
    		AppleStore = s;
    	}
    	void Xuat() {
    		cout << "IOS co ten " << Ten << " thuoc hang " << NSX << endl;
    	}	
    };
     
    class WindowPhone : public SmartPhone {
    	int Mstore;
    	public:
    	WindowPhone(int s, string t, string n) : SmartPhone(t, n) {
    		Mstore = s;
    	}
    	void Xuat() {
    		cout << "WindowPhone co ten " << Ten << " thuoc hang " << NSX << endl;
    	}	
    };
     
    int main() {
    	// your code goes here
    	const int sl = 3; // số lượng sản phẩm
     
    	SmartPhone *sp[sl];
    	sp[0] = new Android(1,"Samsung Galaxy S5","Samsung");
    	sp[1] = new IOS(2,"Iphone XS Max","Apple");
    	sp[2] = new WindowPhone(3,"Microsoft Lumia 535","Microsoft");
     
    	//xuất sản phẩm
    	for(int i=0; i< 3;i++){
    		sp[i]->Xuat();
    	}
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình:
{% highlight cpp %}
	Dien thoai co ten Samsung Galaxy S5 thuoc hang Samsung
	Dien thoai co ten Iphone XS Max thuoc hang Apple
	Dien thoai co ten Microsoft Lumia 535 thuoc hang Microsoft
{% endhighlight %}
OK Trước tiên chúng ta thấy khi sử dụng con trỏ sẽ tiện lợi hơn rất nhiều cho chúng ta, ở đây mình không cần phải tạo cả 3 đối tượng cho 3 lớp mà chỉ cần 1 con trỏ đối tượng lớp cha các bạn nhớ chú ý đặc điểm này nhé!
  
**Nhưng** với kết quả chúng ta thu được, mình nhận ra: con trỏ đối tượng lớp cha chỉ gọi hàm `Xuat` của lớp cha mặc dù đã được tham chiếu đến đối tượng của lớp con (và trong lớp con mình đã định nghĩa lại hàm `Xuat`). Đó chính là vấn đề của con trỏ đối tượng lớp cha. Cách giải quyết vấn đề trên? Dùng đa hình thôi nào :)
### Sử dụng vùng chọn kiểu
Để nhận diện được đối tượng của lớp nào, chúng ta sẽ thêm 1 vùng dữ liệu (thuộc tính) vào lớp cơ sở, sao cho giá trị của vùng chọn kiểu giữa các lớp đối tượng là khác nhau. Phổ biến trong phương pháp nào nhất chính là sử dụng kiểu dữ liệu `enum`. Làm thôi!
#### Cách thực hiện
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    enum TYPE {
    	PHONE,
    	ANDROID,
    	IoS,
    	WINDOWPHONE
    };
     
    class SmartPhone {
    protected:
    	string Ten;
    	string NSX;
    public:
    	TYPE loai;
    	SmartPhone();
    	SmartPhone(string t, string n) : loai(PHONE) {
    		Ten = t;
    		NSX = n;
    	}
    	void Xuat() {
    		cout << "Dien thoai co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class Android : public SmartPhone {
    	int CHplay;
    public:
    	Android(int s, string t, string n) : SmartPhone(t, n) {
    		CHplay = s;
    		loai = ANDROID;
    	}
    	void Xuat() {
    		cout << "Android co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class IOS : public SmartPhone {
    	int AppleStore;
    public:
    	IOS(int s, string t, string n) : SmartPhone(t, n) {
    		AppleStore = s;
    		loai = TYPE::IoS;
    	}
    	void Xuat() {
    		cout << "IOS co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class WindowPhone : public SmartPhone {
    	int Mstore;
    public:
    	WindowPhone(int s, string t, string n) : SmartPhone(t, n) {
    		Mstore = s;
    		loai = WINDOWPHONE;
    	}
    	void Xuat() {
    		cout << "WindowPhone co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    int main() {
    	// your code goes here
    	const int sl = 3; // số lượng sản phẩm
     
    	SmartPhone *sp[sl];
    	sp[0] = new Android(1, "Samsung Galaxy S5", "Samsung");
    	sp[1] = new IOS(2, "Iphone XS Max", "Apple");
    	sp[2] = new WindowPhone(3, "Microsoft Lumia 535", "Microsoft");
     
    	//xuất sản phẩm
    	for (int i = 0; i< 3; i++) {
    		switch (sp[i]->loai)
    		{
    		case ANDROID:
    			((Android*)sp[i])->Xuat();
    			break;
    		case IoS:
    			((IOS*)sp[i])->Xuat();
    			break;
    		case WINDOWPHONE:
    			((WindowPhone*)sp[i])->Xuat();
    			break;
    		}
    	}
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình:
{% highlight cpp %}
	Android co ten Samsung Galaxy S5 thuoc hang Samsung
	IOS co ten Iphone XS Max thuoc hang Apple
	WindowPhone co ten Microsoft Lumia 535 thuoc hang Microsoft
{% endhighlight %}
Yay! Chúng ta đã có kết quả theo mong muốn, tuy nhiên :) nhìn nó khá dài dòng, khó sử lỗi cũng như bảo trì, nâng cấp và đã là dân lập trình thì phải luôn tìm kiếm giải pháp tối ưu nhất đúng không nào? Vậy nên chúng ta sẽ đi đến cách thứ 2 tối ưu hơn - Phương thức ảo.
### Sử dụng phương thức ảo
Đây là cách chính thống để thể hiện tính đa hình trong C++, các phương thức ở lớp cơ sở có tính đa hình phải được định nghĩa là phương thức ảo.
  
Chúng ta hãy cùng nhìn lại vấn đề trước khi sử dụng vùng chọn kiểu: con trỏ của đối tượng lớp cha không thể truy xuất hàm `Xuat` ở lớp con -> chúng ta sẽ làm cho nó thực hiện được -> biến phương thức `Xuat` thành phương thức ảo.
#### Cách thực hiện
Đầu tiên chúng ta sẽ đặt từ khóa `virtual` trước khai báo hàm (mà chúng ta muốn biến thành phương thức ảo). Trong trường hợp hiện tại chúng ta đặt `virtual` ở phần khai báo phương thức Xuat
{% highlight cpp %}
	virtual void Xuat() {
		cout << "Dien thoai co ten " << Ten << " thuoc hang " << NSX << endl;
	}
{% endhighlight %}
Việc còn lại là ở các lớp con, chúng ta chỉ cần **định nghĩa lại** phương thức Xuat để mỗi lớp con sẽ xuất theo cách chúng ta định nghĩa (cũng là những gì chúng ta mong muốn)
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class SmartPhone {
    protected:
    	string Ten;
    	string NSX;
    public:
    	SmartPhone();
    	SmartPhone(string t, string n) {
    		Ten = t;
    		NSX = n;
    	}
    	virtual void Xuat() {
    		cout << "Dien thoai co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class Android : public SmartPhone {
    	int CHplay;
    public:
    	Android(int s, string t, string n) : SmartPhone(t, n) {
    		CHplay = s;
    	}
    	void Xuat() {
    		cout << "Android co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class IOS : public SmartPhone {
    	int AppleStore;
    public:
    	IOS(int s, string t, string n) : SmartPhone(t, n) {
    		AppleStore = s;
    	}
    	void Xuat() {
    		cout << "IOS co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    class WindowPhone : public SmartPhone {
    	int Mstore;
    public:
    	WindowPhone(int s, string t, string n) : SmartPhone(t, n) {
    		Mstore = s;
    	}
    	void Xuat() {
    		cout << "WindowPhone co ten " << Ten << " thuoc hang " << NSX << endl;
    	}
    };
     
    int main() {
    	// your code goes here
    	const int sl = 3; // số lượng sản phẩm
     
    	SmartPhone *sp[sl];
    	sp[0] = new Android(1, "Samsung Galaxy S5", "Samsung");
    	sp[1] = new IOS(2, "Iphone XS Max", "Apple");
    	sp[2] = new WindowPhone(3, "Microsoft Lumia 535", "Microsoft");
     
    	//xuất sản phẩm
    	for (int i = 0; i< 3; i++) {
    		sp[i]->Xuat();
    	}
     
    	return 0;
    }
{% endhighlight %}
Đoạn code vẫn như thế, chỉ thêm mỗi từ khóa `virtual` không tốn thêm dòng nào :) tuyệt cú mèo! 
#### Lưu ý khi dùng phương thức ảo
Tiện lợi là vậy nhưng cũng tìm ẩn khá nhiều rắc rối nếu chúng ta không thực hiện đúng, nắm 1 số ý sau:
  - Phương thức ảo chỉ hoạt động thông qua con trỏ
  - Để 1 phương thức trở thành phương thức ảo:
  	- Đặt từ khóa virtual trước khai báo (ở lớp cha)
  	- Phương thức tương ứng ở lớp cha đã là phương thức ảo
  - Phương thức ảo chỉ hoạt động khi phương thức ở lớp cha và lớp con có nghi thức giao tiếp giống nhau (kiểu trả về, tên, tham số)
  - Nếu ở lớp con không định nghĩa lại phương thức ảo, trình biên dịch sẽ gọi phương thức ảo gần nhất ở lớp cha.

<div class="alert alert-info">
Khi gọi một thao tác, khả năng chọn đúng phiên bản tùy theo đối tượng để thực hiện thông qua con trỏ đến lớp cơ sở được gọi là tính đa hình (polymorphisms).</div>
## Tổng kết
Oke vậy là chúng ta đã tìm hiểu cách cài đặt đa hình trong C++, mình sẽ giải thích cơ chế của phương thức ảo vào 1 bài gần nhất. Có thắc mắc trong quá trình học các bạn bình luận bên dưới nhé. Pie~
