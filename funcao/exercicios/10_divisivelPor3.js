divisivelPor3 = numero => numero%3 === 0 ? true : false

let numeros = []
for(let i=0;i<10;i++){
    numeros[i] = i+1
    console.log(`${numeros[i]} é divísivel por 3? ${divisivelPor3(numeros[i])}`)
}