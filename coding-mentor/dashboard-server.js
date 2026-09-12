const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const port = 8765;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8'
};

async function handleRequest(request, response) {
    if (request.url === '/cses-problemset') {
        try {
            const upstream = await fetch('https://cses.fi/problemset/');
            response.writeHead(upstream.status, {
                'Content-Type': 'text/html; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            response.end(await upstream.text());
        } catch (error) {
            response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
            response.end(`CSES proxy failed: ${error.message}`);
        }
        return;
    }

    const requestPath = decodeURIComponent(request.url.split('?')[0].replace(/^\//, ''));
    const filePath = path.resolve(root, requestPath || 'coding-mentor/Coding-Mentor-Dashboard.html');
    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        response.writeHead(404);
        response.end('Not found');
        return;
    }

    response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'text/plain; charset=utf-8' });
    fs.createReadStream(filePath).pipe(response);
}

http.createServer((request, response) => {
    handleRequest(request, response).catch((error) => {
        response.writeHead(500);
        response.end(error.message);
    });
}).listen(port, '127.0.0.1', () => {
    console.log(`Coding Mentor dashboard: http://127.0.0.1:${port}/coding-mentor/Coding-Mentor-Dashboard.html#dsa`);
});
