const funcaoDaSorte = num => {
    const sorteado = Math.floor(Math.random() * 10) + 1
    return num === sorteado
        ? `Parabéns! O número sorteado foi ${sorteado}`
        : `Que pena! O número sorteado foi ${sorteado}`
}

console.log(funcaoDaSorte(5))