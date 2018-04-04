var server2 = require("./sever2");
var router = require("./router");

server2.start(router.route);
