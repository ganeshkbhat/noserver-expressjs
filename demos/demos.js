
var expressExtenders = require("../index");

var express = require("express");
let app = express();

app.use(function (req, res, next) {
    next()
})

app.get("/", function (req, res) {
    res.status().send({ "test": "tester" })
})

app.all("/test", function (req, res) {
    res.status().send({ "test": "tester" })
})

app.get("/tester", function (req, res, next) { next() }, function (req, res) {
    res.status().send({ "test": "tester" })
})

app = expressExtenders.extend(app);

// console.log('app.getHandler("/", "all")', app.getHandler("/", "all"));
// console.log('app.getHandler("/", "get")', app.getHandler("/", "get"));
// console.log('app.getHandler("/test", "all")', app.getHandler("/test", "all"));
// console.log('app.getHandler("/test", "get")', app.getHandler("/test", "get"));
// console.log('app.getHandler("/tester", "all")', app.getHandler("/tester", "all"));
// console.log('app.getHandler("/tester", "get")', app.getHandler("/tester", "get"));


// console.log('app.getHandlers("/", "all")', app.getHandlers("/", "all"));
// console.log('app.getHandlers("/", "get")', app.getHandlers("/", "get"));
// console.log('app.getHandlers("/test", "all")', app.getHandlers("/test", "all"));
// console.log('app.getHandlers("/test", "get")', app.getHandlers("/test", "get"));
// console.log('app.getHandlers("/tester", "all")', app.getHandlers("/tester", "all"));
// console.log('app.getHandlers("/tester", "get")', app.getHandlers("/tester", "get"));


// console.log('app.getHandlerWithMiddlewares("/", "all")', app.getHandlerWithMiddlewares("/", "all"));
// console.log('app.getHandlerWithMiddlewares("/", "get")', app.getHandlerWithMiddlewares("/", "get"));
// console.log('app.getHandlerWithMiddlewares("/test", "all")', app.getHandlerWithMiddlewares("/test", "all"));
// console.log('app.getHandlerWithMiddlewares("/test", "get")', app.getHandlerWithMiddlewares("/test", "get"));
// console.log('app.getHandlerWithMiddlewares("/tester", "all")', app.getHandlerWithMiddlewares("/tester", "all"));
// console.log('app.getHandlerWithMiddlewares("/tester", "get")', app.getHandlerWithMiddlewares("/tester", "get"));


console.log('app.getHandlerWithMiddlewares("/test", "all")', app.getHandlerWithMiddlewares("/test", "all"));

