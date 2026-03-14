//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}


console.log(a)
// console.log(b) // let engloba apenas o escopo do bloco

//Template String
const produto = 'iPad'
console.log(`${produto} 
    é 
    caro`)

//Destructuring
const [l, e, ...tras] = 'Coder'
console.log(l,e,tras) 

const [x, , y] = [1,2,3,4]
console.log(x, y)

const {idade: i, nome} = {nome: 'André', idade: 25}
console.log(i, nome)