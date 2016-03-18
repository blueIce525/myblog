/**
 * Created by kinglan525 on 16/2/20.
 */

function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
}

function Truck(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
}

function VehicleFactory() {};
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options) {
    if(options.vehicleType === 'car') {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
});
console.log(car instanceof Car);
console.log(car);

var truck = carFactory.createVehicle({
    vehicleType: 'truck',
    state: 'like new',
    wheelSize: 'small'
});
console.log(truck instanceof Truck);
console.log(truck);

var AbstractFactory = (function() {
    var types = {};
    return {
        registerVehicle: function(type, Vehicle) {
            var proto = Vehicle.prototype;
            //if(proto.drive && proto.breakDown) {
            //    types[type] = Vehicle;
            //}
            types[type] = Vehicle;
            return AbstractFactory
        },
        getVehicle: function(type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        }
    }
})();


AbstractFactory.registerVehicle('car', Car);
AbstractFactory.registerVehicle('truck', Truck);

var car = AbstractFactory.getVehicle('car', {
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
});
console.log(car)
