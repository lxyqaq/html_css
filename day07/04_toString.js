function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

//修改Person原型的toString
Person.prototype.toString = function () {
    return "Person[name=" + this.name + ",age=" + this.age + ",gender=" + this.gender + "]";
};


//创建一个Person实例
var per = new Person("孙悟空", 18, "男");
var per2 = new Person("猪八戒", 28, "男");

//当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值
//如果我们希望在输出对象时不输出[object Object]，可以为对象添加一个toString()方法
//Person[name=孙悟空,age=18,gender=男]
/*per.toString = function(){
    return "Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]";
};*/

var result = per.toString();
//console.log("result = " + result);
//console.log(per.__proto__.__proto__.hasOwnProperty("toString"));
console.log(per2.toString());
console.log(per.toString());