/*
 * 创建一个Person构造函数
 * 	- 在Person构造函数中，为每一个对象都添加了一个sayName方法，
 * 		目前我们的方法是在构造函数内部创建的，
 * 			也就是构造函数每执行一次就会创建一个新的sayName方法
 * 		也是所有实例的sayName都是唯一的。
 * 		这样就导致了构造函数执行一次就会创建一个新的方法，
 * 			执行10000次就会创建10000个新的方法，而10000个方法都是一摸一样的
 * 			这是完全没有必要，完全可以使所有的对象共享同一个方法
 */
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    //向对象中添加一个方法
    //this.sayName = fun;
}

//将sayName方法在全局作用域中定义
/*
 * 将函数定义在全局作用域，污染了全局作用域的命名空间
 * 	而且定义在全局作用域中也很不安全
 */
/*function fun(){
    alert("Hello大家好，我是:"+this.name);
};*/
//向原型中添加sayName方法
Person.prototype.sayName = function () {
    alert("Hello大家好，我是:" + this.name);
};

//创建一个Person的实例
var per = new Person("孙悟空", 18, "男");
var per2 = new Person("猪八戒", 28, "男");
per.sayName();
per2.sayName();

//console.log(per.sayName == per2.sayName);