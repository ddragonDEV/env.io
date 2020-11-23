const currier = require('./currier')

const esPrimo = numero => {
    for (var i = 2; i < numero; i++){
        if (numero % i === 0){
            return false;
        }
    }
    return numero !== 1;
}

const resultData = () => {
    let response = {}
    for (var key in currier.json.data){
      let objets = {
        limit: currier.json.data[key].limit,
        over: currier.values[currier.json.data[key].over_carrier_service_id],
        under: currier.values[currier.json.data[key].under_carrier_service_id],
      }
      response[key] = objets;
    }
    return response;
}

module.exports = { esPrimo, resultData }