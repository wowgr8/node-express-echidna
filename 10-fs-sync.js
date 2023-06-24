const { readFileSync, writeFileSync } = require('fs')
// const fs = require(fs)   These two lines do the same as line 1
// fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)