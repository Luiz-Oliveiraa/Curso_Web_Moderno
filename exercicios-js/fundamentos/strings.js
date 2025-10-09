const escola = 'Cod3r'
console.log(escola.charAt(2))
console.log(escola.charAt(10))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('o'))
console.log(escola.indexOf('c'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log(escola.concat(" ".concat(escola)))
console.log(escola + ' Escola...')
console.log('3'+2) //o mais fai sentido no 'mundo da string'
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) //expressão regular de rejex

console.log('Ana, Maria, Pedro'.split(', ')) // transforma em Array  