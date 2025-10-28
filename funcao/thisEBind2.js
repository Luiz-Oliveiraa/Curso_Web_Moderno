function Pessoa (){
    this.idade = 0

    const self = this //como é um const, esse self não vai mudar nunca
    setInterval(function(){ //dispara uma outra função a partir do intervalo que vc passou
        this.idade++
        // self.idade++
        console.log(this.idade)
    }.bind(this), 1000) //A cada 1000ms(1s) essa função será disparada
}

new Pessoa

// ctrl+alt+n = run : ctrl+alt+m = stop