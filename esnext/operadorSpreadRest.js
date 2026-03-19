//operador ... rest(juntar)/ Spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12348.99
}
const clone = {
    ativo: true,
    ...funcionario //Pega todos atributos de funcionário e 'esparrama' no objeto
}

console.log(clone)

//Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Gabriela', ...grupoA, 'Rafaela']

console.log(grupoFinal)