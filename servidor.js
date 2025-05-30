const http = require('http');

http.createServer((request, response) => {

 response.writeHead(200, {

  'Content-Type': 'text/plain'

 });

 response.write('Hello, '+Math.pow(3, 1)+'º ano!\n');

 response.end();

}).listen(8080);