cardapio = (codigo, quantidade=1) =>{
    switch(codigo){
        case 100:
            return quantidade*3.00
        case 200:
            return quantidade*4.00
        case 300:
            return quantidade*5.50
        case 400:
            return quantidade*7.50
        case 500:
            return quantidade*3.50
        case 600:
            return quantidade*2.80
        default:
            console.log("Produto inezistente")
    }
}
console.log(cardapio(500, 3))
console.log(cardapio(500))
console.log(cardapio(800, 5))