const a = {name: "teste"}
const b = a
console.log(a)
console.log(b)

b.name = 'opa'
console.log(a)
console.log(b)

//ou seja, a e b são ponteiros

//tipos primitivos fazem cópia por valor
let c = 3
d = c
d++
console.log(c, d)

let valor //não inicializada, ausência de valor
console.log(valor)

valor = null //variavel zerada
console.log(valor) 
// console.log(valor.toString())

const produto = {}
console.log(produto.preco)

produto.preco = 2.50
console.log(produto)

produto.preco = null //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)