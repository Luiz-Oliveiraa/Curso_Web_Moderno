encontraPares = (ini,fim)=>{
    pares = []
    while(ini<=fim){
        if(ini%2 === 0){
            pares.push(ini)
        }
        ini++
    }
    console.log(pares)
    return pares
}

encontraPares(1,100)