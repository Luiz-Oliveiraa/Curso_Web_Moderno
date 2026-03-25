//promessas assincronas
function falarDepoisDe (segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve só aceita um parâmetro
        })
    }, segundos * 1000)
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    
    // .then() trata sucesso (resolve)
    // .catch() trata erro (reject)
    // erros percorrem a cadeia até o primeiro catch()
    // código assíncrono: o resultado da Promise só existe depois que ela resolve,
    // então não dá pra usar o valor fora do .then() ou sem await