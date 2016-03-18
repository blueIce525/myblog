/**
 * Created by kinglan525 on 15/12/2.
 */

function copy(arr1) {
    var arr2 = [];
    for (var i = 0, l = arr1.length; i < l; i++) {
        arr2[i] = arr1[i]
    }
    return arr2;
}

var array1 = [1, 2, 3, 4, 5];
var array2 = copy(array1);
print(array2);


function position(names, name) {
    var position = names.indexOf(name);
    if (position > -1) {
        print('find ' + name + ' at ' + position);
    } else {
        print('can not find ' + name);
    }
    ;
};
var names = ['Lily', 'Liz', 'Kinglan'];
position(names, 'Liz');

var arr1 = ['a', 'aa', 'aaa'];
var arr2 = ['b', 'bb', 'bbb'];
var arr12 = arr1.concat(arr2);
var arr21 = arr2.concat(arr1);
print(arr12);
print(arr21);


var arr1 = [1, 2, 3, 4, 5];
var l = arr1.length;
for (var i = l; i > 0; --i) {
    arr1[i] = arr1[i - 1];
}
arr1[0] = 6;

function deletePreNum(arr) {
    var l = arr.length;
    for (var i = 0; i < l - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}

var numArr = [1, 5, 10, 100, 8];
numArr.sort(function (a, b) {
    return a - b;
});

function square(num) {
    print(num, num * num);
}

function isEven(num) {
    return num % 2 == 0;
}
var numArr = [2, 4, 6];
var even = numArr.every(isEven);

function add(total, currenNum) {
    return total + currenNum;
}
var arr = [1, 2, 3, 5];
arr.reduce(add);
//初始化二维数组
function InitArr(rows, clos, initNum) {
    var rowArr = [];
    for (var i = 0; i < rows; i++) {
        var cloArr = [];
        for (var j = 0; j < clos; j++) {
            cloArr[j] = initNum;
        }
        ;
        //rowArr.push(cloArr);
        rowArr[i] = cloArr
    }
    return rowArr;
};

function initclos(clos, initNum) {
    var closArr = [];
    for (var i = 0; i < clos; i++) {
        closArr[i] = initNum;
    }
}

//计算每位学生的平均成绩
var grades = [[80, 89, 86], [76, 79, 90], [90, 97, 99]];
var N = grades.length;
for (var i = 0; i < N; i++) {
    var total = 0;
    var l = grades[i].length;
    for (var j = 0; j < l; j++) {
        total = total + grades[i][j];
    }
    var average = (total / l).toFixed(2);
    print('student ' + (i + 1) + ' average is ' + average);
}

//数组的练习
//1、创建一个显示学生成绩的对象，可添加成绩和求平均成绩
function recoreGrads(name) {
    this.name = name;
    this.grades = [];
    this.addGrades = addGrades;
    this.average = average;
}

function addGrades(grade) {
    this.grades.push(grade);
}

function average() {
    var total = 0;
    var l = this.grades.length;
    for (var i = 0; i < l; i++) {
        total += this.grades[i];

    }
    var averageGrade = total / l;
    print(this.name + '`s average is ' + averageGrade);
}
//初始化一个叫做Liz的学生
var Liz = new recoreGrads('Liz');
//添加成绩
Liz.addGrades(90);
Liz.addGrades(80);
Liz.addGrades(85);
//显示平均成绩
Liz.average();

//2、将一组单词存在一个数组中，并按照正序和倒序显示；
function ascending(arr) {
    arr.sort();
    print(arr);
}

function descending(arr) {
    ascending(arr);
    arr.reverse(arr);
    print(arr)
}

var arr = ['f', 't', 'a', 'p'];
ascending(arr);
descending(arr);


//添加字母，字母连接显示单词
function letter() {
    this.letters = [];
    this.addLetter = addLetter;
    this.joinLetters = joinLetters;
}

function addLetter(letter) {
    this.letters.push(letter);
}

function joinLetters() {
    return this.letters.join('');
}

var workMaker = new letter();
workMaker.addLetter('h');
workMaker.addLetter('e');
workMaker.addLetter('l');
workMaker.addLetter('l');
workMaker.addLetter('o');
var word = workMaker.joinLetters();
print(word);

//存储每周每月的天气，计算每月或是每周的平均天气
function weekleTemps(data) {
    this.data = data;
    this.addTemps = addTemps;
    this.weekAverage = weekAverage;
    this.monthAverage = monthAverage;
};

function addTemps(week, temp) {
    this.data[week - 1].push(temp);
};
function weekAverage() {
    var weeks = this.data.length;
    for(var i = 0; i < weeks; i++) {
        var weekTotal = 0;
        var days = this.data[i].length;
        for(var j = 0; j < days; j++) {
            weekTotal += this.data[i][j];
        }
        var weekAverageTemp = (weekTotal /days).toFixed(2);
        print('week '+ (i + 1) + ' average is ' + weekAverageTemp);
    }
};

function monthAverage() {
    var weeks = this.data.length;
    var monthTotal = 0;
    var allDays = 0;
    for(var i = 0; i < weeks; i++) {
        var days = this.data[i].length;
        for(var j = 0; j < days; j++) {
            monthTotal += this.data[i][j];
        }
        allDays += days;
    }
    var monthAverageTemp = (monthTotal / allDays).toFixed(2);
    print('the month average temperature is ' + monthAverageTemp);
};

var dataTemp = [];
for(var i = 0; i < 5; i++) {
    dataTemp[i] = [];
}

var temp = new weekleTemps(dataTemp);

temp.addTemps(1,20);
temp.addTemps(1,22);
temp.addTemps(1,28);
temp.addTemps(1,30);
temp.addTemps(1,10);
temp.addTemps(1,15);
temp.addTemps(1,16);

temp.addTemps(2,16);
temp.addTemps(2,19);
temp.addTemps(2,12);
temp.addTemps(2,15);
temp.addTemps(2,17);
temp.addTemps(2,13);
temp.addTemps(2,14);

temp.addTemps(3,18);
temp.addTemps(3,19);
temp.addTemps(3,16);
temp.addTemps(3,15);
temp.addTemps(3,18);
temp.addTemps(3,19);
temp.addTemps(3,20);

temp.addTemps(4,22);
temp.addTemps(4,24);
temp.addTemps(4,20);
temp.addTemps(4,21);
temp.addTemps(4,18);
temp.addTemps(4,19);
temp.addTemps(4,20);

temp.addTemps(5,20);
temp.addTemps(5,24);

temp.weekAverage();
temp.monthAverage();