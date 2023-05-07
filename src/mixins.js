

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

/**
 *
 *
 * @param {*} path
 * @param {*} method
 * @param {*} _this
 * @return {*} 
 */
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

/**
 *
 *
 * @param {*} path
 * @param {*} method
 * @param {*} _this
 * @return {*} 
 */
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

/**
 *
 *
 * @param {*} app
 * @return {*} 
 */
function extendExpress(app) {
    app["getHandler"] = getHandler;
    app["getHandlers"] = getHandlers;
    app["getHandlerWithMiddlewares"] = getHandlerWithMiddlewares;
    return app;
}

/**
 *
 *
 * @param {*} path
 * @param {*} method
 * @param {*} _this
 * @param {*} options
 * @return {*} 
 */
function invoker(path, method, _this, options) {
    let app = _this || this;
    let sp = require("supertest");
    let agent = sp.agent(app);
    let req = agent[method](path);
    if (!!options?.query) req.query(query);
    if (!!options?.prefix) req.use(options.prefix);
    if (!!options?.nocache) req.use(options.nocache);
    if (!!options?.suffix) req.use(options.suffix);
    if (!["post", "put", "patch", "delete"].includes(method)) {
        if (!!options?.data) req.send(data);
    }
    let k = Object.keys(options?.headers || {});
    for (let i = 0; i < k.length; i++) {
        req.set(k[i], options?.headers[k[i]]);
    }
    return req;
}


module.exports.getHandler = getHandler;
module.exports.getHandlers = getHandlers;
module.exports.getHandlerWithMiddlewares = getHandlerWithMiddlewares;
module.exports.extendExpress = extendExpress;
module.exports.invoker = invoker;
