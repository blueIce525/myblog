/**
 * Created by kinglan525 on 16/1/11.
 */
function qSort(arr) {
    if(arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i = 1, l = arr.length; i < l; i++) {
        console.log('基准值为：' + pivot + ' 当前值为：' + arr[i]);
        if(arr[i] < pivot) {
            console.log('移动' + arr[i] + '到左边');
            left.push(arr[i]);
        } else {
            console.log('移动' + arr[i] + '到右边');
            right.push(arr[i]);
        }
    }

    return qSort(left).concat(pivot, qSort(right));
}

var nums = [];
for(var i = 0; i < 4; i++) {
    nums[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(nums);
console.log(qSort(nums));