// path module is a built in module that gives infomation about the path of a module

const path = require('path')

// this give info about the seperator used in path  
console.log(path.sep)

// the path.join method is use to join toggether one or more segment of a path

const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath)

// the basename is the last part of a path, to get the basename of filepath:

const base = path.basename(filePath)
console.log(base)

// to get absolute path
const absolute = path.resolve(__dirname, 'content' ,'subfolder','test.txt')
console.log(absolute)
