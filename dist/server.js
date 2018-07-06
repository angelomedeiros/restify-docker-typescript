"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
function respond(req, res, next) {
    res.send('Hello ' + req.params.name);
    console.log(res.connection.remoteAddress);
}
function meuIp(req, res, next) {
    res.send('Meu ip ' + req.connection.remoteAddress);
}
var server = restify.createServer();
server.get('/', meuIp);
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.listen(8080, function () {
    console.log('%s listening at %as', server.name, server.url);
});
