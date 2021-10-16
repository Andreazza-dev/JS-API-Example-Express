const express = require('express');
const app = express();


// Importando arquivo de configuração do ambiente
global.config = {};
config = require('./configs/example.config');


/* 
 * Definir o tipo de body que será aceito pela aplicação!
 * Tipos aceitáveis: JSON | RAW | Text | URL-encoded
 * 
 * Link: http://expressjs.com/pt-br/api.html#express.json 
*/
app.use(express.json());


// Iniciando importação das rotas
require('./routes/example.route')(app);
// Finalizando importação das rotas



console.log('\n\n');
console.log('######################################################################');
console.log('##                            EXAMPLE API                           ##');
console.log('==> ENVIRONMENT: ' + config.environment);
console.log('==> ' + new Date());


// Iniciando servidor
app.listen(config.port, () => {
  console.log(`==> PORT: ${config.port}`)
  console.log('######################################################################\n\n');
})