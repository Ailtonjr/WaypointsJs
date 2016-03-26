var express = require('express');
var router  = express.Router();
var produroController = require('../controllers/produtoController');


router.get('/',function (req, res) {
  produroController.list(function(resp) {
    res.json(resp);
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
