/*
 * , 运算符
 * 	使用,可以分割多个语句，一般可以在声明多个变量时使用,
 */
//使用,运算符同时声明多个变量
//var a , b , c;

//可以同时声明多个变量并赋值
//var a=1 , b=2 , c=3;
//alert(b);

/*
 * 就和数学中一样，在JS中运算符也有优先级，
 * 	比如：先乘除 后加减
 * 在JS中有一个运算符优先级的表，
 * 	在表中越靠上优先级越高，优先级越高越优先计算，
 * 	如果优先级一样，则从左往右计算。
 * 但是这个表我们并不需要记忆，如果遇到优先级不清楚
 * 	可以使用()来改变优先级
 */

//var result = 1 + 2 * 3;

/*
 * 如果||的优先级高，或者两个一样高，则应该返回3
 * 如果与的优先级高，则应该返回1
 *
 */
var result = 1 || 2 && 3;

console.log("result = " + result);