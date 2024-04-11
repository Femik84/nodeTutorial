// stream allow us to read and write to data 
// we have four type of stream, readable (to read data), writable(to write data), duplex(to read and write), transform(to modify data)
// many built in module in node js stream data
// the highwatermark controls the buffering i.e how the data are delivered to the client

const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('../content/big.txt', { highWaterMark: 90000} )

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))