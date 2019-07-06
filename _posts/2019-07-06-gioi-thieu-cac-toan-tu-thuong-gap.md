---
published: true
layout: post
title: Giới thiệu các toán tử thường gặp trong C++
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Trong bài này chúng ta sẽ học về các toán tử thường gặp trong lập trình C++ ngoài các toán tử tính toán số học bình thường mình sẽ cung cấp thêm cho các bạn nhiều nhất có thể về những toán tử bạn có thể và dễ gặp trong quá trình code để bạn không phải thắc mắc tốn time khi gặp phải nhá. Nào bắt đầu thôi
<!--more-->
## Toán tử phân định dấu
Giống như chúng ta viết trên giấy, chẳng hạn bạn muốn có số -100 (âm một trăm) thì khi lập trình bạn cũng sẽ dùng toán tử - trước số 100 để ra kết quả tương tự và ngược lại dùng toán tử + để ra kết quả 100 và nếu để -(-100) thì kết quả các bạn biết rồi đó (các bạn tự chạy code nếu không chắc kết quả mình nghĩ là đúng nhé), cái này thì quá đơn giản đúng không nào.
## Toán tử tăng giảm
Đây là loại toán tử khá đặc biệt, các bạn hãy xem qua ví dụ sau:
![](https://2.bp.blogspot.com/-sPF9w7-uiwg/XHgSDeEq5JI/AAAAAAAAAcw/tYW9qnRGfB0FfD_K832alVDkxaEqvM3eQCK4BGAYYCw/s1600/bai5_1.png)

Các bạn có thấy 3 dòng Input trong phần execution không? Nhìn có vẻ lạ so với code nhỉ (mà nhìn cả toán tử cũng lạ nữa 😂) OK mình sẽ giải thích cả 3 dòng cout và kết quả từng dòng cho các bạn hiểu:

- x++: (postfix decrement) ngay lúc thực thi dòng lệnh có sử dụng toán tử này, giá trị của biến x vẫn là 5 và sau khi xuống dòng lệnh tiếp theo giá trị của x sẽ được tăng lên 1 đơn vị (tức x= 6).
- ++x: (prefix decrement) ngay lúc thực thi dòng lệnh có sử dụng toán tử này, giá trị của biến x tăng lên 1 đơn vị (x=6+1=7) nên khi cout dòng thứ 9 thì giá trị x = 7.
- x: lúc này giá trị x không thay đổi và vẫn bằng 7 thôi (cho vào cho các bạn bớt khó hiểu).
Đến đây chắc các bạn cũng hình dung được qua cách dùng toán tử tăng giảm rồi chứ còn công dụng của nó thì các bạn học sau này ắt sẽ dụng đến thôi vì đây là những toán tử hay gặp nhất mà.

## Toán tử đại số
Các dạng toán thân quen của 12 năm đại học như +, - , *, / thì không có gì là lạ với các bạn rồi đúng không nào. Chúng ta hãy cùng xem qua ví dụ sau đây:
![](https://2.bp.blogspot.com/-NKl3ZUODS6s/XHi-9DK3UGI/AAAAAAAAAc8/jeoYqeSZ8eo2RnMtfvI-q8T_P3_TOBzfQCK4BGAYYCw/s1600/bai5_2.PNG)

Ở đây có 2 điểm đặc biệt các bạn cần chú ý, đó là ở phép chia ('/') và phép chia lấy dư ('%') như sau:

**Phép chia bình thường:** để ý rằng khi chia 2 kiểu số nguyên (int) thì kết quả trả về là 1 số nguyên vậy nên kết quả 5/3 = 1 là hợp lí nhưng nếu các bạn muốn ra con số chính xác nhất như toán học bình thường (tức là 5/3 = 1.666..(kiểu **float**)) thì các bạn dùng 1 trong 2 cách như sau:
- Cách 1: sử dụng **static_cast<>(<kiểu dữ liệu>)** cụ thể mình sẽ ép kiểu của số bị chia (5) thành kiểu **float** để ra được thương là 1 kiểu float.
- Cách 2: một cách đơn giản nhất để ép kiểu float cho một số là nhân nó cho 1.0

Sau đây là code trình bày theo 2 cách và kết quả:
![](https://1.bp.blogspot.com/-Ls7IETPpKE4/XHjCyAxiSwI/AAAAAAAAAdc/-pdC3PbcKkA0eu0iDsqzLZgP7WHfV_UeQCK4BGAYYCw/s1600/bai5_3.PNG)

**Phép chia lấy dư:** phép chia này có thể khá mới với nhiều bạn, đối với ví dụ của chúng ta khi chia số học đầy đủ sẽ là: "5 / 3 = 1 dư 2" cho nên phép chia lấy dư ('%') sẽ trả về kết quả là 2 (khá hữu ích đấy chứ).

## Toán tử so sánh
Là một dạng toán tử k trả về giá trị true hoặc false rất quen thuộc với toán thông thường, gồm có:
**So sánh bằng (==)**: dùng để so sánh giá trị 2 vế có bằng nhau hay không, lưu ý tránh nhầm lẫn với toán tử gán (=).
- ExComEqual1: (3==3) trả về giá trị true
- ExComEqual2: (3==1) trả vế giá trị false

**So sánh khác (!=):** ngược lại với so sánh bằng, khá dễ hiểu nên mình lướt nhẹ qua.

Ngoài ra còn có các loại so sánh: **>, <, >=, <=** với công dụng tương tự như trong toán thông thường.
## Toán tử logic
Đây là dạng toán tử khác cũng trả về kiểu **đúng (true)** hoặc **sai (false)** hay được sử dụng để biến đổi các điều kiện 1 cách linh hoạt. Những toán tử logic hay gặp nhất là:

**Logic AND (&&):** trả về giá trị true khi cả điều kiện bên trái và phải đều thỏa mãn, ngược lại nếu 1 trong 2 không thỏa mãn trả về false.
- ExAND1: (5>3) && (4<5) trả về giá trị true vì cả 2 vế đều đúng.
- ExAND2: (3>4) && (5>4) trả về giá trị false vì điều kiện bên trái sai.

**Logic NOT (!):** trả về giá trị đối lập với giá trị hiện thời chẳng hạn !true = false và !false = true
- ExNOT1: !(1<2) trả về true (vì (1<2) trả về false)
- ExNOT2: !(3>1) trả về false (vì (3>1) trả về true)

**Logic OR (||):** trả về giá trị true nếu 1 trong 2 điều kiện thỏa mãn, ngược lại nếu cả 2 điều kiện đều không thỏa mãn trả về false.
- ExOR1: (5<1) || (3 >2) trả về giá trị true vì vế phải đúng.
- ExOR2: (1>2) || (2>2) trả về giá trị false vì cả 2 vế đều sai.
## Toán tử gán
Được dùng để gán giá trị vào biến gồm có: =, +=, -=, *=, /=

Trên đây là 6 loại toán tử thường gặp nhất trong C++, ngoài ra trong khi lập trình các bạn có thể gặp thêm nhiều loại toán tử khác như **sizeof(), con trỏ (), [index], toán tử phạm vi (::)...**

**Độ ưu tiên toán tử**
Các toán tử dùng trong 1 biểu thức sẽ có độ ưu tiên khác nhau để việc tính toán giá trị theo thứ tự nhất định như khi đi học chúng ta thường nhẩm "nhân chia trước cộng trừ sau" vậy đó. Để xem các toán tử trong C++ có độ ưu tiên như thế nào, các bạn truy cập vào link [C++ Operator Precedence (English)](http://www.enseignement.polytechnique.fr/informatique/INF478/docs/Cpp/en/cpp/language/operator_precedence.html)

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về các loại toán tử thường hay gặp nhất trong C++, các bạn hãy truy cập vào Series hướng dẫn lập trình C++ by TuiTuCode để học tiếp những bài thú vị khác nhé.
Có thắc mắc về bài học các bạn để lại bình luận bên dưới để được giải đáp ngay và đừng quên theo dõi page Tui Tự Code để cập nhật các bài viết mới nhé. Pie~
