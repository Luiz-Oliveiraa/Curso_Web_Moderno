Array.prototype.forEach2 = function(calback){
    for(let i = 0; i < this.length; i++){
        calback(aprovados[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ //calback passando o proprio elemento e o indice do elemento
    console.log(`${indice+1}) ${nome}`)
})