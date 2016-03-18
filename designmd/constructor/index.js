/**
 * Created by kinglan525 on 16/2/15.
 */

//1、对象的创建
var newObject = new Object();
newObject.someKey = 'hello Object';
console.log(newObject.someKey);
newObject['someKey1'] = 'hi';
console.log(newObject['someKey1']);

Object.defineProperty(newObject, 'key', {
    value: 'key value',
    configurable: true,
    writable: true,
    enumerable: true
});
console.log(newObject.key);

var defineProp = function (obj, key, val) {
    Object.defineProperty(obj, key, {value: val});
}

var person = Object.create(null);
defineProp(person, 'car', 'BWM');
defineProp(person, 'birthday', '1986');
defineProp(person, 'isLongHair', false);
console.log(person);

Object.defineProperties(person, {
    sex: {
        value: 'girl',
        writable: false
    },
    loveColor: {
        value: 'red',
        writable: true
    }
});
console.log(person);

var driver = Object.create(person);
console.log(driver);
defineProp(driver, 'topSpeed', '100mph');
console.log(driver.topSpeed);
console.log(driver.sex);
console.log(Object.getPrototypeOf(driver));


//2、基本构造器:在构造器前面加new关键字，可使用构造器实例化一个新对象，this指向新对象
// 缺点：（1）继承困难；（2）toString方法再新对象里面重新定义，浪费内存
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles';
    }
}
var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 10000);
console.log(civic.toString());
console.log(mondeo.toString());

//3、带原型的构造器：构造器创建对象后，新对象具有构造器原型（prototype）的所有属性。
// 创建的多个新对象访问相同的原型,toString在所有新对象中共享

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

};
Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
};

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 10000);
console.log(civic.toString());
console.log(mondeo.toString());




