const fs = require('fs')

console.log('File exists', fs.constants.F_OK)
console.log('Readable', fs.constants.R_OK)
console.log('Writable', fs.constants.W_OK)
console.log('Executable', fs.constants.X_OK)

const readmePath = './_readme.txt'
const notExitsPath = './_foobar.txt'
const readonlyPath = './_readonly.txt'
const handleOnAccess = (label) => (err) => {
    if (err) {
        console.log(label, 'Not ok!')
    } else {
        console.log(label, 'Ok!')
    }
}

fs.access(readmePath, fs.constants.F_OK, handleOnAccess('_readme.txt F_OK:'))
fs.access(notExitsPath, fs.constants.F_OK, handleOnAccess('_foobar.txt F_OK:'))

fs.access(readmePath, fs.constants.W_OK, handleOnAccess('_readme.txt W_OK:'))
fs.access(readonlyPath, fs.constants.W_OK, handleOnAccess('_readonly.txt W_OK:'))
