/*
 * Null（空值）类型的值只有一个，就是null
 * 	null这个值专门用来表示一个为空的对象
 * 	使用typeof检查一个null值时，会返回object
 *
 * Undefined（未定义）类型的值只有一个，就undefind
 * 	当声明一个变量，但是并不给变量赋值时，它的值就是undefined
 * 	使用typeof检查一个undefined时也会返回undefined
 */
var a = null;

var b = undefined;

console.log(typeof a);

console.log(typeof b);