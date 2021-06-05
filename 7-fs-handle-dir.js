const fs = require('fs')

const readmePath = './_readme.txt'
const notExitsPath = './_foobar.txt'

console.log(fs.existsSync(readmePath))
console.log(fs.existsSync(notExitsPath))

const newFolder = './new-folder'

// if (!fs.existsSync(newFolder)) {
//     fs.mkdir(newFolder, (err) => {
//         if (err) {
//             console.log(err)
//         }
//     })
// }

// mkdir = make directory
fs.mkdirSync(newFolder, { recursive: true })
