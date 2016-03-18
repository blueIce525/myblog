/**
 * Created by kinglan525 on 16/2/20.
 */
var myCar = {
    name: 'Ford Escort',
    drive: function() {
        console.log('Weee, I am driving!');
    },
    panic: function() {
        console.log('wait! How do you stop this thing?');
    }
};
var yourCar = Object.create(myCar);
console.log(yourCar);
console.log(yourCar.name);

var vehicle = {
    getModel: function() {
        console.log('this model of vehicle is ' + this.model);
    }
};

var car = Object.create(vehicle, {
    id: {
        value: 1111,
        enumerable: true
    },
    model: {
        value: 'Ford',
        enumerable: true
    }
});
console.log(car);
car.getModel()
console.log(Object.getPrototypeOf(car));
console.log(car.hasOwnProperty('getModel'));

var vehiclePrototype = {
    init: function(model) {
        this.model = model;
    },
    getModel: function() {
        console.log('this model of vehicle is ' + this.model);
    }
};

function vehicle1(model) {
    function F() {};
    F.prototype = vehiclePrototype;
    var f = new F();
    f.init(model);
    return f;
}

var car = vehicle1('Ford');
car.getModel();

//可选prototype

var beget = (function() {
    function F() {}
    return function(prototype) {
        F.propotype = prototype;
        return new F();
    }
})();

