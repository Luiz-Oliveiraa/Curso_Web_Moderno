ehBissexto = ano =>{
    if(!(ano%400)) return true //! tem prioridade sobre %
    if(!(ano%100)) return false
    if(!(ano%4)) return true
    return false
}

anos = [0,1,5,32,50,100,400,800,849,850,851,852,853,854]

for(i in anos) console.log("Ano " + anos[i] + " é bissexto..." + ehBissexto(anos[i])) 