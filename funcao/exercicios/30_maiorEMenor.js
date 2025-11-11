const contaNegativo = array => {
    let maior = array[0]
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) maior = array[i]
        if (array[i] < menor) menor = array[i]
    }
    return { maior: maior, menor: menor }
}