arredondaNota = nota =>{
    difParaArredondado = 0
    if(nota>=38){
        let i
        for(i = nota+1, difParaArredondado = 1; i%5 !==0; i++){
            difParaArredondado++;
        }
        if(difParaArredondado<3 && i<=100) nota = i
    }
    return nota;
}

notas = [25,23,38,40,50,52,53,95,98,100,70,71,72,73,74,75]
for(i in notas){
    notaArredondada = arredondaNota(notas[i])
    // console.log(`Nota ${notas[i]}, arredondado para... ${notaArredondada}: ${
    //     notaArredondada>=40 ? "Aprovado" : "Reprovado"
    // }`)

    notaArredondada = arredondaNota(notas[i])
    console.log(`Nota ${notas[i]}, arredondado para... ${notaArredondada}: `
        + (notaArredondada>=40 ? "Aprovado" : "Reprovado"))//+(concatenação) tem mais prioridade que ?:(ternário)
}