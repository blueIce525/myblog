/**
 * Created by kinglan525 on 15/12/23.
 */
//练习2和练习3，存储一段文本，各单词出现的次数
function Dictionary() {
    this.dataStore = new Array();
}
Dictionary.prototype = {
    constructor: Dictionary,
    add: function (key) {
        if(this.dataStore[key]) {
            this.dataStore[key] = parseInt(this.dataStore[key]) + 1;
        } else {
            this.dataStore[key] = 1;
        }
    },
    find: function (key) {
        return this.dataStore[key];
    },
    remove: function (key) {
        delete this.dataStore[key];
    },
    showAll: function () {
        //练习3，按照字母顺序显示
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
        var keys = Object.keys(this.dataStore).sort();
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

var article = 'the brown fox jumped over the blue fox';
var arr = article.split(' ');
var words = new Dictionary();
for(var i = 0, l = arr.length; i < l; i++) {
    words.add(arr[i]);
}
words.showAll();