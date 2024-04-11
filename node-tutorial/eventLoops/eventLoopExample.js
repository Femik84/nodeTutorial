// the event loop is what allows Node.js to perform non-blocking I/O operations - despite javascript is single-threaded 

// # non-blocking I/O operations are also known as asynchronous operations
// # I/O operations are input and output operations
// # the I/O operationsin backend(node) is differnet from the one in fontend(react)
// # examples of I/O operation in node is file I/O, database I/O, setTimeout, while in react it is data fetching, setTimeout among others
// # type of I/O operation are synchronous I/O operationand asynchronous i/o operation

// # event loop help us to perform asynchronous i/o operation
// # in asynchronous operations, we run the all immediate code before running the callbacks

// some exammples of eventloop

const { readFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Task completed')
}
)
console.log('starting next task')
// as we can see from the above all immediate were run before running the callbacks


//another example

//...............................
// console.log('first task')

// setTimeout(() => {
//     console.log('second task')
// }, 0)

// console.log('next task')
 
//.................................

//always try to set all your code asynchronously





