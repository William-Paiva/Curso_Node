const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'p1', 
    message: 'Qual o seu nome?',
},{
    name: 'p2',
    message: 'Qual a sua idade?'
}]).then((answers)=>{
    console.log(answers)
    if(answers.p1 === 'Ze'){
        console.log('Do caminhão?')
    }
    if(answers.p2 > 35){
        console.log('Você está velho!')
    }
}).catch((err)=>{
    console.log(err)
})