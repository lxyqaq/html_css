var obj1 = {
    name: "Jack",
    age: 22,
    gender: "fmale",
    address: "willow park"
};

//枚举对象中的属性
//使用for ... in 语句
/*
 * 语法：
 * 	for(var 变量 in 对象){
 *
 *  }
 *
 * for...in语句 对象中有几个属性，循环体就会执行几次
 * 	每次执行时，会将对象中的一个属性的名字赋值给变量
 */

//属性名：i
//属性值：obj[i]

for (var i in obj1){
    console.log(i+": "+obj1[i]);
}