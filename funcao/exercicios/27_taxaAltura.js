comparaAltura = (alturaA, alturaB, taxaA, taxaB) =>{
    let difAlturas = alturaA - alturaB
    let [alturaMaior, taxaCriancaMaior, alturaMenor, taxaCriancaMenor] = [0,0,0,0]

    let vaiUltrapassar = false
    let tParaUltrapassagem = 0
    if(difAlturas!==0){
        if(difAlturas>0){
            if((taxaB-taxaA)>0){
                alturaMaior = alturaA
                alturaMenor = alturaB
                taxaCriancaMaior = taxaA
                taxaCriancaMenor = taxaB
                vaiUltrapassar = true
            }
        }
        else if((taxaA-taxaB)>0){
            alturaMaior = alturaB
            alturaMenor = alturaA
            taxaCriancaMaior = taxaB
            taxaCriancaMenor = taxaA
            vaiUltrapassar = true
        }
        if(vaiUltrapassar){
            while(alturaMenor < alturaMaior){
                alturaMenor *= 1 + taxaCriancaMenor
                alturaMaior *= 1 + taxaCriancaMaior
                tParaUltrapassagem ++
            }
        }
    }
    return([Boolean(difAlturas), vaiUltrapassar, tParaUltrapassagem])
}