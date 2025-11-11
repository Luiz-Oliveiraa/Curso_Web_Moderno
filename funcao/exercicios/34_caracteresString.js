function stringContida (palavra1, palavra2){
    palavra1 = palavra1.toLowerCase()
    palavra2 = palavra2.toLowerCase()
    let todosCaracteres = false
    if(palavra1.length !==0 && palavra2.length !==0){
        todosCaracteres = true
        for(let letra of palavra1){
            if(!palavra2.includes(letra)){
                todosCaracteres = false
                break
            }
        }
    }
    return todosCaracteres
}