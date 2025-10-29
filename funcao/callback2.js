const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callbak

//filtra os elementos do array com base num critérito, retorna true ou false, para verificar se o elemento vai estar no array
const notasBaixas2 = notas.filter(function (nota){
    return nota <7 //true of false
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasBaixaConst = nota => nota<7 //true or false
const notasBaixas4 = notas.filter(notasBaixaConst)
console.log(notasBaixas4)

