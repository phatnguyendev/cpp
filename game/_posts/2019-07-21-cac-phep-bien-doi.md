Các đối tượng trong game có 2 loại tọa độ mà chúng ta cần lưu ý: tọa độ World (đây là tọa độ của thế giới game và nó là tọa độ thực) và tọa độ của View Port (View Port là một khung nhìn trong game và nó cũng là một tọa độ trong thế giới game). Nếu tọa độ view port nằm ở vị trí nào đó ngoài khu vực thế giới game thì tất cả các đối tượng của game sẽ không được thể hiện lên màn hình. Vì vậy, chúng ta sẽ phải chuyển tọa độ World sang tọa độ View Port để có thể nhìn được các đối tượng trong game. Tuy nhiên, việc này có rất nhiều khó khăn nên ta sẽ tìm cách chuyển tọa độ View Port về tọa độ World.
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