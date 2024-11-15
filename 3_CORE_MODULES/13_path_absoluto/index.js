const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//criar path
const midFolder = 'relatórios'
const fileName = 'will.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)