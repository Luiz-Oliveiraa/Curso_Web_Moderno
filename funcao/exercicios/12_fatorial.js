fatorial = numero =>{
    let fatorial
    for(i=numero-1, fatorial=numero; i>0; i--) fatorial *= i
    return fatorial
}

console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))