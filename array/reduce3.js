Array.prototype.reduce2 = function(callback, acumulador){
    //acumulador, valorInicial, índice, array
    let i = (acumulador === undefined ? (acumulador = this[0], 1) : 0);
    //executa1 ',' executa2',' retorna a ultima

    //versão do professor:
    // const indiceInicial = valorInicial ? 0:1
    // let acumulador = valorInicial || this[0]

    for(; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

//desafio 1: todos os alunos são bolsistas?
//desafio 2: algum aluno é bolsista?

const resultado1 = alunos.map(a => a.bolsista).reduce2((allBolsistas, aluno)=>{
    return allBolsistas && aluno
})

const resultado2 = alunos.map(a => a.bolsista).reduce2((algumBolsista, aluno)=>{
    return algumBolsista || aluno
})

console.log(resultado1, resultado2)

const resultado3 = alunos.map(a => a.bolsista).reduce((resultDesafios, aluno, indice, arr)=>{
    // console.log(resultDesafios, aluno, indice, arr)
    if(!indice){
        resultDesafios[0] = aluno
        resultDesafios[1] = aluno
    }else{
        resultDesafios[0] &&= aluno
        resultDesafios[1] ||= aluno
    }
    return resultDesafios
},[])

console.log(resultado3)