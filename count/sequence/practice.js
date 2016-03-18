/**
 * Created by kinglan525 on 16/1/13.
 */
//练习
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for(var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}
CArray.prototype = {
    constructor: CArray,
    insert: function(element) {
        this.dataStore[this.pos++] = element;
    },
    toString: function() {
        var str = '';
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            str += this.dataStore[i] + ' ';
            if(i > 0 && i % 10 == 0 ) {
                str += '\n';
            }
        }
        return str;
    },
    clear: function() {
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            this.dataStore[i] = 0;
        }
    },
    setData: function() {
        for(var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    },
    swap: function(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    },
    bubbleSort: function() {
        var numElements = this.dataStore.length;
        var temp;
        for(var outer = numElements; outer >= 2; --outer) {
            for(var inner = 0; inner < outer - 1; ++inner) {
                if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1)
                }
            }
            //console.log(this.toString());
        }
    },
    selectionSort: function() {
        var min = 0;
        //书中有错，修改如下
        for(var outer = 0; outer < this.numElements - 1; ++outer) {
            min = outer;
            for(var inner = outer + 1; inner < this.numElements; ++inner) {
                if(this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
            //console.log(this.toString());

        }
    },
    insertionSort: function() {
        var temp, inner;
        for(var outer = 1; outer <= this.numElements - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while(inner > 0 && (this.dataStore[inner - 1] > temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
            //console.log(this.toString());
        }
    },
    insertionSort1: function() {
        var inner, temp;
        var count = 0;
        for (var outer = 1; outer < this.numElements; outer++) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] > temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
            //console.log(this.toString());
            ++count;
        }
        //console.log(count);
    },
    shellSort: function() {
        var N = this.dataStore.length;
        var h = 1;
        while(h < N/3) {
            h = 3 * h + 1;
        };
        while(h >= 1) {
            for(var i = h; i < N; i++) {
                for(var j = i; j >= h && this.dataStore[j-h] > this.dataStore[j]; j -=h) {
                    this.swap(this.dataStore, j, j-h);
                }
            }
            h = Math.floor((h - 1) / 3);
        }
    },
    mergeSort: function() {
        var arr = this.dataStore;
        if(arr.length < 2) {
            return;
        }
        var step = 1;
        var left, right;
        while(step < arr.length) {
            left = 0;
            right = step;
            while(right + step <= arr.length) {
                this.mergeArrays(arr, left, left + step, right, right + step);
                left = right + step;
                right = left + step;
            }
            if(right < arr.length) {
                this.mergeArrays(arr, left, left + step, right, arr.length);
            }
            step *= 2;
        }
    },
    mergeArrays: function(arr, startLeft, stopLeft, startRight, stopRight) {
        var rightArr = new Array(stopRight - startRight + 1);
        var leftArr = new Array(stopLeft - startLeft + 1);
        k = startRight;
        for(var i = 0; i < (rightArr.length - 1); ++i) {
            rightArr[i] = arr[k];
            ++k;
        }
        k = startLeft;
        for (var i = 0; i < (leftArr.length-1); ++i) {
            leftArr[i] = arr[k];
            ++k;
        }
        rightArr[rightArr.length - 1] = Infinity;//哨兵值
        leftArr[leftArr.length - 1] = Infinity;
        var m = 0;
        var n = 0;
        for (var k = startLeft; k < stopRight; ++k) {
            if (leftArr[m] <= rightArr[n]) {
                arr[k] = leftArr[m];
                m++;
            }
            else {
                arr[k] = rightArr[n];
                n++;
            }
        }
        //console.log('left array - ', leftArr);
        //console.log('right array - ', rightArr);
        //console.log(this.toString());
    },
    qSort: function(arr) {
        if(arr.length == 0) {
            return [];
        }
        var left = [];
        var right = [];
        var pivot = arr[0];
        for(var i = 1, l = arr.length; i < l; i++) {
            //console.log('基准值为：' + pivot + ' 当前值为：' + arr[i]);
            if(arr[i] < pivot) {
                //console.log('移动' + arr[i] + '到左边');
                left.push(arr[i]);
            } else {
                //console.log('移动' + arr[i] + '到右边');
                right.push(arr[i]);
            }
        }
        return this.qSort(left).concat(pivot, this.qSort(right));
    }
};

//练习1，对字符串数组进行排序，比较执行时间
function createStr() {
    var strArr = ['b', 'e', 'a', 'p', 'w', 'd', 'h', 'f', 's', 'v'];
    var resultArr = [];
    for(var i = 0; i < 100; i++) {
        resultArr = resultArr.concat(strArr);
    }
    return resultArr;
}
var strArr = createStr();
console.log('对1000无序字符串数组排序时间如下：');
var numElements = 1000;
var strArrs = new CArray(numElements);
time(strArrs, 'str', strArr);


//练习2，对1000有序和无序数组排序时间进行比较
console.log('对1000有序数组排序时间如下：');
var numElements = 1000;
var nums = new CArray(numElements);
time(nums);


console.log('对1000无序数组排序时间如下：');
var numElements = 1000;
var nums = new CArray(numElements);
time(nums, 'disorder');


//练习3，1000倒数数组排序时间

console.log('1000倒数数组排序时间：');
var numElements = 1000;
var nums = new CArray(numElements);
time(nums, 'reverse');




//练习4、10000随机数组，比较快速排序和js内置排序函数的时间
console.log('10000随机数组，比较快速排序和js内置排序函数的时间：');
var numElements = 10000;
var nums = new CArray(numElements);

nums.setData();
start = new Date().getTime();
nums.qSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '执行快速排序消耗的时间为' + elapsed + '毫秒');


start = new Date().getTime();
nums.dataStore.sort(function(a, b) {
    return a - b;
});
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '执行js内置排序函数消耗的时间为' + elapsed + '毫秒');


//统计时间函数
function time(nums, type) {
    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    var start = new Date().getTime();
    nums.bubbleSort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    console.log('对' + numElements + '执行冒泡排序消耗的时间为' + elapsed + '毫秒');

    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    start = new Date().getTime();
    nums.selectionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log('对' + numElements + '执行选择排序消耗的时间为' + elapsed + '毫秒');

    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    start = new Date().getTime();
    nums.insertionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log('对' + numElements + '执行插入排序消耗的时间为' + elapsed + '毫秒');

    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    start = new Date().getTime();
    nums.shellSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log('对' + numElements + '执行希尔排序消耗的时间为' + elapsed + '毫秒');

    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    start = new Date().getTime();
    nums.mergeSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log('对' + numElements + '执行合并排序消耗的时间为' + elapsed + '毫秒');

    if(type && type === 'disorder') {
        nums.setData();
    }
    if(type && type === 'reverse') {
        nums.dataStore.reverse();
    }
    if(type && type === 'str') {
        nums.dataStore = strArr;
    }
    start = new Date().getTime();
    nums.qSort(nums.dataStore);
    stop = new Date().getTime();
    elapsed = stop - start;
    console.log('对' + numElements + '执行快速排序消耗的时间为' + elapsed + '毫秒');
}