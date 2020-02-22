var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url === '/results' || '/')
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+ '/index.html').pipe(res)
})
