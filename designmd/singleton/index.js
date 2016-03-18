/**
 * Created by kinglan525 on 16/2/18.
 */
//单例模式，类的实例化限制为一次

var mySingleton = (function() {
    var instance;
    function init() {
        var privateVar  = 'I am private';
        var privateRandomNum = Math.random();
        function privateMethod() {
            console.log('I am also private');
        }
        return {
            publicMethod: function() {
                console.log('I am public');
            },
            publicProperty: 'I am also public',
            getRandomNum: function() {
                return privateRandomNum;
            }
        }
    }
    return {
        getInstance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var myBadSingleton = (function() {
    var instance;
    function init() {
        var privateVar  = 'I am private';
        var privateRandomNum = Math.random();
        function privateMethod() {
            console.log('I am also private');
        }
        return {
            publicMethod: function() {
                console.log('I am public');
            },
            publicProperty: 'I am also public',
            getRandomNum: function() {
                return privateRandomNum;
            }
        }
    }
    return {
        getInstance: function() {
            instance = init();
            return instance;
        }
    }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNum() === singleB.getRandomNum());

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNum() === badSingleB.getRandomNum());
