const { createServer } = require('node:http');
const { Transform } = require('node:stream')

const port = process.argv[2]

const server = createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end()
    }

    req.pipe(new Transform({
        transform(chunk, encoding, cb) {
            this.push(chunk.toString().toUpperCase())
            cb();
        }
    })).pipe(res)
})

server.listen(port)