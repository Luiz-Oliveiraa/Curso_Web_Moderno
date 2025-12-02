const checarAnoBissexto = ano => {
    let bissexto = false
    if(!(ano%4))
        bissexto = true
    if(!(ano%100)){
        if(!(ano%400))
            bissexto = true
        else
            bissexto = false
    }
    return bissexto
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))