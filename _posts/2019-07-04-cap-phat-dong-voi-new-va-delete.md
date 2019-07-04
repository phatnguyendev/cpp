---
published: false
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