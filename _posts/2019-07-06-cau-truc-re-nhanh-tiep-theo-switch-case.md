---
published: true
layout: post
title: Cấu trúc rẽ nhánh tiếp theo (switch - case statement)
categories: cpp
img: image-4.png
excerpt_separator: <!--more-->
---
Hi ~ Hôm nay chúng ta sẽ cùng đến với một dạng cấu trúc rẽ nhánh khác tương tự if-else statement đó là switch-case statement dùng để làm cho code đẹp và tối ưu hơn trong nhiều trường hợp so với if-else, nào chúng ta hãy cùng xem cách nó tối ưu code như thế nào nhé.
<!--more-->
Đầu tiên hãy cùng xem qua cách hoạt động của lệnh swich-case bằng mô hình dưới đây:
![](https://2.bp.blogspot.com/-aOeDhNHUwAg/XHqeNrZ3sgI/AAAAAAAAAe8/4kQSqIOt_O4SqYY6cTTvr5hwQjiubjy7QCK4BGAYYCw/s400/bai6.PNG)

## Cấu trúc cơ bản
Sau khi các bạn đã xem hình, hãy xem qua cấu trúc mã giả của nó:
{% highlight cpp %}
  switch(<expression>)
  {
      case 1:
      <khối lệnh 1>
      break;
      case 2:
      <khối lệnh 2>
      break;
      case 3:
      <khối lệnh 3>
      break;
      default:
      <khối lệnh default>
  }
{% endhighlight %}