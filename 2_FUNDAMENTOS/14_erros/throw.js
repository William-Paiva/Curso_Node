const x = 30

if(!Number.isInteger(x)){
    throw new Error('x não é número inteiro!')
}

console.log('Continuando...')