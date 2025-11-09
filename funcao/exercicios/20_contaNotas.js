contaNotas = valor =>{
    valor = Math.floor(valor)
    let contCem = 0
    let contCinquenta = 0
    let contDez = 0
    let contCinco = 0
    let contUm = 0
    if(valor>=100){
        contCem = Math.floor(valor/100)
        valor -= (contCem * 100)
        console.log(contCem + " nota(s) de 100")
    }
    if(valor>=50){
        contCinquenta = Math.floor(valor/50)
        valor -= (contCinquenta * 50)
        console.log(contCinquenta + " nota(s) de 50")
    }
    if(valor>=10){
        contDez = Math.floor(valor/10)
        valor -= (contDez * 10)
        console.log(contDez + " nota(s) de 10")
    }
    if(valor>=5){
        contCinco = Math.floor(valor/5)
        valor -= (contCinco * 5)
        console.log(contCinco + " nota(s) de 5")
    }
    if(valor>=1){
        contUm = Math.floor(valor/1)
        valor -= (contUm * 1)
        console.log(contUm + " nota(s) de 1")
    }
}

valor = 18
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 18.50
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 27
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 75.5
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 100
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 136.5
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 178.89
console.log("Valor: " + valor)
contaNotas(valor)
console.log()

valor = 1473.49
console.log("Valor: " + valor)
contaNotas(valor)
console.log()