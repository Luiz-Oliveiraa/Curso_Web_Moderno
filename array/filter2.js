Array.prototype.filter2 = function(callback){
    const filtrado = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            filtrado.push(this[i])
    }
    return filtrado
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPod Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
const caro = prodoto => prodoto.preco > 500
const ehFragil = prodoto => prodoto.fragil

//se retornar falso, não vai estar presente no array final
console.log(produtos.filter2(caro).filter2(ehFragil))