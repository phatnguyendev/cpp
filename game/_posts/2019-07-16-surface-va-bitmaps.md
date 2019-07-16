Direct3D sử dụng surface cho rất nhiều thứ. Màn hình sẽ hiển thị những thứ mà card đồ họa gửi đến nó và card đồ họa sẽ lấy dữ liệu vùng nhớ đệm (frame buffer) và gửi tới màn hình.
## Một số khái niệm
- Frame buffer / Front buffer (bề mặt chính): là một vùng trên bộ nhớ được bộ xử lý hiển thị trực tiếp lên màn hình. Trong Direct3D, các chương trình sẽ không được thao tác trực tiếp lên Front buffer. Frame buffer được back buffer sao chép lên trong mỗi vòng lặp.
- Back buffer: là một vùng trên bộ nhớ, các chương trình có thể thao tác trực tiếp lên đây hoặc sao chép từ surface khác. Back buffer sẽ không hiển thị trực tiếp lên màn hình.
- Surface (off-screen surface) là một bề mặt thứ cấp được lưu trữ trong bộ nhớ của card đồ họa hoặc có thể trong bộ nhớ của hệ thống. Chúng ta có thể thực hiện nhiều thao tác như vẽ bitmap, load ảnh. Surface có thể ra tạo bao nhiêu cũng được miễn là còn đủ RAM và VRAM để chứa tất cả.

### Cách hoạt động:
Card đồ họa sẽ chứa thông tin mà chúng ta muốn hiển thị lên màn hình. Khi bạn muốn hiển thị thứ gì đó, card đồ họa sẽ lấy dữ liệu cần hiển thị tại vùng nhớ đệm được gọi là Front buffer (Frame buffer) sau đó sẽ gửi những thông tin đã lấy được đến màn hình để hiển thị. Màn hình sẽ cập nhật những phần mới và vẽ lại từ trên xuống dưới.

Front buffer nằm ở bộ nhớ đồ họa và biểu thị hình ảnh lên màn hình. Do đó, để thay đổi hiển thị trên màn hình theo ý muốn, cách đơn giản nhất là thay đổi trực tiếp dữ liệu trên Front buffer. Tuy nhiên, chúng ta sẽ không muốn vẽ trực tiếp lên Front buffer vì màn hình sẽ bị giật lag khi ta vẽ. Hiện tượng xảy ra là do một chương trình nào đó cập nhật trên Front buffer trong khi màn hình đang trong quá trình refresh. Cách giải quyết là ta sẽ vẽ mọi thứ lên một vùng nhớ ngoài màn hình chính là back buffer (double buffer) và chuyển nó lên màn hình rất nhanh. Kỹ thuật này người ta gọi là "double buffering".

Dưới đây là hình minh họa cho khái niệm "double buffering"
![](https://1.bp.blogspot.com/-EKq3uOOcFdA/XS1LMMECRbI/AAAAAAAAEDQ/sPKxMHqeumUjIoS-_cQRqdKWJc_Lg8wuACLcBGAs/s1600/double%2Bbuffering.PNG)

## Tạo surface
{% highlight cpp %}
LPDIRECT3DSURFACE9 surface = NULL;

//Xóa những thứ ta đang vẽ, dùng hàm Color Fill
HRESULT ColorFill(
	IDirect3Dsurface9* pSurface,
    CONST RECT* pRect,
    D3DCOLOR color);
    
//example
d3ddev->ColorFill(surface, NULL, D3DCOLOR_XRGB(255,0,0));
{% endhighlight %}
## Vẽ lên surface
Để vẽ một surface lên một surface ta dùng hàm **StretchRect**.
{% highlight cpp %}
HRESULT StretchRect(
	IDirect3DSurface9 *pSourceSurface,
    CONST RECT *pSourceRect,
    IDirect3DSurface9 *pDestSurface,
    CONST RECT *pDestRect,
    D3DTEXTEFILTERTYPE Filter);
    
//example
d3ddev->StretchRect(surface, NULL, backbuffer, NULL, D3DTEXF_NONE);
{% endhighlight %}
<div class="alert alert-info">
Hai surface đó phải cùng kích thước. Nếu surface nguồn nhỏ hơn surface đích thì nó sẽ được vẽ tại phía trên - bên trái của surface đích.
</div>
Rect nguồn có thể nhỏ hơn rect đích và bạn có thể vẽ surface nguồn lên bất kỳ nơi nào trên surface đích. Ví dụ:
{% highlight cpp %}
rect.left = 100;
rect.top = 90;
rect.right = 200;
rect.bottom = 180;
d3ddev->StretchRect(surface, NULL, backbuffer, &rect, D3DTEXF_NONE);
{% endhighlight %}
Để lấy con trỏ đến backbuffer ta dùng hàm **GetBackBuffer**.
{% highlight cpp %}
HRESULT GetBackBuffer(
	UINT iSwapChain,
    UINT BackBuffer,
    D3DBACKBUFFER_TYPE Type,
    IDirect3DSurface **ppBackBuffer);
    
//example
LPDIRECT3DSURFACE9 backbuffer = NULL;
d3ddev->GetBackBuffer(0, 0, D3DBACKBUFFER_TYPE_NONE, &backbuffer);
{% endhighlight %}
## Chương trình Create_Surface
Đây là ví dụ minh họa cách dùng ColorFill, StretchRect, GetBackBuffer, cách sử dụng surface, cách kết hợp các hàm trên với nhau. Kết quả chương trình như hình dưới đây:
![](https://1.bp.blogspot.com/-NlEMKJTk5n0/XS3kIPVDiSI/AAAAAAAAEDo/lFYQlFetGF0I0kIVAR8XV5FR4EmK2zOEQCLcBGAs/s1600/Create_Surface.PNG)

Tạo một project tên "Create_Surface" và thêm các file vào project "winmain.cpp". Nhớ thêm thư viện "d3d9.lib".
{% highlight cpp %}
//Các file header
#include<d3d9.h>
#include<time.h>

//Tiêu đề ứng dụng
#define APPTITLE "Create_Surface"

//Các macro để đọc phím - Chế độ full màn hình
#define KEY_DOWN(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)
#define KEY_UP(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)

//Độ phân giải màn hình
#define SCREEN_WIDTH 640
#define SCREEN_HEIGHT 480

//Các khai báo hàm
LRESULT WINAPI WinProc(HWND, UINT, WPARAM, LPARAM);
ATOM MyRegisterClass(HINSTANCE);
int Game_Init(HWND);
void Game_Run(HWND);
void Game_End(HWND);

//Các đối tượng của Direct3D
LPDIRECT3D9 d3d = NULL;
LPDIRECT3DDEVICE9 d3ddev = NULL;

LPDIRECT3DSURFACE9 backbuffer = NULL;
LPDIRECT3DSURFACE9 surface = NULL;

//window event callback function
LRESULT WINAPI WinProc(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	switch (msg)
	{
	case WM_DESTROY:
		Game_End(hWnd);
		PostQuitMessage(0);
		return 0;
	}
	return DefWindowProc(hWnd, msg, wParam, lParam);
}

//Các hàm hỗ trợ để khởi động Window
ATOM MyRegisterClass(HINSTANCE hInstance)
{
	//Create the window class structure
	WNDCLASSEX wc;
	wc.cbSize = sizeof(WNDCLASSEX);

	//điền tham số hàm vào struct
	wc.style = CS_HREDRAW | CS_VREDRAW;
	wc.lpfnWndProc = (WNDPROC)WinProc;
	wc.cbClsExtra = 0;
	wc.cbWndExtra = 0;
	wc.hInstance = hInstance;
	wc.hIcon = NULL;
	wc.hCursor = LoadCursor(NULL, IDC_ARROW);
	wc.hbrBackground = (HBRUSH)GetStockObject(WHITE_BRUSH);
	wc.lpszMenuName = NULL;
	wc.lpszClassName = APPTITLE;
	wc.hIconSm = NULL;

	//đăng ký lớp cửa sổ
	return RegisterClassEx(&wc);
}

//Đầu vào ứng dụng Window
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
	MSG msg;

	//Đăng ký lớp cửa sổ
	MyRegisterClass(hInstance);
	//khởi động ứng dụng
	HWND hWnd;
	//Tạo một cửa sổ
	hWnd = CreateWindow(APPTITLE,
		APPTITLE,
		WS_OVERLAPPED, //WINDOW STYLE
		CW_USEDEFAULT, //X POSITION OF WINDOW
		CW_USEDEFAULT, //Y POSITION OF WINDOW
		SCREEN_WIDTH,
		SCREEN_HEIGHT,
		NULL, //PARENT WINDOW
		NULL, //MENU
		hInstance, //application instance
		NULL);
	//Kiểm tra lỗi nếu không mở được cửa sổ
	if (!hWnd)
		return false;
	//hiển thị cửa sổ
	ShowWindow(hWnd, nCmdShow);
	UpdateWindow(hWnd);

	//Khởi tạo game
	if (!Game_Init(hWnd))
		return 0;

	//vòng lặp thông điệp chính
	int done = 0;
	while (!done)
	{
		if (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE))
		{
			//kiểm tra điều kiện thoát
			if (msg.message == WM_QUIT)
				done = 1;
			//giải mã thông điệp và chuyển lại cho WinProc
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}
		else
			//xử lý game
			Game_Run(hWnd);
	}
	return msg.wParam;
}

int Game_Init(HWND hWnd)
{
	HRESULT result;
	//initialize direct3d
	d3d = Direct3DCreate9(D3D_SDK_VERSION);
	if (d3d == NULL)
	{
		MessageBox(hWnd, "Error initializing Direct3D device", "Error", MB_OK);
		return 0;
	}
	//set Direct3D presentation paramaters
	D3DPRESENT_PARAMETERS d3dpp;
	ZeroMemory(&d3dpp, sizeof(d3dpp));
	d3dpp.Windowed = true;
	d3dpp.SwapEffect = D3DSWAPEFFECT_DISCARD;
	d3dpp.BackBufferFormat = D3DFMT_X8R8G8B8;
	d3dpp.BackBufferCount = 1;
	d3dpp.BackBufferWidth = SCREEN_WIDTH;
	d3dpp.BackBufferHeight = SCREEN_HEIGHT;
	d3dpp.hDeviceWindow = hWnd;

	//create Direct3D device
	d3d->CreateDevice(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, hWnd, D3DCREATE_SOFTWARE_VERTEXPROCESSING, &d3dpp, &d3ddev);
	if (d3ddev == NULL)
	{
		MessageBox(hWnd, "Error creating Direct3D device", "Error", MB_OK);
		return 0;
	}

	//set random number seed
	srand(time(NULL));

	//clear the backbuffer to black
	d3ddev->Clear(0, NULL, D3DCLEAR_TARGET, D3DCOLOR_XRGB(0, 0, 0), 1.0f, 0);

	//create pointer to the back buffer
	d3ddev->GetBackBuffer(0, 0, D3DBACKBUFFER_TYPE_MONO, &backbuffer);

	//create surface
	result = d3ddev->CreateOffscreenPlainSurface(100, 100, D3DFMT_X8R8G8B8, D3DPOOL_DEFAULT, &surface, NULL);
	if (!result)
		return 1;
	//return OK
	return 1;
}

void Game_Run(HWND hwnd)
{
	RECT rect;
	int r, g, b;
	//make sure the Direct3D device is valid
	if (d3ddev == NULL)
		return;
	//start rending
	if (d3ddev->BeginScene())
	{
		//fill the surface with random color
		r = rand() % 255;
		g = rand() % 255;
		b = rand() % 255;
		d3ddev->ColorFill(surface, NULL, D3DCOLOR_XRGB(r, g, b));
		//copy the surface to the backbuffer
		rect.left = rand() % SCREEN_WIDTH / 2;
		rect.right = rect.left + rand() % SCREEN_WIDTH / 2;
		rect.top = rand() % SCREEN_HEIGHT;
		rect.bottom = rect.top + rand() % SCREEN_HEIGHT / 2;
		d3ddev->StretchRect(surface, NULL, backbuffer, &rect, D3DTEXF_NONE);
		//stop rendering
		d3ddev->EndScene();
	}
	//display the back buffer on the screen
	d3ddev->Present(NULL, NULL, NULL, NULL);
	//check for escape key(to exit program)
	if (KEY_DOWN(VK_ESCAPE))
		PostMessage(hwnd, WM_DESTROY, 0, 0);
}

void Game_End(HWND hwnd)
{
	surface->Release();
	if (d3ddev != NULL)
		d3ddev->Release();
	if (d3d != NULL)
		d3d->Release();
{% endhighlight %}
## Load Bitmap
Cuối cùng là cách tải ảnh bitmap lên surface từ ổ cứng và vẽ nó lên màn hình thông qua backbuffer.
Yêu cầu: 
- Thêm thư viện "d3dx9.lib" (tương tự như thêm d3d9.lib) và thêm "#include <d3dx9.h>.
- Hàm cần dùng:

{% highlight cpp %}
HRESULT D3DXLoadSurfaceFromFile(
	LPDIRECT3DSURFACE9 pDestSurface,
    const PALETTEENTRY *pDestPalette,
    const RECT *pDestRect,
    LPCTSTR pSrcFile,
    const RECT *pSrcRect,
    DWORD Filter,
    D3DCOLOR ColorKey,
    D3DXIMAGE_INFO *pSrcInfo);
{% endhighlight %}

## Chương trình Load_Bitmap
Hãy viết một chương trình đơn giản nạp một ảnh bitmap vào surface và vẽ nó lên màn hình.
Ta sẽ chỉ thay đổi vãi chỗ so với chương trình Create_Surface, nên chỉ cần thay đổi chỗ cần thay đổi, không cần viết lại toàn bộ code. Nhớ thêm thư viện "d3d9.lib" và "d3dx9.lib"
- Đầu tiên ta thêm "#include<d3dx9.h> vào đoạn code như sau:

{% highlight cpp %}
#include <d3dx9.h>
#include <d3d9.h>
#pragma comment(lib, "d3dx9.lib")
#pragma comment(lib, "d3d9.lib")
#include<time.h>

//Tiêu đề ứng dụng
#define APPTITLE "Load_Bitmap"
{% endhighlight %}
- Đi đến hàm **Game_Init** và thay đổi để được nội dung sau, phần còn lại không thay đổi:

{% highlight cpp %}
int Game_Init(HWND hWnd)
{
	HRESULT result;
	//initialize direct3d
	d3d = Direct3DCreate9(D3D_SDK_VERSION);
	if (d3d == NULL)
	{
		MessageBox(hWnd, "Error initializing Direct3D device", "Error", MB_OK);
		return 0;
	}
	//set Direct3D presentation paramaters
	D3DPRESENT_PARAMETERS d3dpp;
	ZeroMemory(&d3dpp, sizeof(d3dpp));
	d3dpp.Windowed = true;
	d3dpp.SwapEffect = D3DSWAPEFFECT_DISCARD;
	d3dpp.BackBufferFormat = D3DFMT_X8R8G8B8;
	d3dpp.BackBufferCount = 1;
	d3dpp.BackBufferWidth = SCREEN_WIDTH;
	d3dpp.BackBufferHeight = SCREEN_HEIGHT;
	d3dpp.hDeviceWindow = hWnd;

	//create Direct3D device
	d3d->CreateDevice(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, hWnd, D3DCREATE_SOFTWARE_VERTEXPROCESSING, &d3dpp, &d3ddev);
	if (d3ddev == NULL)
	{
		MessageBox(hWnd, "Error creating Direct3D device", "Error", MB_OK);
		return 0;
	}

	//set random number seed
	srand(time(NULL));

	//clear the backbuffer to black
	d3ddev->Clear(0, NULL, D3DCLEAR_TARGET, D3DCOLOR_XRGB(0, 0, 0), 1.0f, 0);

	//create surface
	result = d3ddev->CreateOffscreenPlainSurface(640, 480, D3DFMT_X8R8G8B8, D3DPOOL_DEFAULT, &surface, NULL);
	if (result!=D3D_OK)
		return 1;
	//load surface from file into newly created surface
    //Thay đường dẫn "F:\\TOEIC.jpg" đến ảnh cần load lên
	result = D3DXLoadSurfaceFromFile(surface, NULL, NULL, "F:\\TOEIC.jpg", NULL, D3DX_DEFAULT, 0, NULL);
	//make sure file was loaded okay
	if (result != D3D_OK)
		return 1;
	//return okay
	return 1;
}
{% endhighlight %}
- Thay đổi một chút ở hàm **Game_Run**:
{% highlight cpp %}
void Game_Run(HWND hwnd)
{
	//make sure the Direct3D device is valid
	if (d3ddev == NULL)
		return;
	//start rending
	if (d3ddev->BeginScene())
	{
		//create pointer to the backbuffer
		d3ddev->GetBackBuffer(0, 0, D3DBACKBUFFER_TYPE_MONO, &backbuffer);
		//draw surface to the backbuffer
		d3ddev->StretchRect(surface, NULL, backbuffer, NULL, D3DTEXF_NONE);
		//stop rendering
		d3ddev->EndScene();
	}
	//display the back buffer on the screen
	d3ddev->Present(NULL, NULL, NULL, NULL);
	//check for escape key(to exit program)
	if (KEY_DOWN(VK_ESCAPE))
		PostMessage(hwnd, WM_DESTROY, 0, 0);
}
{% endhighlight %}
Kết quả chương trình sẽ hiển thị ảnh theo đường dẫn bạn truyền vào.
## Tổng kết
Chúng ta đã cùng nhau tìm hiểu về surface và bitmap, đặc biệt là 2 **chương trình Create_Surface** và **Load_Bitmap**...Các bạn hãy luyện tập code lại 2 chương trình này trong bài để nắm và hiểu rõ hơn về cách hoạt động của nó nhé, hơn thế các đoạn code này về sau sẽ sử dụng rất nhiều đến lúc đó các bạn chỉ cần coppy sử dụng lại thôi.😉 Hãy truy cập vào [Series Make Game - TuiTuCode](https://tuitucode.github.io/cpp/game/) để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~