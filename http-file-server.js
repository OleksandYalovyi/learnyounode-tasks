const { createServer } = require('node:http');
const { createReadStream } = require('node:fs')

const port = process.argv[2];
const filePath = process.argv[3]

const server = createServer((req, res) => {
    const stream = createReadStream(filePath);

    stream.pipe(res)
})

server.listen(port)