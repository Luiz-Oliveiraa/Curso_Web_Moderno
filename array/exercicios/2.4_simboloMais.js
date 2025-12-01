const simboloMais = n => {
        let mais = ''
        for(let i=0; i<n; i++)
            mais = mais.concat('+')
        return mais
}

console.log(simboloMais(5))
console.log(simboloMais(2))