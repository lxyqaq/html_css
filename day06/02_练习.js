/*
 * 定义一个函数，判断一个数字是否是偶数，如果是返回true，否则返回false
 */

function isOu(num) {

    return num % 2 == 0;

}

var result = isOu(15);

//console.log("result = "+result);


/*
 * 定义一个函数，可以根据半径计算一个圆的面积，并返回计算结果
 * 3.14*r*r
 */
function mianji(r) {

    return 3.14 * r * r;

}

result = mianji(5);

//console.log("result = "+result);


/*
 * 创建一个函数，可以在控制台中输出一个人的信息
 * 	可以输出人的 name age gender address
 *
 * 实参可以是任意的数据类型，也可以是一个对象
 * 	当我们的参数过多时，可以将参数封装到一个对象中，然后通过对象传递
 */
function sayHello(o) {

    //console.log("o = "+o);
    console.log("我是" + o.name + ",今年我" + o.age + "岁了," + "我是一个" + o.gender + "人" + ",我住在" + o.address);
}

//sayHello("猪八戒",28,"高老庄","男");
//创建一个对象
var obj = {
    name: "孙悟空",
    age: 18,
    address: "花果山",
    gender: "男"

};

//sayHello(obj);

/*
 * 实参可以是一个对象，也可以是一个函数
 */

function fun(a) {
    console.log("a = " + a);
    //a(obj);
}

//fun(sayHello);

//fun(function(){alert("hello")});

fun(mianji(10));

/*
 * mianji()
 * 	- 调用函数
 * 	- 相当于使用的函数的返回值
 *
 * mianji
 * 	- 函数对象
 * 	- 相当于直接使用函数对象
 */