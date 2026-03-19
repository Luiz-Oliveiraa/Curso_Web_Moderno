
function real (partes, ...valores){
    console.log('Partes: ', partes)
    console.log('Valores: ', valores, '\n')

    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')//Pega todos os valores do array e coloca numa string
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}. `)