const sequencia =  {
    _valor: 1, //conveção
    get valor() {return this._valor++}, //get e set podem ter o mesmo nome
    set valor(valor){
        if(valor>this._valor)
            this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)