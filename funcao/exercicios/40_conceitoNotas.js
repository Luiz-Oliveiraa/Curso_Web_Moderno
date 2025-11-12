const conceitoNotas = notas=>{
    let conceito = []
    for(let nota of notas){
        if(nota<0)
            conceito.push("Nul")
        else if(nota<5)
            conceito.push("D")
        else if(nota<7)
            conceito.push("C")
        else if(nota<9)
            conceito.push("B")
        else if(nota<=10)
            conceito.push("A")
        else
            conceito.push("Nul")
    }
    return conceito
}

notas = [-5,10,2,11,5,6,7,8,9,10]
console.log(notas)
console.log(conceitoNotas(notas))