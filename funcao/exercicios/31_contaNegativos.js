function contaNegativos (array){
    let contNegativos = 0
    for(let num of array){
        if(num < 0) contNegativos++
    }
    console.log("Quantidade de números negativos:", contNegativos)
}