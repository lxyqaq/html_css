/*
 * 将其他的数据类型转换为Boolean
 * 	- 使用Boolean()函数
 * 		- 数字 ---> 布尔
 * 			- 除了0和NaN，其余的都是true
 *
 * 		- 字符串 ---> 布尔
 * 			- 除了空串，其余的都是true
 *
 * 		- null和undefined都会转换为false
 *
 * 		- 对象也会转换为true
 *
 */

var a = 123; //true
a = -123; //true
a = 0; //false
a = Infinity; //true
a = NaN; //false

//调用Boolean()函数来将a转换为布尔值
a = Boolean(a);

a = " ";

a = Boolean(a);

a = null; //false
a = Boolean(a);

a = undefined; //false
a = Boolean(a);

console.log(typeof a);
console.log(a);