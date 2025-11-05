function formataDinheiro(valor){
    return ("R$ "+ valor.toFixed(2))
}

let valor = 40.50
console.log("valor antes da função: ", valor)
console.log("valor após função: ", formataDinheiro(valor))

let valor2 = .1+.7
console.log("valor antes da função: ", valor2)
console.log("valor após função: ", formataDinheiro(valor2))