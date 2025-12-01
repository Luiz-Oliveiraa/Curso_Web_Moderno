const arrPrimeiroEULtimo = function(arr){
    if(!arr.length)
        return []
    const resultado = []
    resultado.push(arr[0])
    resultado.push(arr[arr.length-1])
    return resultado
}

const arr = [7,14,'olá']
console.log(arrPrimeiroEULtimo(arr))
console.log(arrPrimeiroEULtimo([-100,'aplicativo', 16]))