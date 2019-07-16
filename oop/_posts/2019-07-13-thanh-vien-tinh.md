---
published: true
layout: post
title: Thành viên tĩnh
categories: oop
img: bai105.png
lesson: 6
excerpt_separator: <!--more-->
---
Thành viên tĩnh (static member) áp dụng đặc điểm của biến static để áp dụng cho các thuộc tính và phương thức của lớp. <!--more-->
## Biến static
Để hiểu hơn về biến static, chúng ta xét ví dụ sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int tick() {
    	static int count = 1;
    	return count++;
    }
     
    int main() {
    	cout << tick() << endl;
    	cout << tick() << endl;
    	cout << tick() << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả chương trình là:
{% highlight cpp %}
	1
	2
	3
{% endhighlight %}
Giải thích về kết quả cho bạn nào chưa rõ: biến static sẽ không bị hủy đi khi ra khỏi scope, vậy nên mỗi lần gọi hàm tick() biến count sẽ được tăng thêm 1 đơn vị.
## Static member
Đối với class, biến static được tạo ra như 1 dữ liệu dùng chung cho các thể hiện của lớp.
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    class Monster {
    	int ID;
     
    	public:
    	static int count;
    	Monster() {
    		this->count++;
    	}
    	static int getCount() {
    		return count;
    	}
    };
     
    int Monster::count = 0;
     
    int main() {
    	Monster A;
    	Monster B;
    	Monster C;
    	cout << Monster::count << endl;
    	cout << Monster::getCount() << endl;
    	return 0;
    }
{% endhighlight %}
Chương trình cho ra kết quả:
{% highlight cpp %}
	3
  	3
{% endhighlight %}
Một số điểm cần lưu ý:
- Không được gán giá trị ngay lúc khai báo biến (chỉ const static member mới khai báo như vậy).
- static member function (phương thức thành viên tĩnh) không thể dùng con trỏ this.
- Chúng ta có thể truy cập trực tiếp biến hoặc phương thức thành viên tĩnh mà không cần thông qua thể hiện của lớp (như ví dụ trên mình dùng toán tử phạm vi ``::``.
  
## Tổng kết
Thế là chúng ta đã tìm hiểu qua static member rồi, nêu có thắc mắc các bạn bình luận bên dưới nhé. Pie~
