let a = 2 //é visível apenas dentro do módulo

module.exports = { //forma mais comum
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa boaNoite'
    }
}