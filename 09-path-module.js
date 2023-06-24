const path = require('path'); //Built in module

console.log(path.sep) // Separator property which returns a platform specific separator 

const filePath = path.join('/content', 'subfolder', 'test.txt'); // Join property helps create a file path
console.log(filePath);