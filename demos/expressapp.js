

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

