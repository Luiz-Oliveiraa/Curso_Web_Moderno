const repetir = function(elemento, n){
    const result = []
    for(let i = 0; i < n; i++)
        result.push(elemento)
    return result
}

console.log(repetir('repetir', 2))
console.log(repetir(7, 3))
console.log(repetir('eita', 0))