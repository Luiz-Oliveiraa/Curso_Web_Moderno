const filtroPorDigitos = (arr, amount) => {
    return arr.filter(num => ''.concat(num).split('').length == amount)
    //VERSÃO DO CHATO GPT:
    // arr.filter(num => String(num).length === amount) 
    // //String(num) ou num.toString()
}

console.log(filtroPorDigitos([30,2,365,10,125,11], 2))
console.log(filtroPorDigitos([5,9,1,125,11], 1))