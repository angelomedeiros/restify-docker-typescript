import * as restify from 'restify'

function respond(req: restify.Request, res: restify.Response, next: restify.Next) :void {
	res.send('Hello ' + req.params.name )
	console.log(res.connection.remoteAddress)
}

function meuIp(req: restify.Request, res: any, next: any) :void {
	res.send('Meu ip ' + req.connection.remoteAddress)
}

var server = restify.createServer()
server.get('/', meuIp)
server.get('/hello/:name', respond)
server.head('/hello/:name', respond)

server.listen(8080, function() {
	console.log('%s listening at %as', server.name, server.url)
})