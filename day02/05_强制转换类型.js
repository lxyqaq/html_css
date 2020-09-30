
/*
 * 强制类型转换
 * 	- 指将一个数据类型强制转换为其他的数据类型
 * 	- 类型转换主要指，将其他的数据类型，转换为
 * 		String Number Boolean
 *
 */

/*
 * 将其他的数据类型转换为String
 * 	方式一：
 * 		- 调用被转换数据类型的toString()方法
 * 		- 该方法不会影响到原变量，它会将转换的结果返回
 * 		- 但是注意：null和undefined这两个值没有toString()方法，
 * 			如果调用他们的方法，会报错
 *
 *  方式二：
 * 		- 调用String()函数，并将被转换的数据作为参数传递给函数
 * 		- 使用String()函数做强制类型转换时，
 * 			对于Number和Boolean实际上就是调用的toString()方法
 * 			但是对于null和undefined，就不会调用toString()方法
 * 				它会将 null 直接转换为 "null"
 * 				将 undefined 直接转换为 "undefined"
 *
 */

var a = 123;

//调用a 的toString方法

a = a.toString();

console.log(typeof a);
console.log(a);

//使用toString函数

var b = 339;

b = String(b);

console.log(typeof b);
console.log(b);

c = null;
c = String(c);

c = undefined;
c = String(c);

console.log(typeof c);
console.log(c);


