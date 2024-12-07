import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());  // Middleware para lidar com dados JSON

// Conectar ao banco SQLite
const { Database } = sqlite3;
const db = new Database('./meu_banco_de_dados.db');

// Criar a tabela de usuários (se não existir)
db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT, telefone TEXT)');

// Criar a tabela de exercícios (se não existir)
db.run(`
  CREATE TABLE IF NOT EXISTS exercicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    descricao TEXT,
    categoria TEXT,
    imagem TEXT
  )
`);
const insertExercises = `INSERT INTO exercicios (nome, descricao, categoria, imagem) VALUES
("Rosca alternada", "Exercício para bíceps com halteres alternados.", "Treino de Braço", "img/Rosca-Alternada-com-Halteres.gif"),
("Rosca martelo no banco inclinado", "Foca no bíceps e antebraço com halteres.", "Treino de Braço", "img/rosca-biceps-martelo-com-halteres-no-banco-inclinado.gif"),
("Rosca direta barra W", "Exercício tradicional para bíceps com barra W.", "Treino de Braço", "img/ez-barbell-curl.gif"),
("Rosca na polia", "Exercício para bíceps com uso de polia.", "Treino de Braço", "img/cable-hammer-curl-with-rope.gif"),
("Rosca martelo na polia", "Rosca martelo utilizando a polia.", "Treino de Braço", "img/cable-curl.gif"),
("Rosca lateral alta na polia", "Rosca lateral alta para trabalhar bíceps e antebraços.", "Treino de Braço", "img/cable-overhead-curl.gif"),
("Puxada aberta na polia", "Exercício de puxada para as costas com pegada aberta.", "Treino de Costas", "img/costas-puxada-aberta-com-barra-no-pulley.gif"),
("Remada Curvada", "Exercício para costas, realizando remada curvada com barra.", "Treino de Costas", "img/costas-remada-curvada.gif"),
("Remada martelo no banco inclinado", "Remada com pegada de martelo para trabalhar as costas.", "Treino de Costas", "img/costas-remada-martelo-no-banco-inclinado-com-halteres.gif"),
("Remada na polia baixa", "Remada com polia baixa para trabalhar os músculos das costas.", "Treino de Costas", "img/cable-straight-back-seated-row.gif"),
("Remada serrote no banco", "Exercício para costas com movimento de serrote no banco.", "Treino de Costas", "img/costas-remada-unilateral-com-halter-serrote-no-banco.gif"),
("Pulldown", "Puxada com barra para trabalhar a parte superior das costas.", "Treino de Costas", "img/pulldown.gif"),
("Desenvolvimento com halteres", "Exercício para ombros com halteres, no banco ou em pé.", "Treino de Ombros", "img/dumbbell-seated-shoulder-press.gif"),
("Elevação lateral na polia", "Exercício de elevação lateral utilizando a polia para ombros.", "Treino de Ombros", "img/elevacao-lateral-inclinada.gif"),
("Elevação lateral com halteres", "Elevação lateral com halteres, trabalhando os músculos dos ombros.", "Treino de Ombros", "img/dumbbell-lateral-raise.gif"),
("Elevação frontal com halteres", "Exercício de elevação frontal com halteres para os ombros.", "Treino de Ombros", "img/dumbbell-front-raise.gif"),
("Remada alta com halteres", "Exercício de remada alta utilizando halteres para ombros e trapézio.", "Treino de Ombros", "img/dumbbell-upright-row.gif"),
("Voador invertido", "Exercício para trabalhar a parte posterior dos ombros.", "Treino de Ombros", "img/lever-seated-reverse-fly-parallel-grip.gif"),
("Cruci. reto c/ Halter", "Exercício de peito com halteres, deitado no banco reto.", "Treino de Peito", "img/crucifixo-com-halteres.gif"),
("Sup. inclinado c/ Halter", "Supino inclinado com halteres, focando no peito superior.", "Treino de Peito", "img/supino-inclinado-com-halteres.gif"),
("Sup. reto c/ Barra", "Supino reto com barra, tradicional para o peito.", "Treino de Peito", "img/supino-reto.gif"),
("Crucifixo crossover declinado", "Exercício de peito no crossover com banco declinado.", "Treino de Peito", "img/crucifixo-crossover-declinado.gif"),
("Flexão de braço", "Exercício clássico de peito, tríceps e ombro, realizado no solo.", "Treino de Peito", "img/flexao-de-bracos.gif"),
("Parelelas", "Exercício de peito e tríceps utilizando barras paralelas.", "Treino de Peito", "img/paralelas.gif"),
("Cadeira extensora", "Exercício para quadríceps utilizando a cadeira extensora.", "Treino de Pernas", "img/cadeira-extensora.gif"),
("Agachamento búlgaro com barra", "Agachamento unilateral com barra, trabalhando glúteos e quadríceps.", "Treino de Pernas", "img/agachamento-bulgaro-com-barra.gif"),
("Leg-press", "Exercício de pernas utilizando a máquina de leg-press para quadríceps, glúteos e coxas.", "Treino de Pernas", "img/sled-45-leg-press-side-pov.gif"),
("Elevação de panturrilha sentado na máquina", "Exercício para panturrilhas sentado na máquina específica.", "Treino de Pernas", "img/lever-seated-calf-raise-.gif"),
("Elevação pélvica", "Exercício para glúteos e quadríceps com foco na elevação da pelve.", "Treino de Glúteos", "img/elevacao-pelvica.gif"),
("Agachamento frontal com barra", "Agachamento com barra na frente do corpo, focando em quadríceps e glúteos.", "Treino de Pernas", "img/agachamento-frontal-com-barra.gif"),
("Puxada de Tríceps na polia", "Exercício para tríceps utilizando a polia alta.", "Treino de Tríceps", "img/triceps-puxada-no-pulley.gif"),
("Tríceps testa no banco inclinado", "Tríceps testa realizado no banco inclinado com barra ou halteres.", "Treino de Tríceps", "img/triceps-testa-no-banco-inclinado.gif"),
("Tríceps testa na polia", "Exercício de tríceps testa com polia.", "Treino de Tríceps", "img/Triceps-testa-na-Polia.gif"),
("Extensão de tríceps com halter no banco", "Extensão de tríceps realizada no banco com halteres.", "Treino de Tríceps", "img/dumbbell-seated-triceps-extension.gif"),
("Tríceps no banco", "Exercício de tríceps utilizando o banco, também conhecido como dips no banco.", "Treino de Tríceps", "img/bench-dips-on-floor.gif"),
("Tríceps coice", "Exercício para tríceps com movimento de extensão para trás com halteres.", "Treino de Tríceps", "img/dumbbell-kickback.gif");
`

// Rota para cadastrar novo usuário
app.post('/cadastrar', (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  if (!nome || !email || !senha || !telefone) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const stmt = db.prepare('INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)');

  stmt.run(nome, email, senha, telefone, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Usuário cadastrado com sucesso', id: this.lastID });
  });

  stmt.finalize();
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Verifica se ambos os campos foram preenchidos
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  db.get('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (row) {
      // Se o usuário for encontrado, retorna uma mensagem com o nome do usuário
      res.status(200).json({ message: `Bem-vindo, ${row.nome}!` });
    } else {
      // Se as credenciais estiverem erradas
      res.status(401).json({ error: 'Email ou senha inválidos' });
    }
  });
});

// Rota para adicionar exercícios
app.post('/adicionar-exercicio', (req, res) => {
  const { nome, descricao, categoria, imagem } = req.body;

  if (!nome || !descricao || !categoria || !imagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios para o exercício' });
  }

  const stmt = db.prepare('INSERT INTO exercicios (nome, descricao, categoria, imagem) VALUES (?, ?, ?, ?)');

  stmt.run(nome, descricao, categoria, imagem, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Exercício cadastrado com sucesso', id: this.lastID });
  });

  stmt.finalize();
});
// Executa o comando de inserção
db.run(insertExercises);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
