const { isDeepStrictEqual } = require('util')

const obj1 = {
    name: 'John',
    age: 18,
    bith: {
        date: 28,
        month: 1,
        year: 2000
    }
}

const obj2 = {
    name: 'John',
    age: 18,
    bith: {
        date: 28,
        month: 1,
        year: 2000
    }
}

console.log(obj1 == obj2)
console.log(isDeepStrictEqual(obj1, obj2))
