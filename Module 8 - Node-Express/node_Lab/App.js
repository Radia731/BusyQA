const math = require('./math.js')

const myEmitter = require('./emitter')

const result = math.square(5);

console.log(`square of 5 is : ${result}`)

myEmitter.emit('customEvent')