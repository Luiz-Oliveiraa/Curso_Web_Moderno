const despesasTotais = function(arr){
    return arr.map(despesas => despesas = despesas.preco).reduce((somatorio, despesas) => {
        return somatorio += despesas
})
}

console.log(despesasTotais([
    {nome: 'Jornal Online', categoria: 'informação', preco: 89.99},
    {nome: 'Jornal Online', categoria: 'informação', preco: 150}
]))

console.log(despesasTotais([
    {nome: 'Galaxy s20', categoria: 'Eletrônico', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônico', preco: 30999.90}
]))