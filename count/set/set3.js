/**
 * Created by kinglan525 on 15/12/25.
 */
//练习3、为Set类增加一个方法higher(element), 返回比传入元素大的元素中最小的那个
//练习4、为Set类增加一个方法lower(element), 返回比传入元素小的元素中最大的那个

function Set() {
    this.dataStore = [];
}
Set.prototype = {
    constructor: Set,
    add: function(data) {
        if(this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            //1、修改Set类，使元素按照顺序存储
            this.dataStore.sort();
            return true;
        } else {
            return false;
        }
    },
    remove: function(data) {
        var pos = this.dataStore.indexOf(data);
        if(pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    },
    size: function() {
        return this.dataStore.length;
    },
    union: function(set) {
        var tempSet = new Set();
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for(var i = 0, l = set.dataStore.length; i < l; i++) {
            if(!tempSet.contains(set.dataStore[i])) {
                tempSet.add(set.dataStore[i]);
            }
        }
        return tempSet;
    },
    intersect: function(set) {
        var tempSet = new Set();
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    },
    subset: function(set) {
        if(this.size() > set.size()) {
            return false;
        } else {
            for(var i = 0, l = this.dataStore.length; i < l; i++) {
                if(!set.contains(this.dataStore[i])) {
                    return false;
                }
            }
            return true;
        }

    },
    difference: function(set) {
        var tempSet = new Set();
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    },
    show: function() {
        return this.dataStore;
    },
    contains: function(data) {
        if(this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    },
    higher: function(element) {
        var pos = this.dataStore.indexOf(element);
        return this.dataStore[pos + 1];
    },
    lower:  function(element) {
        var pos = this.dataStore.indexOf(element);
        return this.dataStore[pos - 1];
    }

};

var names = new Set();
names.add('kinglan');
names.add('Liz');
names.add('Tom');
names.add('Mike');
//按照顺序排序
console.log(names.show());

//求大于元素最小的那个
console.log(names.higher('Mike'));

//求小于元素最大的那个
console.log(names.lower('Mike'));
