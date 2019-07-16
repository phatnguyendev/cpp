---
published: true
layout: post
title: Chuyển đổi thông qua constructor
categories: oop
img: bai221.png
lesson: 13
excerpt_separator: <!--more-->
---
Mặc định C++ sẽ hiểu bất kì 1 constructor nào cũng là toán tử ngầm định (implicit operator), bài học này chúng ta sẽ tìm hiểu thêm về nó nhé!<!--more-->
### constructor is implicit operator
Chúng ta cùng xem ví dụ sau về class PhanSo:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class PhanSo {
    	int TuSo;
    	int MauSo;
    	public:
    	PhanSo() {
    		TuSo = 0;
    		MauSo = 1;
    	}
     
    	PhanSo(int t, int m = 1) {
    		TuSo = t;
    		MauSo = m;
    	}
     
    	friend ostream& operator<<(ostream& out, PhanSo ps) {
    		out << ps.TuSo << "/" << ps.MauSo;
    		return out;
    	}
     
     
    };
     
    int main() {
    	PhanSo ps = 2;
     
    	cout << ps << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình là: 2/1
  
Có thể thấy chúng ta đã gán ``ps`` cho số ``2`` chứ không phải là 1 phân số nhưng kết quả chúng ta vẫn nhận được 1 phân số. Giải thích cho điều này, C++ đã tìm thấy 1 constructor của chúng ta có tham số kiểu int nên đã cố gắng chuyển đổi ngầm định (implicitly convert) số 2 sang kiểu PhanSo nên kết quả chương trình vẫn chạy bình thường.
### Từ khóa explicit
Việc ép kiểu ngầm định như ở trên cũng gây ra 1 số nguy hiểm, trường hợp dưới đây là ví dụ:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class iString {
    	string iData;
    public:
     
    	iString(int s) {
    		iData.resize(s);
    		cout << "wrong step!" << endl;
    	}
     
    	iString(const char* str) {
    		iData = str;
    	}
     
    	friend ostream& operator<<(ostream& out, iString d) {
    		out << d.iData;
    		return out;
    	}
     
     
    };
     
    int main() {
    	iString istr = 'z';
     
    	cout << istr << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình: wrong step!
  
Chúng ta thấy C++ đã chuyển đổi "nhầm" chữ z sang constructor có tham số int. Vì sao vậy? Trong khi chúng ta cũng đã có 1 constructor kiểu ``char*`` tại sao lại không chuyển đổi bằng constructor này, đó là vì kí tự (char) là 1 phần của họ số nguyên vì vậy trình biên dịch đã chuyển nó sang cho constructor version số nguyên kết quả là ``iData`` không có gì cả (ngoài mong muốn của chúng ta).
 
Để giải quyết vấn đề trên, chúng ta sẽ làm cho các constructor (và các hàm chuyển đổi) được rõ ràng hơn thông qua từ khóa ``explicit``. Constructor (và hàm chuyển đổi) với từ khóa này sẽ không thể sử dụng cho chuyển đổi ngầm định hay sao chép khởi tạo. Cùng quay lại chương trình trên với từ khóa ``explicit``:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class iString {
    	string iData;
    public:
     
    	explicit iString(int s) {
    		iData.resize(s);
    		cout << "wrong step!" << endl;
    	}
     
    	iString(const char* str) {
    		iData = str;
    	}
     
    	friend ostream& operator<<(ostream& out, iString d) {
    		out << d.iData;
    		return out;
    	}
     
     
    };
     
    int main() {
    	iString istr = 'z';
     
    	cout << istr << endl;
    	return 0;
    }
{% endhighlight %}
Lúc này chúng ta sẽ thấy chương trình báo lỗi nhưng nó là kết quả đúng :) Vì sao? Vì nếu trình biên dịch còn nhận constructor có tham số int thì chương trình sẽ chạy bình thường nhưng không có kết quả chúng ta mong muốn, còn nếu chương trình không nhận constructor có tham số kiểu int nó sẽ không tìm thấy constructor nào thích hợp để chuyển đổi kiểu ``char`` sang kiểu ``iString`` (chúng ta còn 1 constructor có tham số kiểu ``char*`` nhưng mặc định không thể chuyển từ ``char`` sang ``char*`` được nên không thể dùng constructor này). Vậy từ khóa ``explicit`` đã hoạt động tốt.

Để chuyển đối được theo mong muốn (trong ví dụ trên mong muốn chuyển được kiểu ``char`` sang ``iString``) chúng ta có thể tạo thêm 1 constructor có tham số kiểu char. Ngược lại nếu hoàn toàn không muốn xảy ra việc chuyển đổi này hãy đặt constructor có tham số kiểu char ở phạm vi private (nhưng vẫn có thể truy cập được từ bên trong class do đặc tính của truy xuất private).
### Từ khóa delete
Ví dụ mình không muốn lớp iString của mình nhận kiểu char, đơn giản mình sẽ không viết constructor hoặc bất cứ hàm chuyển đổi nào cho kiểu char hoặc cách mình vừa nêu ở trên nhưng trong trường hợp nào đó mà bạn vẫn nghi ngờ có sự chuyển đổi này chúng ta có thể chắc chắn hơn bằng cách dùng từ khóa ``delete``.
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
     
    class iString {
    	string iData;
    public:
     	
  		//bất cứ thứ gì dùng constructor này đều bị lỗi vì nó đã bị xóa bởi từ khóa delete
  		isString(char c) = delete;
  
    	iString(int s) {
    		iData.resize(s);
    		cout << "wrong step!" << endl;
    	}
     
    	iString(const char* str) {
    		iData = str;
    	}
     
    	friend ostream& operator<<(ostream& out, iString d) {
    		out << d.iData;
    		return out;
    	}
     
     
    };
     
    int main() {
    	iString istr = 'z'; //lỗi
     
    	cout << istr << endl;
    	return 0;
    }
{% endhighlight %}
Chúng ta có thể dùng từ khóa ``delete`` cho copy constructor hoặc các cài đặt toán tử (overload operator) mà chúng ta không mong muốn được sử dụng.
## Tổng kết
Chúng ta đã hiểu hơn về constructor và tìm hiểu được 2 từ khóa mới là ``explicit`` và ``delete``. Có thắc mắc các bạn bình luận bên dưới để tụi minh giải đáp nhé. Pie~
