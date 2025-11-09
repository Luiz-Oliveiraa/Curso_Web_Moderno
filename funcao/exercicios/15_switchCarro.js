compraCarro = carro =>{
    switch(carro){
        case "hatch":
            console.log("Compra efeturado com sucesso")
            break
        case "sedan": case "motocicleta": case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

compraCarro("hatch")
compraCarro("sedan")
compraCarro("motocicleta")
compraCarro("caminhonete")
compraCarro("bicicleta")
compraCarro("trator")