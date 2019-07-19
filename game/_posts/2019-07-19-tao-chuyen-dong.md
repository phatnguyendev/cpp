
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