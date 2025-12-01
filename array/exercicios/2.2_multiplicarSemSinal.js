const multiplicar = function(a,b){
    let result = a 
    for(let i = 1; i<b; i++)
        result += a
    return result
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(8, 7))