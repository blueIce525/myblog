/**
 * Created by kinglan525 on 15/12/4.
 */
//列表构造函数
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
}
List.prototype = {
    constructor: List,
    clear: function () {
        this.dataStore = [];
        this.dataStore.length = 0;
        this.listSize = 0;
        this.pos = 0;
    },
    find: function (element) {
        for(var i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] === element) {
                return i
            }
        }
        return -1;
    },
    toString: function () {
        return this.dataStore;
    },
    insert: function (element, after) {
        var insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    },
    append: function (element) {
        this.dataStore[this.listSize++] = element;
    },
    remove: function (element) {
        var elementAt = this.find(element);
        if(elementAt > -1) {
            this.dataStore.splice(elementAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    },
    front: function () {
        this.pos = 0;
    },
    end: function () {
        this.pos = this.listSize - 1;
    },
    prev: function () {
        if(this.pos > 0) {
            --this.pos;
        }
    },
    next: function () {
        if(this.pos < this.listSize - 1) {
            ++this.pos;
        }
    },
    length: function () {
        return this.listSize;
    },
    currPos: function () {
        return this.pos;
    },
    moveTo: function (pos) {
        this.pos = pos;

    },
    getElement: function () {
        return this.dataStore[this.pos];
    },
    contains: function (element) {
        for(var i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] === element) {
                return true
            }
        }
        return false;
    },
    displayList: function () {
        this.front();
        for(var i = 0; i < this.listSize; i++) {
            console.log(this.getElement());
            this.next();
        }

    },
    insertMax: function (element) {
        var newData =  this.copyData();
        if(typeof this.dataStore[0] === 'string') {
            newData.sort();
        }
        if(typeof this.dataStore[0] === 'number') {
            newData.sort(this.ascending);

        }
        if(element > newData[this.listSize - 1]) {
            this.append(element);
        }
    },
    insertMin: function (element) {
        var newData =  this.copyData();
        if(typeof this.dataStore[0] === 'string') {
            newData.sort();
        }
        if(typeof this.dataStore[0] === 'number') {
            newData.sort(this.ascending);

        }
        if(element < newData[0]) {
            this.append(element);
        }
    },
    copyData: function () {
        var newData = [];
        for(var i = 0; i < this.listSize; i++) {
            newData[i] = this.dataStore[i];
        }
        return newData;
    },
    ascending: function(a,b) {
        return a - b;
    }
};

//test namesList
var names = new List();
names.append('Liz');
names.append('Kinglan');
names.append('Lily');
names.insert('Tom', 'Kinglan');
names.remove('Lily');
console.log(names.toString());
//names.remove('Liz');
//console.log(names.toString());

names.front();
console.log('指针移到最前:' + names.getElement());

names.end();
console.log('指针移到末尾：' + names.getElement());

names.moveTo(1);
console.log('指针移到位置1：' + names.getElement());

names.next();
console.log('当前指针移往后移动1位：' + names.getElement());

names.prev();
console.log('当前指针移往前移动1位：' + names.getElement());
names.prev();
console.log('当前指针移往前移动1位：' + names.getElement());

if(names.contains('Liz')) {
    console.log('列表存储了Liz');
}

//test fruitList
var fruits = new List();
fruits.append('grape');
fruits.append('apple');
fruits.append('watermelon');
fruits.append('orange');
console.log(fruits.toString());

//fruits.displayList();
//测试加入最大字母
fruits.insertMax('xi');
console.log(fruits.toString());
//测试加入最小字母
fruits.insertMin('a');
console.log(fruits.toString());


var nums = new List();
nums.append(11);
nums.append(30);
nums.append(5);
nums.append(7);
nums.append(1);
console.log(nums.toString());
//测试加入最大数字
nums.insertMax(1000);
console.log(nums.toString());
//测试加入最小
nums.insertMin(0);
console.log(nums.toString());

//person构造函数
function Person() {
    this.dataStore = [];
}
Person.prototype = {
    constructor: Person,
    append: function(name, sex) {
        if(!this.find(name)) {
            this.dataStore.push({'name': name, 'sex': sex});
        }
    },
    find: function(name) {
        for(var i = 0; i < this.dataStore.length; i++) {
            if(name == this.dataStore[i].name) {
                return true;
            }
        }
        return false;
    },
    displaySex: function(sex) {
        var names = [];
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(this.dataStore[i].sex === sex) {
                names.push(this.dataStore[i].name);
            }
        }
        return names;
    }
};

var personData = new Person();
personData.append('kinglan','female');
personData.append('Tom','male');
personData.append('Jim','male');
personData.append('Lily','female');
personData.append('Lucy','female');
personData.append('Jay','male');
personData.append('Lilei','male');
personData.append('Liz','female');
personData.append('xiaoli','female');
personData.append('Meimei','female');
console.log(personData);
console.log('男性：' + personData.displaySex('male').join(','));
console.log('女性：' + personData.displaySex('female').join(','));

//电影出租列表
var movies = ['The Godfather', 'The Dark Knight', 'Fight Club', 'Starts Wars', 'City of God'];
var movieList = new List();
for(var i = 0, l = movies.length; i < l; i++) {
    movieList.append(movies[i]);
}
//movieList.displayList();

var customerList = new List();
function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}
//电影出租记录
//每次出租显示已租列表
//已经出租列表
var outList = new List();
function checkOut(name, movie, movieList, customerList, outList) {
    if(movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(name);
        outList.append(movie);
        outList.displayList();
        //console.log(outList.dataStore);

    } else {
        console.log(movie + ' is not available');
    }
}

function checkIn(movie, movieList, outList) {
    outList.remove(movie);
    movieList.append(movie);
}

checkOut('Liz','The Godfather', movieList, customerList, outList);
checkOut('Liz','Fight Club', movieList, customerList, outList);
customerList.displayList();

checkIn('The Godfather',movieList, outList);
outList.displayList();
