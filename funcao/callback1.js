const fabricantes = ['Mercedes', 'Audi', "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
//CALLBACK É DISPARADA QUANDO UM EVENTO ACONTECER
//"Quando acontecer o evento forEach chama essa função"

//Para cada elemento do array, chama a função (callback)
//outro caso: alback também é chamado quando a respota chegar
fabricantes.forEach(imprimir) //para cada elemento do array | array.forEach(elemento, indice, array)

fabricantes.forEach(function(a){
    console.log(a)
})
console.log()
fabricantes.forEach(fabricante => console.log(fabricante))