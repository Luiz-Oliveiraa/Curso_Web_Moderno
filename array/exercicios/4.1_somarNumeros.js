const somarNumeros = arr => {
    return arr.reduce((soma, valor) => soma += valor)
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,10,15]))