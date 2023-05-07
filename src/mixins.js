

/* eslint no-console: 0 */

'use strict';

/**
 * 
 * @param {*} path 
 * @param {*} method 
 * @param {*} app 
 * @returns 
 */
function getHandlers(path, method, _this) {
    let app = _this || this;
    for (let i = 0; i < app._router.stack.length; i++) {
        // console.log(app._router.stack[i]);
        if (app._router.stack[i].route) {
            if (app._router.stack[i].route.path === path) {
                for (let j = 0; j < app._router.stack[i].route.stack.length; j++) {
                    if (method === "all") {
                        return app._router.stack[i].route.stack;
                    }
                    if (app._router.stack[i].route.stack[j].method === method) {
                        // console.log(app._router.stack[i].route.stack[j]);
                        // console.log(app._router.stack[i].route.stack[j].handle);
                        return [app._router.stack[i].route.stack[j]];
                    }
                }
            }
        }
    }
}

function getHandler(path, method, _this) {
    let app = _this || this;
    for (let i = 0; i < app._router.stack.length; i++) {
        // console.log(app._router.stack[i]);

        if (!!app._router.stack[i].route) {
            if (app._router.stack[i].route.path === path) {
                for (let j = 0; j < app._router.stack[i].route.stack.length; j++) {
                    if (app._router.stack[i].route.stack[j].method === method) {
                        // console.log(app._router.stack[i].route.stack[j]);
                        // console.log(app._router.stack[i].route.stack[j].handle);
                        return app._router.stack[i].route.stack[j];
                    }
                }
            }
        }
    }
}

function getHandlerWithMiddlewares(path, method, _this) {
    let app = _this || this;
    let handlers = [];
    for (let i = 0; i < app._router.stack.length; i++) {
        // console.log(app._router.stack[i]);
        if (!app._router.stack[i].route && !["query", "expressInit"].includes(app._router.stack[i].name)) {
            handlers.push(app._router.stack[i]);
        }
        if (!!app._router.stack[i].route) {
            if (app._router.stack[i].route.path === path) {
                for (let j = 0; j < app._router.stack[i].route.stack.length; j++) {
                    if (app._router.stack[i].route.stack[j].method === method || method === "all") {
                        // console.log(app._router.stack[i].route.stack[j]);
                        // console.log(app._router.stack[i].route.stack[j].handle);
                        handlers.push(app._router.stack[i].route.stack[j]);
                        
                    }
                }
            }
        }
    }
    return handlers;
}

function extendExpress(app) {
    app["getHandler"] = getHandler;
    app["getHandlers"] = getHandlers;
    app["getHandlerWithMiddlewares"] = getHandlerWithMiddlewares;
    return app;
}

module.exports.getHandler = getHandler;
module.exports.getHandlers = getHandlers;
module.exports.getHandlerWithMiddlewares = getHandlerWithMiddlewares;
module.exports.extendExpress = extendExpress;

