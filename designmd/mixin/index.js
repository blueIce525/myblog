/**
 * Created by kinglan525 on 16/2/22.
 */

var myMixins = {
    moveUp: function() {
        console.log('move up');
    },
    moveDown: function() {
        console.log('move down');
    },
    stop: function() {
        console.log('stop!');
    }

};

function CarAnimator() {
    this.moveLeft = function() {
        console.log('move left');
    }
}
_.extend(CarAnimator.prototype, myMixins);

var car = new CarAnimator();
car.moveUp();


function Car(settings) {
    this.color = settings.color || 'no color provided';
    this.model = settings.model || 'no model provided';
}


function Mixin() {};
Mixin.prototype = {
    driveForward: function() {
        console.log('drive forward');
    },
    driveBackward: function() {
        console.log('drive backward');
    },
    driveSideways: function() {
        console.log('drive sideways');
    }
};

function augment(receivingClass, givingClass) {
    //只提供限定的方法
    if(arguments[2]) {
        for(var i = 2, l = arguments.length; i < l; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]

        }
    } else { //提供所以方法
        for(var methodName in givingClass.prototype) {
            if(!Object.prototype.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

augment(Car, Mixin, 'driveForward', 'driveBackward');

var littleCar = new Car({
    color: 'yellow',
    model: 'Ford'
});
littleCar.driveBackward();
littleCar.driveForward();
Mixin.prototype.driveForward = function() {
    console.log('change')
};

littleCar.driveForward();

augment(Car, Mixin);
var sportsCar = new Car({
    color: 'red',
    model: 'BWM'
});
sportsCar.driveSideways();
sportsCar.driveBackward();


