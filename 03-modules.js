// CommonJs, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum/ only share what we want)

// Moved name variables to 04-names.js
// const khean = 'Khean'
// const kylah = 'kylah'

// Moved sayHi() to 05-utils.js
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// }

const names = require('./04-names') // This imports the module.exports data in 04-names.js
const sayHi = require('./05-utils') 

sayHi('Susan')
sayHi(names.khean)
sayHi(names.kylah)