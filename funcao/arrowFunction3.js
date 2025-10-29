let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(this)
comparaComThis(global) //no brownser, 'window' é na verdade 'global'

const obj = {}
comparaComThis(obj)

comparaComThis = comparaComThis.bind(obj)
console.log()
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // o this é o modulo atual
console.log()
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log()
comparaComThisArrow = comparaComThisArrow.bind(obj) //bind não funciona com arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)