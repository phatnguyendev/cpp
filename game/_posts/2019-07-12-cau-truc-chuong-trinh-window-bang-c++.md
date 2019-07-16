---
published: true
layout: post
title: Cấu trúc chương trình Windows bằng C++
categories: game
img: bai222.png
lesson: 2
excerpt_separator: <!--more-->
---
Một chương trình Windows tối thiểu phải có một hàm tên là **WinMain**. Ngoài ra, hầu hết còn có một hàm call back gọi là **WinProc** để xử lý một số các sự kiện do hệ điều hành Windows gửi đến. DirectX hoạt động theo cơ chế "kéo" (polled) - nghĩa là chúng ta đi lấy dữ liệu thay vì chờ nhận dữ liệu gửi đến từ đâu đó. Chẳng hạn: khi làm việc với bàn phím, chúng ta sẽ phải liên tục gọi hàm để biết trạng thái phím nào đã bị thay đổi.
<!--more-->

## Tạo một project - Ví dụ Chương trình "Hello World"
Chúng ta sẽ làm quen với cấu trúc chương trình Windows đơn giản hiển thị một hộp thoại với dòng chữ Hello World. Chương trình này đã bỏ qua các bước khó chịu như tạo cửa sổ, menu, hàm WinProc...
Tạo một Empty Project C++ và chạy đoạn code sau:
{% highlight cpp %}
#include <windows.h>

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nShowCmd)
{
	MessageBox(NULL, "Welcome!", "Hello World", MB_OK|MB_ICONEXCLAMATION);
    return 0;
}
{% endhighlight %}

## Hàm WinMain
Khai báo:
{% highlight cpp %}
int WINAPI WinMain(
    HINSTANCE hInstance, 
    HINSTANCE hPrevInstance, 
    LPSTR lpCmdLine, 
    int nShowCmd);
{% endhighlight %}
Ý nghĩa của các tham số:
- **HINSTANCE hInstance**: Tham số này định danh _thể hiện_ của chương trình được nạp và thi hành trên bộ nhớ (vì một chương trình có thể được thực thi nhiều lần, cùng lúc). Kiến trúc của hệ điều hành Windows cho phép các _thể hiện_ dùng chung mã chương trình trong bộ nhớ để tiết kiệm bộ nhớ - trong khi dữ liệu của các _thể hiện_ được lưu trữ riêng lẻ. Tham số hInstance cho phép ta biết mình đang chạy ở _thể hiện_ nào.
- **HINSTANCE hPrevInstance**: Tham số này cho biết định danh thể hiện vừa được gọi trước của chương trình. Tham số này thường dùng để đảm bảo chỉ có một thể hiện duy nhất của chương trình. Nếu là thể hiện đầu tiên thì hPrevInstance là NULL, ngược lại khác NULL. Điều này khá hợp với game vì chúng ta thường sẽ không muốn người chơi mở cùng lúc nhiều cửa sổ của cùng một game.
- **LPSTR lpCmdLine**: Chuỗi chứa các tham số dòng lệnh truyền cho chương trình. Tham số dòng lệnh thường dùng để thiết lập hoặc truyền thêm dữ liệu gì đó cho chương trình.
- **int nShowCmd**: Tham số này gợi ý cho chương trình nên tạo ra cửa sổ thế nào khi thực thi.

Giá trị trả về của hàm WinMain là một số nguyên thuộc kiểu int WINAPI. Giá trị trả về bằng 0 là có lỗi, khác 0 là mọi thứ đều bình thường.

## Khung hàm WinMain đầy đủ
{% highlight cpp %}
int WINAPI WinMain(
	HINSTANCE hInstance, 
    HINSTANCE hPrevInstance, 
    LPSTR lpCmdLine, 
    int nShowCmd)
{
	MSG msg; //khai báo biến chứa thông điệp
    
    //đăng ký lớp cửa sổ
    MyRegisterClass(hInstance);
    
    //khởi tạo ứng dụng
    if(!InitInstance(hInstance, nCmdShow))
    	return FALSE;
    
    //khởi động bộ tạo số ngẫu nhiên
    srand(time(NULL));
    
    //vòng lặp thông điệp chính
    while (GetMessage(&msg, NULL, 0, 0))
    {
    	TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    
    return msg.wParam;
}
{% endhighlight %}
Trong đó:
- **MSG msg**: biến lưu thông điệp do Windows gửi đến chương trình. Biến này sẽ được hàm **GetMessage** ở sau đổ dữ liệu vào.
- Hàm **InitInstance** sẽ tạo cửa sổ chương trình nếu _instance_ của chúng ta là _instance_ đầu tiên, ngược lại nó sẽ thoát.
- **Vòng lặp thông điệp chính**: dùng để xử lý tất cả thông điệp của chương trình. Vòng lặp sẽ chạy mãi cho đến khi chúng ta nhận được thông điệp và thông điệp này làm cho hàm GetMessage trả về kết quả FALSE (thường là yêu cầu đóng ứng dụng).
- **Hàm GetMessage**: có nhiệm vụ lấy ra một thông điệp trong số những thông điệp Windows gửi đến chương trình trong hàng đợi thông điệp của ứng dụng. Cấu trúc hàm:

{% highlight cpp %}
BOOL GetMessage(
	LPMSG lpMsg, 
    HWND hWnd, 
    UNIT wMsgFilterMin, 
    UNIT wMsgFilterMax);
{% endhighlight %}
Ý nghĩa của các tham số:
- **LPMSG lpMsg**: Đây là con trỏ đến biến để lưu trữ dữ liệu của thông điệp mà chương trình sẽ nhận được từ Windows.
- **HWND hWnd**: Chứa định danh cửa sổ, cho biết sẽ lấy ra thông điệp của cửa sổ nào. Nếu truyền vào NULL, GetMessage sẽ trả về toàn bộ thông điệp gửi đến instance của chương trình.
- **UNIT wMsgFilterMin, UNIT wMsgFilterMax**: Giới hạn hàm GetMessage chỉ lấy ra thông điệp trong một phạm vi nhất định nào đó. Chúng ta sẽ không sử dụng 2 tham số này nên sẽ đặt cả 2 giá trị bằng 0.

<div class="alert alert-info">
Lời gọi tới hàm GetMessage là dòng code quan trọng nhất của chương trình Windows. Nếu không có dòng này trong WinMain thì ứng dụng sẽ tê liệt vì không thể phản ứng với bất kỳ thao tác nào của người dùng.
</div>
- Hàm **TranslateMessage**: dùng để chuyển đổi thông điệp chứa mã phím ảo sang mã ký tự.
- Hàm **DispatchMessage**: trả thông điệp trở lại hệ thống thông điệp

Hai hàm này dùng để xử lý thông điệp trả ra bởi hàm **GetMessage**. Kết hợp hai hàm này sẽ giúp chương trình lấy ra và chuyển thông điệp đến từ hệ điều hành Windows cho hàm xử lý thông điệp **WinProc**.
Vòng lặp thông điệp chỉ cần được viết ra một lần duy nhất và sẽ hầu như không cần sửa đổi về sau.

## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về cấu trúc của một chương trình Windows…Các bạn hãy luyện tập code lại các ví dụ trong bài để nắm và hiểu rõ hơn về cách hoạt động của nó nhé, hơn thế các đoạn code này về sau sẽ sử dụng rất nhiều đến lúc đó các bạn chỉ cần coppy sử dụng lại thôi.😉 Hãy truy cập vào [Series Make Game - TuiTuCode](https://tuitucode.github.io/cpp/game/) để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~ 
