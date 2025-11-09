anuidadeJuros = (mes, valorAnuidade) =>{
    mes = Math.floor(mes)
    if(mes===1){
        return valorAnuidade
    }
    if(mes>1 && mes<=12){
        return valorAnuidade*Math.pow(1.05, mes-1)
    }
}