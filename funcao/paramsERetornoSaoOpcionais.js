function area (largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,5,4,7))
console.log(area(5,5))

const obj = {a:5,b:6}
console.log('\n->', area(2,obj))