const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('qual a sua idade?', (idade) =>{
    console.log(`minha idade é ${idade}.`)
})