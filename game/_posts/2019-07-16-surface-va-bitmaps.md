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
