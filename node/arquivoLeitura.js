const { log } = require('console')
const fs = require('fs') //modulo interno do node

const caminho = __dirname + '/arquivo.json' //__dirname é o nome da pasta(diretório) atual

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...  //inclusive a linha 16 pode ser executada antes
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //err = erro
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // ':' é interpolação?
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})