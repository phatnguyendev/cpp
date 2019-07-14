Để lập trình với DirectX, ta cần phải download và cài đặt DirectX SDK (link hướng dẫn: [Tại đây](https://tuitucode.github.io/cpp/gioi-thieu-ve-directX/)). Đồng thời khai báo các thư viện và file header của DirectX: **d3d9.lib** và **d3d9.h**

//////////////////////////////////////
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