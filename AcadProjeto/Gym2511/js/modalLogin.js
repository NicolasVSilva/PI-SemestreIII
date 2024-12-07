document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form'); // Seleciona o formulário de login
  const emailInput = form.querySelector('input[name="email"]'); // Campo de email
  const senhaInput = form.querySelector('input[name="senha"]'); // Campo de senha

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = emailInput.value;
    const senha = senhaInput.value;

    // Envia os dados para o backend
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        // Exibe a mensagem de boas-vindas
        alert(data.message);  // Mostra a mensagem com o nome do usuário
        
        // Fecha o modal
        $('#loginModalLabel').modal('hide'); // Método do Bootstrap para fechar o modal
        
        // Redireciona para a página indexLogado.html
        window.location.href = 'indexLogado.html'; // Redireciona para a página desejada
      } else {
        alert(data.error); // Caso haja erro
      }
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
    });
  });
});
