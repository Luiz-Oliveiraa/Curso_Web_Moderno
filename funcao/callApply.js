function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())

global.preco = 20
global.desc = .1
console.log(getPreco())
console.log(produto.getPreco())

//CALL E APPLY, usam algo de contexto
const carro = {preco: 49990, desc: .2}
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro)) 

console.log()

console.log(getPreco.call(carro, .17, '$')) // 1:contexto, 2. em diante:parâmetros em ordem 
console.log(getPreco.apply(carro, [0.50, '$'])) //1: contexto, 2: [parâmetros em ordem]