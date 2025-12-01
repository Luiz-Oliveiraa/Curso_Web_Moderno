const desetructuring = (obj, propriety) => {
    const estaPresente = (arr) => arr.includes(propriety)
    return Object.entries(obj).filter(estaPresente)
}

console.log(desetructuring({a: 1, b: 2}, 2))
console.log(desetructuring({a: 1, b: 2}, 'a'))

//Exercício começa aqui:
const removePropriedades = (obj, propriety) => {
    let objResultado = {}

    for (let [key, value] of Object.entries(obj)){
        objResultado[key] = value
    }

    delete objResultado[propriety]
    return objResultado
}

console.log()
const objTeste = {a: 1, b: 2}
const objResult = removePropriedades(objTeste, 'a')
console.log(objTeste, objResult, Object.is(objTeste, objResult))

const objTeste2 = {id: 20, nome: 'caneta', descricao: 'não prenchido'}
const objResult2 = removePropriedades(objTeste2, 'descricao')
console.log(objTeste2, objResult2, Object.is(objTeste2, objResult2))