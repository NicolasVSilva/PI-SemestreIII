// Sua classe Exercicio e ListaDeExercicios
class Exercicio {
    constructor(nome, descricao, categoria, urlImage) {
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.urlImage = urlImage;
    }
}

class ListaDeExercicios {
    constructor() {
        this.lista = [];
    }

    adicionarExercicio(exercicio) {
        this.lista.push(exercicio);
    }

    buscarPorCategoria(categoria) {
        return this.lista.filter(ex => ex.categoria === categoria);
    }
}

// Criando a lista de exercícios e adicionando os exercícios
const listaExercicios = new ListaDeExercicios();
listaExercicios.adicionarExercicio(new Exercicio("Rosca alternada", "Exercício para bíceps com halteres alternados.", "Treino de Braço", "img/Rosca-Alternada-com-Halteres.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Rosca martelo no banco inclinado", "Foca no bíceps e antebraço com halteres.", "Treino de Braço", "img/rosca-biceps-martelo-com-halteres-no-banco-inclinado.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Rosca direta barra W", "Exercício tradicional para bíceps com barra W.", "Treino de Braço", "img/ez-barbell-curl.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Rosca na polia", "Exercício para bíceps com uso de polia.", "Treino de Braço", "img/cable-hammer-curl-with-rope.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Rosca martelo na polia", "Rosca martelo utilizando a polia.", "Treino de Braço", "img/cable-curl.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Rosca lateral alta na polia", "Rosca lateral alta para trabalhar bíceps e antebraços.", "Treino de Braço", "img/cable-overhead-curl.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Puxada aberta na polia", "Exercício de puxada para as costas com pegada aberta.", "Treino de Costas", "img/costas-puxada-aberta-com-barra-no-pulley.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Remada Curvada", "Exercício para costas, realizando remada curvada com barra.", "Treino de Costas", "img/costas-remada-curvada.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Remada martelo no banco inclinado", "Remada com pegada de martelo para trabalhar as costas.", "Treino de Costas", "img/costas-remada-martelo-no-banco-inclinado-com-halteres.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Remada na polia baixa", "Remada com polia baixa para trabalhar os músculos das costas.", "Treino de Costas", "img/cable-straight-back-seated-row.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Remada serrote no banco", "Exercício para costas com movimento de serrote no banco.", "Treino de Costas", "img/costas-remada-unilateral-com-halter-serrote-no-banco.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Pulldown", "Puxada com barra para trabalhar a parte superior das costas.", "Treino de Costas", "img/pulldown.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Desenvolvimento com halteres", "Exercício para ombros com halteres, no banco ou em pé.", "Treino de Ombros", "img/dumbbell-seated-shoulder-press.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Elevação lateral na polia", "Exercício de elevação lateral utilizando a polia para ombros.", "Treino de Ombros", "img/elevacao-lateral-inclinada.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Elevação lateral com halteres", "Elevação lateral com halteres, trabalhando os músculos dos ombros.", "Treino de Ombros", "img/dumbbell-lateral-raise.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Elevação frontal com halteres", "Exercício de elevação frontal com halteres para os ombros.", "Treino de Ombros", "img/dumbbell-front-raise.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Remada alta com halteres", "Exercício de remada alta utilizando halteres para ombros e trapézio.", "Treino de Ombros", "img/dumbbell-upright-row.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Voador invertido", "Exercício para trabalhar a parte posterior dos ombros.", "Treino de Ombros", "img/lever-seated-reverse-fly-parallel-grip.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Cruci. reto c/ Halter", "Exercício de peito com halteres, deitado no banco reto.", "Treino de Peito", "img/crucifixo-com-halteres.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Sup. inclinado c/ Halter", "Supino inclinado com halteres, focando no peito superior.", "Treino de Peito", "img/supino-inclinado-com-halteres.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Sup. reto c/ Barra", "Supino reto com barra, tradicional para o peito.", "Treino de Peito", "img/supino-reto.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Crucifixo crossover declinado", "Exercício de peito no crossover com banco declinado.", "Treino de Peito", "img/crucifixo-crossover-declinado.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Flexão de braço", "Exercício clássico de peito, tríceps e ombro, realizado no solo.", "Treino de Peito", "img/flexao-de-bracos.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Parelelas", "Exercício de peito e tríceps utilizando barras paralelas.", "Treino de Peito", "img/paralelas.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Cadeira extensora", "Exercício para quadríceps utilizando a cadeira extensora.", "Treino de Pernas", "img/cadeira-extensora.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Agachamento búlgaro com barra", "Agachamento unilateral com barra, trabalhando glúteos e quadríceps.", "Treino de Pernas", "img/agachamento-bulgaro-com-barra.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Leg-press", "Exercício de pernas utilizando a máquina de leg-press para quadríceps, glúteos e coxas.", "Treino de Pernas", "img/sled-45-leg-press-side-pov.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Elevação de panturrilha sentado na máquina", "Exercício para panturrilhas sentado na máquina específica.", "Treino de Pernas", "img/lever-seated-calf-raise-.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Elevação pélvica", "Exercício para glúteos e quadríceps com foco na elevação da pelve.", "Treino de Glúteos", "img/elevacao-pelvica.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Agachamento frontal com barra", "Agachamento com barra na frente do corpo, focando em quadríceps e glúteos.", "Treino de Pernas", "img/agachamento-frontal-com-barra.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Puxada de Tríceps na polia", "Exercício para tríceps utilizando a polia alta.", "Treino de Tríceps", "img/triceps-puxada-no-pulley.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Tríceps testa no banco inclinado", "Tríceps testa realizado no banco inclinado com barra ou halteres.", "Treino de Tríceps", "img/triceps-testa-no-banco-inclinado.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Tríceps testa na polia", "Exercício de tríceps testa com polia.", "Treino de Tríceps", "img/Triceps-testa-na-Polia.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Extensão de tríceps com halter no banco", "Extensão de tríceps realizada no banco com halteres.", "Treino de Tríceps", "img/dumbbell-seated-triceps-extension.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Tríceps no banco", "Exercício de tríceps utilizando o banco, também conhecido como dips no banco.", "Treino de Tríceps", "img/bench-dips-on-floor.gif"));
listaExercicios.adicionarExercicio(new Exercicio("Tríceps coice", "Exercício para tríceps com movimento de extensão para trás com halteres.", "Treino de Tríceps", "img/dumbbell-kickback.gif"));
// Adicionar mais exercícios conforme necessário...

// Recuperando a pilha de exercícios da localStorage
let pilhaDeExercicios = JSON.parse(localStorage.getItem('pilhaExercicios')) || [];

// Função para exibir os exercícios na página
function exibirExercicios() {
    const container = document.getElementById('listaExercicios');
    
    // Verificar se a lista de exercícios não está vazia
    if (listaExercicios.lista.length === 0) {
        container.innerHTML = '<p>Nenhum exercício disponível.</p>';
        return;
    }

    listaExercicios.lista.forEach(exercicio => {
        const divExercicio = document.createElement('div');
        divExercicio.classList.add('col-lg-4', 'col-md-6', 'col-12', 'mb-4');

        divExercicio.innerHTML = `
            <div class="exercise-card">
                <img src="${exercicio.urlImage}" alt="${exercicio.nome}" class="img-fluid">
                <h4>${exercicio.nome}</h4>
                <p>${exercicio.descricao}</p>
            </div>
        `;
        container.appendChild(divExercicio);
    });
}

// Função para preencher o select com os exercícios
function preencherSelect() {
    const selectElement = document.getElementById('exercicioSelect');

    // Limpa o select antes de adicionar os novos exercícios
    selectElement.innerHTML = '<option value="">Escolha um exercício</option>';

    listaExercicios.lista.forEach(exercicio => {
        const option = document.createElement('option');
        option.value = exercicio.nome;
        option.textContent = exercicio.nome;
        selectElement.appendChild(option);
    });
}

// Função para adicionar o exercício selecionado à pilha
function adicionarAosExercicios(event) {
    event.preventDefault(); // Evita que a página seja recarregada

    const selectElement = document.getElementById('exercicioSelect');
    const nomeExercicio = selectElement.value;

    // Verifica se um exercício foi selecionado
    if (nomeExercicio) {
        const exercicio = listaExercicios.lista.find(ex => ex.nome === nomeExercicio);

        if (exercicio && !pilhaDeExercicios.some(ex => ex.nome === exercicio.nome)) {
            pilhaDeExercicios.push(exercicio);
            exibirPilha();
            localStorage.setItem('pilhaExercicios', JSON.stringify(pilhaDeExercicios)); // Salvando no localStorage
        }
    } else {
        alert("Selecione um exercício antes de adicionar à pilha.");
    }
}

// Função para exibir a pilha de exercícios
function exibirPilha() {
    const pilhaContainer = document.getElementById('pilhaExercicios');
    pilhaContainer.innerHTML = '';

    if (pilhaDeExercicios.length === 0) {
        pilhaContainer.innerHTML = '<p>Não há exercícios na pilha.</p>';
        return;
    }

    pilhaDeExercicios.forEach(exercicio => {
        const divExercicio = document.createElement('div');
        divExercicio.classList.add('mb-2');
        divExercicio.innerHTML = `
            <div class="exercise-card">
                <h5>${exercicio.nome}</h5>
                <p>${exercicio.descricao}</p>
            </div>
        `;
        pilhaContainer.appendChild(divExercicio);
    });
}

// Função para limpar a pilha
function limparPilha() {
    pilhaDeExercicios = [];
    exibirPilha();
    localStorage.setItem('pilhaExercicios', JSON.stringify(pilhaDeExercicios)); // Salvando pilha vazia
}

// Função que exibe os exercícios na página
function treinar() {
    if (pilhaDeExercicios.length > 0) {
        // Salvar a pilha de exercícios no localStorage
        localStorage.setItem('pilhaExercicios', JSON.stringify(pilhaDeExercicios));
        console.log('Pilha salva:', pilhaDeExercicios);  // Verificando o conteúdo da pilha no console
        
        // Redirecionar para a página meuTreino.html
        window.location.href = 'meuTreino.html';
    } else {
        alert("Sua pilha está vazia! Adicione exercícios para treinar.");
    }
}

// Chama a função para exibir os exercícios ao carregar a página
window.onload = function() {
    exibirExercicios();
    preencherSelect();
    exibirPilha(); // Exibir a pilha salva
};

document.getElementById('adicionarPilha').addEventListener('click', adicionarAosExercicios);
document.getElementById('limparPilha').addEventListener('click', limparPilha);
