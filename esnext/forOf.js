for(let letra of 'Cod3r'){
    console.log(letra)
}

console.log()
const assuntosEcma = ['Map', 'Set', 'Promisse']
for(let i in assuntosEcma) {
    console.log(i)
}

console.log()
for(let i of assuntosEcma){
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

console.log()
for(i of assuntosMap){
    console.log(i)
}

console.log()
for(i of assuntosMap.keys()){
    console.log(i)
}

console.log()
for(i of assuntosMap.values()){
    console.log(i)
}

console.log()
for ([ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

console.log()
const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}