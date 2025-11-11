 const vetorInteiro = [1,2,3,4]
 const vetorString = ["A", "B", "C"]
 const vetorDouble = [1.21, 1.22, 1.23, 1.24, 1.25]

 console.log(vetorInteiro.concat(vetorString.concat(vetorDouble)))

 console.log("2º jeito:")
 console.log(vetorInteiro.concat(vetorString, vetorDouble))