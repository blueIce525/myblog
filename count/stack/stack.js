/**
 * Created by kinglan525 on 15/12/9.
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
}
Stack.prototype = {
    constructor: Stack,
    push: function (element) {
        this.dataStore[this.top++] = element;
    },
    pop: function () {
        return this.dataStore[--this.top];
    },
    peek: function () {
        return this.dataStore[this.top - 1];
    },
    length: function () {
        return this.top;
    },
    clear: function () {
        this.top = 0;
    }
};

var s = new Stack();
s.push('Liz');
s.push('kinglan');
s.push('Lily');
console.log('length:' + s.length());
console.log(s.peek());
var poped = s.pop();
console.log(poped);
console.log(s.peek());
s.push('Jim');
console.log(s.peek());
s.clear();
console.log('length:' + s.length());
console.log(s.peek());
s.push('Tom');
console.log(s.peek());

function mulBade(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0)

    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var testNum = mulBade(16, 2);
console.log(testNum);

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var newWord = '';
    while (s.length() > 0) {
        newWord += s.pop();
    }
    if(word === newWord) {
        return true;
    }
    return false;
}

var word = 'hello';
if(isPalindrome(word)) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
}
word = 'dad';
if(isPalindrome(word)) {
    console.log(word + ' is a palindrome');
} else {
    console.log(word + ' is not a palindrome');
}

//阶乘，递归运算
function factorial(num) {
    if(num === 1) {
        console.log(num);
        return 1
    } else {
        console.log(num);
        return num * factorial(num - 1);
    }
}

var nums = factorial(5);
console.log(nums);

//用栈来实现递归
function fact(num) {
    var s = new Stack();
    //for(var i = num; i > 0; i--) {
    //    s.push(i);
    //}
    while(num > 1) {
        s.push(num--);
    }
    console.log(s.dataStore)
    var newNum = 1 ;
    while(s.length() > 0) {
        newNum *= s.pop();
    }
    return newNum
}

var nums = fact(5);
console.log(nums);


// 练习3，移除黄色糖果，不改变之前糖果的顺序
var candy = ['yellow', 'red','red','white','yellow', 'white', 'yellow', 'red'];
console.log(candy);
var candyStack = new Stack();
for(var i = 0, l = candy.length; i < l; i++) {
    if(candy[i] !== 'yellow') {
        candyStack.push(candy[i]);
    }
}
var newCandy = [];
while(candyStack.length() > 0) {
    newCandy.push(candyStack.pop());
}
newCandy.reverse();
console.log(newCandy);

function isOperator(value){
    var operatorString = "+-*/()";
    return operatorString.indexOf(value) > -1;
}

function getPrioraty(value){
    switch(value){
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

function prioraty(o1, o2){
    return getPrioraty(o1) <= getPrioraty(o2);
}

function dal2Rpn(exp){
    var inputStack = [];
    var outputStack = [];
    var outputQueue = [];

    for(var i = 0, len = exp.length; i < len; i++){
        var cur = exp[i];
        if(cur != ' ' ){
            inputStack.push(cur);
        }
    }
    console.log('step one');
    while(inputStack.length > 0){
        var cur = inputStack.shift();
        if(isOperator(cur)){
            if(cur == '('){
                outputStack.push(cur);
            }else if(cur == ')'){
                var po = outputStack.pop();
                while(po != '(' && outputStack.length > 0){
                    outputQueue.push(po);
                    po = outputStack.pop();
                }
                if(po != '('){
                    throw "error: unmatched ()";
                }
            }else{
                while(prioraty(cur, outputStack[outputStack.length - 1]) && outputStack.length > 0){
                    outputQueue.push(outputStack.pop());
                }
                outputStack.push(cur);
            }
        }else{
            outputQueue.push(new Number(cur));
        }
    }
    console.log('step two');
    if(outputStack.length > 0){
        if(outputStack[outputStack.length - 1] == ')' || outputStack[outputStack.length - 1] == '('){
            throw "error: unmatched ()";
        }
        while(outputStack.length > 0){
            outputQueue.push(outputStack.pop());
        }
    }
    console.log('step three');
    return outputQueue;

}

console.log(dal2Rpn('1 + 2'));
//console.log(dal2Rpn('1 + 2 + 3'));
//console.log(dal2Rpn('1 + 2 * 3'));
//console.log(dal2Rpn('1 + 2 * 3 - 4 / 5'));
//console.log(dal2Rpn('( 1 + 2 )'));
//
//console.log(dal2Rpn('( 1 + 2 ) * ( 3 - 4 ) / 5'));
//console.log(dal2Rpn('( 1 + 2 ) * (( 3 - 4 ) / 5)'));

