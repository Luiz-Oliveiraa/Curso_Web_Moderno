quantNoIntervalo = (array, ini, fim) =>{
    let contNoIntervalo = 0
    let contForaDoIntervalo = 0
    for(let num of array){
        if(num>=ini && num<=fim) contNoIntervalo++
    }
    contForaDoIntervalo = array.length - contNoIntervalo
    return { noIntervalo: contNoIntervalo, foraIntervalo: contForaDoIntervalo }
}