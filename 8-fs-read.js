const fs = require('fs').promises

fs.readdir(__dirname)
    .then(console.log)
    .catch(console.log)
    
fs.readFile('_readme.txt')
    .then((buff) => console.log(buff.toString()))
    .catch(console.log)

fs.stat('_readme.txt')
    .then(console.log)
    .catch(console.log)
