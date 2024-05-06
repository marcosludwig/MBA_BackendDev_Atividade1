/* Definições das classes */

// classe Usuario
class Usuario {
  constructor(id, nome, email, senha, dataNascimento, cep, logradouro, complemento) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataNascimento = dataNascimento;
    // endereço residencial
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
  }

  // método para exibir o nome do usuário
  getNome() {
    return this.nome;
  }

  // método para definir o nome do usuário
  setNome(nome) {
    this.nome = nome;
  }

  // método para exibir o email do usuário
  getEmail() {
    return this.email;
  }

  // método para definir o email do usuário
  setEmail(email) {
    this.email = email;
  }

  getSenha() {
    return this.senha;
  }

  setSenha(senha) {
    this.senha = senha;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  setDataNascimento(dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  getCep() {
    return this.cep;
  }

  setCep(cep) {
    this.cep = cep;
  }

  getLogradouro() {
    return this.logradouro;
  }

  setLogradouro(logradouro) {
    this.logradouro = logradouro;
  }

  getComplemento() {
    return this.complemento;
  }

  setComplemento(complemento) {
    this.complemento = complemento;
  }
}

// classe Administrador herda classe Usuario
class Administrador extends Usuario {
  constructor(id, nome, email, senha, dataNascimento, cep, logradouro, complemento, nivelAcesso) {
    super(id, nome, email, senha, dataNascimento, cep, logradouro, complemento);
    this.nivelAcesso = nivelAcesso;
  }

  // método para exibir o nível de acesso do administrador
  getNivelAcesso() {
    return this.nivelAcesso;
  }

  // método para definir o nível de acesso do administrador
  setNivelAcesso(nivelAcesso) {
    this.nivelAcesso = nivelAcesso;
  }
}

module.exports = { Usuario, Administrador };