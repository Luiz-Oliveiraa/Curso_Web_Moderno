function Pessoa(nome) {
        this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`) //coloca um bind, criatura
    }
}

const p1 = new Pessoa('João')
p1.falar()