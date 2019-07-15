---
published: true
layout: post
title: Nạp chồng toán tử số học
categories: oop
img: bai26.png
lesson: 9
excerpt_separator: <!--more-->
---
Toán tử số học là toán tử được sử dụng khá nhiều trong C++. Đặc trưng của nó là 4 loại toán tử huyền thoại: +, -, *, / Trong bài học này chúng ta sẽ nạp chồng toán tử số học cho lớp PhanSo. Let's go! <!--more-->
## Cú pháp cài đặt
Để có thể thực hiện, chúng ta sẽ khai báo như sau:
{% highlight cpp %}
	<kiểu dữ liệu> operator<kí hiệu toán học>(<các tham số nếu có>) {}
{% endhighlight %}
### Cài đặt với hàm thành phần (member function)
Chúng ta có thể nạp chồng toán tử như 1 phương thức trong class, xem ví dụ sau:
{% highlight cpp %}
        #include <iostream>
        using namespace std;
     
        class PhanSo {
        	int TuSo;
        	int MauSo;
        	public:
        	PhanSo() {
        		TuSo = 1;
        		MauSo = 1;
        	}
        	PhanSo(int t, int m=1) {
        		TuSo =  t;
        		MauSo = m;
        	}
        	//overload operator +
        	PhanSo operator+(const PhanSo& ps) {
     
        		int MauSoChung = this->MauSo * ps.MauSo;
     
        		PhanSo result;
     
        		result.TuSo = this->TuSo * ps.MauSo + ps.TuSo * this->MauSo;
        		result.MauSo = MauSoChung;
     
        		return result;
        	}
     
        	void Xuat() {
        		cout << TuSo << "/" << MauSo << endl;
        	}
        };
     
        int main() {
        	PhanSo ps1(1,2);
        	PhanSo ps2(2,3);
     
        	PhanSo kq = ps1 + ps2;
        	kq.Xuat();
        	return 0;
        }
{% endhighlight %}
Kết quả chúng ta được:
{% highlight cpp %}
	7/6
{% endhighlight %}
Nói 1 chút về toán tử ``+`` của lớp PhanSo, ở trong chương trình trên ta có thê hiểu như sau:
{% highlight cpp %}
        	PhanSo kq = ps1.operator+(ps2);
{% endhighlight %}
Nhưng viết với dấu toán học nhìn đẹp hơn nhiều :) Tiếp theo chúng ta sẽ cùng điểm qua 1 số cách viết khác.
### Cài đặt với hàm bạn (friend function)
Tư tưởng code khá giống nhau, chỉ khác là chúng ta sẽ dùng hàm bạn để overload toán tử ``+``. Các bạn có thể code thử trước khi xem cách làm bên dưới.
{% highlight cpp %}
            #include <iostream>
            using namespace std;
     
            class PhanSo {
            	int TuSo;
            	int MauSo;
            	public:
            	PhanSo() {
            		TuSo = 1;
            		MauSo = 1;
            	}
            	PhanSo(int t, int m=1) {
            		TuSo =  t;
            		MauSo = m;
            	}
            	//overload operator +
            	friend PhanSo operator+(const PhanSo& ps1, const PhanSo& ps2) {
     
            		int MauSoChung = ps1.MauSo * ps2.MauSo;
     
            		PhanSo result;
     
            		result.TuSo = ps1.TuSo * ps2.MauSo + ps2.TuSo * ps1.MauSo;
            		result.MauSo = MauSoChung;
     
            		return result;
            	}
     
            	void Xuat() {
            		cout << TuSo << "/" << MauSo << endl;
            	}
            };
     
            int main() {
            	PhanSo ps1(1,2);
            	PhanSo ps2(2,3);
     
            	PhanSo kq = ps1 + ps2;
            	kq.Xuat();
            	return 0;
            }
{% endhighlight %}
Chúng ta có thể định nghĩa hàm bạn bên trong class nhưng khác với hàm thành phần, hàm bạn cần có tham số là 2 toán hạng tham gia vào phép cộng (vì không có con trỏ this). Các bạn lưu ý điều này nhé.
### Toán hạng với kiểu dữ liệu khác nhau
Mình sẽ giới thiệu với các bạn 1 trường hợp khá đặc biệt - cộng số nguyên với phân số.

Chúng ta sẽ phân tích 1 chút: kết quả trả về của phép cộng này vẫn là 1 phân số, có 2 TH xảy ra:
 - phân số + số nguyên: tương tự operator+(PhanSo,int)khi dùng hàm bạn hoặc operator(int) khi dùng hàm thành phần.
 - số nguyên + phân số: tương tự operator+(int,PhanSo) khi dùng hàm bạn hoặc...chúng ta không thể dùng hàm thành phần :) vì toán hạng thứ 1 là số nguyên - khác với kiểu dữ liệu PhanSo chúng ta định nghĩa.

Để giải quyết cho TH2 chúng ta có thể dùng hàm bạn như sau:
{% highlight cpp %}
            #include <iostream>
            using namespace std;
     
            class PhanSo {
            	int TuSo;
            	int MauSo;
            	public:
            	PhanSo() {
            		TuSo = 1;
            		MauSo = 1;
            	}
            	PhanSo(int t, int m=1) {
            		TuSo =  t;
            		MauSo = m;
            	}
     
            	//overload operator +
            	friend PhanSo operator+(const int& inte, const PhanSo& ps2) {
     
        			PhanSo ps1(inte);
     
            		int MauSoChung = ps1.MauSo * ps2.MauSo;
     
            		PhanSo result;
     
            		result.TuSo = ps1.TuSo * ps2.MauSo + ps2.TuSo * ps1.MauSo;
            		result.MauSo = MauSoChung;
     
            		return result;
            	}
     
            	void Xuat() {
            		cout << TuSo << "/" << MauSo << endl;
            	}
            };
     
            int main() {
            	PhanSo ps2(2,3);
     
            	PhanSo kq = 2 + ps2;
            	kq.Xuat();
            	return 0;
            }
{% endhighlight %}
Để ý thấy trong toán tử cộng số nguyên với phân số, mình đã tạo ra 1 phân số từ số nguyên được truyền vào, nhưng nếu chúng ta có nhiều toán tử và mỗi toán tử lại phải định nghĩa thêm 1 version nữa cho 2 kiểu dữ liệu khác nhau thì code sẽ rất nhàm và dài dòng, chúng ta có vài cách sau:
#### Dùng constructor
Như các mình dùng ban nãy, nhưng chúng ta sẽ dùng trước khi đưa vào thực hiện toán tử, cụ thể
{% highlight cpp %}
			...
            int main() {
            	PhanSo ps2(2,3);
     			PhanSo ps1(2);
            	PhanSo kq = ps1 + ps2;
            	kq.Xuat();
            	return 0;
            }
{% endhighlight %}
Như vậy chúng ta không cần phải viết thêm 1 hàm cho số nguyên + phân số nữa.
#### Dùng toán chuyển kiểu
Được dùng khi chúng ta muốn chuyển kiểu dữ liệu tự định nghĩa sang 1 kiểu dữ liệu có sẵn (VD: PhanSo -> float), quy tắc viết như sau:
{% highlight cpp %}
			...
            PhanSo::operator float(){
  				return float(TuSo)/MauSo;
  			}
{% endhighlight %}
Áp dụng: khi chúng ta cộng 1 phân số với số thực (float) và muốn kiểu trả về là float. VD:
{% highlight cpp %}
                #include <iostream>
                using namespace std;
     
                class PhanSo {
                	int TuSo;
                	int MauSo;
                	public:
                	PhanSo() {
                		TuSo = 1;
                		MauSo = 1;
                	}
                	PhanSo(int t, int m=1) {
                		TuSo =  t;
                		MauSo = m;
                	}
     
                	//overload operator +
                	friend PhanSo operator+(const int& inte, const PhanSo& ps2) {
     
            			PhanSo ps1(inte);
     
                		int MauSoChung = ps1.MauSo * ps2.MauSo;
     
                		PhanSo result;
     
                		result.TuSo = ps1.TuSo * ps2.MauSo + ps2.TuSo * ps1.MauSo;
                		result.MauSo = MauSoChung;
     
                		return result;
                	}
     
        			operator float(){
      					return float(TuSo)/MauSo;
      				}
     
                	void Xuat() {
                		cout << TuSo << "/" << MauSo << endl;
                	}
                };
     
                int main() {
                	PhanSo ps2(2,3);
     
                	cout << ps2 + 2.3 << endl;
                	return 0;
                }
{% endhighlight %}
Kết quả: 2.96667
## Tổng kết
Chúng ta đã học qua cách nạp chồng toán tử số học cho kiểu dữ liệu tự định nghĩa, các bạn hãy luyện tập để nhớ được cách dùng nhé. Có thắc mắc vui lòng bình luận bên dưới để tụi mình giải đáp. Pie~