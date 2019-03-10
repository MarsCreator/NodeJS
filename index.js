var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello Mars!\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');