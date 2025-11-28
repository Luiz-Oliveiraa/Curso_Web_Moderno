const inverso = function(param){
    let tipoParametro = typeof param
    return tipoParametro === 'boolean' ? !param :
    (tipoParametro  === 'number' ? param * -1 :
        'booleano ou número esperados, mas o parâmetro é do tipo '.concat(tipoParametro))
    //obs: o parênteses está redundante, mas deixei para deixar mais legível, usei o concat ao invés do templete para praticar, o mesmo sobre ternário no lugar de if/else
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("Programação"))