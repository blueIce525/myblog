/**
 * Created by kinglan525 on 15/12/23.
 */
function HashTable() {
    this.table = new Array(137);
    this.value = [];
}
HashTable.prototype = {
    constructor: HashTable,
    simpleHash: function(data) {
        var total = 0;
        for(var i = 0, l = data.length; i < l; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    },
    betterHash: function(data) {
        var H = 37;
        var total = 0;
        for(var i = 0, l = data.length; i < l; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    },
    showDistro: function() {
        for(var i = 0, l = this.table.length; i < l; i++) {
            if(this.table[i] != undefined) {
                console.log(i + ': ' + this.table[i]);
            }
        }
    },
    put: function(data) {
        //var pos = this.simpleHash(data);
        var pos = this.betterHash(data);
        if(this.table[pos] == undefined) {
            this.table[pos] = data;
            this
        }

    }
};

var names = ['Liz', 'Kinglan', 'Lucy', 'Tom', 'Jim'];
var hTable = new HashTable();
for(var i = 0, l = names.length; i < l; i++) {
    hTable.put(names[i]);
}
hTable.showDistro();

//8.2.3 散列化整型键
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getStuData(arr) {
    for(var i = 0, l = arr.length; i < l; i++) {
        var num = '';
        for(var j = 1; j < 10; j++) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
};
var students = new Array(10);
getStuData(students);
console.log('student data:');
for(var i = 0, l = students.length; i < l; i++) {
    console.log(students[i].substring(0,8) + ' ' + students[i].substring(9))
}
var sTable = new HashTable();
for(var i = 0, l = students.length; i < l; i++) {
    sTable.put(students[i]);
}
sTable.showDistro();


