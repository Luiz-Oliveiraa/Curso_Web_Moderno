class Pessoa {
    constructor (nome){ // construtor para inicializar a variavel
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`) //coloca um bind, criatura
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa =  nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //tem um contexto léxico mais abrangente
    }
}

const p2= criarPessoa('Juca')
p2.falar()