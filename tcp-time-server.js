const net = require('node:net');
const strftime = require('strftime');

const port = process.argv[2]

const server = net.createServer((socket) => {

    socket.end(strftime('%Y-%m-%d %H:%M\n'))
});

server.listen(port);