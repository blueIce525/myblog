/**
 * Created by kinglan525 on 15/12/24.
 */
//线性探测法
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
    put: function(key, data) {
        //var pos = this.simpleHash(data);
        var pos = this.betterHash(key);

        if(this.table[pos] == undefined) {
            this.table[pos] = key;
            this.value[pos] = data;
        }
        while(this.table[pos] != undefined) {
            ++pos;
        }
        this.table[pos] = key;
        this.value[pos] = data;
    },
    get: function(key) {
        var pos = -1;
        pos = this.betterHash(key);
        if(pos > -1) {
            for(var i = pos; this.table[pos] != undefined; i++) {
                if(this.table[pos] == key) {
                    return this.value[pos];
                }
            }
        }
        return undefined;
    }
};

// 练习1，存入单词和定义，输入单词取定义

var dictionary = new HashTable();

dictionary.put('Liz', 'a girl`s name');
dictionary.put('Tom', 'a boy`s name');
dictionary.put('sweet', 'task good');
console.log('sweet: ' + dictionary.get('sweet'));
