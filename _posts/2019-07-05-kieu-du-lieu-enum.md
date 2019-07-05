---
layout: post
title: Kiểu dữ liệu enum
categories: cpp
img: image-4.png
published: true
excerpt_separator: <!--more-->
---

Hi~! Với bài này các bạn sẽ học 1 kiểu dữ liệu rất tiện lợi trong C++ đó là kiểu **enum**, cùng xem nhé!
## Vấn đề xảy ra khi ...
Giả sử các bạn đang làm 1 con game, trong game nhân vật của bạn có nhiều vũ khí như: kiếm, súng, phi tiêu, bom, ... và mỗi vũ khí sẽ có 1 mức sát thương khác nhau, giờ bạn viết 1 đoạn chương trình để tính sát thương của các loại vũ khí lên quái thì sẽ có dạng như sau:
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    int main() {
    	// something happen....
     
    	//tính sát thương của từng loại vũ khí
    	int typeWeapon = 1;
    	int enemyHealth = 0;
    	switch(typeWeapon)
    	{
    		case 1: //kiếm
    			enemyHealth -= 1;
    		break;
    		case 2: //súng
    			enemyHealth -= 2;
    		break;
    		case 3: //phi tiêu
    			enemyHealth -= 3;
    		break;
    		case 4: //bom
    			enemyHealth -= 4;
    		break;		
     
    	}
    	return 0;
    }
{% endhighlight %}
Nếu bạn chú thích đầy đủ thì vẫn có thể hiểu được 1 là kiếm, 2 là súng,... nhưng nếu vũ khí bạn nhiều lên và sử dụng ở nhiều nơi khác nhau thì bạn sẽ phải chạy đi chạy lại trong đám code để xem lại mình đã định nghĩa như thế nào, liệu 1 là kiếm hay bom, 2 có phải phi tiêu không? Và dĩ nhiên những con số không thể giúp bạn nhớ được vậy nên chúng ta cần có loại dữ liệu nào đó có thể gợi nhớ được tên chúng ta cần để dễ phân biệt hơn là những con số.
## Kiểu dữ liệu enum
Một loại kiểu dữ liệu người dùng tự định nghĩa (user-defined data types) và... bỏ qua khái niệm đi hãy xem nó làm được gì cho đoạn code đầu bài clear hơn nhé :)
{% highlight cpp %}
    #include <iostream>
    using namespace std;
     
    enum Weapon {
    	NONE,
    	KIEM,
    	SUNG,
    	PHI_TIEU,
    	BOM
    };
     
    int main() {
    	// something happen....
     
    	//tính sát thương của từng loại vũ khí
    	Weapon typeWeapon = Weapon::NONE;
    	int enemyHealth = 0;
    	switch(typeWeapon)
    	{
    		case Weapon::KIEM: //kiếm
    			enemyHealth -= 1;
    		break;
    		case Weapon::SUNG: //súng
    			enemyHealth -= 2;
    		break;
    		case Weapon::PHI_TIEU: //phi tiêu
    			enemyHealth -= 3;
    		break;
    		case Weapon::BOM: //bom
    			enemyHealth -= 4;
    		break;		
     
    	}
    	return 0;
    }
{% endhighlight %}
Well chúng ta có 1 kiểu dữ liệu enum ``Weapon`` để định nghĩa các loại vũ khí và ``typeWeapon`` bây giờ không còn là kiểu int nữa mà là kiểu chúng ta đã định nghĩa và switch-case thật sự nhìn clear hơn nhiều đúng không?