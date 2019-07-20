---
published: true
layout: post
title: Tạo chuyển động với Tiled Sprite
categories: game
img: bai222.png
lesson: 7
excerpt_separator: <!--more-->
---
Cho đến lúc này, ta đã học được về cách tạo, đóng gói, vẽ chỉ bằng một hình bitmap đối với mỗi frame của animation. Nhưng đây không phải là cách hiệu quả. Giờ game của ta sẽ có hàng trăm tập tin ảnh để tải, sẽ tốn thời gian dài. Một cách để quản lý sprite tốt hơn là lưu trữ những hình sprite trong một hình tiled bitmap.
<!--more-->

## Tiled Sprite (Sprite sheet)
Là tập hợp nhiều Tile (Sprite) đơn lẻ thành một tập tin duy nhất, giúp tăng tốc độ hiển thị hình ảnh lên màn hình.
Ví dụ tiled sprite con mèo chuyển động ở bài trước:

![](https://1.bp.blogspot.com/-aPX5dfdbR8I/XTKGfo4T3FI/AAAAAAAAEFw/NrgQfuXsdRoHAm0ElhMWtLDasgp37H5_wCLcBGAs/s1600/cat.bmp)
Thay vì phải load lên 6 file bitmap, ta chỉ cần load lên hình tiled của nó. Điều này sẽ giúp game chạy nhanh hơn.

Dựa trên tập tin Sprite sheet ta cho hiển thị từng Sprite chuyển tiếp nhau một cách liên tục khi đó sẽ tạo ra cảm giác đối tượng như đang chuyển động.

![](https://1.bp.blogspot.com/-p3UwOLEx4YE/XTKI-IceR_I/AAAAAAAAEF8/hmlcQDZfvBsK8ThLiI9g9nhv1fZWnZPBgCLcBGAs/s1600/RyuRunningL.gif)
### Hiểu về Tile
Là một ảnh nguồn được tạo thành từ những dòng và cột tile. Ta phải nắm được góc trên bên trái của từng tile nằm trong hình tiled bitmap và sao chép lại khung hình đó dựa trên width và height của sprite.

![](https://1.bp.blogspot.com/-WUZPhcwWYc8/XTKNNwoVTbI/AAAAAAAAEGk/ZsB6EdrrQY08PpeXPfETJxjYBL9XhJxYQCLcBGAs/s1600/ninja1.PNG)

Đầu tiên, ta cần chỉ ra được left (x), vị trí của tile bằng toán tử % (chia lấy dư).
{% highlight cpp %}
left = (frame hiện tại % số lượng cột) * sprite width;
top = (frame hiện tại / số lượng cột) * sprite height;
right = left + width;
bottom = top + height;
{% endhighlight %}
Ví dụ frame hiện tại là 20, chúng ta có 5 cột trong tiled sprite, phép chia dư sẽ đưa ra vị trí ngang của tile khi ta nhân nó với width của sprite. Nếu có 5 cột thì tile thứ 20 sẽ nằm ở hàng thứ 4, cột thứ 5.
## Chương trình Tiled_Sprite
Chương trình Tile_Sprite giải thích cách sử dụng hình tiled bitmap cho chuyển động sprite. Kết quả hiển thị:

![](https://1.bp.blogspot.com/-4FCflhPFKHo/XTHhbgQtJMI/AAAAAAAAEFU/_I-gTHkh2NEcp92ywuWlIyUU4Ibd6PWRACLcBGAs/s1600/trans.PNG)

Ta chỉ cần thay đổi file "game.cpp" còn lại hoàn toàn giống với chương trình **Trans_Sprite** ở bài trước. Source code "game.cpp":
{% highlight cpp %}
#include"game.h"

LPDIRECT3DTEXTURE9 kitty_image;
SPRITE kitty;
LPDIRECT3DSURFACE9 back;
LPD3DXSPRITE sprite_handler;

HRESULT result;

//timing variable
long start = GetTickCount();

//initialize the game
int Game_Init(HWND hwnd)
{
	//set random number seed
	srand(time(NULL));

	//create sprite handler
	result = D3DXCreateSprite(d3ddev, &sprite_handler);
	if (result != D3D_OK)
		return 0;

		//tải texture với màu hồng là màu trong suốt
	kitty_image = LoadTexture("cat.bmp", D3DCOLOR_XRGB(0, 0, 0));
	if (kitty_image == NULL)
		return 0;

	//tải hình nền
	back = LoadSurface("background.bmp", NULL);

	//initialize the sprite's properties 
	kitty.x = 100;
	kitty.y = 150;
	kitty.width = 123;
	kitty.height = 118;
	kitty.curframe = 0;
	kitty.lastframe = 5;
	kitty.animdelay = 3;
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

		//thiết đặt kích thước cho từng file nguồn
		RECT srcRect;
		int columns = 4;
		srcRect.left = (kitty.curframe % columns)*kitty.width;
		srcRect.top = (kitty.curframe / columns)*kitty.height;
		srcRect.right = srcRect.left + kitty.width;
		srcRect.bottom = srcRect.top + kitty.height;

		//draw sprite
		sprite_handler->Draw(kitty_image, &srcRect, NULL, &position, D3DCOLOR_XRGB(255, 255, 255));
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
	if (kitty_image != NULL)
		kitty_image->Release();
	if (back != NULL)
		back->Release();
	if (sprite_handler != NULL)
		sprite_handler->Release();
}
{% endhighlight %}

## Tổng kết
Chúng ta đã đi qua xong phần **tạo chuyển động trong game**, đặc biệt là **chương trình Tiled_Sprite**...Các bạn phải nắm rõ cách hoạt động của Tiled Sprite trong chương trình này vì từ nay về sau làm game chúng ta sẽ sử dụng phương pháp này để tạo chuyển động trong game.😉 Hãy truy cập vào [Series Make Game - TuiTuCode](https://tuitucode.github.io/cpp/game/) để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~
