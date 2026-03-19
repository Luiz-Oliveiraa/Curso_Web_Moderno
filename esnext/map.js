const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chaveVariaveis = new Map ([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

console.log()
chaveVariaveis.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log()
console.log(chaveVariaveis.has(123))
console.log(chaveVariaveis.delete(123))
console.log(chaveVariaveis.has(123))
console.log(chaveVariaveis.size)

chaveVariaveis.set(123, 'a')
chaveVariaveis.set(123, 'b')
console.log(chaveVariaveis)
