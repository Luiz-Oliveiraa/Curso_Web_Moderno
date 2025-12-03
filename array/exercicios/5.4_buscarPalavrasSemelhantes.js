const buscarPalavrasSemelhantes = (str, arr) => {
    const radical = palavra => palavra.indexOf(str) >= 0
    return arr.filter(radical)
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))