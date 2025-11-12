const trocaArrays = (arr1, arr2)=>{
    let n = arr1.length == arr2.length ? arr1.length : 0
    for(let i = 0; i<n; i++){
        arr1.push(arr2[0])
        arr2.push(arr1[0])
        arr1.shift()
        arr2.shift()
    }
}

let arr1 = [1,2,3,4,5]
let arr2 = [31,32,33,34,35]

console.log("Antes da troca:")
console.log(arr1)
console.log(arr2)

trocaArrays(arr1, arr2)
console.log("\nApós a troca:")
console.log(arr1)
console.log(arr2)