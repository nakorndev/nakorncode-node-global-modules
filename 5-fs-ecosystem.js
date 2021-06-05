// callback <-- async non-blocking i/o
// promise  <-- async non-blocking i/o

// sync     <-- blocking i/o

const fs = require('fs') // file system
const fsPromise = require('fs/promises')

const filePath = './_readme.txt'

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log('E (fs):', err.message)
    } else {
        console.log('D (fs):', data.toString())
    }
})

fsPromise.readFile(filePath)
    .then(data => console.log('D (fsPromise):', data.toString()))
    .catch(err => console.log('E (fsPromise):', err.message))

try {
    const data = fs.readFileSync(filePath)
    console.log('D (fsSync):', data.toString())
} catch (err) {
    console.log('E (fsSync):', err.message)
}
