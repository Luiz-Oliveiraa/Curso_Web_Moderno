const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo
console.log(pilotos)

pilotos.push('Vestappen') //add no final
console.log(pilotos)

pilotos.shift() //remove primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //add no inicio
console.log(pilotos)

//splice adiciona e remove elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //retorna um novo array, indice 4 não entra
console.log(algunsPilotos2)