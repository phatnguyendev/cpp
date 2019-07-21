---
published: true
layout: post
title: Các phép biến đổi
categories: game
img: bai222.png
lesson: 8
excerpt_separator: <!--more-->
---
Các đối tượng trong game có 2 loại tọa độ mà chúng ta cần lưu ý: tọa độ World (đây là tọa độ của thế giới game và nó là tọa độ thực) và tọa độ của View Port (View Port là một khung nhìn trong game và nó cũng là một tọa độ trong thế giới game). Nếu tọa độ view port nằm ở vị trí nào đó ngoài khu vực thế giới game thì tất cả các đối tượng của game sẽ không được thể hiện lên màn hình. Vì vậy, chúng ta sẽ phải chuyển tọa độ World sang tọa độ View Port để có thể nhìn được các đối tượng trong game. Tuy nhiên, việc này có rất nhiều khó khăn nên ta sẽ tìm cách chuyển tọa độ View Port về tọa độ World.
<!--more-->

Vấn đề: tọa độ thực và tọa độ trong game có sự khác biệt về hướng trục Y. Xem hình dưới đây để thấy được tọa độ view port trong game và thế giới thực.

![](https://1.bp.blogspot.com/-33Rfq2ASfCg/XTPcYXy7AwI/AAAAAAAAEHU/uIWDSq6sfF8Kkvy-UKTny5syYW1AUflNQCLcBGAs/s1600/vp.PNG)

Chúng ta sẽ sử dụng một kỹ thuật để xử lý đó là Transform.
## Biến đổi tọa độ (Transform)
- Là một hành động dùng để chuyển đổi các giá trị tọa độ của các đỉnh của một hình thành một tập hợp các giá trị tọa độ khác và hình gốc ban đầu có thể có kích thước khác, ở 1 vị trí khác, 1 góc xoay khác so với tọa độ gốc ban đầu.
- Một số kỹ thuật Transform bằng ma trận thường sử dụng: Xoay (Rotate), Lật (Flip), Translate (Tịnh tiến).

## Biến đổi từ hệ tọa độ thế giới World sang View Port trong game
Trong game ví dụ như Game Mario, ta có thế giới game Mario là một thế giới rộng lớn và có tọa độ theo hệ tọa độ Đề Các (hướng trục X và Y giống hướng trục tọa độ trong không gian thật).
View Port là một khung nhìn, và nó chỉ thể hiện được 1 phần của thế giới game, đối tượng nào trong view port thì ta mới có thể thấy chúng.
- Đầu tiên, ta translate tọa độ gốc của view port trùng với tọa độ gốc của World.

![](https://1.bp.blogspot.com/-nV7uP75bKxk/XTPgqvFeE0I/AAAAAAAAEH4/8M9k5YB7Necx3XqXqle0OaqnnAs-zpYoACLcBGAs/s1600/vp1.PNG)

- Tiếp theo, ta tiến hành lật Flip view port lên thì chúng ta sẽ được kết quả là tọa độ của view port trùng với tọa độ World và trục Y của view port hướng lên.

![](https://1.bp.blogspot.com/-ShGOO2139PM/XTPgqgWqIBI/AAAAAAAAEH8/N4hySddc8LM_RFH7gboCJlgdefZuOFVSACLcBGAs/s1600/vp3.PNG)
![](https://1.bp.blogspot.com/-tfuwA-OFOsQ/XTPgrpseA3I/AAAAAAAAEIA/xXQ65Mwzntgk_KDWpt9yRMLjpBCA9_iUACEwYBhgL/s1600/vp4.PNG)

## Code biến đổi từ world sang view port
{% highlight cpp %}
D3DXMATRIX mt;
D3DXMatrixIdentity (&mt);
mt._22 = -1.0f;
mt._41 = -cameraX;
mt._42 = 600;
D3DXVECTOR4 vp_pos;
D3DXVec3Transform(&vp_pos, &position, &mt);

D3DXVECTOR3 pos(vp_pos.x, vp_pos.y, 0);
D3DXVECTOR3 center((float)p_texture->getWidth()/2, (float)p_texture->getHeight()/2, 0);

this->spriteHandler->Draw(p_texture->getTexture(), &srect, &center, &pos, D3DCOLOR_XRGB(255,255,255));
{% endhighlight %}
## Tổng kết
Bài hôm nay đã giúp các bạn hiểu được thế giới tọa độ trong game...Ở bài sau chúng mình sẽ tiếp tục tạo camera cho game của mình.😉 Hãy truy cập vào [Series Make Game - TuiTuCode](https://tuitucode.github.io/cpp/game/) để học tiếp những bài thú vị khác nữa. Nếu có thắc mắc các bạn cứ bình luận bên dưới hoặc gửi thắc mắc về page [TuiTuCode](https://www.facebook.com/shareAboutIT/) để các ad giải đáp. Pie~
