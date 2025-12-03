const contarCaractere = (c, str) => {
    const arrStr = str.split('')
    return arrStr.filter((charAtual) => charAtual === c).length

    // let contador = 0
    // let subStr = str.substring(0)
    // let i = 0

    // while (i < subStr.length) {
    //     i = subStr.indexOf(c)
    //     if (i === -1)
    //         break
    //     i++
    //     subStr = subStr.substring(i)
    //     contador++
    // }
    // return contador

    // ***************************************************************
    // VERSÃO DO CHATO GPT:
    // let contador = 0
    // let subStr = str

    // while (subStr.length > 0) {
    //     let pos = subStr.indexOf(c)
    //     if (pos === -1)
    //         break
    //
    //     pos++
    //     subStr = subStr.substring(pos)
    //     contador++
    // }
    //
    // return contador

}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))