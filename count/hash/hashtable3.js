/**
 * Created by kinglan525 on 15/12/24.
 */
//开链法避免碰撞，如果数组大小是待存储个数的1.5倍，适合用开链法
function HashTable() {
    this.table = new Array(137);
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
        var index = 0;
        if(this.table[pos][index] == undefined) {
            this.table[pos][index] = key;
            this.table[pos][index + 1] = data;
        } else {
            while(this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = key;
            this.table[pos][index + 1] = data;
        }
    },
    get: function(key) {
        var index = 0;
        var pos = this.betterHash(key);
        if(this.table[pos][index] == key) {
            return this.table[pos][index + 1];
        }
        index += 2;
        while(this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
        return undefined;
    },
    showDistro: function() {
        for(var i = 0, l = this.table.length; i < l; i++) {
            if(this.table[i][0] != undefined) {
                console.log(i + ': ' + this.table[i]);
            }
        }
    },
    buildChains: function() {
        for(var i = 0, l = this.table.length; i < l; i++) {
            this.table[i] = new Array();
        }
    }

};

var nums = new HashTable();
nums.buildChains();
nums.put('kinglan','123');
nums.put('Liz','345');
nums.put('Lily','456');
console.log(nums.get('Liz'));

// 练习2，存入单词和定义，输入单词取定义

var dictionary = new HashTable();
dictionary.buildChains();
dictionary.put('Liz', 'a girl`s name');
dictionary.put('Tom', 'a boy`s name');
dictionary.put('sweet', 'task good');
console.log('sweet: ' + dictionary.get('sweet'));