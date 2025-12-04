const turma = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7,7,8,9]
}

const melhorAluno = objAlunos => {
    let maiorMedia = -Infinity
    let nomeDoMelhor  = null
    for(const [aluno, notas] of Object.entries(objAlunos)){
        let mediaEntradaAtual = notas.reduce((somatorio, nota) => somatorio + nota, 0) /notas.length
        if (mediaEntradaAtual > maiorMedia) {
            maiorMedia = mediaEntradaAtual
            nomeDoMelhor  = aluno
        }
    }
    return {nome: nomeDoMelhor, media: maiorMedia}
}

console.log(melhorAluno(turma))