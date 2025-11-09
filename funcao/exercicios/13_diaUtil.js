tipoDeDia = dia =>{
    switch(dia){
        case 1: case 8: case 15: case 22: case 29:
        case 7: case 14: case 21: case 28:
            console.log(dia + " é Final de semana")
            break
        case 2: case 3: case 4: case 5: case 6:
        case 9: case 10: case 11: case 12: case 13:
        case 16: case 17: case 18: case 19: case 20:
        case 23: case 24: case 25: case 26: case 27:
        case 30: case 31:
            console.log(dia + " é Dia útil")
            break
        default: console.log(dia + " é Dia inválido")
    }
}

tipoDeDia(-5)
tipoDeDia(10)
tipoDeDia(22)
tipoDeDia(32)
tipoDeDia(100)
tipoDeDia(15)