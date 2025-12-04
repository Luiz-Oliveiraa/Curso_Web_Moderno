const addEmArrDecrescente = (arr, value) => {
    let adicionado = false
    for(let i = 0; i < arr.length; i++){
        if(value >= arr[i]){
            if(value > arr[i]) //bug duplicado corrigido
                arr.splice(i, 0, value)
            adicionado = true
            break
        }
    }
    if(!adicionado) 
        arr.push(value)
}

const segundoMaior = arr => {
    let arrDecrescente = []
    for(let value of arr)
        addEmArrDecrescente(arrDecrescente, value)

    if(arrDecrescente.length>1)
        return arrDecrescente[1]
    return arrDecrescente[0]
}

/// CORREÇÃO O(N) DO MALA GPT
// const segundoMaior = arr => {
//     let maior = -Infinity
//     let segundo = -Infinity

//     for (let value of arr) {
//         if (value > maior) {
//             segundo = maior
//             maior = value
//         } else if (value > segundo) {
//             segundo = value
//         }
//     }

//     return segundo
// }


console.log(segundoMaior([12,16,1,5]))
console.log(segundoMaior([8,4,5,6]))