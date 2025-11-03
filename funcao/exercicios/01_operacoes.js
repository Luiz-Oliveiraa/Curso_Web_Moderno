function executaOperacao (operacao, a, b){
    switch (operacao){
        case 'Soma': case 'soma': case '+':
            return a + b
        case 'Subtração': case 'Subtracao': case 'subtracao': case 'subtração': case '-':
            return a-b
        case 'Multiplicação': case 'Multiplicacao': case 'multiplicação': case 'multiplicacao': case '*':
            return a*b
        case 'Divisão': case 'Divisao': case 'divisão': case 'divisao': case '/':
            return a/b
        default:
            console.log('Erro na função operação')
            return null
    }
}

console.log('Teste de Soma:')
console.log(executaOperacao('+', 6, 5))
console.log(executaOperacao('soma', 6, 5))
console.log()

console.log('Teste de Subtração:')
console.log(executaOperacao('-', 6, 5))
console.log(executaOperacao('subtração', 6, 5))
console.log()

console.log('Teste de Multiplicação:')
console.log(executaOperacao('*', 6, 5))
console.log(executaOperacao('Multiplicacao', 6, 5))
console.log()

console.log('Teste de Divisão:')
console.log(executaOperacao('/', 6, 5))
console.log(executaOperacao('divisao', 6, 5))
console.log()

console.log('Teste com valores inválidos:')
console.log(executaOperacao('%', 6, 5))
console.log(executaOperacao(8, 6, 5))
console.log()