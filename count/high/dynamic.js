/**
 * Created by kinglan525 on 16/1/15.
 */

//生成斐波那契数组
function createFib(num) {
    var arr = [];
    if(num == 0) {
       arr = [0];
    }
    if(num > 0) {
        arr = [0, 1];
        for(var i = 2; i <= num; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr;
}
console.log(createFib(0));
console.log(createFib(1));
console.log(createFib(2));
console.log(createFib(3));
console.log(createFib(4));
console.log(createFib(10));

//递归函数计算 斐波那契
function recurFib(n) {
    if(n < 2) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}
console.log(recurFib(10));

//动态规划计算
function dynFib(n) {
    var val = [];
    if(n == 0) {
        return 0;
    } else if(n == 1 || n == 2) {
        return 1
    } else {
        val[1] = 1;
        val[2] = 2;
        for(var i = 3; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }
        return val[n - 1];
    }
}

function interFib(n) {
    var last = 0;
    var lastNext = 1;
    var result = 0
    if(n > 0) {
        for(var i = 1; i <= n; i++) {
            result = last + lastNext;
            lastNext = last;
            last = result
        }
    }
    return result;
}
console.log(dynFib(0));
console.log(dynFib(1));
console.log(dynFib(2));
console.log(dynFib(3));
console.log(dynFib(4));
console.log(dynFib(10));

//两种算法耗时比较
console.log('递归和动态耗时比较:');
var n = 30;
var startTime = new Date().getTime();
recurFib(n);
var endTime = new Date().getTime();
console.log('递归计算长度为' + n + '耗时为' + (endTime - startTime));

var startTime = new Date().getTime();
dynFib(n);
var endTime = new Date().getTime();
console.log('动态计算长度为' + n + '耗时为' + (endTime - startTime));

console.log('test interFib');
console.log(interFib(0));
console.log(interFib(1));
console.log(interFib(2));
console.log(interFib(3));
console.log(interFib(10));
