// Importando o mysql2
const mysql = require('mysql2');

// Criando a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1', // Endereço do servidor MySQL (localhost ou IP)
  user: 'root',      // Usuário do MySQL
  password: 'Walkerm16a300',      // Senha do MySQL (deixe em branco se não tiver senha)
  database: 'gympi' // Nome do seu banco de dados
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
});

// Fechar a conexão
connection.end();
