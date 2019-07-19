
Tạo chuyển động trong game cho các nhân vật sẽ làm cho game của bạn trở nên sinh động hơn. Ý tưởng đơn giản vẫn là vẽ tuần tự từng ảnh một theo thời gian. Tuy nhiên việc lưu trữ các ảnh rời rạc sẽ gây khó khăn trong việc quản lý các Animation, thông qua đó chúng ta sẽ sử dụng một công cụ khá hiệu quả đó là Sprite.

## Một số khái niệm
### Sprite
- Sprite là một đối tượng đồ họa 2D được vẽ lên màn hình.
- Có 2 cách vẽ sprite với Direct3D. Cả 2 phương pháp đều yêu cầu ta cung cấp các thông tin: vị trí, kích thước, tốc độ và các thuộc tính riêng khác.

**Cách 1:** Load 1 ảnh sprite vào trong surface và sau đó vẽ lên backbuffer sử dụng StretchRect như ở bài trước. Đây là cách đơn giản nhưng sẽ rất khó sử dụng cho các project phức tạp.

**Cách 2:** Sử dụng D3DXSprite để giữ những sprite trong Direct3D. Đây là cách thường được sử dụng nhất. D3DXSprite sử dụng texture thay vì surface để chứa bức ảnh làm sprite.
Chúng ta sẽ đi qua cả 2 cách trong 2 chương trình mẫu tiếp theo.

Chương trình Anim_Sprite

![Cat1.bmp](https://1.bp.blogspot.com/-wAYzMs4i7Uo/XTHHXDiVUhI/AAAAAAAAEEA/X3bSCudQyaUmeSh5BWZWSl5LxScQmcrCQCLcBGAs/s1600/cat1.bmp) ![Cat2.bmp](https://1.bp.blogspot.com/-yO71r4c_aK8/XTHHXIWC9xI/AAAAAAAAEEE/9_s4hk1wBvw7P7nnuDWWu8-4SmS4MsYHQCLcBGAs/s1600/cat2.bmp)