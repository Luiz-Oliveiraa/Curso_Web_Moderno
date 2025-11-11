printSequenciaNumeros = (ini, end)=>{
    sequencia = ""
    while(ini<=end){
        sequencia += ini
        sequencia += " "
        ini++
    }
    console.log(sequencia)
    return sequencia
}

printSequenciaNumeros(1,50)