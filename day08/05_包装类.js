/*
 * 基本数据类型
 * 	String Number Boolean Null Undefined
 * 引用数据类型
 * 	Object
 *
 * 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
 * 	String()
 * 		- 可以将基本数据类型字符串转换为String对象
 * 	Number()
 * 		- 可以将基本数据类型的数字转换为Number对象
 *  Boolean()
 * 		- 可以将基本数据类型的布尔值转换为Boolean对象
 * 	但是注意：我们在实际应用中不会使用基本数据类型的对象，
 * 		如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果
 */

//创建一个Number类型的对象
//num = 3;
var num = new Number(3);
var num2 = new Number(3);
var str = new String("hello");
var str2 = new String("hello");
var bool = new Boolean(true);
var bool2 = true;

//向num中添加一个属性
num.hello = "abcdefg";

//console.log(str === str2);

var b = new Boolean(false);

/*if(b){
    alert("我运行了~~~");
}*/

/*
 * 方法和属性之能添加给对象，不能添加给基本数据类型
 * 	当我们对一些基本数据类型的值去调用属性和方法时，
 * 		浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法
 * 		调用完以后，在将其转换为基本数据类型
 */
var s = 123;

s = s.toString();

s.hello = "你好";

console.log(s.hello);
//console.log(typeof s);