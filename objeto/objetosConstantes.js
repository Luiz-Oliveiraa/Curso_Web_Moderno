// pessoa -> 123 (endereco) -> variável
const pessoa = {nome: "joão"}
pessoa.nome = "Pedro"
console.log(pessoa)

//pessoa -> 456 -> {...}
// pessoa = {nome: "Maria"}

Object.freeze(pessoa)
pessoa.nome = "Maria"
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)