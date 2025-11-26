const carrinho =  [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

function extraiPreco(jsonCarr){
    return JSON.parse(jsonCarr).preco
}

const precos = carrinho.map(extraiPreco)
console.log(precos)