/**
 * Created by kinglan525 on 16/2/20.
 */
var addEvent = function(el, ev, fn) {
    if(el.addEventListener) {
        el.addEventListener(ev, fn, false);
    } else if(el.attachEvent) {
        el.attachEvent('on' + ev, fn);
    } else {
        el['on' + ev] = fn;
    }
};

//示例
var test = document.getElementById('test');
var result = document.getElementById('result');
addEvent(test, 'click', function(e) {
    e.preventDefault();
    var fragment = document.createDocumentFragment();
    var p = document.createElement('p');
    fragment.appendChild(p);
    var text = document.createTextNode('点击了一下');
    p.appendChild(text);
    result.appendChild(fragment);
});