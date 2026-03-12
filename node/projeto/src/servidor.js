const porta = 3003 //quando 2 computadores vão se comunicar, precisa da porta, na rede tem várias aplicações
//se vc startar 2 vezes a mesma aplicação, vai dar problema, porque a porta já foi aberta
//80 é a porta padrão


const express = require('express')
const app = express()

//no POSTMAN, aparece requisição do tipo get, post, etc
app.get('/produtos', (req, res, next) => { //requisição, resposta, next
    res.send({nome: 'Notebook', preco: 123.45}) //converte para JSON automáticamente
})

app.listen(porta, () => {
    console.log(`Servido executando na porta ${porta}.`)
})

//No 'postman': http://localhost:3003/produtos
//Ctrl + C sai do nodemon