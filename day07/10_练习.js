function Person(name, age, gender) {
    this.name = name;
    this.age = age;
}

//修改Person原型的toString
Person.prototype.toString = function () {
    return "Person[name=" + this.name + ",age=" + this.age + "]";
};

//创建一个Person对象
var per = new Person("孙悟空", 18);
var per2 = new Person("猪八戒", 28);
var per3 = new Person("红孩儿", 8);
var per4 = new Person("蜘蛛精", 16);
var per5 = new Person("二郎神", 38);

/*
* 将这些person对象放入到一个数组中
*/
var perArr = [per, per2, per3, per4, per5];

/*
* 创建一个函数，可以将perArr中的满18岁的Person提取出来，
* 	然后封装到一个新的数组中并返回
* arr
* 	形参，要提取信息的数组
*/

function getAdult(arr) {
    //创建一个新的数组
    var newArr = [];

    //遍历arr，获取arr中Person对象
    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        //判断Person对象的age是否大于等于18
        if (p.age >= 18) {
            //如果大于等于18，则将这个对象添加到newArr中
            //将对象放入到新数组中
            newArr.push(p);
        }
    }
    //将新的数组返回
    return newArr;

}

var result = getAdult(perArr);

console.log(result);

