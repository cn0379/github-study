## vue-element-admin 随笔

#### 关于axios

##### 封装

`url` 地址被放在了`setting.js`中了

在`api` 的文件夹中 有一个 `request.js` 的文件 就是axios的封装了,先贴下代码

![image-20200811231700290](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200811231700290.png)

​	

​		这里有一个可以传参的时候自动分辨key和value的值, 判断他们的方法 来传递不同的参数.

​		

#### Functional

​	当`Functional` 为 `true` 时, 就可以让组件变为无状态的,  所谓的组件无状态,就是一个函数不可以使用state,只有继承component这个组件他才能拥有state进行一些数据的存储和管理,仍然可以拥有有props, 只是想单纯的存储一些逻辑就用无状态的组件.

函数化的组件中的 Render 函数，提供了第二个参数 context 作为上下文，data、props、slots、children 以及 parent 都可以通过 context 来访问。

![image-20200811235156790](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\image-20200811235156790.png)