/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: expressapp.js
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 * 
*/


var express = require("express");
let app = express();

app.use(function (req, res, next) {
    console.log("Common Middlewares");
    next()
});

app.get("/", function (req, res) {
    res.status(200).send({ "test": "tester" })
});

app.all("/test", function (req, res) {
    res.status(200).send({ "test": "tester" })
});

app.get("/tester", function (req, res, next) { console.log("Middlewares"); next() }, function (req, res) {
    res.status(200).send({ "test": "tester" })
});

module.exports = app;

