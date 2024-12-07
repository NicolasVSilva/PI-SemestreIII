class Usuario {
    // Construtor
    constructor(nome, email, senha, telefone) {
      this._nome = nome;
      this._email = email;
      this._senha = senha;
      this._telefone = telefone;
    }
  
    // Getters
    get nome() {
      return this._nome;
    }
  
    get email() {
      return this._email;
    }
  
    get senha() {
      return this._senha;
    }
  
    get telefone() {
      return this._telefone;
    }
  
    // Setters
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    set email(novoEmail) {
      this._email = novoEmail;
    }
  
    set senha(novaSenha) {
      this._senha = novaSenha;
    }
  
    set telefone(novoTelefone) {
      this._telefone = novoTelefone;
    }
  
    // Método para salvar o usuário no banco de dados
    salvarNoBanco(db) {
      return new Promise((resolve, reject) => {
        const query = `INSERT INTO Usuario (nome, email, senha, telefone) VALUES (?, ?, ?, ?)`;
        db.run(query, [this._nome, this._email, this._senha, this._telefone], function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID, nome: this._nome, email: this._email, senha: this._senha, telefone: this._telefone });
          }
        });
      });
    }
  
    // Método para atualizar os dados do usuário
    atualizarNoBanco(db, novoNome, novoEmail, novaSenha, novoTelefone) {
      return new Promise((resolve, reject) => {
        const query = `UPDATE Usuario SET nome = ?, email = ?, senha = ?, telefone = ? WHERE email = ?`;
        db.run(query, [novoNome, novoEmail, novaSenha, novoTelefone, this._email], function(err) {
          if (err) {
            reject(err);
          } else {
            this._nome = novoNome;
            this._email = novoEmail;
            this._senha = novaSenha;
            this._telefone = novoTelefone;
            resolve({ id: this.lastID, nome: novoNome, email: novoEmail, senha: novaSenha, telefone: novoTelefone });
          }
        });
      });
    }
  }
  