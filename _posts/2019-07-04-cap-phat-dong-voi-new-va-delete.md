---
layout: post
title: Cấp phát động với new và delete
categories: cpp
img: image-4.png
published: true
excerpt_separator: <!--more-->
---
Bonjour! Hôm nay chúng ta sẽ cùng nhau tìm hiểu một thứ hay ho nữa (thật sự hay) mà con trỏ làm được đó là cấp phát động với con trỏ, phần này khá quan trọng các bạn chú ý nhé.
## Vấn đề cấp phát bộ nhớ
Đầu tiên chúng ta cùng xem qua về cách cấp phát bộ nhớ trong C++:
 - **Cấp phát bộ nhớ tĩnh:** cấp phát cho các biến ``static`` và biến ``global``, sẽ cấp phát 1 lần duy nhất khi chương trình được chạy và được thu hồi tự động.
 - **Cấp phát bộ nhớ tự động:** cấp phát cho các tham số của hàm hoặc các biến cục bộ (local varible) và sẽ được thu hồi tự động.
 - **Cấp phát bộ nhớ động:** Phần chúng ta sẽ tìm hiểu.

### Bắt đầu khi...
Khi bạn không mặn mà với việc ngồi nghĩ ra bao nhiêu size thì đủ cho việc tạo mảng tĩnh (vì bạn phải cấp size cho nó ngay khi tạo) và 69 lí do khác có thể đọc tại [learncpp.com](https://www.learncpp.com/cpp-tutorial/69-dynamic-memory-allocation-with-new-and-delete/)
## Cấp phát động
### Cấp phát động là
Là việc cấp phát khi chương trình của bạn gửi yêu cầu đến bộ nhớ, và bộ nhớ này trên ``heap`` chứ không phải ``stack`` "hẹp hòi" như các loại cấp phát khác (để hiểu ``heap`` và ``stack`` là gì các bạn có thể xem bài {link bài}).
### Con trỏ và cấp phát động
Để cấp phát động, chúng ta dùng toán tử ``new`` với con trỏ như sau:
{% highlight cpp %}
	#include <iostream>
  	using namespace std;
  	int main()
  	{
  		int *ptr = new int; //cấp phát bộ nhớ cho con trỏ.
  		*ptr = 10;		  //gán giá trị 10 vào địa chỉ bộ nhớ 
  							//mà con trỏ được cấp. 
  		return 0;
  	}
{% endhighlight %}
Nếu các bài trước các bạn thấy con trỏ luôn phụ thuộc vào 1 biến nào đó (cụ thể là biến mà con trỏ trỏ đến) thì mới có cái nói tiếp (nếu không trỏ thì nó ra sao mình cũng có nói rồi đó) thì lần này con trỏ đã thực sự là chính mình :)

**Giải thích một tí:** khi có toán tử ``new`` chương trình sẽ gửi yêu cầu cấp phát động cho bộ nhớ, nếu có thể đáp ứng thì hệ điều hành sẽ trả về địa chỉ bộ nhớ cho chương trình, và từ đây chương trình có thể sử dụng được bộ nhớ này theo ý muốn và đương nhiên có thể trả lại cho hệ điều hành bất cứ lúc nào (cho đến khi thoát chương trình).

Để trả lại vùng nhớ cho hệ điều hành, hãy sử dụng toán tử ``delete`` như sau:
{% highlight cpp %}
	delete ptr;
{% endhighlight %}
Sau khi sử dụng toán tử ``delete``, con trỏ bây giờ trở thành **dangling pointer** sau đó nếu bạn cố truy xuất đến giá trị của nó hoặc xóa nó lần nữa có thể bị lỗi **undefined behavior**. Nếu 1 con trỏ đang ở trạng thái "dangling" có nghĩa là mọi con trỏ khác trỏ đến nó (VD: int *ptr1 = ptr;) cũng sẽ lập tức biến thành dangling pointer.
### Trường hợp không cấp phát được
Một số trường hợp hiếm hoi rằng không có bộ nhớ trống nào trên heap để cấp phát cho chương trình của chúng ta, lúc này 1 ngoại lệ ``bad_alloc`` được trả ra và bạn không làm gì thì chương trình tự end :) and so we end.

Nếu bạn không muốn việc bị ném vào chương trình cái ngoại lệ như vậy thì nên sử dụng thêm hằng số std::nothrow như sau:
{% highlight cpp %}
	int *ptr = new (std::nothrow) int;
{% endhighlight %}
Thay vì ném ngoại lệ, nó sẽ trả về cho bạn 1 con trỏ null, và việc xử lý với con trỏ null thì lại dễ dàng hơn nhiều với vài dòng code nữa mà không bị crash chương trình:
{% highlight cpp %}
	int *ptr = new (std::nothrow) int;
  	if(!ptr) {
  		// lỗi xuất hiện => do something here!
  	}
{% endhighlight %}

<div class="alert alert-info">Con trỏ null (null pointer): 1 con trỏ giữ giá trị null (null value) - 1 giá trị đặc biệt cho biết con trỏ này không trỏ đến đâu cả.</div>
### Sử dụng cấp phát động an toàn
An toàn hay không nằm ở chỗ chúng ta "delete" con trỏ như thế nào, chú ý mấy điều sau:
  - Nếu bạn dùng cách khai báo với ``nothrow``, cứ việc dùng delete là đủ (delete 1 null pointer không có gì xảy ra cả).
  - Nếu bạn khai báo thông thường, trước khi delete, hãy chắc chắn rằng nó "alive":
{% highlight cpp %}
	if(ptr) {
  		delete ptr;
  	}
{% endhighlight %}
Hiện tượng **Memory Leak**: nói đơn giản, đó là khi chương trình "lạc mất" địa chỉ của bộ nhớ được cấp phát cho con trỏ, ví dụ:
{% highlight cpp %}
	#include <iostream>
  	using namespace std;
  	int main() {
  		int *ptr = new int;
  		int b = 12;
  		ptr = &b; // warning!
  	}
{% endhighlight %}
Khi các bạn đã tạo cấp phát động, nhưng sau đó lại trỏ con trỏ đến 1 vùng nhớ khác (như trỏ đến biến b) thì lúc này vùng nhớ động được cấp phát thực sự chưa mất và cũng chưa được giải phóng (cần toán tử delete) và địa chỉ của vùng nhớ này đã biến mất khỏi chương trình, và vì chưa được giải phóng nên hệ điều hành cũng không thể sử dụng và ngay cả chương trình của chúng ta cũng không thể xóa chúng khi kết thúc. Để tránh vấn đề này, hãy chắc chắn đã delete con trỏ khi bạn có ý định thay đổi vùng nhớ nó đang trỏ đến.
### Cấp phát động cho mảng
Con trỏ có thể được cấp phát động dưới dạng mảng như sau:
{% highlight cpp %}
	int *ptr = new int[5]; //cấp phát mảng 5 phần tử
{% endhighlight %}
Và sau đó bạn có thể dùng như mình đã dùng ở bài trước mà không cần phải tạo mảng rồi cho con trỏ trỏ đến nữa.
  
**Lưu ý:** Để delete với con trỏ mảng thì các bạn phải dùng:
{% highlight cpp %}
	delete[] ptr;
{% endhighlight %}
## Tổng kết
Phù ~ Phần này khá quan trọng nhưng cũng không quá khó khăn và còn có thể thấy được sức mạnh mới của con trỏ nữa nên các bạn nhớ chú ý kĩ nhé. Pie~