const menorNumero = arr => arr.reduce((menorNumero, atual) => {
    return (atual<menorNumero) ? atual : menorNumero
})

console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([5,-15,50,3]))
console.log(menorNumero([-70,5,50,3]))