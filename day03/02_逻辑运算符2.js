/*
 * && || 非布尔值的情况
 * 	- 对于非布尔值进行与或运算时，
 * 		会先将其转换为布尔值，然后再运算，并且返回原值
 * 	- 与运算：
 * 		- 如果第一个值为true，则必然返回第二个值
 * 		- 如果第一个值为false，则直接返回第一个值
 *
 * 	- 或运算
 * 		- 如果第一个值为true，则直接返回第一个值
 * 		- 如果第一个值为false，则返回第二个值
 *
 */

//true && true
//与运算：如果两个值都为true，则返回后边的
var result = 5 && 6;


//与运算：如果两个值中有false，则返回靠前的false
//false && true
result = 0 && 2;
result = 2 && 0;
//false &&　false
result = NaN && 0;
result = 0 && NaN;


//true || true
//如果第一个值为true，则直接返回第一个值
result = 2 || 1;
result = 2 || NaN;
result = 2 || 0;

//如果第一个值为false，则直接返回第二个值
result = NaN || 1;
result = NaN || 0;

result = "" || "hello";

result = -1 || "你好";


