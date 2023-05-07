/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: requests.js
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 * 
*/

var invoker = require("../index").invoker;
var app = require("../demos/expressapp");

invoker("/", "get", app).end((err, res) => {
    console.log("Error: \n", err);
    console.log("Response: \n", res);
});
