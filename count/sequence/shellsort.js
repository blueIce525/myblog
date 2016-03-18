/**
 * Created by kinglan525 on 16/1/8.
 */
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.gaps = [5, 3, 1];
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
    setGaps: function(arr) {
        this.gaps = arr;
    },
    shellSort: function() {
        for(var g = 0, gl = this.gaps.length; g < gl; ++g) {
            for(var i = this.gaps[g], il = this.dataStore.length; i < il; ++i) {
                var temp = this.dataStore[i];
                for(var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                    this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                }
                this.dataStore[j] = temp;
            }
            console.log(this.toString());
        }
    },
    shellSort1: function() {
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
    }
};
var nums = new CArray(10);
nums.setData();
console.log('after setData: ');
console.log(nums.toString());
//
//console.log('shellSort:');
//nums.shellSort();

console.log('shellSort1:');
nums.shellSort1();
console.log(nums.toString());