// OS MODULE

const os = require('os') 

// info about current user
const user = os.userInfo()
console.log(user)

// info about how long the computer has been running in seconds

console.log( `The system uptime is ${os.uptime()}`)

// more info about the computer

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)

// there are many methods and properties the os (operating system) module has we have only covered few. the os module give information about our computer.


 