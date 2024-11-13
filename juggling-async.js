const { get } = require('node:http')
const bl = require('bl')

const linksArr = process.argv.slice(2, 5)

let counter = 0
const lines = []

function printLines() {
    for( const line of lines) {
        console.log(line)
    }
}

function makeGet(index) {
    get(linksArr[index], (res) => {
        res.pipe(bl((err, data) => {
            if (err) {
                console.error(err)
            }

            lines[index] = data.toString()
            counter += 1

            if (counter === 3) {
                printLines()
            }
        }))
    })
}


for (let i = 0; i < 3; i ++) {
    makeGet(i)
}