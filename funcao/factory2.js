function criaProduto(nome, preco, desconto = 5){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criaProduto('leite', 2.50))