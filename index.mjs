/**
 * 
 * Package: noserve, express-noserve
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i noserve --save , npm i express-noserve --save
 * Github: https://github.com/ganeshkbhat/noserver-expressjs
 * npmjs Link: https://www.npmjs.com/package/noserve , https://www.npmjs.com/package/express-noserve
 * File: index.mjs
 * File Description: Description: ExpressJS Extend with handler fetchers to invoke without having to listen as a server
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { default as invoke, invoker, extend, extenders, getBasicNodeMethods } from "./index.js";

export default invoke;

export {
    invoker, extend, extenders, getBasicNodeMethods 
}
