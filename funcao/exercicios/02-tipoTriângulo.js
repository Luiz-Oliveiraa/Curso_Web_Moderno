function tipoTriangulo(a,b,c){
    if(a === b){
        if(b==c){
            return 'Equilátero'
        }
        return 'Escaleno'
    }else{
        if(b===c || a===c){
            return 'Escaleno'
        }
        return 'Isósceles'
    }
}

let lados = [5, 5, 5]
console.log(`A: ${lados[0]}\tB: ${lados[1]}\tC: ${lados[2]}\n${tipoTriangulo(lados[0],lados[1],lados[2])}\n`)

lados = [5, 10, 20]
console.log(`A: ${lados[0]}\tB: ${lados[1]}\tC: ${lados[2]}\n${tipoTriangulo(lados[0],lados[1],lados[2])}\n`)

lados = [5, 10, 10]
console.log(`A: ${lados[0]}\tB: ${lados[1]}\tC: ${lados[2]}\n${tipoTriangulo(lados[0],lados[1],lados[2])}\n`)

lados = [10, 5, 10]
console.log(`A: ${lados[0]}\tB: ${lados[1]}\tC: ${lados[2]}\n${tipoTriangulo(lados[0],lados[1],lados[2])}\n`)

lados = [10, 10, 5]
console.log(`A: ${lados[0]}\tB: ${lados[1]}\tC: ${lados[2]}\n${tipoTriangulo(lados[0],lados[1],lados[2])}\n`)