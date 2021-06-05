const path = require('path')

console.log('__filename:', __filename)
console.log('__dirname:', __dirname)

console.log('path.basename(__filename):', path.basename(__filename))
console.log('path.extname(__filename):', path.extname(__filename))
console.log('path.parse(__filename):', path.parse(__filename))

// Absolute path: C:\\Users\\username
// Relative path: ./index.js, ../

console.log('path.isAbsolute(__filename):', path.isAbsolute(__filename))
console.log('path.isAbsolute(\'./index.js\'):', path.isAbsolute('./index.js'))

console.log('path.join(./ ./):', path.join('./public', './www/index.html'))
console.log('path.resolve(./ ./):', path.resolve('./public', './www/index.html'))

console.log('path.join(__dirname ./):', path.join(__dirname, './www/index.html'))
console.log('path.resolve(__dirname ./):', path.resolve(__dirname, './www/index.html'))
