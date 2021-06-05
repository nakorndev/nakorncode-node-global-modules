const { copyFile, rename, rm, appendFile } = require('fs').promises
const { constants } = require('fs')

// copyFile('./_readme.txt', './new-folder/copy_readme.txt', constants.COPYFILE_EXCL)
//     .then(console.log)
//     .catch(console.log)

// rename('./new-folder/copy_readme.txt', './new-folder/readme.txt')
//     .then(console.log)
//     .catch(console.log)

// rm('./new-folder', { recursive: true })
//     .then(console.log)
//     .catch(console.log)

appendFile('./_readme.txt', 'Hello new line!\n')
    .then(console.log)
    .catch(console.log)
