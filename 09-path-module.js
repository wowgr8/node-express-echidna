const path = require('path'); //Built in module

console.log(path.sep) // Separator property which returns a platform specific separator 

const filePath = path.join('/content', 'subfolder', 'test.txt'); // Join property helps create a file path
console.log(filePath);

const base = path.basename(filePath); //basename property will only return the last directory/file within a path
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // Resolve property will accept a sequence of paths or path segments and resolve it into an absolute path
console.log(absolute);           // Why would you want an absolute path? This app will run in all kinds of environments - this will get the correct path for the local machine.