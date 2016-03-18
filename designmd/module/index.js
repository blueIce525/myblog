/**
 * Created by kinglan525 on 16/2/17.
 */
//1、对象字面量，对象被描述为包含在{}中，以逗号隔开name/value对，
// 最后一个name/value对后面不用加逗号

var myObjectLiteral = {
    variableKey: 'variable value',
    functionKey: function() {}
};
var myModule = {
    myProperty: 'some value',
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function() {
        console.log('hello myMetchod');
    },
    myMethod2: function() {
        console.log('useCaching is: '
        + (this.myConfig.useCaching) ? 'enabled': 'disabled');
    },
    myMethod3: function(newConfig) {
        if(typeof newConfig === 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.myMethod();
myModule.myMethod2();
myModule.myMethod3({
    useCaching: false,
    language: 'fr'
});

//module模式，模拟类的概念，为类提供私有和共有方法或变量的封装方法。
// 用闭包封装私有，防止其泄漏到全局，防止接口冲突。
// 返回一个共有api，其他隐藏在私有闭包里，降低冲突的可能性。
var testModule = (function(){
    var counter = 0;
    return {
        incrementCounter: function() {
            return ++counter;
        },
        resetCounter: function() {
            console.log('counter value prior to reset ' + counter);
            counter = 0;
        }
    }
})();
testModule.incrementCounter();
testModule.resetCounter();

//简单模块
var myNamespace = (function() {
    var myPrivateVar = 0;
    var myPrivateMethod = function(foo) {
        console.log(foo);
    };
    return {
        myPublicVar: 'foo',
        myPublicFunction: function(bar) {
            myPrivateVar++;
            console.log(myPrivateVar);
            myPrivateMethod(bar);
        }
    }
})();
myNamespace.myPublicFunction('hi');
myNamespace.myPublicFunction('hello');

//购物车例子
var basketModule = (function() {
    var basket = [];
    function doSomethingPrivate() {

    }
    function doSomethingElsePrivate() {

    }
    return {
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotal: function() {
            var count = this.getItemCount();
            var total = 0;
            while(count--) {
                total = basket[count].price;
            }
            return total;
        }
    }
})();
basketModule.addItem({
    item: 'bread',
    price: 0.5
});
basketModule.addItem({
    item: 'butter',
    price: 0.3
});
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

//module 模式变化
//引入混入
//缺点：无法为私有成员创建自动化单元测试
var myModule = (function (jQ, _) {
    function privateMethod() {
        jQ('.container').html('test');
    }
    function privateMethod2() {
        console.log(_.min([10, 2, 1, 5, 6]));
    }
    return {
        publicMethod: function() {
            privateMethod();
            privateMethod2();
        }
    }
})(jQuery, _);
myModule.publicMethod();

//引出
var myModule = (function() {
    var module = {};
    var privateVar = 'hello';
    module.publicProperty = 'hi';
    module.publicMethod = function() {
        console.log(privateVar);
    }
    return module;
})();
myModule.publicMethod();

//揭示模块 模式
var myRevealingModule = function() {
    var privateCounter = 0;
    function privateFunction() {
        privateCounter++;
    }
    function publicFunction() {
        publicIncrement();
    }
    function publicIncrement() {
        privateFunction();
    }
    function publicGetCount() {
        return privateCounter;
    }
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    }
}();
myRevealingModule.start();
console.log(myRevealingModule.count());








