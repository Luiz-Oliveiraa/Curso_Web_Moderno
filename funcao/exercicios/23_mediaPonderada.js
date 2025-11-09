mediaPonderada = (codigo, notaA, notaB, notaC)=>{
    codigo = codigo ?? this.codigo ?? -1
    notaA = notaA ?? this.notaA
    notaB = notaB ?? this.notaB
    notaC = notaC ?? this.notaC

    if(codigo>=0){
        let notas = [notaA, notaB, notaC]
        for(let i = 1; i < notas.length; i++){ //notas.sort((a, b) => a - b)
            if (notas[i] > notas[0]) {
                const temp = notas[0]
                notas[0] = notas[i]
                notas[i] = temp
            }
        }
        notaA = notas[0]; notaB = notas[1]; notaC = notas[2]; 
        let mediaPonderada = (notaA*4 + notaB*3 + notaC*3)/10
        console.log("Código do aluno: "+codigo)
        console.log("Nota 1: "+notaA)
        console.log("Nota 2: "+notaB)
        console.log("Nota 3: "+notaC)
        console.log("->Média ponderada: "+mediaPonderada)
        if(mediaPonderada>=5)
            console.log("APROVADO")
        else
            console.log("REPROVADO")
    }
    else
        console.log("Aluno inválido")
}