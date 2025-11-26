const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPod Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]
const caro = prodoto => prodoto.preco > 500
const ehFragil = prodoto => prodoto.fragil

//se retornar falso, não vai estar presente no array final
console.log(produtos.filter(caro).filter(ehFragil))