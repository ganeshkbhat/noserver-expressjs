# noserver-expressjs
npm module noserver-express allows you to access the express route fetch, access, and invoke applicable Layer Objects of Middlewares and Handler/s with having to listen to a Server.


### .getHandler

Usage:

```

var app = require("express);
app.get("/", function(req, res) {
    res.send("Test")
});
console.log(app.getHandler());

```


### .getHandlers

Usage:

```

var app = require("express);
app.get("/", function(req, res) {
    res.send("Test")
});
console.log(app.getHandlers());

```


### .getHandlerWithMiddlewares

Usage:

```

var app = require("express);
app.get("/", function(req, res) {
    res.send("Test")
});
console.log(app.getHandlerWithMiddlewares());

```



### Allowed methods to fetch

Allowed methods to fetch from `expressInstance.getHandler`, `expressInstance.getHandlers`, or `expressInstance.getHandlerWithMiddlewares` or returned when method `all` is used. 

```
[
    method: 'acl'
    method: 'bind'
    method: 'checkout'
    method: 'connect'
    method: 'copy'
    method: 'delete'
    method: 'get'
    method: 'head'
    method: 'link'
    method: 'lock'
    method: 'm-search'
    method: 'merge'
    method: 'mkactivity'
    method: 'mkcalendar'
    method: 'mkcol'
    method: 'move'
    method: 'notify'
    method: 'options'
    method: 'patch'
    method: 'post'
    method: 'propfind'
    method: 'proppatch'
    method: 'purge'
    method: 'put'
    method: 'rebind'
    method: 'report'
    method: 'search'
    method: 'source'
    method: 'subscribe'
    method: 'trace'
    method: 'unbind'
    method: 'unlink'
    method: 'unlock'
    method: 'unsubscribe'
]
```