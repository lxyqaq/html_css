/*
 * 正则表达式
 * 	- admin@atguigu.com
 *  - admin@.com   adminatguigu.com
 *  - 邮件的规则：
 * 		1.前边可以是xxxx乱七八糟
 * 		2.跟着一个@
 * 		3.后边可以是xxxx乱七八糟
 * 		4..com获取其他的乱七八糟
 *
 * 	- 正则表达式用于定义一些字符串的规则，
 * 		计算机可以根据正则表达式，来检查一个字符串是否符合规则，
 * 		获取将字符串中符合规则的内容提取出来
 */

//创建正则表达式的对象
/*
 * 语法：
 * 	var 变量 = new RegExp("正则表达式","匹配模式");
 *  使用typeof检查正则对象，会返回object
 * 	var reg = new RegExp("a"); 这个正则表达式可以来检查一个字符串中是否含有a
 * 在构造函数中可以传递一个匹配模式作为第二个参数，
 * 		可以是
 * 			i 忽略大小写
 * 			g 全局匹配模式
 */

var reg = new RegExp("abc", "i");

console.log(reg.test("abc"));
console.log(reg.test("AbC"));