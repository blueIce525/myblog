/**
 * Created by kinglan525 on 16/1/15.
 */
function seqSearch(arr, data) {
    for(var i = 0, l = arr.length; i < l; i++) {
        if(arr[i] == data) {
            return i;
        }
    }
    return -1;
}

function lastSearch(arr, data) {
    var position = -1
    for(var i = 0, l = arr.length; i < l; i++) {
        if(arr[i] == data) {
            position = i;
        }
    }
    return position;
}

function disArr(arr) {
    var str = ''
    for(var i = 0, l = arr.length; i < l; i++) {
        str += arr[i] + ' ';
        if(i % 10 == 9) {
            str += '\n';
        }
    }
    console.log(str);
}

//插入排序
function insertSort(arr) {
    for(var outer = 1, l = arr.length; outer < l; outer++) {
        var temp = arr[outer];
        var inner = outer;
        while(inner > 0 && arr[inner - 1] > temp) {
            arr[inner] = arr[inner -1];
            --inner;
        }
        arr[inner] = temp;
    }
}

//二分查找
function binSearch(arr, data) {
    var lowerBound = 0;
    var upperBound = arr.length - 1;
    while(lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        //console.log('当前的中点为：' + mid);
        if(arr[mid] < data) {
            lowerBound = mid + 1
        } else if(arr[mid] > data) {
            upperBound = mid - 1
        } else {
            return mid;
        }
    }
    return -1;
}

//生成随即数组
function createArr(n) {
    var nums = [];
    for(var i = 0; i < n; i++) {
        nums[i] = Math.floor(Math.random() * n + 1);
    }
    return nums
}

function smallSearch(arr, position) {
    return arr[position - 1];
}

function noRepeat(arr) {
    var newArr = [];
    var tagArr = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        if(!tagArr[arr[i]]) {
            newArr.push(arr[i]);
            tagArr[arr[i]] = true;
        }
    }
    return newArr;
}

//练习1，改写顺序查找，返回最后一个元素的位置
var nums = [3, 5, 6, 2, 1, 7, 5];
disArr(nums);
var position = lastSearch(nums, 5);
console.log(position);

//练习2，比较顺序查找所花的时间，插入排序与二分查找所花总时间比较
var nums = createArr(1000);
var num = 22;
var startTime = new Date().getTime();
seqSearch(nums, num);
var endTime = new Date().getTime();
var elapsed = endTime - startTime;
console.log('在' + nums.length + '中顺序查找数据所花时间为' + elapsed);

var startTime = new Date().getTime();
insertSort(nums);
binSearch(nums, num);
var endTime = new Date().getTime();
var elapsed = endTime - startTime;
console.log('在' + nums.length + '中插入排序后二分查找数据所花时间为' + elapsed);

//练习3，查找最小元素，最小次元素，查找第三小，查找第四小元素
var nums = createArr(1000);
insertSort(nums);
var newNums = noRepeat(nums);
console.log('数组最小的数字为：' + smallSearch(newNums, 1));
console.log('数组次最小的数字为：' + smallSearch(newNums, 2));
console.log('数组第三小的数字为：' + smallSearch(newNums, 3));
console.log('数组第四小的数字为：' + smallSearch(newNums, 4));

//练习3、文本查找
var str = 'This Christmas I finally got started on my long-planned retirement project: rediscovering the music in my sixty year old vinyl record collection. I don’t know which is the oldest album but I’m pretty sure it would be Segovia’s transcription of the Bach Chaconne. I loved this recording beyond telling.'
var strArr = str.split(' ');
insertSort(strArr);
strArr = noRepeat(strArr);
console.log('文本数组最小的单词为：' + smallSearch(strArr, 1));
console.log('文本数组次最小的单词为：' + smallSearch(strArr, 2));
console.log('文本数组第三小的单词为：' + smallSearch(strArr, 3));
console.log('文本数组第四小的单词为：' + smallSearch(strArr, 4));