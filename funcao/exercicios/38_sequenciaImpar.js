const seqImpar = (ini = 0, fim = 100)=>{
    if(ini>fim){
        let aux = ini
        ini = fim
        fim = aux
    }
    ini+=1
    let impares = []
    while(ini<fim){
        if(ini%2)
            impares.push(ini)
        ini++
    }
    return impares
}

console.log(seqImpar())
console.log(seqImpar(58, 27))
console.log(seqImpar(-5,11))