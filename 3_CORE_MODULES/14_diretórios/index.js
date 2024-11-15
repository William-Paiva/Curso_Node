const fs = require('fs')

if(!fs.existsSync('./minha_pasta')){
    console.log('Pasta não existe!')
    fs.mkdirSync('minha_pasta')
    console.log('Pasta criada com sucesso!')
}else{
    console.log('A pasta já existe!')
}