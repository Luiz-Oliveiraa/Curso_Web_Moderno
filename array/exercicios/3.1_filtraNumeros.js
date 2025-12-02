const filtraNumeros = arr => {
    return arr.filter(element => Number.isFinite(element))
}

console.log(filtraNumeros(['JavaScript', 1, '3', 'web', 20]))
console.log(filtraNumeros(['a', 'c']))