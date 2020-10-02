/*
 * 条件分支语句也叫switch语句
 * 	语法：
 * 		switch(条件表达式){
 * 			case 表达式:
 * 				语句...
 * 				break;
 *  		case 表达式:
 * 				语句...
 * 				break;
 * 			default:
 * 				语句...
 * 				break;
 * 		}
 *
 * 	执行流程：
 * 		switch...case..语句
 * 		在执行时会依次将case后的表达式的值和switch后的条件表达式的值进行全等比较，
 * 			如果比较结果为true，则从当前case处开始执行代码。
 * 				当前case后的所有的代码都会执行，我们可以在case的后边跟着一个break关键字，
 * 				这样可以确保只会执行当前case后的语句，而不会执行其他的case
 * 			如果比较结果为false，则继续向下比较
 * 			如果所有的比较结果都为false，则只执行default后的语句
 *
 * 	switch语句和if语句的功能实际上有重复的，使用switch可以实现if的功能，
 * 		同样使用if也可以实现switch的功能，所以我们使用时，可以根据自己的习惯选择。
 */

//根据num的值，输出对应的中文

var num = 3;

/*if(num == 1){
    console.log("壹");
}else if(num == 2){
    console.log("贰");
}else if(num == 3){
    console.log("叁");
}*/

num = "hello";

switch (num) {
    case 1:
        console.log("壹");
        //使用break可以来退出switch语句
        break;
    case 2:
        console.log("贰");
        break;
    case 3:
        console.log("叁");
        break;
    default:
        console.log("非法数字~~");
        break;
}