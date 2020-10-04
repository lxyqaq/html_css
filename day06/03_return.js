function fun() {
    alert("函数要执行了~~~~");

    for (var i = 0; i < 5; i++) {


        if (i == 2) {
            //使用break可以退出当前的循环
            //break;

            //continue用于跳过当次循环
            //continue;

            //使用return可以结束整个函数
            //return;
        }

        console.log(i);
    }

    alert("函数执行完了~~~~");
}

//fun();

/*
 * 返回值可以是任意的数据类型
 * 	也可以是一个对象，也可以是一个函数
 */
function fun2() {

    //返回一个对象
    return {name: "沙和尚"};
}

var a = fun2();

//console.log("a = "+a);

function fun3() {
    //在函数内部再声明一个函数
    function fun4() {
        alert("我是fun4");
    }

    //将fun4函数对象作为返回值返回
    return fun4;
}

a = fun3();
//console.log(a);
//a();
fun3()();