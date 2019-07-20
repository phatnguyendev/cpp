Cho đến lúc này, ta đã học được về cách tạo, đóng gói, vẽ chỉ bằng một hình bitmap đối với mỗi frame của animation. Nhưng đây không phải là cách hiệu quả. Giờ game của ta sẽ có hàng trăm tập tin ảnh để tải, sẽ tốn thời gian dài. Một cách để quản lý sprite tốt hơn là lưu trữ những hình sprite trong một hình tiled bitmap.

Tiled Sprite (Sprite sheet)
Là tập hợp nhiều Sprite đơn lẻ thành một tập tin duy nhất, giúp tăng tốc độ hiển thị hình ảnh lên màn hình.
Ví dụ tiled sprite con mèo chuyển động ở bài trước:

![](https://1.bp.blogspot.com/-aPX5dfdbR8I/XTKGfo4T3FI/AAAAAAAAEFw/NrgQfuXsdRoHAm0ElhMWtLDasgp37H5_wCLcBGAs/s1600/cat.bmp)
Thay vì phải load lên 6 file bitmap, ta chỉ cần load lên hình tiled của nó. Điều này sẽ giúp game chạy nhanh hơn.
Dựa trên tập tin Sprite sheet ta cho hiển thị từng Sprite chuyển tiếp nhau một cách liên tục khi đó sẽ tạo ra cảm giác đối tượng như đang chuyển động
![](https://1.bp.blogspot.com/-p3UwOLEx4YE/XTKI-IceR_I/AAAAAAAAEF8/hmlcQDZfvBsK8ThLiI9g9nhv1fZWnZPBgCLcBGAs/s1600/RyuRunningL.gif)