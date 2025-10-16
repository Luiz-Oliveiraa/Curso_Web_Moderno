function tratarErroELancar(erro){
    // throw new Error('...')
    throw "Erro Aqui na funcção imprimirNOmeGritado"
    // throw {
    //     nome: erro.name,
    //     msg: erro.msg,
    //     date: new Date
    // }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.tuUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log("finally sempre executa este bloco com erro ou não")
    }
    
}
   

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)