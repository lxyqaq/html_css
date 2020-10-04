//创建一个对象


var obj1 = new Object();

obj1.gender = "男";

obj1.age = 18;

obj1.name = "Nathan";


//调函数
//fun();

/*
 * 函数也可以称为对象的属性，
 * 	如果一个函数作为一个对象的属性保存，
 * 	那么我们称这个函数时这个对象的方法
 * 	调用这个函数就说调用对象的方法（method）
 *
 * 但是它只是名称上的区别没有其他的区别
 *
 */

obj1.sayName = function () {
    console.log("我的名字是: "+obj1.name );
}

obj1.sayAge = function () {
    console.log("我的年龄是："+obj1.age+"岁");
}

obj1.sayName();

obj1.sayAge();

var obj2 = {
    name: "Rose",
    age: 20,
    gender: "女",
    sayName:function (){
        return this.name;
    }
}

console.log("我的名字是："+obj2.sayName());

