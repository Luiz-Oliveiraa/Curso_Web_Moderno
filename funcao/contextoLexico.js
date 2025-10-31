const valor = 'Global'

function MinhaFuncao(){ //A funão tem um contexto no qual ela foi definida
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    MinhaFuncao()
}

exec()