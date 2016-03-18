/**
 * Created by kinglan525 on 15/12/24.
 */
function Set() {
    this.dataStore = [];
}
Set.prototype = {
    constructor: Set,
    add: function(data) {
        if(this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
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
names.add('Lucy');
if(names.add('Lucy')) {
    console.log('Lucy added');
} else {
    console.log('can`t add Lucy, must already be in set.');
}
console.log(names.show());

var removeName = 'Lucy';
if(names.remove(removeName)) {
    console.log(removeName + ' removed');
} else {
    console.log(removeName + 'can`t not removed');
}
console.log(names.show());

var anotherNames = new Set();
anotherNames.add('Liz');
anotherNames.add('Jim');
anotherNames.add('Jay');
anotherNames.add('Luke');

//求并集
var unionNames  = names.union(anotherNames);
console.log(unionNames.show());

//求交集
var intersectNames = names.intersect(anotherNames);
console.log(intersectNames.show());


//判断是否子集
var names3 = new Set();
names3.add('Liz');
names3.add('Tom');
names3.add('Mike');
if(names3.subset(names)) {
    console.log('names3 is subset of names')
} else {
    console.log('names3 is not subset of names')
}

if(anotherNames.subset(names)) {
    console.log('anotherNames is subset of names')
} else {
    console.log('anotherNames is not subset of names')
}

//求补集
var diffNames = names.difference(anotherNames);
console.log(diffNames.show());