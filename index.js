const { Usuario, Administrador } = require('./classes.js');

/* Atividade 1: realize a construção de um objeto completo representando um
  Usuario (com todas as informações normais que se precisaria para representar
  um usuário), com orientação a objeto. */
  
// criando um novo objeto Usuario
let usuario = new Usuario(1, "João", "joao@email.com", "senha123", "1991-09-04", "90480-003", "Av. Carlos Gomes, 590", "Apto 305");

// exibindo o objeto 'usuario' inteiro
console.log(usuario);

// exibindo o nome do usuário
console.log(usuario.getNome());

// definindo um novo nome para o usuário
usuario.setNome("João Silva");

// exibindo o novo nome do usuário
console.log(usuario.getNome());

// forma um JSON a partir do objeto usuario 'stringificado'
let jsonUsuario = JSON.stringify(usuario);

// exibe o string em formato JSON do objeto 'usuario'
console.log(jsonUsuario);

// cria um objeto 'admin' da classe Administrador
let admin = new Administrador(2, "Arthur", "arthur@email.com", "senhaAbc", "2006-09-04", "90640-002", "R. Vicente da Fontoura, 2089", "", "Médio");

// exibe o objeto 'admin' inteiro
console.log(admin);

// exibindo o nome do administrador
console.log(admin.getNome());

// definindo um novo nome para o administrador
admin.setNome("Arthur Alves");

// exibindo o novo nome do administrador
console.log(admin.getNome());

// cria um novo usuário por um string formatado como JSON
let jsonNovoUsuario = '{"id":3,"nome":"Luzia","email":"luzia@email.com","senha":"Abcd1234","dataNascimento":"1999-05-04","cep":"93410-001","logradouro":"Av. Bento Gonçalves, 555","complemento":"Apto 401"}';

// realiza o parse sobre um objeto temporário
let obj = JSON.parse(jsonNovoUsuario);

// cria um novo objeto Usuario a partir dos elementos do objeto temporario
let novoUsuario = new Usuario(obj.id, obj.nome, obj.email, obj.senha, obj.dataNascimento, obj.cep, obj.logradouro, obj.complemento);

// exibe o objeto novoUsuario inteiro
console.log(novoUsuario);

// definindo um novo nome para novoUsuario
novoUsuario.setNome("Luzia Santana");

// exibindo o novo nome de novoUsuario
console.log(novoUsuario.getNome());