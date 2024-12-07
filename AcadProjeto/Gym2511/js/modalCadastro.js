document.addEventListener('DOMContentLoaded', () => {
  // Classe Usuario
  class Usuario {
    constructor(nome, email, senha, telefone) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.telefone = telefone;
    }

    // Método para enviar os dados do usuário para o backend
    cadastrar() {
      return fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this) // Envia a instância da classe como JSON
      })
        .then(response => response.json())
        .catch(error => {
          console.error('Erro ao cadastrar usuário:', error);
          throw error; // Repassa o erro para ser tratado na chamada do método
        });
    }
  }

  const form = document.querySelector('.membership-form'); // Seleciona o formulário

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = form.querySelector('input[name="cf-name"]').value;
    const email = form.querySelector('input[name="cf-email"]').value;
    const senha = form.querySelector('input[name="cf-password"]').value;
    const telefone = form.querySelector('input[name="cf-phone"]').value;

    // Cria uma nova instância de Usuario
    const usuario = new Usuario(nome, email, senha, telefone);

    try {
      // Chama o método cadastrar para enviar os dados
      const data = await usuario.cadastrar();
      console.log('Usuário cadastrado:', data);
      // Fecha o modal após o cadastro
      $('#membershipForm').modal('hide');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  });
});
