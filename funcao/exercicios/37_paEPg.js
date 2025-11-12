const pa = (n, a1,  r)=>{
    let termos = [a1]
    for(let i = 1; i<n; i++){
        termos.push(termos[i-1]+r)
    }
    return termos
}

const pg = (n, a1,  r)=>{
    let termos = [a1]
    for(let i = 1; i<n; i++){
        termos.push(termos[i-1]*r)
    }
    return termos
}

console.log(pa(5, 2, 3)) // 14, termos: 2, 5, 8, 11, 14
console.log(pg(5, 2, 2)) // 32, termos: 2, 4, 8, 16, 32