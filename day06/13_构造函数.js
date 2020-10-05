/*
 * 创建一个构造函数，专门用来创建Person对象的
 * 	构造函数就是一个普通的函数，创建方式和普通函数没有区别,
 * 	不同的是构造函数习惯上首字母大写
 *
 * 构造函数和普通函数的区别就是调用方式的不同
 * 	普通函数是直接调用，而构造函数需要使用new关键字来调用
 *
 * 构造函数的执行流程：
 * 	1.立刻创建一个新的对象
 * 	2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
 * 	3.逐行执行函数中的代码
 * 	4.将新建的对象作为返回值返回
 *
 * 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
 * 	我们将通过一个构造函数创建的对象，称为是该类的实例
 *
 * this的情况：
 * 	1.当以函数的形式调用时，this是window
 * 	2.当以方法的形式调用时，谁调用方法this就是谁
 * 	3.当以构造函数的形式调用时，this就是新创建的那个对象
 *
 */

function Person(name, age, gender) {

    this.name = name;
    this.age = age;
    this.gender = gender;

    this.sayName = function () {
        return this.name;
    }

    this.sayAge = function () {
        return this.age;
    }

    this.saygender = function () {
        return this.gender;
    }

}

var object1 = new Person("Jack", 30, "famle");

console.log("我的名字是："+object1.sayName()+"年龄是："+object1.sayAge()+"性别为："+object1.saygender());

/*console.log(per);
console.log(dog);*/

/*
 * 使用instanceof可以检查一个对象是否是一个类的实例
 * 	语法：
 * 		对象 instanceof 构造函数
 * 如果是，则返回true，否则返回false
 */
//console.log(per instanceof Person);
//console.log(dog instanceof Person);

/*
 * 所有的对象都是Object的后代，
 * 	所以任何对象和Object左instanceof检查时都会返回true
 */
//console.log(dog instanceof Object);

console.log(object1 instanceof Person);
