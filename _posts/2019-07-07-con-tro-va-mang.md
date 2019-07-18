---
layout: post
title: Con trỏ và mảng
categories: basic
img: bai20.png
published: true
lesson: 20
excerpt_separator: <!--more-->
---
Trong bài viết này chúng ta sẽ cùng tìm hiểu về mối quan hệ giữa con trỏ và mảng nhé! Let's go.
<!--more-->
## Vài điều về mảng (array)
Không có điều gì mới cả, chúng ta cùng xét qua đoạn code sau (Các bạn thử đoán kết quả trước khi nhìn kết quả bên dưới nhé):
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
     
    	int array[4] = { 1, 2 , 3 , 4 };
      	cout << &array[0] << endl;
    	cout << array << endl;
    	cout << &array << endl;
    	cout << *array << endl;
    	return 0;
    }
{% endhighlight %}
Kết quả trên [Ideone.com](https://ideone.com/9WbFbU):
{% highlight cpp %}
	0x7ffef6c017d0
	0x7ffef6c017d0
  	0x7ffef6c017d0
	1
{% endhighlight %}
Nhìn vậy chắc các bạn cũng kết luận trong đầu vài thứ về mảng rồi đúng không? Mình tổng kết lại như sau:
  - Dòng 1: xuất ra địa chỉ nào đó => cái này thì clear rồi, xuất ra địa chỉ của phần tử đầu tiên trong mảng.
  - Dòng 2: xuất ra địa chỉ giống dòng 1 => tên biến của mảng có giá trị là **địa chỉ của phần tử đầu tiên** trong mảng đó.
  - Dòng 3: xuất ra địa chỉ giống dòng 2 => ``&array`` tương tự ``array``.
  - Dòng 4: xuất ra giá trị đầu tiên tron mảng.
  
OK làm thêm 1 tí nữa, nếu bây giờ chúng ta xuất ra dòng:
{% highlight cpp %}
	cout << *(array + 1) << endl;
{% endhighlight %}
Theo bạn sẽ xuất ra gì? Nhìn các kết quả đã được xuất ra và suy luận 1 phút nhé (đừng nhìn xuống dòng dưới) ;)

Kết quả trả về là giá trị phần tử thứ 2 trong mảng (là giá trị 2 trong mảng array ở phần code trên), có thể suy luận như sau:
{% highlight cpp %}
  array là địa chỉ, khi +1 ta sẽ được địa chỉ kế tiếp => địa chỉ kế tiếp chính là địa chỉ phần tử thứ 2 trong mảng và sau đó toán tử * sẽ lấy giá trị tại địa chỉ đó (hiện tại đã là địa chỉ của phần tử thứ 2)
{% endhighlight %}
  
Có ai thấy mảng và con trỏ gần như y hệt nhau không? Mình cũng thấy vậy đó nhưng thật sự chúng không giống nhau. Giá trị của mảng là giá trị của các phần tử trong mảng cơ còn giá trị của con trỏ thì chắc chắn là địa chỉ rồi.
## Mảng và con trỏ ... là 2 thứ khác nhau!
Trong bài học trước chúng ta thấy con trỏ có thể trỏ được đến 1 biến bất kì, vậy chúng ta sẽ trỏ nó đến mảng và xem có gì thú vị không nhé!
{% highlight cpp %}
        #include <iostream>
        using namespace std;
     
        int main() {
     
        	int array[4] = { 1, 2 , 3 , 4 };
          	int *ptr = array;
     
          	cout << sizeof(ptr) << endl;
          	cout << sizeof(array) << endl;
        	return 0;
        }
{% endhighlight %}
Ở đây có 2 dòng cout và thu được kết quả:
{% highlight cpp %}
	8
	16
{% endhighlight %}
Toán tử ``sizeof`` cho ta biết kích thước vùng nhớ của 1 biến, ở đây ta có **8 byte** cho con trỏ (vậy kiến trúc tập lệnh mà Ideone.com dùng là 64bit) và **16 byte** cho mảng (16 = 4 * 4 <=> 16 = số lượng phần tử trong mảng * kích thước 1 phần tử). Thêm 1 sự khác nhau nữa giữa con trỏ và mảng.

Xem thêm 1 đoạn code sau nữa để thấy được đôi điều thú vị khi con trỏ trỏ đến mảng nhé:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
     
    	int array[4] = { 1, 2 , 3 , 4 };
      	int *ptr = array;
      	
      	//cout << sizeof(ptr) << endl;
      	//cout << sizeof(array) << endl;
		
      	for(int i =0; i < 4; i++)
      	{
      		cout <<ptr[i] << endl;
      	}  
      	
      	cout << ptr[0] << endl;
      	
      	cout << *(ptr + 1) << endl;
      	
    	return 0;
    }
{% endhighlight %}

Các bạn tự chạy và xem kết quả như thế nào nhé.
### Tạo cách duyệt mảng với con trỏ
Thông thường khi muốn duyệt qua các phần tử trong mảng, bạn sẽ dựa vào index (cho vòng for chạy với biến i) để truy xuất vào mảng theo dạng ``array[i]`` và với con trỏ chúng ta sẽ có 1 cách truy xuất khá fun như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
     
    	//khởi tạo mảng
    	int array[5] = { 1, 2, 3, 4, 5 };
     
    	//cho biết trước số phần tử trong mảng (length)
    	int length = 5;
     
     
    	for(int *ptr = array; ptr < array + length; ptr++)
    	{
    		cout << *ptr << endl;
    	}
    	return 0;
    }  
{% endhighlight %}
Chương trình sẽ in ra:
{% highlight cpp %}
	1
	2
	3
	4                            
	5                            
{% endhighlight %}
Vậy là chúng ta đã có thêm 1 cách duyệt mảng nữa đúng không nào, các bạn hãy tìm hiểu cơ chế hoạt động của nó nhé!
## Tổng kết
Sau khi thấy được vài điều hay ho giữa con trỏ và mảng thì chắc các bạn đã nắm được phần nào về con trỏ rồi đúng không, tiếp tục giữ phong độ cho những bài sau nh. Pie~
