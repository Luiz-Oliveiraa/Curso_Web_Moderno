const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares/valor
const cliente = {
    nome: 'Claudio',
    idade: 32,
    peso: 90,
    endereco: {
        lagradouro: 'Rua genérica',
        numero: 3
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)