/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: demos.js
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 * 
*/

var expressExtenders = require("../index");
var app = require("./expressapp");
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


// console.log('app.getHandlerWithMiddlewares("/test", "all")', app.getHandlerWithMiddlewares("/test", "all"));

