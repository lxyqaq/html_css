/*
 * 创建一个正则表达式检查一个字符串中是否含有aaa
 */

/*
 * 量词
 * 	- 通过量词可以设置一个内容出现的次数
 * 	- 量词只对它前边的一个内容起作用
 * 	- {n} 正好出现n次
 * 	- {m,n} 出现m-n次
 * 	- {m,} m次以上
 * 	- + 至少一个，相当于{1,}
 * 	- * 0个或多个，相当于{0,}
 * 	- ? 0个或1个，相当于{0,1}
 */


var reg = /a{3}/;
console.log(reg.test("aaa"));

//ababab
reg = /(ab){3}/;
console.log(reg.test("ababab"));

//abbb
reg = /ab{3}/;
console.log(reg.test("abbb"));

//abbc
reg = /ab{1,3}c/;
console.log(reg.test("abbc"));

//abbbc 3次以上包括3次
reg = /ab{3,}c/;
console.log(reg.test("abbbc"));

//至少一个
reg = /ab+c/;
console.log(reg.test("abc"));

//0个或者多个
reg = /ab*c/;
console.log(reg.test("ac"));

//0个或者1个
reg = /ab?c/;
console.log(reg.test("abc"));

/*
 * 检查一个字符串中是否以a开头
 * 	^ 表示开头
 * 	$ 表示结尾
 */

//以a开头
reg = /^a/;
console.log(reg.test("abbhsbbbj"));

//以a结尾
reg = /a$/;
console.log(reg.test("sknckswna"));

/*
 * 如果在正则表达式中同时使用^ $则要求字符串必须完全符合正则表达式
 */
reg = /^a$/;
console.log(reg.test("a"));

/*
 * 创建一个正则表达式，用来检查一个字符串是否是一个合法手机号
 *
 * 手机号的规则：
 * 	1 3 567890123 （11位）
 *
 * 	1. 以1开头
 *  2. 第二位3-9任意数字
 * 	3. 三位以后任意数字9个
 *
 *  ^1   [3-9]  [0-9]{9}$
 *
 */

reg = /^1[3-9][0-9]{9}$/;

var number = "13067890123";

console.log(reg.test(number));






