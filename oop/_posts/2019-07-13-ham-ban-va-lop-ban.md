---
published: true
layout: post
title: Hàm bạn và lớp bạn
categories: oop
img: bai26.png
lesson: 5
excerpt_separator: <!--more-->
---
Ở bài này chúng ta sẽ hack não bằng 2 khái niệm khá thú vị trong C++ đó là hàm bạn (friend function) và lớp bạn (friend class).
## Vấn đề mở đầu
Có 2 loại tiền ảo, Scoin và Gcoin với cách tính như sau:
- 1 Scoin = 10$
- 1 Gcoin = 5$

Tính tổng số tiền 5 Scoin + 10 Gcoin theo Scoin?

**Vấn đề:** chúng ta đang có 2 đối tượng, vậy phương thức cộng sẽ thuộc đối tượng nào? Đó là khi chúng ta cần đến hàm bạn (friend function).

## Friend function
Hàm bạn không phải là hàm thành phần của 1 lớp nhưng có quyền truy cập các thuộc tính private của lớp đó.
Trở lại với bài toán trên, chúng ta sẽ thiết lập các lớp như sau:

