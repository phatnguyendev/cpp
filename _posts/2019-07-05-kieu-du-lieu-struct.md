---
published: true
layout: post
title: Kiểu dữ liệu struct
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Bài trước chúng ta đã biết đến 1 kiểu dữ liệu tự định nghĩa rất hữu dụng và dễ dùng là enum và hôm nay chúng ta sẽ tiếp tục đến với 1 kiểu dữ liệu tự định nghĩa khác "phê" hơn nữa, đó là struct. Let's go!
<!--more-->
## Mở đầu là khi..
Khi bạn nghe được crush than rằng: "có cách nào để lưu lại được thông tin của các loại giày mà mình thích không nhỉ? Nhiều quá chả thể nhớ hết, mỗi đôi giày có nào là tên rồi nhãn hiệu rồi giá tiền... OMG!" Và thế là bạn quyết định sẽ store lại đống thông tin đó và mỗi khi crush cần thì bật ngay cửa sổ console cool ngầu lên cho ẻm chọn :)

Và khi bạn bắt đầu với những dòng code đầu tiên bạn chợt bối rối vì không biết phải lưu những thông tin của những đôi giày đó như thế nào là hợp lí, khai báo chục cái biến? hay khai báo mảng cho từng loại thông tin trong giày? chắc chắn là những đoạn code kinh dị rồi và TuiTuCode xuất hiện và tặng cho bạn vài kí tự: s-t-r-u-c-t.
## Struct là gì và "super power" của nó
Struct là 1 kiểu dữ liệu tổng hợp do người dùng tự định nghĩa (user-defined aggregate data types), với 1 thể hiện (instance) kiểu struct bạn sẽ có được đầy đủ thông tin bên trong mà mình muốn hay nói cách khác, struct sẽ nhóm các biến của các loại dữ liệu khác nhau thành 1 đơn vị duy nhất.

Chúng ta sẽ viết 1 struct cho đề bài mở đầu như sau:
{% highlight cpp %}
struct Giay {
	string ten;
	string nhanhieu;
	string gia;
}
{% endhighlight %}
Có thể thấy trong struct chúng ta có 3 kiểu string lần lượt chứa thôn tin tên giày, nhãn hiệu và giá của đôi giày đó, nhìn rất clear đúng không nào, Chúng ta sẽ tạo 1 biến kiểu ``Giay`` và gán giá trị cho nó
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
    struct Giay {
    	string ten;
    	string nhanhieu;
    	string gia;
    };
    int main() {
    	Giay giay1;
    	giay1.ten = "Giay the thao";
    	giay1.nhanhieu = "Adidas";
    	giay1.gia = "20000";
     
    	cout << "Ten giay: " << giay1.ten << endl;
    	return 0;
    }
{% endhighlight %}
Cách khai báo struct trong hàm main cũng khá đơn giản, và để truy xuất 1 phần tử trong struct các bạn dùng toán tử . (member selection operator), ở đây chúng ta truy xuất 3 phần tử có trong struct Giay và lần lượt gán giá trị cho nó, kết quả cout ta được
{% highlight cpp %}
	Ten giay: Giay the thao
{% endhighlight %}
Nhìn code rất sáng sủa đúng không nào. 1 cách khai báo khác nữa có phần nhanh hơn nhưng khó nhìn hơn 1 chút là
{% highlight cpp %}
	Giay giay1 {"Giay the thao", "Adidas", "20000"};
{% endhighlight %}
### Đưa struct vào 1 struc khác
Vì struct chứa được các kiểu dữ liệu khác nhau và kể cả struct nên chúng ta có thể đem 1 struct vào để giúp code tốt hơn, chúng ta sẽ đem struct Giay vào struct Girl như sau:
{% highlight cpp %}
	struct Girl
  	{
  		...
  		Giay giay;
  		...
  	}
{% endhighlight %}
và khi chúng ta muốn truy xuất thuộc tính trong struct Giay như ``ten`` thông qua struct Girl ta sẽ dùng nhiêu hơn 1 toán tử .
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
    struct Giay {
    	string ten;
    	string nhanhieu;
    	string gia;
    };
    struct Girl {
    	Giay giay;
    	string quanAo;
    };
    int main() {
    	//có thể khởi tạo g như sau:
    	//Girl g {{"giay the thao","Adidas","20000"},"Quan ao"}
    	Girl g;
    	g.giay.ten = "giay the thao";
     
    	cout << "Ten giay cua co gai: " << g.giay.ten << endl;
    	return 0;
    }
{% endhighlight %}
### Mảng các struct
Các bạn có thể dùng mảng (array) để lưu trữ các struct lại hoặc dùng danh sách liên kết (phần này liên quan đến Cấu trúc giải thuật & dữ liệu)
## Struct và con trỏ
Struct cũng như 1 mảng chứa các phần tử bên trong nó, nếu các bạn xuất địa chỉ của struct và địa chỉ của phần tử đầu tiên các bạn sẽ thấy nó trùng khớp nhau! Mà đã nói địa chỉ bộ nhớ thì con trỏ xuất hiện :) Để trỏ đến 1 struct, ta sẽ làm như trỏ đến bao biến khác:
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
    struct Giay {
    	string ten;
    	string nhanhieu;
    	string gia;
    };
     
    int main() {
     
    	Giay giay1 {"theo thao", "adidas", "20000"};
     
    	Giay *pGiay = &giay1;
     
    	return 0;
    }
{% endhighlight %}
Hoặc chúng ta có thể dùng cấp phát động với struct
{% highlight cpp %}
    #include <iostream>
    #include <string>
    using namespace std;
    struct Giay {
    	string ten;
    	string nhanhieu;
    	string gia;
    };
     
    int main() {
     
    	//Giay giay1 {"theo thao", "adidas", "20000"};
     
    	Giay *pGiay = new Giay;
  		*pGiay = {"di hoc", "batin", "2000"};
     
    	return 0;
    }
{% endhighlight %}
**Chú ý:** các bạn hoặc là cấp phát động cho con trỏ hoặc là trỏ nó đến 1 biến struct rồi mới đổ dữ liệu vào con trỏ nhé, nếu không giá trị của con trỏ mặc định chỉ là địa chỉ nên không nhận giá trị chúng ta đưa vào.

Để truy xuất đến các thuộc tính bên trong struct bằng con trỏ, chúng ta không sử dụng toán tử ``.`` mà dùng ``->``
{% highlight cpp %}
	string tenGiay = pGiay->ten;
  //nhưng nếu con trỏ trỏ đến struct Girl và bạn muốn
  // truy xuất thuộc tính tên giày trong struct Giay thì làm như sau
  	string tenGiay = pGirl->Giay.ten;
{% endhighlight %}
Thật sự các bạn sẽ thấy con trỏ phát huy trong struct như nào nếu các bạn học về danh sách liên kết, còn bài viết này mình chỉ giới thiệu vài nét thôi nên vấn đề cũng chỉ trên lý thuyết :) nhưng nắm được nó thì càng OK chứ sao
## Tổng kết
Vậy là chúng ta đã cùng vọc vạch 1 kiểu dữ liệu tự định nghĩa nữa là struct, với struct code nhìn sẽ sáng sủa và "sạch" hơn rất nhiều. Hẹn gặp lại trong các bài sau. Pie~
