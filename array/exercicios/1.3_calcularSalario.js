const calcularSalario = (horas, ganhoHora) => 'Salário igual a R$ '.concat((horas*ganhoHora).toFixed(2))

console.log(calcularSalario(150, 40.5))