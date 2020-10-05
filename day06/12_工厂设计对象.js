//创建一个对象

var obj1 = {
    name: "Jack",
    age: 18,
    gender: "男",
    address: "willow",
    sayName: function () {
        return this.name;
    }
}

console.log(obj1.sayName());

//使用工厂设计模式

//创建一个人的工厂
function createPerson(name, age, gender) {
    //创建一个新的对象
    var obj = new Object();
    //添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;

    obj.sayName = function () {
        return this.name;
    }
    //将新的对象返回
    return obj;
}

//创建一个狗的工厂
function createDog(name, age, gender) {
    //创建一个对象
    var obj = new Object();

    //添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;

    obj.sayHello = function () {
        console.log("汪汪");
    }

    //将对象返回

    return obj;

}

var obj2 = createPerson("James", 22, "famle");

var obj3 = createDog("Black", 4, "famle");


console.log("名字是：" + obj2.sayName());

console.log("打招呼：" + obj3.sayHello());

