---
published: true
layout: post
title: Cấu trúc rẽ nhánh (If - else statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Một trong những cấu trúc điều khiển đơn giản và phổ biến nhất trong lập trình là cấu trúc rẽ nhánh và hầu hết bất cứ ngôn ngữ lập trình nào cũng đều sử dụng đến nó chỉ là câu lệnh có khác hơn nhưng chức năng sử dụng là như nhau. Bạn đã từng nghe câu "cứ IF ELSE là ra thôi" chưa? Hãy cùng xem qua sức mạnh thần thánh của câu lệnh đó nhé.
<!--more-->

## Cấu trúc cơ bản
Dưới đây là cấu trúc cơ bản nhất của cặp lệnh **if...else**:
{% highlight cpp %}
if(<điều kiện>)
  {
      //khối lệnh if
      <thực hiện lệnh gì đó>;
      <thực hiện thêm lệnh nữa>;
      ...
  }
  else
  {
      //khối lệnh else
      <thực hiện lệnh không nằm trong khối lệnh if>;
      <thực hiện thêm lệnh nữa vẫn không nằm trong khối lệnh if>;
  }
{% endhighlight %}

Mình sẽ giải thích qua một ví dụ cụ thể luôn để các bạn nhìn thấy cách đặt nó như thế nào trong 1 file cpp nhé.
**Bài toán thực tế:** một rạp xem phim có chế độ ưu đãi cho thành viên như sau: nếu bạn có thẻ thành viên thì giá vé xem phim là 45k còn không có thì giá vé sẽ là 60k. Cho người dùng nhập vào số 1(là thành viên) hoặc 0 (không là thành viên) và tính ra giá vé.

**Phân tích bài toán:**

Nếu dùng câu lệnh **if...else** để giải quyết thì phải tạo ra "điều kiện" trong ngoặc của **if** trước, dự theo yêu cầu ta thấy được điều kiện ở đây là có hoặc không có thẻ thành viên nên chúng ta sẽ tạo 1 biến **bool** _isMember_ để làm điều kiện.
<div class="alert alert-info">
"điều kiện": là một mệnh đề chỉ trả ra kết quả đúng hoặc sai, có thể dùng biến bool, toán tử so sánh: ==
Chúng ta có thể kết hợp nhiều mệnh đề với nhau thông qua toán tử && (và), || (hoặc).
</div>
Ta sẽ có: khi người dùng nhập vào 1: isMember = true và nhập vào 0: isMember = false
Sau khi đã giải quyết điều kiện, chúng ta xét đến những gì cần làm khi điều kiện đúng hoặc sai, đó là những lệnh nằm trong khối lệnh if và khối lệnh else. Đối với bài toán trên ta nhận thấy:
> if(isMember) giá vé = 45k else giá vé = 60k 


