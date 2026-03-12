const porta = 3003 //quando 2 computadores vão se comunicar, precisa da porta, na rede tem várias aplicações
//se vc startar 2 vezes a mesma aplicação, vai dar problema, porque a porta já foi aberta
//80 é a porta padrão


const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //O retorno é uma função middleware
//O que isso está fazendo, é que se estiver em urlencoded, vai transformar em obj

app.get('/produtos', (req, res, next) => { //requisição, resposta, next
    res.send(bancoDeDados.getProdutos())
    next()
})

//no POSTMAN, aparece requisição do tipo get, post, etc
//No caso vc digita /produtos/1 por exemple. Seria uma chave
app.get('/produtos/:id', (req, res, next) => { //requisição, resposta, next
    res.send(bancoDeDados.getProduto(req.params.id)) //converte para JSON automáticamente
    //params no caso só tem o id na url, se tivesse colocado :id/:nome, também poderia ser id.nome
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servido executando na porta ${porta}.`)
})

//No 'postman': http://localhost:3003/produtos
//Ctrl + C sai do nodemon
//rs reinicia o nodemon(reinicia o servidor)

// npm i --save body-parser@1.18. isso transforma o que veio do body em objeto