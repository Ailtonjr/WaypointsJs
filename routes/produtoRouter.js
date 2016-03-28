var express = require('express');
var router  = express.Router();
var produroController = require('../controllers/produtoController');
var usuarioController = require('../controllers/usuarioController');

//Pega o token da header e põe na requisição
function pegarToken(req, res, next) {
  var header = req.headers['authorization'];

  if (typeof header !== 'undefined') {
    req.token  = header;
    next();
  }else {
    res.sendStatus(403);
  }
}

router.get('/', pegarToken, function (req, res) {
  var token = req.token;
  usuarioController.authorize(token, function(resp) {
    if(resp == true){
      produroController.list(function(resp) {
        res.json(resp);
      })
    }else {
      res.sendStatus(403);
    }
  })
});


router.post('/cadastrar',function (req, res) {
  var name        = req.body.name;
  var description = req.body.description;
  var value       = req.body.value;
  produroController.save(name, description, value, function(resp) {
    res.json(resp);
  });
});

router.delete('/deletar/:id',function (req, res) {
  var id        = req.params.id;
  produroController.delete(id, function(resp) {
    res.json(resp);
  });
});
module.exports = router;
