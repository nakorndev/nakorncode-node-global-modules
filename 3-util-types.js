const { types } = require('util')

const name = 'John'
const age = 18
const student = true
const fav = ['math', 'sci', 'program']

console.log(typeof name == 'string')
console.log(typeof age == 'number')
console.log(typeof student == 'boolean')
console.log(Array.isArray(fav))

const birth = new Date('2000-01-28')
const asyncFn = async () => {}
const promise = new Promise(resolve => resolve())

console.log(types.isDate(birth))
console.log(types.isAsyncFunction(asyncFn))
console.log(types.isPromise(promise))
