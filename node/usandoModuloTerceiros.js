const _ = require('lodash') //é comum usar '_' para referênciar bibliotêca 
//1. procura a pasta node_modules primeiramente na pasta atual, depois na pasta acima
//2. procura index.js em node_modules/lodash e o index carrega o resto

setInterval(() => console.log(_.random(500, 600)), 2000)