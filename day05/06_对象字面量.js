var obj1 = {
    name: "Jack",
    age: 13,
    gender: "famle"
};

console.log(obj1.age + "," + obj1.name + "," + obj1.gender);

//创建一个对象
//var obj = new Object();

/*
 * 使用对象字面量来创建一个对象
 */
var obj = {};

//console.log(typeof obj);

obj.name = "孙悟空";

//console.log(obj.name);

/*
 * 使用对象字面量，可以在创建对象时，直接指定对象中的属性
 * 语法：{属性名:属性值,属性名:属性值....}
 * 	对象字面量的属性名可以加引号也可以不加，建议不加,
 * 	如果要使用一些特殊的名字，则必须加引号
 *
 * 属性名和属性值是一组一组的名值对结构，
 * 	名和值之间使用:连接，多个名值对之间使用,隔开
 * 	如果一个属性之后没有其他的属性了，就不要写,
 */