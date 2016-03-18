/**
 * Created by kinglan525 on 16/2/22.
 */
function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.lience = '00000-000';
}

var car1 = new Vehicle('car');
console.log(car1);

//给对象添加方法
var truck = new Vehicle('truck');
truck.setModel = function(model) {
    this.model = model;
};
truck.setColor = function(color) {
  this.color = color;
};
truck.setColor('blue');
truck.setModel('CAT');
console.log(truck);

var car2 = new Vehicle('car');
console.log(car2);

//重写对象方法
function MacBook() {
    this.cost = function() {
        return 997;
    };
    this.screenSize = function() {
        return 11.6;
    }
}
//decorator1
function Memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}

//decorator2
function Engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

//decorator3
function Insurance(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    }
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());
console.log(mb.screenSize());

//
// Constructor.
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
        }
        this.methods.push(methods[i]);
    }
};


// Static class method.
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
            }
        }
    }
};

var reminder = new Interface('List', ['summary', 'placeOrder']);
var properties = {
    name: 'Remember to buy the milk',
    date: '05/06/2016',
    actions: {
        summary: function() {
            return 'Remember to buy the milk, we are almost out!';
        },
        placeOrder: function() {
            return 'Ordering milk from your local grocery store';
        }
    }
};

function Todo(config) {
    //Interface.ensureImplements(config.actions, reminder);
    this.name = config.name;
    this.methods = config.actions;
}

var TodoItem = new Todo(properties);
console.log(TodoItem.methods.summary());
