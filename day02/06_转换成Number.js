/*
 * 将其他的数据类型转换为Number
 * 	 转换方式一：
 * 		使用Number()函数
 * 			- 字符串 --> 数字
 * 				1.如果是纯数字的字符串，则直接将其转换为数字
 * 				2.如果字符串中有非数字的内容，则转换为NaN
 * 				3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为0
 * 			- 布尔 --> 数字
 * 				true 转成 1
 * 				false 转成 0
 *
 * 			- null --> 数字     0
 *
 * 			- undefined --> 数字 NaN
 *
 * 转换方式二：
 * 		- 这种方式专门用来对付字符串
 * 		- parseInt() 把一个字符串转换为一个整数
 * 		- parseFloat() 把一个字符串转换为一个浮点数
 */


var a = "   ";

a = Number(a);

console.log(typeof a);
console.log(a);
//**********************
var b = true;

b = Number(b);

console.log(typeof b);
console.log(b);


var c = "128px";

//调用parseInt()函数将a转换为Number
/*
 * parseInt()可以将一个字符串中的有效的整数内容去出来，
 * 	然后转换为Number
 */

//parseFloat

/*
 * parseFloat()作用和parseInt()类似，不同的是它可以获得有效的小数
 */
c = parseInt(c);

/*
 * 如果对非String使用parseInt()或parseFloat()
 * 	它会先将其转换为String然后在操作
 */

console.log(typeof c);
console.log(c);

