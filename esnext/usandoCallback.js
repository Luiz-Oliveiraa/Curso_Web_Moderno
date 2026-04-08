//sem promis
const { log } = require('console')
const http = require('http') 

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    //res é uma stream, um fluxo, não chega toda de uma vez, mas sim em pedaços(chunks)
    //assincrona
    //res.on 'data', não recebe em ordem correta, porém em pedaços
    http.get(url, res => {
        let resultado = ''

        //toda vez que chegar um conjunto de respostas recebo isso
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado)) //Texto JSON para objeto
        })
    })
}

//EXEMPLO DE CALLBACK HELL
let nomes = []
//array.map((elemento, indice, arrayOriginal)
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //"elemento" é "a"
    console.log(nomes)

    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        console.log(nomes)
    })

    getTurma('C', alunos =>{
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes)
    })
})