/**
 * 
 * 
 * 
 * Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 */

/* eslint no-console: 0 */

'use strict';

var extend = require("./src/mixins");

module.exports.extenders = {
    getHandler: extend.getHandler,
    getHandlers: extend.getHandlers,
    getHandlerWithMiddlewares: extend.getHandlerWithMiddlewares,
    extendExpress: extend.extendExpress
}

module.exports.extendExpress = extend.extendExpress;
module.exports.invoker = extend.invoker;
module.exports.extend = extend.extendExpress;
module.exports.default = extend.invoker;

