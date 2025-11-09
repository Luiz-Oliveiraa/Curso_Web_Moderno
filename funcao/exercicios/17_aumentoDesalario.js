aumentaSalario = (salario, plano) =>{
    switch(plano){
        case "A": case "a":
            salario += (salario*.1)
            break
        case "B": case "b":
            salario += (salario*.15)
            break
        case "C": case "c":
            salario += (salario*.2)
            break
        default:
            console.log("Plano inválido")
    }
    return salario
}

salario = 1500
console.log(aumentaSalario(salario, 'a'))
console.log(aumentaSalario(salario, 'A'))
console.log()

console.log(aumentaSalario(salario, 'b'))
console.log(aumentaSalario(salario, 'B'))
console.log()

console.log(aumentaSalario(salario, 'c'))
console.log(aumentaSalario(salario, 'C'))
console.log()

console.log(aumentaSalario(salario, 'd'))
console.log(aumentaSalario(salario, 'E'))
console.log()

