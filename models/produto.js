  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var ProdutoSchema = new Schema({
    name:   String,
    description:  String,
    value:  String
  });

  module.exports = mongoose.model('produto', ProdutoSchema)
