//创建一个数组
var arr = ["孙悟空", "猪八戒", "沙和尚"];

/*
 * push()
 * 	- 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度
 * 	- 可以将要添加的元素作为方法的参数传递，
 * 		这样这些元素将会自动添加到数组的末尾
 * 	- 该方法会将数组新的长度作为返回值返回
 */

var result = arr.push("唐僧", "蜘蛛精", "白骨精");
console.log(arr);
console.log("result: " + result);


/*
 * pop()
 * 	- 该方法可以删除数组的最后一个元素,并将被删除的元素作为返回值返回
 */

var result1 = arr.pop();
console.log("result1: " + result1)

/*
 * unshift()
 * 	- 向数组开头添加一个或多个元素，并返回新的数组长度
 * 	- 向前边插入元素以后，其他的元素索引会依次调整
 */

var result2 = arr.unshift("二郎神", "牛魔王");
console.log("result2: " + result2);
console.log(arr);

/*
 * shift()
 * 	- 可以删除数组的第一个元素，并将被删除的元素作为返回值返回
 */

var result3 = arr.shift();
result3 = arr.shift();
console.log("result3: " + result3);
console.log(arr);







