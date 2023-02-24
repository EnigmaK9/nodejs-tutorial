// GLOBALS - NO WINDOW!!
//__dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
const names  = require('./04-names') // start with dot and 
const sayHi  = require('./05-utils')
console.log(names)

sayHi('susan')
sayHi(john)
sayHi(peter)

//console.log(__dirname)
//setInterval(() => {
//    console.log('hello world')
//},1000)