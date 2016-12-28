module.exports = function(){
    //引入hello模块
    var greet = require('./hello');
    var s = 'Michael';
    greet(s);

    // 程序即将退出时的回调函数:
    process.on('exit', function (code) {
        console.log('about to exit with code: ' + code);
    });

    // JavaScript程序是由事件驱动执行的单线程模型，Node.js也不例外。Node.js不断执行响应事件的JavaScript函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了。
    // 如果我们想要在下一次事件响应中执行代码，可以调用process.nextTick()：
    process.nextTick(function () {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');

    //判断当前js的执行环境
    if (typeof(window) === 'undefined') {
        console.log('node.js');
    } else {
        console.log('browser');
    }
}