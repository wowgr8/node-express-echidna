const { readFileSync, writeFileSync } = require('fs')
// const fs = require(fs)   These two lines do the same as line 1
// fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// If file does not exist, node will create it. First parameter is the path, second is the data.
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a'} // if you want to append something to the file, you will have to pass a third parameter. 
  )
