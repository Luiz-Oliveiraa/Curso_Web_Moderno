//armazenar uma função em uma variável
const imprimirSoma = function (a,b){ //funcao anonima
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenar uma função arrow em uma variável
const soma = (a,b) => {
    return a+b
}
console.log(soma(3,4))

//retorno implicito
const subtracao = (a, b) => a-b //se tiver 1 parametro, pode tirar até os parenteses
console.log(subtracao(12,8))

const imprimir2 = a => console.log(a)
imprimir2('Eitcha')