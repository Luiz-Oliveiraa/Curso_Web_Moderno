const removerVogais = str => {
    return str.replace(/[aeiou]/gi, '') // 'g' global, 'i' case-insensitive (maiusculo e minusculo são o mesmo caractere)
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))