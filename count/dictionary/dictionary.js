/**
 * Created by kinglan525 on 15/12/23.
 */

function Dictionary() {
    this.dataStore = new Array();
}
Dictionary.prototype = {
    constructor: Dictionary,
    add: function (key, value) {
        this.dataStore[key] = value;
    },
    find: function (key) {
        return this.dataStore[key];
    },
    remove: function (key) {
        delete this.dataStore[key];
    },
    showAll: function () {
        //书中代码错误，改正如下
        var keys = Object.keys(this.dataStore).sort();
        for (var key in keys) {
            console.log(keys[key] + ':' + this.dataStore[keys[key]]);
        }
    },
    //显示单个数据
    showItem: function(key) {
        console.log(key + ':' + this.dataStore[key]);
    },
    clear: function() {
        //书中代码错误，改正如下
        var keys = Object.keys(this.dataStore);
        for (var key in keys) {
            delete this.dataStore[keys[key]];
        }
    },
    count: function() {
        var n = 0;
        for(var key in Object.keys(this.dataStore)) {
            ++n;
        }
        return n;
    }
};

var pbook = new Dictionary();
pbook.add('Liz', '123');
pbook.add('kinglan', '345');
pbook.add('Lily', '456');

//练习1：显示单个电话号码
pbook.showItem('Lily');

pbook.showAll();
console.log('count of entries:' + pbook.count());
console.log('kinglan:' + pbook.find('kinglan'));

pbook.remove('kinglan');
console.log('remove kinglan:');
pbook.showAll();
console.log('count of entries:' + pbook.count());

pbook.clear();
console.log('after clear:');
console.log('count of entries:' + pbook.count());


//练习
