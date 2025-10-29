function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade) //this não varia
    },1000)
}   

new Pessoa