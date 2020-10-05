//创建一个数组
//var arr = new Array();

//使用字面量来创建数组
//语法:[]
//var arr = [];

//console.log(typeof arr);

//使用字面量创建数组时，可以在创建时就指定数组中的元素

var arr = [2, 1, 5, 3, 10, 7];

//使用构造函数创建数组时，也可以同时添加元素，将要添加的元素作文构造函数的参数传递
//元素之间使用,隔开
var arr2 = new Array(10, 20, 30);
//console.log(arr2);

//创建一个数组数组中只有一个元素10
arr = [10];

//创建一个长度为10的数组
arr2 = new Array(10);

//console.log(arr2.length);
//数组中的元素可以是任意的数据类型
arr = ["hello", 1, true, null, undefined];

//也可以是对象
var obj = {name: "孙悟空"};
arr[arr.length] = obj;
arr = [{name: "孙悟空"}, {name: "沙和尚"}, {name: "猪八戒"}];

//也可以是一个函数
arr = [function () {
    alert(1)
}, function () {
    alert(2)
}];

//console.log(arr);
//arr[0]();

//数组中也可以放数组，如下这种数组我们称为二维数组
arr = [[1, 2, 3], [3, 4, 5], [5, 6, 7]];
console.log(arr[1]);