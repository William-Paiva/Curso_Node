const chalk = require('chalk')

const nota = 9

if(nota > 7){
    console.log(chalk.green('Aprovado!'))
}else if(nota > 3){
    console.log(chalk.bgYellow('Recuperação!'))
}else{
    console.log(chalk.baRed('Reprovado!'))
}