const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

console.log()
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //passivo de ser listado
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '02/02/2017'
console.log(pessoa)

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //const obj = Object.assign(dest, o1, o2, o3, ...)
console.log(obj)

Object.freeze(obj)
obj.c = 10
console.log(obj)