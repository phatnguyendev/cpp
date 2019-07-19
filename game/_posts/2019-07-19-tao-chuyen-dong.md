
Tạo chuyển động trong game cho các nhân vật sẽ làm cho game của bạn trở nên sinh động hơn. Ý tưởng đơn giản vẫn là vẽ tuần tự từng ảnh một theo thời gian. Tuy nhiên việc lưu trữ các ảnh rời rạc sẽ gây khó khăn trong việc quản lý các Animation, thông qua đó chúng ta sẽ sử dụng một công cụ khá hiệu quả đó là Sprite.

##  Sprite
- Sprite là một đối tượng đồ họa 2D được vẽ lên màn hình. Các sprite kết hợp với nhau sẽ tạo nên khung cảnh cho game. Có thể di chuyển nó thông qua cách đặt tọa độ trong hàm vẽ lên màn hình.
- Có 2 cách vẽ sprite với Direct3D. Cả 2 phương pháp đều yêu cầu ta cung cấp các thông tin: vị trí, kích thước, tốc độ và các thuộc tính riêng khác.

**Cách 1:** Load 1 ảnh sprite vào trong surface và sau đó vẽ lên backbuffer sử dụng StretchRect như ở bài trước. Đây là cách đơn giản nhưng sẽ rất khó sử dụng cho các project phức tạp.

**Cách 2:** Sử dụng D3DXSprite để giữ những sprite trong Direct3D. Đây là cách thường được sử dụng nhất. D3DXSprite sử dụng texture thay vì surface để chứa bức ảnh làm sprite.
Chúng ta sẽ đi qua cả 2 cách trong 2 chương trình mẫu tiếp theo.
- SPRITE Struct:

{% highlight cpp %}
//sprite structure
typedef struct
{
	//các biến dùng để update tọa độ x, y cảu sprite suốt quá trình update khung hình (frame)
	int x, y;
	int width, height;
	int movex, movey;
    //biến dùng để giữ giá trị frame hiện tại của chuyển động, curframe được update liên tục trong vòng lặp game và khi nó đạt giá trị lastframe nó sẽ gán lặp lại giá trị 0, cứ thế lặp lại liên tục.
	int curframe, lastframe;
    //giới hạn thời gian hiển thị của mỗi frame
	int animdelay, animcount;
} SPRITE;
{% endhighlight %}
## Chương trình Anim_Sprite
Chương trình Anim_Sprite sử dụng cách vẽ sprite thứ nhất, vẽ lên màn hình con mèo chuyển động. Con mèo chuyển động có 6 khung hình và có dạng giống như đang chuyển động đi qua màn hình. 6 khung hình (frame) "cat.bmp" với kích thước 96x96 và có một nền màu đen với giá trị RGB(0,0,0) sẽ lần lượt được vẽ lên surface để tạo chuyển động.
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
Tiếp tục thêm vào project một file header "game.h" và file cpp "game.cpp". Code lần lượt cho 2 hàm trên:
{% highlight cpp %}
//Anim_Sprite program header file
#ifndef _GAME_H
#define _GAME_H
#include <d3d9.h>
#pragma comment(lib, "d3d9.lib")
#include<time.h>
#include<stdio.h>
#include<stdlib.h>
#include"dxgraphics.h"

//application title
#define APPTITLE "Anim_Sprite"

//screen setup
#define FULLSCREEN 0  //1=fullscreen	0=windowed
#define SCREEN_WIDTH 640
#define SCREEN_HEIGHT 480

//Các macro để đọc phím - Chế độ full màn hình
#define KEY_DOWN(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)
#define KEY_UP(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)

//function prototypes
int Game_Init(HWND);
void Game_Run(HWND);
void Game_End(HWND);

//sprite structure
typedef struct
{
	int x, y;
	int width, height;
	int movex, movey;
	int curframe, lastframe;
	int animdelay, animcount;
} SPRITE;
#endif // !_GAME_H

{% endhighlight %}

{% highlight cpp %}
//Anim_Sprite program source code file
#include"game.h"

LPDIRECT3DSURFACE9 kitty_image[7];
SPRITE kitty;

//timing variable
long start = GetTickCount();

//initialize the game
int Game_Init(HWND hwnd)
{
	char s[20];
	int n;

	//set random number seed
	srand(time(NULL));

	//load the sprite animation
	for (n = 0; n < 6; n++)
	{
		sprintf_s(s, "cat%d.bmp", n + 1);
		kitty_image[n] = LoadSurface(s, D3DCOLOR_XRGB(255, 0, 255));
		if (kitty_image[n] == NULL)
			return 0;
	}

	//initialize the sprite's properties
	kitty.x = 100;
	kitty.y = 150;
	kitty.width = 96;
	kitty.height = 96;
	kitty.curframe = 0;
	kitty.lastframe = 5;
	kitty.animdelay = 2;
	kitty.animcount = 0;
	kitty.movex = 8;
	kitty.movey = 0;

	return 1;
}

//the main game loop
void Game_Run(HWND hwnd)
{
	RECT rect;

	//make sure the Direct3d device is valid
	if (d3ddev == NULL)
		return;

	//after short delay, ready for next frame?
	//this keeps the game running at a steady frame rate
	if (GetTickCount() - start >= 30)
	{
		//reset timing
		start = GetTickCount();

		//move the sprite
		kitty.x += kitty.movex;
		kitty.y += kitty.movey;

		//"wrap"the sprite at screen edges
		if (kitty.x > SCREEN_WIDTH - kitty.width)
			kitty.x = 0;
		if (kitty.x < 0)
			kitty.x = SCREEN_WIDTH - kitty.width;

		//has animation delay reached threshold?
		if (++kitty.animcount > kitty.animdelay)
		{
			//reset counter
			kitty.animcount = 0;

			//animate the sprite
			if (++kitty.curframe > kitty.lastframe)
				kitty.curframe = 0;
		}
	}

	//start rendering
	if (d3ddev->BeginScene())
	{
		//erase the entire background
		d3ddev->ColorFill(backbuffer, NULL, D3DCOLOR_XRGB(0, 0, 0));

		//set the sprite's rect for drawing
		rect.left = kitty.x;
		rect.top = kitty.y;
		rect.right = kitty.x + kitty.width;
		rect.bottom = kitty.y + kitty.height;

		//draw sprite
		d3ddev->StretchRect(kitty_image[kitty.curframe], NULL, backbuffer, &rect, D3DTEXF_NONE);

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
	int n;

	//free the surface
	for (n = 0; n < 6; n++)
		kitty_image[n]->Release();
}
{% endhighlight %}

Giờ là đến phần load background. Nếu chúng ta muốn con mèo được vẽ lên một nền không phải đen. Ta có thêm file "background.bmp" vào project.
- Đầu tiên, thêm dòng này ở gần trên cùng của "game.cpp" với một vài biến được khai báo.

{% highlight cpp %}
LPDIRECT3DSURFACE9 back;
{% endhighlight %}
- Trong "Game_Init()", thêm vài dòng để load ảnh nền lên một surface mới:

{% highlight cpp %}
back = LoadSurface("background.bmp", NULL);
{% endhighlight %}
- Trong "Game_Run()", ẩn dòng "ColorFill" và thay bằng lời gọi hàm "StretchRect" như sau:

{% highlight cpp %}
d3ddev->StretchRect(back, NULL, backbuffer, NULL, D3DTEXF_NONE);
{% endhighlight %}
- Cuối cùng, thêm 1 dòng ở "Game_End()" để giải phóng bộ nhớ đã sử dụng bởi background surface.

{% highlight cpp %}
back->Release();
{% endhighlight %}

## Vẽ sprite trong suốt
Sử dụng D3DXSprite.

**Tạo đối tượng Sprite Handler**: để quản lý, gọi hàm thao tác sprite.
{% highlight cpp %}
LPD3DXSPRITE sprite_handler;
result = D3DXCreateSprite(d3ddev, &sprite_handler);
{% endhighlight %}
**Bắt đầu Sprite Handler:** Việc đầu tiên phải làm đó là khóa surface để sprite có thể vẽ bằng cách gọi hàm D3DXSprite.Begin. D3DXSPRITE_ALPHABLEND hỗ trợ vẽ trong suốt nếu không thì để giá trị NULL. Ví dụ:
{% highlight cpp %}
sprite_handler->Begin(D3DXSPRITE_ALPHABLEND);
{% endhighlight %}
**Vẽ sprite**: sử dụng hàm Draw(). Cách khai báo như sau:
{% highlight cpp %}
HRESULT Draw
(
	LPDIRECT3DTEXTURE9 pTexture,
    CONST RECT *pSrcRect,
    CONST D3DXVECTOR3 *pCenter,
    CONST D3DXVECTOR3 *pPosition,
    D3DCOLOR Color
);
{% endhighlight %}
Trong đó:
- pTexture: texture chứa sprite
- pSrcRect: diện tích cần hiển thị
- pCenter: tâm dùng để vẽ, xoay (NULL: mặc định là góc trên bên trái hình ảnh).
- pPosition: vị trí của sprite
- Color: màu thay thế (không ảnh hưởng khi vẽ trong suốt)
- D3DXVECTOR3 là một kiểu dữ liệu bao gồm 3 biến x, y, z kiểu float.

**Dừng Sprite Handler**
{% highlight cpp %}
sprite_handler->End();
{% endhighlight %}
**Tải Sprite Image thông qua texture**
Trong game, thường ta sẽ sử dụng surface để hiển thị hình nền và sử dụng texture cho những sprite thể hiện các đối tượng game, nhân vật, phi thuyền, kẻ thù. Ta cần thực hiện hàm LoadTexture để được trả về texture cho mình.
{% highlight cpp %}
LPDIRECT3DTEXTURE9 LoadTexture(char *filename, D3DCOLOR transcolor)
{
	//con trỏ texture
	LPDIRECT3DTEXTURE9 texture = NULL;
    
    //struct để đọc thông tin file ảnh
	D3DXIMAGE_INFO info;
    
    //trả về giá trị windows thông thường
	HRESULT result;

	//get width and height from bitmap file
	result = D3DXGetImageInfoFromFile(filename, &info);
	if (result != D3D_OK)
		return NULL;

	//create new texture by loading file bitmap
	result = D3DXCreateTextureFromFileEx(
    	d3ddev, //đối tượng Direct3D
		filename, //tên tệp ảnh
		info.Width,
		info.Height,
		1, //kết nối level
		D3DPOOL_DEFAULT, //kiểu surface
		D3DFMT_UNKNOWN, //định dạng surface
		D3DPOOL_DEFAULT, //lớp bộ nhớ cho texture
		D3DX_DEFAULT, //bộ lọc hình ảnh
		D3DX_DEFAULT, //bộ lọc mip
		transcolor, //màu chỉ ra trong suốt
		&info, //thông tin tệp ảnh
		NULL, //đổ màu
		&texture //texture đích
	);
	//make sure file was loaded okay
	if (result != D3D_OK)
		return NULL;
	//return okay
	return texture;
}
{% endhighlight %}

## Chương trình Trans_Sprite
Chương trình Trans_Sprite giải thích rõ hơn cách vẽ sprite trong suốt với Direct3D. Ta cần sao chép những tập tin sau từ Anim_Sprite vào project mới tạo: winmain.cpp, dxgraphics.h, dxgraphics.cpp. Sau đó tạo thêm các file "game.h" và "game.cpp" như sau:
**game.h**
{% highlight cpp %}
//Anim_Sprite program header file
#ifndef _GAME_H
#define _GAME_H
#include <d3d9.h>
#include <d3dx9.h>
#include <d3dx9math.h>
#pragma comment(lib, "d3d9.lib")
#include<time.h>
#include<stdio.h>
#include<stdlib.h>
#include"dxgraphics.h"

//application title
#define APPTITLE "Trans_Sprite"

//screen setup
#define FULLSCREEN 0  //1=fullscreen	0=windowed
#define SCREEN_WIDTH 640
#define SCREEN_HEIGHT 480

//Các macro để đọc phím - Chế độ full màn hình
#define KEY_DOWN(vk_code) ((GetAsyncKeyState(vk_code) & 0x8000)?1:0)
#define KEY_UP(vk_code) ((GetAsyncKeyState(vk_code) * 0x8000)?1:0)

//function prototypes
int Game_Init(HWND);
void Game_Run(HWND);
void Game_End(HWND);

//sprite structure
typedef struct
{
	int x, y;
	int width, height;
	int movex, movey;
	int curframe, lastframe;
	int animdelay, animcount;
} SPRITE;
#endif // !_GAME_H

{% endhighlight %}

**game.cpp**
{% highlight cpp %}
#include"game.h"

LPDIRECT3DTEXTURE9 kitty_image[7];
SPRITE kitty;
LPDIRECT3DSURFACE9 back;
LPD3DXSPRITE sprite_handler;

HRESULT result;

//timing variable
long start = GetTickCount();

//initialize the game
int Game_Init(HWND hwnd)
{
	char s[20];
	int n;

	//set random number seed
	srand(time(NULL));

	//create sprite handler
	result = D3DXCreateSprite(d3ddev, &sprite_handler);
	if (result != D3D_OK)
		return 0;

	//load the sprite animation
	for (n = 0; n < 6; n++)
	{
		sprintf_s(s, "cat%d.bmp", n + 1);
		//tải texture với màu hồng là màu trong suốt
		kitty_image[n] = LoadTexture(s, D3DCOLOR_XRGB(0, 0, 0));
		if (kitty_image[n] == NULL)
			return 0;
	}

	//tải hình nền
	back = LoadSurface("background.bmp", NULL);

	//initialize the sprite's properties
	kitty.x = 100;
	kitty.y = 150;
	kitty.width = 96;
	kitty.height = 96;
	kitty.curframe = 0;
	kitty.lastframe = 5;
	kitty.animdelay = 2;
	kitty.animcount = 0;
	kitty.movex = 8;
	kitty.movey = 0;

	return 1;
}

//the main game loop
void Game_Run(HWND hwnd)
{
	RECT rect;

	//make sure the Direct3d device is valid
	if (d3ddev == NULL)
		return;

	//after short delay, ready for next frame?
	//this keeps the game running at a steady frame rate
	if (GetTickCount() - start >= 30)
	{
		//reset timing
		start = GetTickCount();

		//move the sprite
		kitty.x += kitty.movex;
		kitty.y += kitty.movey;

		//"wrap"the sprite at screen edges
		if (kitty.x > SCREEN_WIDTH - kitty.width)
			kitty.x = 0;
		if (kitty.x < 0)
			kitty.x = SCREEN_WIDTH - kitty.width;

		//has animation delay reached threshold?
		if (++kitty.animcount > kitty.animdelay)
		{
			//reset counter
			kitty.animcount = 0;

			//animate the sprite
			if (++kitty.curframe > kitty.lastframe)
				kitty.curframe = 0;
		}
	}

	//start rendering
	if (d3ddev->BeginScene())
	{
		//erase the entire background
		d3ddev->StretchRect(back, NULL, backbuffer, NULL, D3DTEXF_NONE);

		//start sprite handler
		sprite_handler->Begin(D3DXSPRITE_ALPHABLEND);
		//Tạo vector để cập nhật ví trí của sprite
		D3DXVECTOR3 position((float)kitty.x, (float)kitty.y, 0);
		//draw sprite
		sprite_handler->Draw(kitty_image[kitty.curframe], NULL, NULL, &position, D3DCOLOR_XRGB(255, 255, 255));
		//stop drawing
		sprite_handler->End();
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
	int n;

	//free the surface
	for (n = 0; n < 6; n++)
		if (kitty_image[n] != NULL)
			kitty_image[n]->Release();
	if (back != NULL)
		back->Release(); 
	if (sprite_handler != NULL)
		sprite_handler->Release();
}
{% endhighlight %}

**Thay đổi dxgraphics.h:** thêm những dòng sau vào _dxgraphics.h_ để được như sau
{% highlight cpp %}
int Init_Direct3D(HWND, int, int, int);
LPDIRECT3DTEXTURE9 LoadTexture(char*, D3DCOLOR);
LPDIRECT3DSURFACE9 LoadSurface(char*, D3DCOLOR);
{% endhighlight %}
**Thay đổi dxgraphics.cpp:** thêm hàm LoadTexture để chương trình có thể sử dụng nó.

