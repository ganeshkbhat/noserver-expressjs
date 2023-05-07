
var invoker = require("../index").invoker;
var app = require("../demos/expressapp");

invoker("/", "get", app).end((err, res) => {
    console.log("Error: \n", err);
    console.log("Response: \n", res);
});
