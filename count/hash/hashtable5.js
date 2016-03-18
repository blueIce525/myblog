/**
 * Created by kinglan525 on 15/12/24.
 */
//练习3

function HashTable() {
    this.table = new Array(137);
    this.value = [];
}
HashTable.prototype = {
    constructor: HashTable,
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
                console.log(this.table[i] + ':' + this.value[i]);
            }
        }
    },
    put: function(data) {
        var pos = this.betterHash(data);

        //先找存储位置，如果位置上为空，应该先存储，个数为1
        if(this.table[pos] == undefined) {
            this.table[pos] = data;
            this.value[pos] = 1;
        } else if(this.table[pos] != undefined && this.table[pos] == data) {
            // 如果位置上不为空，且位置上的数据与要存储的数据相同，个数加1
            this.value[pos] = parseInt(this.value[pos]) + 1;
        }
    }
};

var names = ['Kinglan', 'Lucy', 'Kinglan', 'Lucy', 'Danny', 'Cynthia'];
var hTable = new HashTable();
for(var i = 0, l = names.length; i < l; i++) {
    hTable.put(names[i]);
}
hTable.showDistro();

