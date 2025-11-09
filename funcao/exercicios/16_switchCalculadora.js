calculadora = (x, y, operacao) =>{
    switch(operacao){
        case '+':
            return x+y
        case '-':
            return x-y
        case '*':
            return x*y
        case '/':
            return x/y
        default:
            return "Erro em calculadora, Operação inválida."
    }
}

console.log(calculadora(5,7,"+"))
console.log(calculadora(5,7,"-"))
console.log(calculadora(5,7,"*"))
console.log(calculadora(5,7,"?"))
console.log(calculadora(5,7,"%"))
console.log(calculadora(5,7,"/"))
