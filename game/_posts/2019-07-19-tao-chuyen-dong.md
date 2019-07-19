
Tạo chuyển động trong game cho các nhân vật sẽ làm cho game của bạn trở nên sinh động hơn. Ý tưởng đơn giản vẫn là vẽ tuần tự từng ảnh một theo thời gian. Tuy nhiên việc lưu trữ các ảnh rời rạc sẽ gây khó khăn trong việc quản lý các Animation, thông qua đó chúng ta sẽ sử dụng một công cụ khá hiệu quả đó là Sprite.

## Một số khái niệm
### Sprite
- Sprite là một đối tượng đồ họa 2D được vẽ lên màn hình. Các sprite kết hợp với nhau sẽ tạo nên khung cảnh cho game. Có thể di chuyển nó thông qua cách đặt tọa độ trong hàm vẽ lên màn hình.
- Có 2 cách vẽ sprite với Direct3D. Cả 2 phương pháp đều yêu cầu ta cung cấp các thông tin: vị trí, kích thước, tốc độ và các thuộc tính riêng khác.

**Cách 1:** Load 1 ảnh sprite vào trong surface và sau đó vẽ lên backbuffer sử dụng StretchRect như ở bài trước. Đây là cách đơn giản nhưng sẽ rất khó sử dụng cho các project phức tạp.

**Cách 2:** Sử dụng D3DXSprite để giữ những sprite trong Direct3D. Đây là cách thường được sử dụng nhất. D3DXSprite sử dụng texture thay vì surface để chứa bức ảnh làm sprite.
Chúng ta sẽ đi qua cả 2 cách trong 2 chương trình mẫu tiếp theo.

## Chương trình Anim_Sprite
Chương trình Anim_Sprite vẽ lên màn hình con mèo chuyển động. Con mèo chuyển động có 6 khung hình và có dạng giống như đang chuyển động đi qua màn hình. 6 khung hình (frame) "cat.bmp" với kích thước 96x96 và có một nền màu đen với giá trị RGB(0,0,0) sẽ lần lượt được vẽ lên surface để tạo chuyển động.
![](https://1.bp.blogspot.com/-i1ScBBP8ag4/XTHLAspndrI/AAAAAAAAEE4/LtXk9wy6aXMy3fXZ_NfOU8vYerd6bO_5gCLcBGAs/s1600/cat.png)

Chúng ta sẽ tạo một project tên Anim_Sprite và thêm file source "winmain.cpp" như đã làm ở các bài trước, thêm các thư viện "d3d9.lib" và "d3d9x.lib".

Code "winmain.cpp"
{% highlight cpp %}
//winmain.cpp - windows framework source code file
#include <d3dx9.h>
#include <d3d9.h>
#pragma comment(lib, "d3dx9.lib")
#pragma comment(lib, "d3d9.lib")
#include<time.h>
#include<stdio.h>
#include"dxgraphics.h"
#include"game.h"


//window event callback function
LRESULT WINAPI WinProc(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	switch (msg)
	{
	case WM_DESTROY:
		//release the direct3d device
		if (d3ddev != NULL)
			d3ddev->Release();
		//release the direct3d object
		if (d3d != NULL)
			d3d->Release();
		//call the "front-end" shutdown function
		Game_End(hWnd);
		//tell Windows to kill this program
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
	wc.hbrBackground = (HBRUSH)GetStockObject(BLACK_BRUSH);
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
	//set up the screen in windowed or fullscreen mode?
	DWORD style;
	if (FULLSCREEN)
		style = WS_EX_TOPMOST | WS_VISIBLE | WS_POPUP;
	else
		style = WS_OVERLAPPED;

	//Tạo một cửa sổ
	hWnd = CreateWindow(APPTITLE,
		APPTITLE,
		style, //WINDOW STYLE
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
	if (!Init_Direct3D(hWnd, SCREEN_WIDTH, SCREEN_HEIGHT, FULLSCREEN))
		return 0;
	//initialize the game
	if (!Game_Init(hWnd))
	{
		MessageBox(hWnd, "Error initializing the game", "Error", MB_OK);
		return 0;
	}
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
{% endhighlight %}

Bây giờ thêm vào project một file header "dxgraphics.h" và file cpp "dxgraphics.cpp". Code lần lượt cho 2 hàm trên:
{% highlight cpp %}
//dxgraphics.h - direct3d framework header file

#ifndef _DXGRAPHICS_H
#define _DXGRAPHICS_H

//function prototypes
int Init_Direct3D(HWND, int, int, int);
LPDIRECT3DSURFACE9 LoadSurface(char*, D3DCOLOR);

//variable declarations
extern LPDIRECT3D9 d3d;
extern LPDIRECT3DDEVICE9 d3ddev;
extern LPDIRECT3DSURFACE9 backbuffer;

#endif // !_DXGRAPHICS_H
{% endhighlight %}

{% highlight cpp %}
//dxgraphics.cpp - direct3d framework source code file
#include <d3dx9.h>
#include <d3d9.h>
#pragma comment(lib, "d3dx9.lib")
#pragma comment(lib, "d3d9.lib")
#include"dxgraphics.h"

//variable declarations
LPDIRECT3D9 d3d = NULL;
LPDIRECT3DDEVICE9 d3ddev = NULL;
LPDIRECT3DSURFACE9 backbuffer = NULL;

int Init_Direct3D(HWND hwnd, int width, int height, int fullscreen)
{
	//initialize Direct3D
	d3d = Direct3DCreate9(D3D_SDK_VERSION);
	if (d3d == NULL)
	{
		MessageBox(hwnd, "Error initializing Direct3D", "Error", MB_OK);
		return 0;
	}

	//set Direct3D presentation paramaters
	D3DPRESENT_PARAMETERS d3dpp;
	ZeroMemory(&d3dpp, sizeof(d3dpp));
	d3dpp.Windowed = (!fullscreen);
	d3dpp.SwapEffect = D3DSWAPEFFECT_COPY;
	d3dpp.BackBufferFormat = D3DFMT_X8R8G8B8;
	d3dpp.BackBufferCount = 1;
	d3dpp.BackBufferWidth = width;
	d3dpp.BackBufferHeight = height;
	d3dpp.hDeviceWindow = hwnd;

	//create Direct3D device
	d3d->CreateDevice(D3DADAPTER_DEFAULT, D3DDEVTYPE_HAL, hwnd, D3DCREATE_SOFTWARE_VERTEXPROCESSING, &d3dpp, &d3ddev);
	if (d3ddev == NULL)
	{
		MessageBox(hwnd, "Error creating Direct3D device", "Error", MB_OK);
		return 0;
	}

	//clear the backbuffer to black
	d3ddev->Clear(0, NULL, D3DCLEAR_TARGET, D3DCOLOR_XRGB(0, 0, 0), 1.0f, 0);

	//create pointer to the back buffer
	d3ddev->GetBackBuffer(0, 0, D3DBACKBUFFER_TYPE_MONO, &backbuffer);

	return 1;
}

LPDIRECT3DSURFACE9 LoadSurface(char *filename, D3DCOLOR transcolor)
{
	LPDIRECT3DSURFACE9 image = NULL;
	D3DXIMAGE_INFO info;
	HRESULT result;

	//get width and height from bitmap file
	result = D3DXGetImageInfoFromFile(filename, &info);
	if (result != D3D_OK)
		return NULL;

	//create surface
	result = d3ddev->CreateOffscreenPlainSurface(info.Width, info.Height, D3DFMT_X8R8G8B8, D3DPOOL_DEFAULT, &image, NULL);

	if (result != D3D_OK)
		return NULL;

	//load surface from file into newly created surface
	result = D3DXLoadSurfaceFromFile(image, NULL, NULL, filename, NULL, D3DX_DEFAULT, transcolor, NULL);
	//make sure file was loaded okay
	if (result != D3D_OK)
		return NULL;
	//return okay
	return image;
}
{% endhighlight %}