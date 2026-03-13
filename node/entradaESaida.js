const anonimo = process.argv.indexOf('-a') !== -1 //flag do node no terminal, -a é modo anonimo
//console.log("anonimo") //executando node .\entradaESaida.js -a nessa pasta, é para dar true

if(anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Escreva seu nome: ')
    process.stdin.on('data', data => { //data é quando vc digita e aperta enter (o enter também é armazenado na variável)
        const nome = data.toString().trim() //trim tira o enter e o espaço(caso o cursor tenha clicado no terminal)

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}