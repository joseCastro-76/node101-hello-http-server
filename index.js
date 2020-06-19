// write your code here
const http = require('http');

const hostname = 'localhost';
const PORT = 8080;

const server = http.createServer((req, res) => {
    console.log(`Received${req.method} request for: ${req.url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(PORT, hostname, null, () => {
    console.log(`Server is listening on ${hostname}: ${PORT}`);
});