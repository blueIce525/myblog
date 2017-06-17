/**
 * Created by kinglan525 on 16/2/20.
 */
//mediator基本实现
var mediator = (function() {
    var topics = {};
    //订阅一个topic
    var subscribe = function(topic, fn) {
        if(!topics[topic]) {
            topics[topic] = [];
        }
        topics[topic].push({context: this, callback: fn});
        return this;
    };

    //发布／广播事件到程序的剩余部分
    var publish = function(topic) {
        var args;
        if(!topics[topic]) {
            return false;
        }
        args = Array.prototype.slice.call(arguments, 1);
        for(var i = 0, l = topics[topic].length; i < l; i++) {
            var subscription = topics[topic][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
    return {
        Publish: publish,
        Subscribe: subscribe,
        installTo: function(obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }

})();

var testObj = {};
mediator.installTo(testObj);
testObj.subscribe('test', function(n) {
    console.log(n);
    })

mediator.Subscribe('test', function(n) {
    console.log(n);
});
mediator.Publish('test', 'hello');
