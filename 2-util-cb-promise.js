const { callbackify, promisify } = require('util')

const sumAsync = async (a, b) => {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
        throw new Error('input is not number') // reject(new Error())
    }
    return a + b // resolve(a + b)
}

const sumPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
            return reject(new Error('input is not number'))
        }
        return resolve(a + b)
    })
}

const sumCallback = callbackify(sumPromise)

// sumAsync(4, 2)
//     .then(console.log)
//     .catch(console.log)
    
// sumPromise(4, 2)
//     .then(console.log)
//     .catch(console.log)

sumCallback(4, 2, (err, data) => {
    if (err) {
        console.log('E+', err.message)
    } else {
        console.log('D+', data)
    }
})

const minusCallback = (a, b, cb) => {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
        cb(new Error('input is not number'))
    } else {
        cb(null, a - b)
    }
}

// minusCallback(4, 2, (err, data) => {
//     if (err) {
//         console.log('E-', err.message)
//     } else {
//         console.log('D-', data)
//     }
// })

const minusPromise = promisify(minusCallback)

minusPromise(4, 2)
    .then(data => console.log('D-', data))
    .catch(err => console.log('E-', err))
