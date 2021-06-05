const fs = require('fs').promises
const path = require('path')

const filePath = path.resolve(__dirname, './file.txt')

fs.readFile(filePath)
    .then(console.log)
    .catch(console.log)
