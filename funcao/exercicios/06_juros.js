function jurosSimples(capitalInicial, taxaJuros, tempoDeAplicacao){
    return capitalInicial*(1+taxaJuros*tempoDeAplicacao) //montante
}

function jurosCompostos(capitalInicial, taxaJuros, tempoDeAplicacao){
    return capitalInicial*Math.pow((1+taxaJuros),tempoDeAplicacao) //aplicação sobre regime de juros compostos
}

let [capitalInicial, taxaJuros, tempoDeAplicacao] = [1000, .05, 4]
console.log(`capital inicial: `, capitalInicial)
console.log(`taxa de juros: `, taxaJuros)
console.log(`tempo de aplicação: `, tempoDeAplicacao)
console.log(`\nUsando juros Simples: R$ ${jurosSimples(capitalInicial, taxaJuros, tempoDeAplicacao)}`)
console.log(`Usando juros Compostos: R$ ${jurosCompostos(capitalInicial, taxaJuros, tempoDeAplicacao).toFixed(2)}`)