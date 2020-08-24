### 关于移动端的一些问题

##### Viewport(视口)

viewport是用户网页的可视区域, 移动端浏览器是把页面放在一个虚拟的 " 窗口" (viewport) 中,通常这个窗口比屏幕宽,这样就不用把每个网页挤到很小的窗口中,(这样会破坏没有针对手机浏览器优化的网页布局),用户可以通过平移和缩放来看网页的不同部分.

移动端默认的 `viewport`是`layout viewport` (布局视口), 也就是那个比屏幕要宽的`viewport`, 但在进行移动设备网站的开发时,我们需要的是  `ideal viewport`  (理想视口) , 

![image-20200822154143597](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200822154143597.png)

rem适配

![image-20200822160120390](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200822160120390.png)