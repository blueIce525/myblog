/**
 * Created by kinglan525 on 15/12/25.
 */
//练习
//1、修改Set类，使元素按照顺序存储
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
    }
};

var names = new Set();
names.add('kinglan');
names.add('Liz');
names.add('Tom');
names.add('Mike');
console.log(names.show());


