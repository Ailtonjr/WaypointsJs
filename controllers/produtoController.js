var Produto = require('../models/Produto');

exports.save = function(name,description, value, callback) {
  new Produto({
    'name': name,
    'description': description,
    'value': value
  }).save(function(error, produto){
    if (error) {
      callback({error: 'Não foi possivel salvar'})
    }else {
      callback(produto);
    }
  });
}

exports.list = function(callback){
  Produto.find({}, function(error, produto){
    if (error) {
      callback({error: 'Não foi possivel encontrar os Produtos'});
    }else {
      callback(produto);
    }
  });
}

exports.delete = function(id, callback){
  Produto.findById(id, function(error, produto){
    if (error) {
      callback({error: 'Não foi possivel deletar'});
    }else {
      produto.remove(function(error){
        if (!error) {
          callback({resposta: 'Produto excluido com sucesso'});
        }
      });
    }
  });
}
