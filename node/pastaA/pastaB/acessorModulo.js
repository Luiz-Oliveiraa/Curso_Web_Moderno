const moduloA = require('../../moduloA') //Não funciona em linux se for minuculo
//E:\lzo\2025\Curso programação web udemy\Curso_Web_Moderno\node\moduloA.js
console.log(moduloA.ola)

//**node_modules é referente ao npm:**
const saudacao = require('saudacao') //modulo criado, se salvar como index2 não funciona

const c = require('./pastaC') //procura arquivo index
console.log(c.ola2)

const http = require('http') //também é um modulo interno do node
http.createServer((req, res) => {
    res.write('Bom dia!') //está respondendo uma requisição
    res.end()
}).listen(8080)