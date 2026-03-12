const porta = 3003 //quando 2 computadores vão se comunicar, precisa da porta, na rede tem várias aplicações
//se vc startar 2 vezes a mesma aplicação, vai dar problema, porque a porta já foi aberta
//80 é a porta padrão


const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => { //requisição, resposta, next
    res.send(bancoDeDados.getProdutos())
    next()
})

//no POSTMAN, aparece requisição do tipo get, post, etc
//No caso vc digita /produtos/1 por exemple. Seria uma chave
app.get('/produtos/:id  ', (req, res, next) => { //requisição, resposta, next
    res.send(bancoDeDados.getProduto(req.params.id)) //converte para JSON automáticamente
    //params no caso só tem o id, se tivesse colocado :id/:nome, também teria o nome
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servido executando na porta ${porta}.`)
})

//No 'postman': http://localhost:3003/produtos
//Ctrl + C sai do nodemon