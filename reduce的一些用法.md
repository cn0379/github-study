### reduce的一些用法

- 去重

  ```javascript
  let array = [ 1, 2, 3, 4, 1, 1, 2, 2 ]
  array.reduce((pre,cur) => {
    	if(!pre.includes(cur)){
          return pre.concat(cur)
      }else {
          return pre
      }
  },[])
  ```



- 求和/阶乘

  ```javascript
  let array = [ 1, 5, 5 ]
  array.reduce((pre,cur) => pre * cur )
  array.reduce((pre,cur) => pre + cur )
  ```



- 二维数组的扁平化

  ```javascript
  let array = [1, 2 [ 1 , 2 ] ]
  array.reduce((pre,cur) => {
      return pre.concat(cur)
  },[])
  ```



- 多维数组的扁平化

  ```javascript
  let array = [ 1, 2, 4, [ 1, 2, 3 [ 1, 2, 2 ] ] ]
  function _flat (array) {
     	return array.reduce((pre,cur) => pre.concat(Array.isArray(cur) ? _flat(cur) : cur)}
  ```



- 实现数组的扁平化 转换一维

  ```javascript
  let array = [ 1, 2, 4, [ 1, 2, 3 [ 1, 2, 2 ] ] ]
  
  function _flat (arr) {
      return [].concat(...arr)
  }
  
  [array + ""]
  
  ```



- 多维度

  ```javascript
  let array = [ 1, 2, 4, [ 1, 2, 3 [ 1, 2, 2 ] ] ]
  
  function _flat (arr, num = 1 ) {
  	for ( let i = 0; i < num; i++ ) {
          let newArr = [].concat(...arr)
      }
      return newArr
  }
  ```

  