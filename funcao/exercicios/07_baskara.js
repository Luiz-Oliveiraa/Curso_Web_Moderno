function bhaskara (a,b,c){
    a = a ?? this.a //coalêscencia nula
    b = b ?? this.b
    c = c ?? this.c
    delta = Math.pow(b,2) - 4 * a * c
    if (delta<0)
        return "Delta é negativo"
    return[(-b +Math.sqrt(delta))/2*a, (-b -Math.sqrt(delta))/2*a]
}

equacao = {
    a:3,
    b:-5,
    c:12
}

console.log("Exemplo 1. " + bhaskara.call(equacao))

equacao.a = 1
equacao.b = -3
equacao.c = 2
console.log("\nExemplo 2. " + bhaskara.call(equacao))

let [a,b,c] = [2,5,-3]
console.log("\nExemplo 3. " + bhaskara(a,b,c))
console.log("\n" + a,b,c)
console.log(equacao)