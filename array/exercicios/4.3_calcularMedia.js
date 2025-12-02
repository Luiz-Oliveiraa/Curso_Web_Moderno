const calcularMedia = arr => arr.reduce((acumulador, elemento) => {
    return acumulador += elemento
}, 0)/arr.length

console.log(calcularMedia([0,10]))
console.log(calcularMedia([1,2,3,4,5]))
console.log(calcularMedia([]))
