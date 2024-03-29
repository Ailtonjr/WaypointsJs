var Usuario = require('../models/Usuario');

exports.save = function(nome, senha, callback) {
  Usuario.findOne({
    'nome':nome
  }, function (erro, usuario) {
    if (erro) {
      callback('Deu erro');
    }else if (usuario) {
      callback('Usuario já existe');
    }else {
      var novoUsuario = new Usuario();
      novoUsuario.nome = nome;
      novoUsuario.senha = novoUsuario.gerarSenha(senha);
      novoUsuario.token = novoUsuario.gerarToken(nome, senha);
      novoUsuario.save(function (erro, usuario) {
        if (erro) {
          callback('Deu erro');
        }else {
          callback(usuario);
        }
      });
    }
  });
}

// Login retorna um token para ser armazenado no front-end
exports.login = function (nome, senha, callback) {
  Usuario.findOne({'nome': nome},function(erro, usuario) {
    if (erro) {
      callback('Deu erro');
    }else if(usuario){
      if (usuario.validarSenha(senha)) {
        callback(usuario.token)
      }else {
        callback('Usuario ou senha inexistente');
      }
  }else {
    callback('Usuario ou senha inexistente');
  }
});
}

// Listar manda o token e ele retorna o nome do usuario
exports.list = function (token, callback) {
  Usuario.findOne({'token': token}, function(erro, usuario) {
    if (erro) {
      callback('Deu erro');
    }else if (usuario) {
      callback({'nome': usuario.nome});
    }else {
      callback('Usuario não encontrado');
    }
  });
}

exports.authorize = function(token, callback) {
  Usuario.findOne({'token': token}, function(erro, usuario) {
    if (erro) {
      callback(false);
    }else if (usuario) {
      callback(true);
    }else {
      callback(false);
    }
  });
}
