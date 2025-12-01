const estaEntre = (numero, minimo, maximo, inclusivo) => {
    if(numero>minimo && numero<maximo)
        return true
    if (inclusivo){
        if(numero === minimo || numero === maximo)
            return true
    }
    return false
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(150, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))