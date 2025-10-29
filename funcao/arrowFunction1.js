let dobro = function(a){
    return 2 * a
}

dobro = (a) => {return 2*a} //arrow sempre é amônima

dobro = a => 2*a //return implícito

let ola = function (){
    return "olá"
}

ola = () => "Olá"

ola = _=>"Olá 1" //possuí um parâmetro

console.log(ola())