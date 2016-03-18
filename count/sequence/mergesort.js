/**
 * Created by kinglan525 on 16/1/11.
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
        console.log('left array - ', leftArr);
        console.log('right array - ', rightArr);
        console.log(this.toString());
    }
};



var nums = new CArray(10);
nums.setData()
console.log(nums.toString());
nums.mergeSort();
console.log(nums.toString());

