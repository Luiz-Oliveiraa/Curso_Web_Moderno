const inverter = obj => {
    const objInvertido = new Object()
    for(const [key, value] of Object.entries(obj))
        objInvertido[value] = key
    return objInvertido
}

console.log(inverter({a: 1, b:2, c:3}))