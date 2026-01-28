const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarioMenorSalario = response.data.reduce((menor, atual) => {
        // só considera mulheres da China
        if (atual.genero === 'F' && atual.pais === 'China') {
            // se ainda não tem menor OU o salário atual é menor
            if (menor === null || atual.salario < menor.salario) {
                return atual
            }
        }
        // mantém o menor atual
        return menor
    }, null)

    console.log(funcionarioMenorSalario)
})