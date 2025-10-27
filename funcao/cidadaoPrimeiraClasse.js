//funcao em js é first-class object (Citizens)
//Higher-order function

function fun1 (){}

//armazenar uma função em variável
const fun2 = function(){}

//armazenar uma função em array
const array = [function(a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())

//passar uma função como parâmetro para uma função
function run(fun){
    fun()
}

run(function(){console.log("Executando...")})

//uma funcção pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4) //resultado de soma é uma função -> função(4)