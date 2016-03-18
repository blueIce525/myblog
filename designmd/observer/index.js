/**
 * Created by kinglan525 on 16/2/18.
 */
//观察者模式：一个或多个观察者对目标状态感兴趣，他们依附在目标对象上注册感兴趣的内容，
// 当目标对象发生改变，对此改变感兴趣的观察者，目标对象会对他们发出改变通知，调用他们的更新方法
//当观察者对目标对象状态不再感兴趣，可以将观察者从目标对象中分离出来

function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.Add = function(obj) {
    return this.observerList.push(obj);
};
ObserverList.prototype.Empty = function() {
    this.observerList = [];
};
ObserverList.prototype.Count = function() {
    return this.observerList.length;
};
ObserverList.prototype.Get = function(index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};
ObserverList.prototype.Insert = function(obj, index) {
    var pointer = -1;
    if(index === 0) {
        this.observerList.unshift(obj);
        pointer = index;
    } else if(index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
};

ObserverList.prototype.IndexOf = function(obj, startIndex) {
    var i = startIndex, pointer = -1;
    while(i < this.observerList.length) {
        if(this.observerList[i] === obj) {
            pointer = i;
        }
        i++;
    }
    return pointer;
};
ObserverList.prototype.RemoveIndexAt = function(index) {
    if(index === 0) {
        this.observerList.shift();
    } else if(index === this.observerList.length) {
        this.observerList.pop();
    } else {
        this.observerList.splice(index, 0);
    }
};

//使用extension扩展对象
function extend(obj, extension) {
    for(var key in obj) {
        extension[key] = obj[key];
    }
}

function Subject() {
    this.observers = new ObserverList();
}
Subject.prototype.AddObserver = function(observer) {
    this.observers.Add(observer);
};
Subject.prototype.RemoveObserver = function(observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
};
Subject.prototype.Notify = function(context) {
    var observerCount = this.observers.Count();
    for(var i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
    }
};

function Observer() {
    this.Update = function(context) {

    }
}

//例子
var controlCheckbox = document.getElementById('mainCheckbox');
var addBtn = document.getElementById('add');
var container = document.getElementById('observersContainer');
extend(new Subject(), controlCheckbox);
//controlCheckbox.onclick = new Function('controlCheckbox.Notify(controlCheckbox.checked)');
controlCheckbox.onclick = function() {
    controlCheckbox.Notify(controlCheckbox.checked)
};
addBtn.onclick = AddNewObserver;
function AddNewObserver() {
    var check = document.createElement('input');
    check.type = 'checkbox';
    extend(new Observer(), check);
    //重写自定义更新方法
    check.Update = function(value) {
        this.checked = value;
    };
    controlCheckbox.AddObserver(check);
    container.appendChild(check);
}

//publish/subscribe的实现
var pubsub = {};
(function(q) {
    var topics = {};
    var subUid = -1;
    //发布或广播事件，包含特定的topic和参数
    q.publish = function(topic, args) {
        if(!topics[topic]) {
            return false;
        }
        var subscribers = topics[topic];
        var len = subscribers ? subscribers.length : 0;
        while(len--) {
            subscribers[len].func(topic, args);
        }
        return this;
    };
    //通过特定名称和事件执行订阅事件，topic触发时执行事件
    q.subscribe = function(topic, func) {
        if(!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    }
    //基于订阅上的标志引用，通过特定的topic取消订阅
    q.unsubscribe = function(token) {
        for(var m in topics) {
            if(topics[m]) {
                for(var i = 0, l = topics[m].length; i < l; i++) {
                    if(topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token
                    }

                }

            }

        }
        return this;
    }
})(pubsub);

var messageLogger = function(topic, data) {
    console.log('Logging:' + topic + ':' + data);
};
var token = pubsub.subscribe('inbox/newMessage', messageLogger);
pubsub.publish('inbox/newMessage', 'hello world');
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);
pubsub.publish('inbox/newMessage', {
    sender: 'hello',
    body: 'hey again'
});
pubsub.unsubscribe(token);
pubsub.publish('inbox/newMessage', 'Are you still here?');


//用户界面通知
var subscriber = pubsub.subscribe('newData', gridUpdate);
function getCurrentTime() {
    var nowTime = new Date();
    var y = nowTime.getFullYear();
    var m = nowTime.getMonth() + 1;
    var d = nowTime.getDate();
    var t = nowTime.toLocaleTimeString().toLocaleLowerCase();
    return (m + '/' + d + '/' + y + ' ' + t);
}
//添加新数据行
function addGridRow(data) {
    console.log('updated grid component with:' + data);
}

//更新时间和数据
function updateCounter(data) {
    console.log('data last updated at: ' + getCurrentTime() + 'with' + data);
}

function gridUpdate(topic, data) {
    if(data !== undefined) {
        addGridRow(data);
        updateCounter(data);
    }
}

pubsub.publish('newData', {
    summary: 'Apple made $5 billion',
    identifier: 'APPL',
    stockPrice: 570.91
});


// pub/sub解耦应用
(function($) {
    pubsub.subscribe('/new/user', function(e, data) {
        var compiledTemplate;
        if(data) {
            compiledTemplate = _.template($('#userTemplate').html());
            $('#users').append(compiledTemplate(data));
        }
    });
    pubsub.subscribe('/new/rating', function(e, data) {
        var compiledTemplate;
        if(data) {
            compiledTemplate = _.template($('#ratingsTemplate').html());
            $('#ratings').append(compiledTemplate(data));
        }

    });
    $('#addBtn').on('click', function(e) {
        e.preventDefault();
        var userStr = $('#twitter_handle').val();
        var movieStr = $('#movie_seen').val();
        var ratingStr = $('#movie_rating').val();
        pubsub.publish('/new/user', {name: userStr});
        pubsub.publish('/new/rating', {title: movieStr, rating: ratingStr});

    })

    //test jquery的链式操作
    $.fn.myPlugin = function() {
        //在这里面,this指的是用jQuery选中的元素
        //example :$('a'),则this=$('a')
        console.log($('a'))
        console.log(this);

        this.css('color', 'red');
    };

    $(function(){

        $('a').myPlugin();
    })

})(jQuery);