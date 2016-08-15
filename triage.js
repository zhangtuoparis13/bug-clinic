// scenario.js
var fs = require("fs");

var peach = function (obj) {
    // trace the message "traced"
    console.trace('traced'); // 向Web控制台输出一个堆栈跟踪.
    // dump obj to stdout
    console.log(obj)
};

var bowser = function (callback) {
    fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
    // handle error by printing something to stderr
    if (error) return console.error('sommething');

    peach(JSON.parse(file));
    };

    bowser(koopa);
