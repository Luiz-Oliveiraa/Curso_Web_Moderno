const paresIndexPares = arr =>{
    return arr.filter((element, i) => (!(i%2) && !(element%2)))
}

console.log(paresIndexPares([1,2,3,4]))
console.log(paresIndexPares([10,70,22,43]))