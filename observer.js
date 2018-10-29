var Event = (function() {
    var global = this;
    var Event = null;
    var _default = _default;
    var list = {};
    Event = function (){
        listener = function(key, fn) {
            if (!list[key]) {
                list[key] = [];
            }
            list[key].push(fn);
        };
        trigger = function() {
            var key = Array.prototype.shift.call(arguments)
            if (!list[key] || list[key].length === 0) {
                return false;
            } else {
                list[key].map(function (funcItem) {
                    funcItem();
                })
            }
        };
        remove = function(key, fn) {
            if (!fn) {
                delete list[key];
            } else {
                for (var i = 0; i < list[key].length; i++ ) {
                    if (list[key][i] === fn) {
                        list[key] = list[key].splice(i, 1);
                    }
                }
            }
        }
        return {
            listener: listener,
            trigger: trigger,
            remove: remove
        }
    }()
    return Event
})()
function listen1() {
  console.log('listening---')
  Event.listener('news', listenMor)
}
function listen2() {
  console.log('listening---')
  Event.listener('news', listenNight)
}
function listenMor(date) {
    console.log('news---今天是：' + date + '；；今天的天气很好');
}
function listenNight() {
    console.log('news---现在是晚上');
}
function triggerEvent () {
    Event.trigger('news')
}