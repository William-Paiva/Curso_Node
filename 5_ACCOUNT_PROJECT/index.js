const inquirer = require('inquirer');
const fs = require('fs');

console.log('Iniciando o projeto...');

operation();

function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    },])
    .then((answer) => {
        const action = answer['action'];
        console.log(action);

        if(action === "Criar Conta"){
            createAccount()
        }
        
    })
    .catch((err) => {
        console.error('Error:', err);
    });
}

function createAccount(){
    console.log('Defina as opções da sua conta a seguir...')
}

