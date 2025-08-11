// const http = require('http');
import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.write(`<h1>Hello, this is the home page</h1>
            <p>Welcome to our server!</p>
            <p>Use the links below to navigate:</p>
            <p><a href="/about">About Page</a></p>`);
    res.end();
    }

    if(req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
        res.write(`hello This is the about page `);
    res.end();
    }


});  

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

