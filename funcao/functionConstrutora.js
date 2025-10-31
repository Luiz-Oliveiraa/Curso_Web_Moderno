function Carro (velocidadeMaxima = 20, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = function(){ //this indica que é uma função pública DA CLASSE    
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){ //privado, vc usaria let ou const no lugar de this
        return velocidadeAtual 
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)