//Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick // [0] pq a página só tem um body
= function(e){
    console.log('O evento ocorreu')
} 