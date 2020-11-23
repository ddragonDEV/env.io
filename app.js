const express = require('express');
const app = express();
const port = 3000;
const log = console.log;

const util = require('./util')






app.get('/', function(req, res){
    res.send('Hola, prueba usando este endpoint: <br><br> Para consultar el rango de primos /primos/NumeroInicial:NumeroFinal <br><br> Por Ejemplo /primos/1:10 <br><br> para consultar el JSON debes ir al endpoint /json');
});
app.get('/primos/:n::m', function(req, res) {

  
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    if (  isNaN(n) || isNaN(m) || n <= 0 || m <= 0 || m < n) {
        return res.status(422).json({errors: ['Parametro no es valido, debe ser un entero positivo']});
    }
    var c = m;
    var j = n;
    var numerosPrimos = [];
    for (; j < c; j++) {
        log(numerosPrimos);
      if (util.esPrimo(j)) {
        numerosPrimos.push(j);
        console.table(numerosPrimos)
      } 
    }
    log(numerosPrimos);
    return res.json(numerosPrimos);
})

app.get('/json', function(req, res) {

  console.table(util.resultData());
  res.json(util.resultData() );
})

app.listen(port);

