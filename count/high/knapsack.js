/**
 * Created by kinglan525 on 16/1/19.
 */

function max(a, b) {
    return a > b ? a : b;
}
function knapsack(capacity, size, value, n) {
    if(n == 0 || capacity == 0) {
        return 0;
    }
    if(size[n - 1] > capacity) {
        return knapsack(capacity, size, value, n - 1);
    } else {
        return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1))
    }
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n));

function dKnapsack(capacity, size, value, n) {
    var K = [];
    for(var i = 0; i <=capacity + 1; i++) {
        K[i] = [];
    }
    for(var i = 0; i <= n; i++) {
        for(var w = 0; w <= capacity; w++) {
            if(i == 0 || w == 0) {
                K[i][w] = 0;
            } else if(size[i - 1] <= w) {
                K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
            console.log(K[i][w] + ' ');
        }
    }
    return K[n][capacity];
}
console.log(dKnapsack(capacity, size, value, n));
