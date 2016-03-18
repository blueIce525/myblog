/**
 * Created by kinglan525 on 15/12/9.
 */

function Queue() {
    this.dataStore = [];
}
Queue.prototype = {
    constructor: Queue,
    enqueue: function(element) {
        this.dataStore.push(element);
    },
    dequeue: function() {
        return this.dataStore.shift();
    },
    front: function() {
        return this.dataStore[0];
    },
    back: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function() {
        var str = '';
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            str += this.dataStore[i] + '\n';
        }
        return str;
    },
    empty: function() {
        if(this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    count: function() {
        return this.dataStore.length;
    }

};

//测试Queue构造函数
var q = new Queue();
q.enqueue('Liz');
q.enqueue('kinglan');
q.enqueue('lily');
console.log(q.toString());
q.dequeue();
console.log('dequeue:\n' + q.toString());
console.log('Front of the queue:' + q.front());
console.log('Back of the queue:' + q.back());


//方块舞例子
var dancers = [
    {sex: 'F', name:'Allison McMillan'},
    {sex: 'M', name:'Frank Opitz'},
    {sex: 'M', name:'Mason McMillan'},
    {sex: 'M', name:'Clayton Ruff'},
    {sex: 'F', name:'Cheryl Ferenback'},
    {sex: 'M', name:'Raymond Williams'},
    {sex: 'F', name:'Jennifer Ingram'},
    {sex: 'M', name:'Bryan Frazer'},
    {sex: 'M', name:'David Durr'},
    {sex: 'M', name:'Danny Martin'},
    {sex: 'F', name:'Aurora Adney'}
];

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancer(male, female, dancers) {
    for(var i = 0, l = dancers.length; i < l; i++) {
        var dancer = new Dancer(dancers[i].name, dancers[i].sex);
        if(dancers[i].sex === 'M') {
            male.enqueue(dancer);
        } else {
            female.enqueue(dancer);
        }
    }
}

function dance(male, female) {
    while(!male.empty() && !female.empty()) {
        var maleDancer = male.dequeue();
        console.log('The male dancer is ' + maleDancer.name);
        var femaleDancer = female.dequeue();
        console.log('The female dancer is ' + femaleDancer.name);
    }
}

function danceCount(sex, queue) {
    var l = queue.count();
    if(l > 0) {
        console.log('There are ' + l + ' ' + sex + ' dancers waiting to dance');
    }
}

var maleQueue = new Queue();
var femaleQueue = new Queue();
getDancer(maleQueue, femaleQueue, dancers);
console.log(maleQueue.dataStore);
console.log(femaleQueue.dataStore);
dance(maleQueue, femaleQueue);
danceCount('male', maleQueue);
danceCount('female', femaleQueue);


//使用队列对数据进行排序
function distribute(nums, queues, n, digit) {
    for(var i = 0; i < n; i++) {
        if(digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}
function collect(queues, nums) {
    var i = 0;
    for(var digit = 0; digit < 10; digit++) {
        while(!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }

};
var queues = [];
for(var i = 0; i < 10; i++) {
    queues.push(new Queue());
};
var nums = [];
for(var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 100);
}
console.log('the nums: ' + nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
console.log('the first nums: ' +nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('the second nums: ' +nums);


//病人优先级队列

function PatientQueue() {
    this.dataStore = [];
}
PatientQueue.prototype = {
    constructor: PatientQueue,
    enqueue: function(element) {
        this.dataStore.push(element);
    },
    dequeue: function() {
        var entry = 0;
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(this.dataStore[i].code < this.dataStore[entry].code) {
                entry = i;
            }
        }
        return this.dataStore.splice(entry, 1);
    },
    dequeueHigh: function() {
        var highCode = 0;
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(this.dataStore[i].code > this.dataStore[highCode].code) {
                highCode = i;
            }
        }
        return this.dataStore.splice(highCode, 1);
    },
    front: function() {
        return this.dataStore[0];
    },
    back: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function() {
        var str = '';
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            str += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';

        }
        return str;
    },
    empty: function() {
        if(this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    count: function() {
        return this.dataStore.length;
    },
    waitingRoom: function() {
        var highCode = 0;
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            if(this.dataStore[i].code > this.dataStore[highCode].code) {
                highCode = i;
            }
        }
        console.log('waitingRoom: ' + this.dataStore[highCode].name);
    },
    treating: function() {
        console.log('treating: ' + this.dequeueHigh()[0].name);
    },
    waitingNames: function() {
        console.log('waitingNames: \n' + this.toString());
    }

};
function Patient(name, code) {
    this.name = name;
    this.code = code;
};

var patientQueue = new PatientQueue();
patientQueue.enqueue(new Patient('Liz', 5));
patientQueue.enqueue(new Patient('Jim', 4));
patientQueue.enqueue(new Patient('Lily', 6));
patientQueue.enqueue(new Patient('Brown', 1));
patientQueue.enqueue(new Patient('Tom', 1));
console.log(patientQueue.toString());

var seen = patientQueue.dequeue();
console.log('Patient being treated: ' + seen[0].name);

console.log('Patients waiting to be seen:');
console.log(patientQueue.toString());

//练习
//3、改写病人优先队列，使得优先级高的元素优先码也大,见原型方法dequeueHigh
var seen = patientQueue.dequeueHigh();
console.log('Patient being treated: ' + seen[0].name);

console.log('Patients waiting to be seen:');
console.log(patientQueue.toString());

//4、修改病人优先对了，使类类似一个菜单程序，让用户可以进行选择
//患者进入候诊室，见原型方法 waitingRoom
//患者就诊,见原型方法 treating
//患者就诊等候名单,见原型方法 waitingNames
patientQueue.treating();
patientQueue.waitingRoom();
patientQueue.waitingNames();

//1、写一个Deque类，可在两端添加和删除元素
function Deque() {
    this.dataStore = [];
}
Deque.prototype = {
    constructor: Deque,
    enqueueFront: function(element) {
        this.dataStore.unshift(element)
    },
    dequeueFront: function() {
        return this.dataStore.shift();
    },
    enqueueEnd: function(element) {
        this.dataStore.push(element);
    },
    dequeueEnd: function() {
        return this.dataStore.pop();
    },
    front: function() {
        return this.dataStore[0];
    },
    back: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function() {
        var str = '';
        for(var i = 0, l = this.dataStore.length; i < l; i++) {
            str += this.dataStore[i] + '\n';
        }
        return str;
    },
    empty: function() {
        if(this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    count: function() {
        return this.dataStore.length;
    }

};

var dequeueTest = new Deque();
dequeueTest.enqueueFront('Liz');
dequeueTest.enqueueEnd('kingan');
dequeueTest.enqueueFront('Lily');
dequeueTest.enqueueEnd('Lucy');
console.log(dequeueTest.toString());

console.log('the end dequeue:' + dequeueTest.dequeueEnd());
console.log('the front dequeue:' + dequeueTest.dequeueFront());

//2、使用Deque类判断一个单词是不是回文
function isPalindrome(word) {
    var d = new Deque();
    for(var i = 0, l = word.length ; i < l; i++) {
        d.enqueueEnd(word[i]);
    };
    var newWord = '';
    while(!d.empty()) {
        newWord += d.dequeueEnd();
    }
    if(word === newWord) {
        return word + ' is a palindrome word'
    } else {
        return word + ' is not a palindrome word'
    }
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('dad'));


