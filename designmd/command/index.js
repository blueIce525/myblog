/**
 * Created by kinglan525 on 16/2/20.
 */
(function() {
    var CarManager = {
        //请求信息
        requestInfo: function(model, id) {
            return 'The information for ' + model + ' with ID ' + id + ' is foobar';
        },
        //订购汽车
        buyVehicle: function(model, id) {
            return 'you have successfully purchased Item ' + id + ', a ' + model;
        },
        //组织一个view
        arrangeView: function(model, id) {
            return 'you have successfully booked a viewing of ' + '(' + id + ')';
        },
        execute: function(name) {
            return this[name] && this[name].apply(this, [].slice.call(arguments, 1))
        }
    };
    console.log(CarManager.execute('arrangeView', 'Ferrari', '14523'));
    console.log(CarManager.execute('requestInfo', 'Ferrari', '14523'));
    console.log(CarManager.execute('buyVehicle', 'Ferrari', '14523'));
})();