const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: "eita",
        numero: 5
    }
}

console.log(pessoa)
// console.log(nome, idade)

const {nome, idade} = pessoa //tire do objeto pessoa o nome e a idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //tire do objeto pessoa e coloque em n e i
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)