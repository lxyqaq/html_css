/*
 * 使用字面量来创建正则表达式
 * 	语法：var 变量 = /正则表达式/匹配模式
 * 使用字面量的方式创建更加简单
 * 	使用构造函数创建更加灵活
 *
 */
//var reg = new RegExp("a","i");

var reg = /a/i;
console.log(reg.test("A"));

//console.log(typeof reg);
//console.log(reg.test("abc"));

//创建一个正则表达式，检查一个字符串中是否有a或b
/*
 * 使用 | 表示或者的意思
 */
reg = /a|b|c/;
console.log(reg.test("b"));

/*
 * 创建一个正则表达式检查一个字符串中是否有字母
 */
//reg = /a|b|c|d|e|f|g/;

/*
 * []里的内容也是或的关系
 * [ab] == a|b
 * [a-z] 任意小写字母
 * [A-Z] 任意大写字母
 * [A-z] 任意字母
 * [0-9] 任意数字
 */
reg = /[A-z]/;

//检查一个字符串中是否含有 abc 或 adc 或 aec
reg = /a[bde]c/;

/*
 * [^ ] 除了
 */
reg = /[^ab]/;

reg = /[^0-9]/;

console.log(reg.test("12a3456"));
