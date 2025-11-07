function analisePontuacao (pontuacao, separador){
    //.SPLIT
    const valores = pontuacao.split(separador).map(Number)//muito importante converter para Number
    let pior = valores.shift() ?? 0 //shift pega o primeiro elemento e remove
    let recorde = pior
    let quebraDeRecorde = 0
    let analise = [pior, quebraDeRecorde]

    for(i in valores){ //i é uma string, não um número
        pior = valores[i]<pior ? valores[i] : pior
        if(valores[i]>recorde){
            recorde = valores[i]
            quebraDeRecorde++
        }
        analise[0] = pior
        analise[1] =  quebraDeRecorde
    }
    return analise
}

console.log(analisePontuacao('1,5,4,8,3,25,1,4', ','));
console.log(analisePontuacao('', ','));