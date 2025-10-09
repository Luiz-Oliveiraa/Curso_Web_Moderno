var funcs = [] //pode ser const
for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
