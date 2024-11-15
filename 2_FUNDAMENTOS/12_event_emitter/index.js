const EventEmitter = require('event')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', ()=>{
    console.log('Durante...')
})

console.log('Antes...')

eventEmitter.emit('start')

console.log('Depois...')