const http = require('http')

const port = 3001

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Contenty-type', 'text/html')
    res.end('<h1>}Olá, meu primeiro server HTML!</h1>')
})

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})