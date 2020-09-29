/*
			 * 数据类型指的就是字面量的类型
			 *  在JS中一共有六种数据类型
			 * 		String 字符串
			 * 		Number 数值
			 * 		Boolean 布尔值
			 * 		Null 空值
			 * 		Undefined 未定义
			 * 		Object 对象
			 *
			 * 其中String Number Boolean Null Undefined属于基本数据类型
			 * 	而Object属于引用数据类型
			 */

/*
 * String字符串
 * 	- 在JS中字符串需要使用引号引起来
 * 	- 使用双引号或单引号都可以，但是不要混着用
 * 	- 引号不能嵌套，双引号不能放双引号，单引号不能放单引号
 */
var str = 'hello';

str = '我说:"今天天气真不错！"';

/*
     在字符串中我们可以使用\作为转义字符，
         当表示一些特殊符号时可以使用\进行转义

         \" 表示 "
         \' 表示 '
         \n 表示换行
         \t 制表符
         \\ 表示\
 * */
str = "我说:\"今天\t天气真不错！\"";

str = "\\\\\\";

//输出字面量 字符串str
//alert("str");

//输出变量str
//alert(str);

var str2 = "hello";

str2 = "你好";

str2 = 3;




//alert("hello，你好");

//console.log("我就是不出来~~~");