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
            console.log(this.toString());
        }
    },
    bubbleSort2: function() {
        for(var outer = 0; outer < this.numElements - 1; outer++) {
            for(var inner = 0; inner < this.numElements - 1 - outer; inner++) {
                if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1)
                }
            }
            console.log(this.toString());
        }
    },
    bubbleSort3: function() {
        var count = 0;
        for(var outer = this.numElements; outer > 1; outer--) {
            for(var inner = 0; inner < outer - 1; inner++) {
                if(this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                    ++count;
                }
            }
            console.log(this.toString());
        }
        console.log(count);
    }
};
var nums = new CArray(10);
nums.setData();
console.log('after setData: ');
console.log(nums.toString());
//nums.bubbleSort();
//nums.bubbleSort2();
nums.bubbleSort3();
//console.log('after bubbleSort:');


