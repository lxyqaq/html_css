/*
 * 解析器在调用函数每次都会向函数内部传递进一个隐含的参数,
 * 	这个隐含的参数就是this，this指向的是一个对象，
 * 	这个对象我们称为函数执行的 上下文对象，
 * 	根据函数的调用方式的不同，this会指向不同的对象
 * 		1.以函数的形式调用时，this永远都是window
 * 		2.以方法的形式调用时，this就是调用方法的那个对象
 */

function fun() {
    //console.log("a = "+a+", b = "+b);
    console.log(this.name);
}

//fun();

//创建一个对象
var obj = {
    name: "孙悟空",
    sayName: fun
};

var obj2 = {
    name: "沙和尚",
    sayName: fun
};

//console.log(obj.sayName == fun);
var name = "全局的name属性";
//obj.sayName();
//以函数形式调用，this是window
//fun();

//以方法的形式调用，this是调用方法的对象
//obj.sayName();
obj2.sayName();