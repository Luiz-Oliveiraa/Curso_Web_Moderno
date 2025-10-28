function soma(){
    let soma = 0
    for (i in arguments) { //toda função tem um arguments disponivel
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,`Teste`))
console.log(soma('A + ','B + ','C'))