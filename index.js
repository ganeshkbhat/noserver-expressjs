/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: index.js
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var extend = require("./src/mixins");
var getBasicNodeMethods = require("./src/mixins");

module.exports.extenders = {
    getHandler: extend.getHandler,
    getHandlers: extend.getHandlers,
    getHandlerWithMiddlewares: extend.getHandlerWithMiddlewares,
    extendExpress: extend.extendExpress,
    getBasicNodeMethods: getBasicNodeMethods
}

module.exports.extendExpress = extend.extendExpress;
module.exports.invoker = extend.invoker;
module.exports.extend = extend.extendExpress;
module.exports.getBasicNodeMethods = getBasicNodeMethods;
module.exports.default = extend.invoker;

