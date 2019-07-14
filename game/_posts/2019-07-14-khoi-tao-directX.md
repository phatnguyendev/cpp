Để lập trình với DirectX, ta cần phải download và cài đặt DirectX SDK (link hướng dẫn: [Tại đây](https://tuitucode.github.io/cpp/gioi-thieu-ve-directX/)). Đồng thời khai báo các thư viện và file header của DirectX: **d3d9.lib** và **d3d9.h**

![](https://1.bp.blogspot.com/-ey36OUAiHWk/XStMXTTnjtI/AAAAAAAAECw/Rq8_tnNzcygWPTjGCXyKU8gAM4pn7NaKwCLcBGAs/s1600/them%2Bthu%2Bvien1.PNG)
## Direct3D interface
Để chương trình có thể dùng Direct3D, ta cần phải tạo một biến để giữ một _interface_ của Direct3D và một _interface_ đến lớp thiết bị đồ họa.
Khai báo:
{% highlight cpp %}
//Direct3D interface
LPDIRECT3D9 d3d = NULL;
//thiết bị đồ họa
LPDIRECT3DDEVICE9 d3ddev = NULL;
{% endhighlight %}
## Tạo đối tượng Direct3D và device
Tạo đối tượng Direct3D:
{% highlight cpp %}
d3d = Direct3DCreate9(D3D_SDK_VERSION);
{% endhighlight %}
Kế tiếp là tạo ra đối tượng device đại diện cho card màn hình từ đối tượng Direct3D vừa tạo:
{% highlight cpp %}
d3d->CreateDevice(
	D3DADAPTER_DEFAULT, //dùng card màn hình mặc định
    D3DDEVTYPE_HAL, //vẽ bằng phần cứng
    //i.e. bằng card màn hình thay vì giả lập
    hWnd,
    D3DCREATE_SOFTWARE_VERTEXPROCESSING,
    &d3dpp, //các tham số thể hiện của thiết bị
    &d3ddev)
{% endhighlight %}
Bây giờ, trước khi gọi hàm này ta phải thiết lập các tham số cho thiết bị thông qua biến D3DPRESENT_PARAMETERS d3dpp và truyền con trỏ cho lời gọi hàm.
{% highlight cpp %}
D3DPRESENT_PARAMETERS d3dpp;
//Xóa mọi thứ về 0 trước khi sử dụng
ZeroMemory(&d3dpp, sizeof(d3dpp));
{% endhighlight %}
Thiết lập các số tham số cần thiết:
{% highlight cpp %}
d3dpp.Windowed = TRUE; //thể hiện ở chế độ cửa sổ
d3dpp.SwapEffect = D3DSWAPEFFECT_DISCARD;
d3dpp.BackBufferFormat = D3DFMT_UNKNOWN;
{% endhighlight %}
Ngoài ra, còn nhiều tùy chọn khác nữa. Như vậy là đủ để tạo một cửa sổ có thể vẽ bằng Direct3D. Bây giờ chúng ta sẽ xây dựng hàm Game_Run để có thể vẽ một số thứ đơn giản
## Game_Run
{% highlight cpp %}
void Game_Run(HWND hwnd)
{
	//đảm bảo con trỏ đến Direct3D là hợp lệ
    if(d3ddev == NULL)
    	return;
    //Xóa backbuffer về màu đen
    d3ddev->Clear(0, NULL, D3DCLEAR_TARGET, D3DCOLOR_XRGB(0,255,0), 1.0f, 0);
    //đánh dấu bắt đầu vẽ một frame
    if(d3ddev->BeginScene())
    {
    	//đánh dấu kết thúc vẽ một frame
        d3ddev->EndScene();
    }
    
    //đảo nội dung backbuffer lên front buffer
    d3ddev->Present(NULL, NULL, NULL, NULL);
}
{% endhighlight %}
Trong đó:
- Hàm _Clear_ tô toàn bộ _backbuffer_ bằng một màu cho trước, trong đoạn code trên là màu xanh lá. Chúng ta cần phải gọi hàm Clear ứng với mỗi frame để xóa toàn bộ nội dung đã vẽ ở những frame trước, nếu không xóa những hình ảnh của frame trước sẽ còn lại trên màn hình.
- Hàm _Present_ sẽ "swap" nội dụng backbuffer lên front-buffer để thể hiện frame lên màn hình.
## Game_End
{% highlight cpp %}
void Game_End(HWND hwnd)
{
	MessageBox(hwnd, "Program is about to end", "Game_End", MB_OK);
    if(d3ddev != NULL)
    	d3ddev->Release();
    if(d3d != NULL)
    	d3d->Release();
}
{% endhighlight %}
## Chạy trong chế độ toàn màn hình
Để game chạy trong chế độ toàn màn hình ta thay đổi một số tham số khi tạo cửa sổ và khi khởi tạo đối tượng LPDIRECT3DDEVICE như sau:
{% highlight cpp %}
//Tạo một cửa sổ
hWnd = CreateWindow(APPTITLE,
		APPTITLE, //tên lớp cửa sổ
        APPTITLE, //tiêu đề cửa sổ
		WS_EX_TOPMOST | WS_VISIBLE | WS_POPUP, //WINDOW STYLE, nếu WS_OVERLAPPED: có thanh ngang cửa sổ
		CW_USEDEFAULT, //X POSITION OF WINDOW
		CW_USEDEFAULT, //Y POSITION OF WINDOW
		SCREEN_WIDTH,
		SCREEN_HEIGHT,
		NULL, //PARENT WINDOW
		NULL, //MENU
		hInstance, //application instance
		NULL);
//fullscreen
d3dpp.Windowed = FALSE; //nếu true: chế độ cửa sổ
d3dpp.SwapEffect = D3DSWAPEFFECT_DISCARD;
d3dpp.BackBufferFormat = D3DFMT_X8R8G8B8;	d3dpp.BackBufferCount = 1;
d3dpp.BackBufferWidth = SCREEN_WIDTH;
d3dpp.BackBufferHeight = SCREEN_HEIGHT;
d3dpp.hDeviceWindow = hWnd;
{% endhighlight %}
Kiểm tra phím để thoát game khi ở chế độ fullscreen
Ta sẽ kiểm tra xem user có bấm phím ESC để thoát game không, nếu có, nó gửi thông điệp WM_QUIT đến chính nó để vòng lặp game kết thúc.
Để kiểm tra một phím có đang được bấm không, ta dùng hàm có sẵn của Windows là GetAsyncKeyState. Đây là cách tạm thời. Sau này khi học xong DirectInput ta sẽ chuyển sang dùng DirectInput.
{% highlight cpp %}
#define KEY_DOWN(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)
#define KEY_UP(vk_code) ((GetAsyncKeyState(vk_code) * 0x8000)?1:0)
{% endhighlight %}
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu cách khởi tạo DirectX, Game_Run, Game_End, cách nhận thao tác bàn phím...Bài sau chúng ta sẽ bước vào tìm hiểu Surface và Bitmaps.😉 Hãy truy cập vào [Series Make Game - TuiTuCode](https://tuitucode.github.io/cpp/game/)để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~