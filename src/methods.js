/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: methods.js
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * Credit: npm module: methods
 * 
 * 
*/

'use strict'

/**
 * Module dependencies.
 * @private
 */

var http = require('http')

/**
 * Module exports.
 * @public
 */

module.exports = getCurrentNodeMethods() || getBasicNodeMethods()

/**
 * Get the current Node.js methods.
 * @private
 */

function getCurrentNodeMethods () {
  return http.METHODS && http.METHODS.map(function lowerCaseMethod (method) {
    return method.toLowerCase()
  })
}

/**
 * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
 * @private
 */

function getBasicNodeMethods () {
  return [
    'get',
    'post',
    'put',
    'head',
    'delete',
    'options',
    'trace',
    'copy',
    'lock',
    'mkcol',
    'move',
    'purge',
    'propfind',
    'proppatch',
    'unlock',
    'report',
    'mkactivity',
    'checkout',
    'merge',
    'm-search',
    'notify',
    'subscribe',
    'unsubscribe',
    'patch',
    'search',
    'connect'
  ]
}