var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/Waypoints';

mongoose.connect(urlString, function(err, res) {
  if(err){
    console.log('Não foi possivel conectar a: ' + urlString);
  }else {
    console.log('Conectado a: ' + urlString);
  }
});
