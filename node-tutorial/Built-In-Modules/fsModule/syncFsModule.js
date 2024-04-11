// fs module is file system module  and it is either asychronous or synchronous 

// using the readFile and the writeFile to read and write to the module using  synchronous method

const { readFileSync, writeFileSync } = require('fs')


const first = readFileSync('../../content/first.txt', 'utf8')
const second = readFileSync('../../content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    '../../content/newFile.txt', `Here is the result: ${first}, ${second}`
)


