/**
 * Created by kinglan525 on 16/1/14.
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

var nums = [];
for(var i = 0; i < 100; i++) {
    nums[i] = Math.floor(Math.random() * 100 + 1);
}
disArr(nums);
var data = 22;
var startTime = new Date().getTime();
var position = seqSearch(nums, data);
var endTime = new Date().getTime();
console.log('顺序查找的时间为：' + (endTime - startTime));
if(position > -1) {
    console.log(data + '在数组的位置是：' + position);
} else {
    console.log(data + '不在数组中');
}

var startTime = new Date().getTime();
var position = nums.indexOf(data)
var endTime = new Date().getTime();
console.log('indexOf查找的时间为：' + (endTime - startTime));
if(position > -1) {
    console.log(data + '在数组的位置是：' + position);
} else {
    console.log(data + '不在数组中');
}
