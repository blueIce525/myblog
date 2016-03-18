/**
 * Created by kinglan525 on 16/1/14.
 */
function findMin(arr) {
    var min = arr[0];
    for(var i = 1, l = arr.length; i < l; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for(var i = 1, l = arr.length; i < l; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
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

function createArr(n) {
    var nums = [];
    for(var i = 0; i < n; i++) {
        nums[i] = Math.floor(Math.random() * n + 1);
    }
    return nums
}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

//自组织数据
function seqSearch(arr, data) {
    for(var i = 0, l = arr.length; i < l; i++) {
        if(arr[i] == data && i > (l * 0.2)) {
            swap(arr, i, 0);
            return true;
        } else if(arr[i] == data) {
            return true;
        }
    }
    return false;
}

//二分查找
function binSearch(arr, data) {
    var lowerBound = 0;
    var upperBound = arr.length - 1;
    while(lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log('当前的中点为：' + mid);
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

//统计重复数据
function count(arr, data) {
    var counter = 0;
    var position = binSearch(arr, data);
    if(position > -1) {
        ++counter;
        for(var i = position - 1; i > 0; i--) {
            if(arr[i] == data) {
                ++counter;
            } else {
                break;
            }
        }
        for(var i = position + 1, l = arr.length; i < l; i++) {
            if(arr[i] == data) {
                ++counter;
            } else {
                break;
            }
        }
    }
    return counter;
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

var nums = createArr(100);

var min = findMin(nums);
console.log('最小值为：' + min);

var max = findMax(nums);
console.log('最大值为：' + max);

var nums = createArr(10);
disArr(nums);
if(seqSearch(nums, 2)) {
    console.log('找到了2');
    disArr(nums);
} else {
    console.log('没有找到2');
}

//二分查找测试
var nums = createArr(100);
insertSort(nums);
disArr(nums);
var val = 22;
var position = binSearch(nums, 22);
if(position > -1) {
    console.log(val + '被找到，位置为：' + position);
} else {
    console.log(val + '没有被找到');
}

//查找重复数据
var nums = createArr(100);
insertSort(nums);
disArr(nums);
var val = 22;
var retVal = count(nums, val);
if(retVal > 0) {
    console.log('查找的是:' + val + ',重复出现次数为：' + retVal);
} else {
    console.log('找不到' + val);
}

//文本查找
var str = 'This Christmas I finally got started on my long-planned retirement project: rediscovering the music in my sixty year old vinyl record collection. I don’t know which is the oldest album but I’m pretty sure it would be Segovia’s transcription of the Bach Chaconne. I loved this recording beyond telling.'
var strArr = str.split(' ');
insertSort(strArr);
var word = 'finally';
var startTime = new Date().getTime();
var position = binSearch(strArr, word);
var endTime = new Date().getTime();
var elapsed = endTime - startTime;
if(position > 1) {
    console.log(word + ' can be found, and this position is ' + position);
    console.log('二分查找消耗的时间为:' + elapsed + '毫秒');
} else {
    console.log(word + ' can not be found.');
}

