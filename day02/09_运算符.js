/*
 * 运算符也叫操作符
 * 	通过运算符可以对一个或多个值进行运算,并获取运算结果
 * 	比如：typeof就是运算符，可以来获得一个值的类型
 * 		它会将该值的类型以字符串的形式返回
 * 		number string boolean undefined object
 *
 * 	算数运算符
 * 		当对非Number类型的值进行运算时，会将这些值转换为Number然后在运算
 * 			任何值和NaN做运算都得NaN
 *
 * 		+
 * 			+可以对两个值进行加法运算，并将结果返回
 * 			 如果对两个字符串进行加法运算，则会做拼串
 * 				会将两个字符串拼接为一个字符串，并返回
 * 			任何的值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串的操作
 * 		-
 * 			- 可以对两个值进行减法运算，并将结果返回
 *
 * 		*
 * 			* 可以对两个值进行乘法运算
 * 		/
 * 			/ 可以对两个值进行除法运算
 * 		%
 * 			% 取模运算（取余数）
 */
var a = 123;

var result = typeof a;

//console.log(typeof result);

result = a + 1;

result = 456 + 789;

result = true + 1;

result = true + false;

result = 2 + null;

result = 2 + NaN;

result = "你好" + "大帅哥";

var str = "锄禾日当午，" +
    "汗滴禾下土，" +
    "谁知盘中餐，" +
    "粒粒皆辛苦";


result = 123 + "1";

result = true + "hello";

//任何值和字符串相加都会转换为字符串，并做拼串操作
/*
 * 我们可以利用这一特点，来将一个任意的数据类型转换为String
 * 	我们只需要为任意的数据类型 + 一个 "" 即可将其转换为String
 * 	这是一种隐式的类型转换，由浏览器自动完成，实际上它也是调用String()函数
 */
var c = 123;

c = c + "";

//c = null;

//c = c + "";


//console.log(result);
//console.log(typeof c);
//console.log("c = "+c);

result = 1 + 2 + "3"; //33

result = "1" + 2 + 3; //123

result = 100 - 5;

result = 100 - true;

result = 100 - "1";

result = 2 * 2;

result = 2 * "8";

result = 2 * undefined;

result = 2 * null;

result = 4 / 2;

result = 3 / 2;

/*
 * 任何值做- * /运算时都会自动转换为Number
 * 	我们可以利用这一特点做隐式的类型转换
 * 		可以通过为一个值 -0 *1 /1来将其转换为Number
 * 		原理和Number()函数一样，使用起来更加简单
 */

var d = "123";

//console.log("result = "+result);

d = d - 0;

/*console.log(typeof d);
console.log(d);*/

result = 9 % 3;
result = 9 % 4;
result = 9 % 5;

console.log("result = " + result);