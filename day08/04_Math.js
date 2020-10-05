/*
 * Math
 * 	- Math和其他的对象不同，它不是一个构造函数，
 * 		它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性和方法
 * 	- 比如
 * 		Math.PI 表示的圆周率
 */

//console.log(Math.PI);

/*
 * abs()可以用来计算一个数的绝对值
 */
//console.log(Math.abs(-1));

/*
 * Math.ceil()
 * 	- 可以对一个数进行向上取整，小数位只有有值就自动进1
 * Math.floor()
 * 	- 可以对一个数进行向下取整，小数部分会被舍掉
 * Math.round()
 * 	- 可以对一个数进行四舍五入取整
 */
//console.log(Math.ceil(1.1));
//console.log(Math.floor(1.99));
//console.log(Math.round(1.4));

/*
 * Math.random()
 * 	- 可以用来生成一个0-1之间的随机数
 *  - 生成一个0-10的随机数
 * 	- 生成一个0-x之间的随机数
 * 		Math.round(Math.random()*x)
 *
 * 	- 生成一个1-10
 * 	- 生成一个x-y之间的随机数
 * 		Math.round(Math.random()*(y-x)+x)
 */
/*for(var i=0 ; i<100 ; i++){
    //console.log(Math.round(Math.random()*10));
    //console.log(Math.round(Math.random()*20));

    //console.log(Math.round(Math.random()*9)+1);
    //console.log(Math.round(Math.random()*8)+2);

    //生成1-6之间的随机数
    console.log(Math.round(Math.random()*5+1));
}*/

/*
 * max() 可以获取多个数中的最大值
 * min() 可以获取多个数中的最小值
 */

var max = Math.max(10, 45, 30, 100);
var min = Math.min(10, 45, 30, 100);
//console.log(min);

/*
 * Math.pow(x,y)
 * 	返回x的y次幂
 */

//console.log(Math.pow(12,3));

/*
 * Math.sqrt()
 *  用于对一个数进行开方运算
 */
console.log(Math.sqrt(2));