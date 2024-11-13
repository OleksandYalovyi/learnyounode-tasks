const { createServer } = require('http');
const { URL } = require('url');



const server = createServer((req, res) => {
    if (req.method !== 'GET') {
        return res.end('Accept only GET method!');
    }

    const url = new URL(req.url, 'http://localhost');
    const iso = url.searchParams.get('iso');
    const date = new Date(iso);
    let result;


    if (url.pathname.includes('/api/parsetime')) {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
    }

    if (url.pathname.includes('/api/unixtime')) {
        result = { unixtime: date.getTime() };
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(result));
    }

    res.writeHead(404);
    res.end();
});

server.listen(process.argv[2])