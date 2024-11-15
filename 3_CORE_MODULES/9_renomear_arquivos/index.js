const fs = require('fs')

const arquivoAntigo = 'arquivo.txt'
const arquivoNovo = 'novoArquivo'

fs.rename(arquivoAntigo, arquivoNovo, (err) =>{
    if(err){
        console.log('err')
        return
    }

    console.log(`O arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}!`)
})