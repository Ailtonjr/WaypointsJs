var app = require('./config/app_config');
var db  = require('./config/db_config');
var Produto = require('./models/Produto');
var produroController = require('./controllers/produtoController');
var produtos = require('./routes/produtoRouter');
var usuario = require('./routes/usuarioRouter');

app.get('/', function(req,res){
  res.end('Bem-vindo a API de Produtos');
});

//Rotas de Produtos
app.use('/produtos', produtos);
app.use('/usuarios', usuario);
