let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo)
console.log(!!isAtivo)
console.log(!!true)

console.log('Os verdadeiros: ')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"texto")
console.log(!!Infinity)
console.log(!![])
console.log(!!{})

console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 ||' '))
console.log(('' || null || 0 ||'epa' || 123)) //retorna o primeiro valor verdadeiro
console.log(('' || null || 0 ||''))

let nome = ''
console.log(nome || 'desconhecido')