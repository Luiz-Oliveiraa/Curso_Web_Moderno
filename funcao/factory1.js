// const prod1 = {
//     nome: '...',
//     preco: 45
// }
// const prod2 = {
//     nome: '...',
//     preco: 1234
// }

//factory simples, retorno um objeto
function criarPessoas(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoas())