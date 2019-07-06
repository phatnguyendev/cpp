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