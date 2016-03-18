/**
 * Created by kinglan525 on 15/12/23.
 */
//8.2.4 对散列表排序，从散列表中取值
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
        this.table[pos] = data;
    },
    get: function(key) {
        return this.table[this.betterHash(key)];
    }
};

var nums = new HashTable();
nums.put('kinglan','123');
nums.put('Liz','345');
nums.put('Lily','456');
console.log(nums.get('Liz'));
