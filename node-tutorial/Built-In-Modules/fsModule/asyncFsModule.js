// using the readFile and the writeFile to read and write to the module using  asynchronous method


const { readFile, writeFile } = require('fs')

console.log('start')
readFile('../../content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('../../content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      '../../content/asyncNewFile.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')


// the callback function help us to do task asynchroously i.e executing another task without waitiing for one task to finish, another way of carrying out task asynchronously in node is by using promises or async await.. 