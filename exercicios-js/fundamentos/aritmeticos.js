const [a,b,c,d] = [3,5,1,15]

const soma = a + b + c + d
console.log(soma)
console.log(-soma)

// ------------------------------------
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('03)', '3' !== 3)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('04)' , d1 === d2) //comparando endereços de memoria
console.log('05)', d1 == d2)
console.log('06)', d1.getTime() === d2.getTime())

console.log('07)', undefined == null)
console.log('08)', undefined === null)