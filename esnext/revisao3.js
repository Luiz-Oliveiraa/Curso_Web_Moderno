//ES8: Object.value/ Object.entries
const  obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

//Melhorias na natação literal
console.log()
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
//Class vai ser convertido para uma função
class Animal{}
class Cachorro extends Animal {//Herança
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())