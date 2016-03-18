/**
 * Created by kinglan525 on 15/12/30.
 */
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
            console.log(this.toString());
            ++count;
        }
        console.log(count);
    }
};
var numElements = 1000;
//var numElements = 4;
var nums = new CArray(numElements);
//nums.setData();
//console.log('after setData: ');
//
//console.log(nums.toString());
//nums.insertionSort();
//nums.insertionSort1();
//console.log('after bubbleSort:');


var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('对' + numElements + '执行冒泡排序消耗的时间为' + elapsed + '毫秒');

start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '执行选择排序消耗的时间为' + elapsed + '毫秒');

start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log('对' + numElements + '执行插入排序消耗的时间为' + elapsed + '毫秒');

//console.log(nums.toString());


