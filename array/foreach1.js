const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//3 parametros: elemento, indice, array

aprovados.forEach(function(nome, indice){ //calback passando o proprio elemento e o indice do elemento
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
console.log()
aprovados.forEach(exibirAprovados)