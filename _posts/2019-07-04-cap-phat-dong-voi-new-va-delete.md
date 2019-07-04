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
