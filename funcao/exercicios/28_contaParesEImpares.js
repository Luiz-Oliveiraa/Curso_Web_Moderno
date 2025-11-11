function contaParesEImpares (array){
    let contPares = 0
    let contImpares = 0
    for(let num of array){
        if(num % 2 === 0) contPares++
        else contImpares++
    }
    return { pares: contPares, impares: contImpares }
}