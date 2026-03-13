const schedule = require('node-schedule')

//segundo minuto hora diaDoMês mês diaDaSemana
//* * * * * *
//precisa do espaço

const tarefa1 = schedule.scheduleJob('*/5 * * * * 5', function(){ //de 5 em 5 segundos na sexta feira(string de semana)
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 11000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 19 //sempre que estiver na hora 19
regra.second = [0, 10, 20, 30, 40, 50] //sempre no segundo 30. Poderia ser um array (já atualizei para array)

//As regras funcionam simultâneamente
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa2.cancel()
    console.log('Cancelando tarefa 2')
}, 31000)