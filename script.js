"use strict"; // Ativa o modo estrito do JavaScript, ajudando a evitar erros comuns.



// ============================================================

// CATEGORIAS PADRÃO

// ============================================================



// Armazena as categorias que já vêm disponíveis no jogo.

// Cada categoria possui um identificador, um nome e uma lista de palavras.

const BUILT_IN_CATEGORIES = [

  { id: "animais", name: "Animais", words: ["ABELHA","ÁGUIA","ALPACA","BALEIA","CAMELO","CANGURU","CAPIVARA","CAVALO","COELHO","ELEFANTE","FLAMINGO","GIRAFA","GOLFINHO","JAGUAR","LONTRA","MACACO","PANTERA","PINGUIM","RAPOSA","TARTARUGA"] },

  { id: "frutas", name: "Frutas", words: ["ABACATE","ABACAXI","ACEROLA","AMORA","BANANA","CAJU","CARAMBOLA","CEREJA","COCO","FIGO","FRAMBOESA","GOIABA","JABUTICABA","LARANJA","MAMÃO","MANGA","MARACUJÁ","MELANCIA","MORANGO","PÊSSEGO"] },

  { id: "paises", name: "Países", words: ["ALEMANHA","ANGOLA","ARGENTINA","AUSTRÁLIA","BÉLGICA","BRASIL","CANADÁ","CHILE","CHINA","COLÔMBIA","EGITO","ESPANHA","FRANÇA","GRÉCIA","ÍNDIA","ITÁLIA","JAPÃO","MÉXICO","PORTUGAL","SUÉCIA"] },

  { id: "profissoes", name: "Profissões", words: ["ADVOGADO","ARQUITETO","ARTISTA","BOMBEIRO","CHEF","CIENTISTA","DENTISTA","ENFERMEIRO","ENGENHEIRO","FOTÓGRAFO","JORNALISTA","MÉDICO","MÚSICO","PADEIRO","PILOTO","PROFESSOR","PROGRAMADOR","PSICÓLOGO","VETERINÁRIO","ZOÓLOGO"] },

  { id: "esportes", name: "Esportes", words: ["ATLETISMO","BASQUETE","BEISEBOL","BOXE","CICLISMO","CORRIDA","ESCALADA","ESGRIMA","FUTEBOL","GINÁSTICA","GOLFE","HANDEBOL","JUDÔ","NATAÇÃO","PATINAÇÃO","RÚGBI","SURFE","TÊNIS","VÔLEI","XADREZ"] },

  { id: "comidas", name: "Comidas", words: ["ARROZ","BISCOITO","BOLO","BRIGADEIRO","CHURRASCO","COXINHA","EMPADA","FEIJOADA","HAMBÚRGUER","LASANHA","MACARRÃO","OMELETE","PANQUECA","PASTEL","PIZZA","PUDIM","RISOTO","SALADA","SANDUÍCHE","SOPA"] },

  { id: "natureza", name: "Natureza", words: ["ARCO-ÍRIS","CACHOEIRA","CAMPO","CAVERNA","DESERTO","ESTRELA","FLORESTA","ILHA","LAGOA","MONTANHA","NEBLINA","OCEANO","PEDRA","PLANÍCIE","PRAIA","RIO","TEMPESTADE","TROVÃO","VALE","VULCÃO"] },

  { id: "objetos", name: "Objetos", words: ["AGULHA","CADEIRA","CADERNO","CANETA","CHAVE","COPO","ESPELHO","FACA","GARRAFA","GUARDA-CHUVA","JANELA","LÂMPADA","LIVRO","MARTELO","MOCHILA","RELÓGIO","TESOURA","TOALHA","TRAVESSEIRO","VASO"] },

  { id: "transportes", name: "Transportes", words: ["AVIÃO","BARCO","BICICLETA","CAMINHÃO","CANOA","CARRO","DIRIGÍVEL","HELICÓPTERO","JET SKI","METRÔ","MOTOCICLETA","NAVIO","ÔNIBUS","PATINETE","SUBMARINO","TÁXI","TREM","TRICICLO","VAN","VELEIRO"] },

  { id: "musica", name: "Música", words: ["ACORDE","BATERIA","CANÇÃO","CLARINETE","CONCERTO","FLAUTA","GUITARRA","HARPA","MELODIA","MICROFONE","ÓPERA","ORQUESTRA","PIANO","RITMO","SAXOFONE","TECLADO","TROMPETE","UKULELE","VIOLÃO","VIOLINO"] },

  { id: "cinema", name: "Cinema", words: ["ATOR","ATRIZ","CÂMERA","CENÁRIO","COMÉDIA","DIRETOR","DOCUMENTÁRIO","DRAMA","DUBLAGEM","EFEITO","ESTÚDIO","FIGURINO","FILME","INGRESSO","PIPOCA","PRODUTOR","ROTEIRO","SESSÃO","SUSPENSE","TRILHA"] },

  { id: "ciencia", name: "Ciência", words: ["ÁTOMO","BIOLOGIA","CÉLULA","ENERGIA","ESPAÇO","EVOLUÇÃO","EXPERIMENTO","FÓSSIL","GENÉTICA","GRAVIDADE","LABORATÓRIO","MATÉRIA","MICROSCÓPIO","MOLÉCULA","PLANETA","QUÍMICA","REAÇÃO","TELESCÓPIO","TEORIA","UNIVERSO"] },

  { id: "tecnologia", name: "Tecnologia", words: ["ALGORITMO","APLICATIVO","CÓDIGO","COMPUTADOR","DADOS","INTERNET","MEMÓRIA","MONITOR","NAVEGADOR","PROCESSADOR","PROGRAMA","ROBÔ","SATÉLITE","SENHA","SERVIDOR","SISTEMA","SOFTWARE","TECLADO","TELA","VIRTUAL"] },

  { id: "viagem", name: "Viagem", words: ["ALFÂNDEGA","BAGAGEM","DESTINO","EXCURSÃO","GUIA","HOTEL","ITINERÁRIO","MAPA","MALA","PASSEIO","PASSAGEM","PASSAPORTE","PRAIA","RESERVA","ROTEIRO","TURISMO","VIAJANTE","VIAGEM","VISTO","VOO"] },

  { id: "casa", name: "Casa", words: ["BANHEIRO","COZINHA","ESCADA","ESCRITÓRIO","GARAGEM","JARDIM","LAVANDERIA","MESA","PAREDE","PORTA","QUARTO","SACADA","SALA","SOFÁ","TAPETE","TELHADO","TORNEIRA","VARANDA","VASSOURA","VENTILADOR"] },

  { id: "roupas", name: "Roupas", words: ["BERMUDA","BLAZER","BLUSA","BOTA","CALÇA","CAMISA","CASACO","CHAPÉU","CINTO","GRAVATA","JAQUETA","LUVA","MEIA","PALETÓ","PIJAMA","SAIA","SAPATO","SHORTS","SUÉTER","VESTIDO"] },

  { id: "cores", name: "Cores", words: ["AMARELO","ÂMBAR","AZUL","BEGE","BRANCO","CARAMELO","CARMESIM","CINZA","CORAL","DOURADO","ESMERALDA","LARANJA","LILÁS","MARROM","PRATEADO","PRETO","ROSA","TURQUESA","VERDE","VERMELHO"] },

  { id: "corpo", name: "Corpo humano", words: ["BARRIGA","BRAÇO","CABEÇA","CORAÇÃO","COTOVELO","DEDO","DENTE","ESTÔMAGO","GARGANTA","JOELHO","LÍNGUA","MÃO","NARIZ","OLHO","ORELHA","OMBRO","PEITO","PERNA","PESCOÇO","PULMÃO"] },

  { id: "escola", name: "Escola", words: ["ALUNO","APOSTILA","AULA","BIBLIOTECA","BORRACHA","CADERNO","CANETA","CARTEIRA","COMPASSO","DIPLOMA","DIRETOR","ESTOJO","LÁPIS","LIVRO","MATÉRIA","PROFESSOR","QUADRO","RECREIO","RÉGUA","TESOURA"] },

  { id: "folclore", name: "Folclore", words: ["BOITATÁ","BOTO","CAIPORA","CANGAÇO","CANTIGA","CAPOEIRA","CARNAVAL","CIRANDA","COBRA GRANDE","CURUPIRA","FESTA JUNINA","IARA","LENDA","LOBISOMEM","MULA SEM CABEÇA","NEGRINHO","SACI","VITÓRIA-RÉGIA","BUMBA MEU BOI","MATINTA"] }

];



// ============================================================

// NÍVEIS DE DIFICULDADE

// ============================================================



// Define as configurações de cada dificuldade.

// "errors" indica quantos erros o jogador pode cometer.

// "multiplier" é usado para multiplicar a pontuação final.

const DIFFICULTIES = {

  easy: { label: "Fácil", errors: 10, multiplier: 1 },

  medium: { label: "Médio", errors: 8, multiplier: 1.35 },

  hard: { label: "Difícil", errors: 6, multiplier: 1.75 }

};



// ============================================================

// DICAS DAS PALAVRAS

// ============================================================



// Associa palavras específicas a dicas que ajudam o jogador.

// A chave é a palavra e o valor é o texto da dica.

const WORD_HINTS = {

  ABELHA: "Vive em colônias e exerce um papel essencial na polinização.",

  ÁGUIA: "Ave de rapina conhecida pela visão muito apurada.",

  CAPIVARA: "É o maior roedor do mundo e costuma viver perto da água.",

  ELEFANTE: "É o maior mamífero terrestre e possui excelente memória.",

  PINGUIM: "Ave que não voa, mas é uma nadadora muito habilidosa.",

  ABACATE: "Fruta cremosa, rica em gorduras boas e muito usada em receitas.",

  BANANA: "Fruta alongada que cresce em cachos e é rica em potássio.",

  JABUTICABA: "Fruta brasileira que nasce diretamente no tronco da árvore.",

  MORANGO: "Pequena fruta vermelha cujas sementes ficam do lado de fora.",

  BRASIL: "Maior país da América do Sul e lar da maior parte da Amazônia.",

  JAPÃO: "País insular asiático conhecido como Terra do Sol Nascente.",

  PORTUGAL: "País europeu cuja língua oficial também é falada no Brasil.",

  BOMBEIRO: "Profissional preparado para combater incêndios e realizar resgates.",

  PROGRAMADOR: "Profissional que transforma lógica em instruções para computadores.",

  VETERINÁRIO: "Profissional da saúde dedicado aos cuidados com os animais.",

  FUTEBOL: "Esporte coletivo em que os pés são a principal forma de conduzir a bola.",

  NATAÇÃO: "Modalidade praticada na água, com diferentes estilos de movimento.",

  XADREZ: "Disputa estratégica em um tabuleiro de 64 casas.",

  BRIGADEIRO: "Doce brasileiro preparado tradicionalmente com chocolate e leite condensado.",

  FEIJOADA: "Prato brasileiro de cozimento lento cujo ingrediente central é um grão escuro.",

  PIZZA: "Massa redonda assada que pode receber inúmeros tipos de cobertura.",

  CACHOEIRA: "Surge quando um curso de água encontra uma queda acentuada no terreno.",

  VULCÃO: "Formação geológica capaz de expelir lava, gases e cinzas.",

  "GUARDA-CHUVA": "Objeto portátil aberto acima da cabeça em dias de tempo molhado.",

  RELÓGIO: "Objeto criado para medir e indicar a passagem do tempo.",

  AVIÃO: "Meio de transporte que se sustenta no ar graças às asas.",

  SUBMARINO: "Embarcação projetada para viajar abaixo da superfície da água.",

  VIOLINO: "Instrumento de quatro cordas normalmente tocado com um arco.",

  BATERIA: "Conjunto de instrumentos de percussão tocado por uma só pessoa.",

  ORQUESTRA: "Grande conjunto de músicos conduzido geralmente por um maestro.",

  DIRETOR: "No cinema, coordena a visão artística e as cenas de uma produção.",

  ROTEIRO: "Texto que organiza cenas, diálogos e ações de uma obra audiovisual.",

  ÁTOMO: "Unidade básica da matéria, formada por núcleo e elétrons.",

  GRAVIDADE: "Força que mantém nossos pés no chão e os planetas em órbita.",

  TELESCÓPIO: "Instrumento óptico usado para observar objetos muito distantes.",

  ALGORITMO: "Sequência ordenada de passos para resolver um problema.",

  INTERNET: "Rede mundial que conecta dispositivos e permite trocar informações.",

  SENHA: "Combinação secreta usada para controlar o acesso a uma conta.",

  PASSAPORTE: "Documento oficial utilizado para identificar viajantes entre países.",

  BAGAGEM: "Conjunto de pertences levado por alguém durante uma viagem.",

  COZINHA: "Cômodo onde os alimentos são normalmente preparados.",

  GARAGEM: "Espaço da casa destinado principalmente a guardar veículos.",

  TRAVESSEIRO: "Objeto macio usado para apoiar a cabeça durante o sono.",

  CHAPÉU: "Peça usada sobre a cabeça, muitas vezes para proteger do sol.",

  LUVA: "Peça que cobre a mão e separa ou reúne seus dedos.",

  TURQUESA: "Cor entre o azul e o verde, batizada como uma pedra preciosa.",

  CARMESIM: "Tom de vermelho profundo e intenso.",

  CORAÇÃO: "Órgão muscular responsável por bombear sangue pelo corpo.",

  PULMÃO: "Órgão essencial para as trocas gasosas da respiração.",

  BIBLIOTECA: "Lugar onde livros e outras obras são organizados para consulta.",

  COMPASSO: "Instrumento escolar usado para traçar círculos.",

  SACI: "Personagem travesso do folclore que usa um gorro vermelho.",

  CURUPIRA: "Guardião folclórico das florestas conhecido pelos pés voltados para trás.",

  IARA: "Personagem das águas que encanta pessoas com sua voz."

};



// ============================================================

// DICAS ALTERNATIVAS POR CATEGORIA

// ============================================================



// Caso uma palavra não tenha uma dica específica,

// o jogo utiliza uma dica genérica baseada na categoria.

const CATEGORY_HINT_FALLBACKS = {

  animais: "É um animal encontrado na natureza ou próximo das pessoas.",

  frutas: "É uma fruta que pode fazer parte de uma alimentação variada.",

  paises: "É um país reconhecido internacionalmente.",

  profissoes: "É uma atividade exercida por um profissional.",

  esportes: "É uma prática esportiva com regras próprias.",

  comidas: "É algo preparado ou servido como alimento.",

  natureza: "É um elemento ou fenômeno do mundo natural.",

  objetos: "É um objeto usado em alguma tarefa do cotidiano.",

  transportes: "É um meio usado para deslocar pessoas ou cargas.",

  musica: "É um termo ligado à criação ou execução musical.",

  cinema: "É um elemento presente na produção ou exibição de filmes.",

  ciencia: "É um conceito, área ou instrumento ligado à ciência.",

  tecnologia: "É um termo ligado ao universo digital e tecnológico.",

  viagem: "É algo comum no planejamento ou na experiência de uma viagem.",

  casa: "É um espaço ou item encontrado em muitas residências.",

  roupas: "É uma peça que pode fazer parte do vestuário.",

  cores: "É uma cor ou tonalidade percebida pelos olhos.",

  corpo: "É uma parte ou órgão do corpo humano.",

  escola: "É algo associado ao ambiente e à rotina escolar.",

  folclore: "É uma figura, tradição ou manifestação da cultura popular brasileira."

};



// ============================================================

// CHAVES DO LOCALSTORAGE

// ============================================================



// Define os nomes usados para salvar e recuperar dados

// do navegador, como categorias, estatísticas, som e recordes.

const STORAGE = {

  categories: "forcaAtelier.customCategories",

  stats: "forcaAtelier.stats",

  sound: "forcaAtelier.sound",

  records: "forcaAtelier.records", // Guarda os recordes da conta ativa.
  accounts: "forcaAtelier.accounts" // Guarda as contas cadastradas neste navegador.

};



// ============================================================

// ESTADO DO JOGO

// ============================================================



// Objeto que concentra as informações que podem mudar durante o jogo.

const state = {

  // Carrega as categorias personalizadas salvas anteriormente.

  customCategories: loadJSON(STORAGE.categories, []),



  // Carrega as estatísticas ou cria valores iniciais.

  stats: loadJSON(STORAGE.stats, { games: 0, wins: 0, best: 0, totalScore: 0 }),



  // Carrega os recordes ou define os valores iniciais.

  records: loadJSON(STORAGE.records, {

    bestScore: 0,

    bestStreak: 0,

    currentStreak: 0,

    wordsGuessed: 0,

    fewestAttempts: null,

    history: [],

    lastGameId: null

  }),



  // Categoria selecionada inicialmente.

  selectedCategoryId: "animais",



  // Dificuldade inicial.

  difficulty: "medium",



  // Palavra escolhida para a partida atual.

  word: "",



  // Conjunto de letras corretas já descobertas.

  guessedLetters: new Set(),



  // Conjunto de letras erradas já escolhidas.

  wrongLetters: new Set(),



  // Quantidade de erros cometidos.

  mistakes: 0,



  // Momento em que a partida começou.

  startedAt: 0,



  // Tempo decorrido na partida, em segundos.

  elapsed: 0,



  // Identificador do temporizador.

  timerId: null,



  // Indica se existe uma partida em andamento.

  playing: false,



  // Indica se a dica já foi utilizada.

  hintUsed: false,



  // Quantidade total de tentativas feitas.

  attemptsUsed: 0,



  // Identificador único da partida.

  gameId: "",



  // Define se os sons estão ativados.

  sound: localStorage.getItem(STORAGE.sound) !== "off",

  // Guarda o nome da conta que está usando o jogo nesta sessão.
  currentUser: null

};



// ============================================================

// SELETORES DOS ELEMENTOS HTML

// ============================================================



// Atalho para selecionar o primeiro elemento que corresponde ao seletor CSS.

const $ = (selector) => document.querySelector(selector);



// Atalho para selecionar todos os elementos correspondentes.

// O resultado é transformado em um array.

const $$ = (selector) => [...document.querySelectorAll(selector)];



// Guarda referências aos elementos HTML usados frequentemente.

// Isso evita repetir document.querySelector em várias funções.

const elements = {

  setup: $("#setup-screen"),

  game: $("#game-screen"),

  recordsScreen: $("#records-screen"),

  categoryGrid: $("#category-grid"),

  categorySearch: $("#category-search"),

  categoryCount: $("#category-count"),

  wordSearch: $("#word-search"),

  wordList: $("#word-list"),

  previewTotal: $("#preview-total"),

  statGames: $("#stat-games"),

  statWins: $("#stat-wins"),

  statBest: $("#stat-best"),

  categoryDialog: $("#category-dialog"),

  categoryForm: $("#category-form"),

  resultDialog: $("#result-dialog"),

  keyboard: $("#keyboard"),

  maskedWord: $("#masked-word"),

  wordGuess: $("#word-guess"),

  gameMessage: $("#game-message"),

  attemptsLeft: $("#attempts-left"),

  mistakeDots: $("#mistake-dots"),

  timer: $("#timer"),

  liveScore: $("#live-score"),

  hintButton: $("#use-hint"),

  hintCard: $("#hint-card"),

  hintText: $("#hint-text"),

  recordsHistory: $("#records-history"),

  toast: $("#toast")

};



// ============================================================

// ARMAZENAMENTO DE DADOS

// ============================================================



// Tenta recuperar um valor do localStorage e convertê-lo de JSON.

// Se não houver valor ou ocorrer algum erro, retorna o valor padrão.

function loadJSON(key, fallback) {

  try {

    const value = JSON.parse(localStorage.getItem(key));

    return value ?? fallback;

  } catch {

    return fallback;

  }

}



// Converte um objeto ou array em JSON e salva no localStorage.

function saveJSON(key, value) {

  localStorage.setItem(key, JSON.stringify(value));

}



// ============================================================

// FUNÇÕES AUXILIARES

// ============================================================



// Remove acentos, transforma o texto em maiúsculas e remove espaços

// extras nas extremidades. Isso facilita comparar palavras e letras.

function normalize(value) {

  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();

}



// Junta as categorias padrão com as categorias criadas pelo jogador.

function allCategories() {

  return [...BUILT_IN_CATEGORIES, ...state.customCategories];

}



// Procura e retorna a categoria selecionada.

// Se não encontrar, utiliza a primeira categoria disponível.

function selectedCategory() {

  return allCategories().find((category) => category.id === state.selectedCategoryId) || allCategories()[0];

}



// Pega as iniciais das palavras de um nome.

// Exemplo: "Corpo humano" retorna "CH".

function initials(name) {

  return name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();

}



// ============================================================

// EXIBIÇÃO DAS CATEGORIAS

// ============================================================



// Mostra as categorias disponíveis na tela.

// Também aplica a pesquisa e destaca a categoria selecionada.

function renderCategories() {

  // Recupera o texto pesquisado e normaliza para ignorar acentos.

  const query = normalize(elements.categorySearch.value);



  // Filtra as categorias cujo nome contém o texto pesquisado.

  const categories = allCategories().filter((category) => normalize(category.name).includes(query));



  // Atualiza a quantidade total de categorias.

  elements.categoryCount.textContent = `${allCategories().length} temas`;



  // Limpa os cartões antigos antes de criar os novos.

  elements.categoryGrid.innerHTML = "";



  // Se nenhuma categoria corresponder à pesquisa, mostra uma mensagem.

  if (!categories.length) {

    elements.categoryGrid.innerHTML = '<p class="empty-state">Nenhuma categoria encontrada.</p>';

    return;

  }



  // Percorre as categorias filtradas e cria um cartão para cada uma.

  categories.forEach((category) => {

    const card = document.createElement("button");

    card.type = "button";



    // Adiciona a classe "active" quando a categoria está selecionada.

    card.className = `category-card${category.id === state.selectedCategoryId ? " active" : ""}`;



    // Guarda o identificador da categoria no elemento.

    card.dataset.categoryId = category.id;



    // Informa tecnologias assistivas se o cartão está selecionado.

    card.setAttribute("aria-pressed", String(category.id === state.selectedCategoryId));



    // Verifica se a categoria foi criada pelo jogador.

    const isCustom = category.custom === true;



    // Monta o conteúdo do cartão com nome, iniciais e quantidade de palavras.

    // escapeHTML evita que textos sejam interpretados como código HTML.

    card.innerHTML = `

      <span class="category-symbol">${initials(category.name)}</span>

      <span><strong>${escapeHTML(category.name)}</strong><small>${category.words.length} palavras</small></span>

      ${isCustom ? `<span class="card-actions">

        <span class="card-action edit-category" role="button" tabindex="0" title="Editar" aria-label="Editar ${escapeHTML(category.name)}">E</span>

        <span class="card-action delete-category" role="button" tabindex="0" title="Excluir" aria-label="Excluir ${escapeHTML(category.name)}">X</span>

      </span>` : ""}

    `;



    // Quando o cartão é clicado, verifica se é para selecionar,

    // editar ou excluir a categoria.

    card.addEventListener("click", (event) => handleCategoryCard(event, category));



    // Permite acionar editar e excluir usando Enter ou Espaço.

    card.addEventListener("keydown", (event) => {

      if ((event.key === "Enter" || event.key === " ") && event.target.closest(".card-action")) {

        event.preventDefault();

        handleCategoryCard(event, category);

      }

    });



    // Adiciona o cartão criado à grade de categorias.

    elements.categoryGrid.appendChild(card);

  });

}



// Trata os cliques nos cartões de categoria.

function handleCategoryCard(event, category) {

  // Se o botão de editar foi acionado, abre o formulário de edição.

  if (event.target.closest(".edit-category")) {

    event.stopPropagation();

    openCategoryDialog(category);

    return;

  }



  // Se o botão de excluir foi acionado, inicia a exclusão.

  if (event.target.closest(".delete-category")) {

    event.stopPropagation();

    deleteCategory(category);

    return;

  }



  // Caso contrário, seleciona a categoria clicada.

  state.selectedCategoryId = category.id;



  // Limpa a pesquisa de palavras ao trocar de categoria.

  elements.wordSearch.value = "";



  // Atualiza a grade e a prévia de palavras.

  renderCategories();

  renderWordPreview();

}



// ============================================================

// PRÉVIA DAS PALAVRAS

// ============================================================



// Exibe as palavras da categoria selecionada antes de iniciar a partida.

function renderWordPreview() {

  const category = selectedCategory();

  const query = normalize(elements.wordSearch.value);



  // Filtra as palavras que contêm o texto pesquisado.

  const words = category.words.filter((word) => normalize(word).includes(query));



  // Atualiza o título e a quantidade de palavras exibidas.

  $("#word-preview-title").textContent = category.name;

  elements.previewTotal.textContent = query ? `${words.length}/${category.words.length}` : category.words.length;



  // Mostra as palavras encontradas ou uma mensagem caso não haja resultados.

  elements.wordList.innerHTML = words.length

    ? words.map((word) => `<span class="word-pill">${escapeHTML(word)}</span>`).join("")

    : '<p class="empty-state">Nenhuma palavra encontrada.</p>';

}



// ============================================================

// SEGURANÇA DE TEXTO HTML

// ============================================================



// Substitui caracteres especiais por entidades HTML.

// Isso impede que textos inseridos pelo usuário sejam interpretados como tags.

function escapeHTML(value) {

  return String(value).replace(/[&<>"']/g, (character) => ({

    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"

  })[character]);

}



// ============================================================

// CRIAÇÃO E EDIÇÃO DE CATEGORIAS

// ============================================================



// Abre o formulário para criar uma nova categoria ou editar uma existente.

// O parâmetro category é opcional.

function openCategoryDialog(category = null) {

  // Altera o título do formulário de acordo com a operação.

  $("#category-modal-title").textContent = category ? "Editar categoria" : "Nova categoria";



  // Preenche os campos com os dados da categoria, se ela existir.

  $("#editing-category-id").value = category?.id || "";

  $("#custom-category-name").value = category?.name || "";

  $("#custom-category-words").value = category?.words.join("\n") || "";



  // Limpa mensagens de erro anteriores.

  $("#category-form-error").textContent = "";



  // Abre a janela de diálogo.

  elements.categoryDialog.showModal();



  // Coloca o cursor no campo do nome após um pequeno intervalo.

  setTimeout(() => $("#custom-category-name").focus(), 50);

}



// Fecha o formulário e limpa seus campos.

function closeCategoryDialog() {

  elements.categoryDialog.close();

  elements.categoryForm.reset();

}



// Valida e salva uma categoria criada ou editada.

function saveCategory(event) {

  // Impede o comportamento padrão do formulário, que recarregaria a página.

  event.preventDefault();



  // Recupera os valores preenchidos.

  const id = $("#editing-category-id").value;

  const name = $("#custom-category-name").value.trim();



  // Divide as palavras por quebra de linha, vírgula ou ponto e vírgula.

  // Remove espaços, transforma em maiúsculas e elimina palavras repetidas.

  const words = [...new Set($("#custom-category-words").value.split(/[\n,;]+/).map((word) => word.trim().toUpperCase()).filter(Boolean))];



  // Elemento que exibirá mensagens de validação.

  const error = $("#category-form-error");



  // Verifica se o nome possui pelo menos dois caracteres.

  if (name.length < 2) {

    error.textContent = "Digite um nome com pelo menos 2 caracteres.";

    return;

  }



  // Exige pelo menos três palavras diferentes.

  if (words.length < 3) {

    error.textContent = "Adicione pelo menos 3 palavras diferentes.";

    return;

  }



  // Verifica se já existe outra categoria com o mesmo nome.

  // A categoria que está sendo editada é ignorada nessa comparação.

  const duplicate = allCategories().find((category) => normalize(category.name) === normalize(name) && category.id !== id);

  if (duplicate) {

    error.textContent = "Já existe uma categoria com esse nome.";

    return;

  }



  // Se existe um ID, significa que a categoria está sendo editada.

  if (id) {

    const index = state.customCategories.findIndex((category) => category.id === id);



    // Atualiza os dados da categoria existente.

    state.customCategories[index] = { ...state.customCategories[index], name, words };

    state.selectedCategoryId = id;

    showToast("Categoria atualizada.");

  } else {

    // Caso contrário, cria uma nova categoria com um ID único baseado no horário.

    const category = { id: `custom-${Date.now()}`, name, words, custom: true };



    // Adiciona a categoria à lista de categorias personalizadas.

    state.customCategories.push(category);

    state.selectedCategoryId = category.id;

    showToast("Categoria criada.");

  }



  // Salva as categorias no navegador.

  saveJSON(STORAGE.categories, state.customCategories);



  // Fecha o formulário e atualiza a interface.

  closeCategoryDialog();

  renderCategories();

  renderWordPreview();

}



// Exclui uma categoria personalizada após confirmação do usuário.

function deleteCategory(category) {

  // Solicita confirmação antes de apagar a categoria.

  if (!window.confirm(`Excluir a categoria “${category.name}”?`)) return;



  // Remove a categoria da lista.

  state.customCategories = state.customCategories.filter((item) => item.id !== category.id);



  // Se a categoria excluída estava selecionada, volta para "Animais".

  if (state.selectedCategoryId === category.id) state.selectedCategoryId = "animais";



  // Salva a lista atualizada e atualiza a interface.

  saveJSON(STORAGE.categories, state.customCategories);

  renderCategories();

  renderWordPreview();

  showToast("Categoria excluída.");

}



// ============================================================

// SELEÇÃO DA DIFICULDADE

// ============================================================



// Atualiza a dificuldade escolhida e o visual dos botões.

function chooseDifficulty(level) {

  state.difficulty = level;



  // Percorre todos os botões de dificuldade.

  $$(".difficulty").forEach((button) => {

    const active = button.dataset.level === level;



    // Adiciona ou remove a classe que destaca o botão selecionado.

    button.classList.toggle("active", active);



    // Atualiza o atributo de acessibilidade.

    button.setAttribute("aria-pressed", String(active));

  });

}



// ============================================================

// INÍCIO DA PARTIDA

// ============================================================



// Prepara todos os dados e elementos necessários para começar um jogo.

function startGame() {

  // Impede que uma partida seja iniciada sem uma conta autenticada.
  if (!state.currentUser) return; // Mantém o jogo bloqueado até o login.

  const category = selectedCategory();



  // Escolhe uma palavra aleatória da categoria selecionada.

  state.word = category.words[Math.floor(Math.random() * category.words.length)].toUpperCase();



  // Reinicia os conjuntos e contadores da partida.

  state.guessedLetters = new Set();

  state.wrongLetters = new Set();

  state.mistakes = 0;

  state.elapsed = 0;

  state.hintUsed = false;

  state.attemptsUsed = 0;



  // Gera um identificador para diferenciar cada partida.

  state.gameId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;



  // Registra o horário inicial e indica que o jogo está em andamento.

  state.startedAt = Date.now();

  state.playing = true;



  // Evita que um temporizador antigo continue funcionando.

  clearInterval(state.timerId);



  // Atualiza o cronômetro a cada segundo.

  state.timerId = setInterval(updateTimer, 1000);



  // Exibe informações da partida.

  $("#game-category").textContent = category.name;

  $("#game-difficulty").textContent = DIFFICULTIES[state.difficulty].label;



  // Informa quantas letras existem na palavra, ignorando espaços e símbolos.

  $("#word-hint").textContent = `A palavra tem ${[...state.word].filter((letter) => /[A-ZÀ-Ü]/i.test(letter)).length} letras`;



  // Limpa o campo de tentativa e mostra a mensagem inicial.

  elements.wordGuess.value = "";

  elements.gameMessage.textContent = "Escolha uma letra para começar";

  elements.gameMessage.className = "game-message";



  // Esconde as telas de configuração e recordes e mostra a tela do jogo.

  elements.setup.hidden = true;

  elements.recordsScreen.hidden = true;

  elements.game.hidden = false;



  // Habilita novamente o botão de dica e restaura seu conteúdo.

  elements.hintButton.disabled = false;

  elements.hintButton.innerHTML = `

    <span class="hint-icon">

      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 3h4m3-9a5 5 0 1 0-10 0c0 2 1 3 2 4h6c1-1 2-2 2-4Z" /></svg>

    </span>

    <span><strong>Precisa de uma dica?</strong><small>Custa 1 tentativa</small></span>

  `;



  // Esconde a área de exibição da dica.

  elements.hintCard.hidden = true;



  // Monta o teclado e atualiza as informações visuais da partida.

  buildKeyboard();

  renderMaskedWord();

  renderAttempts();

  updateLiveScore();



  // Volta a página para o topo suavemente.

  window.scrollTo({ top: 0, behavior: "smooth" });

}



// ============================================================

// TECLADO DO JOGO

// ============================================================



// Cria os botões de A a Z na tela.

function buildKeyboard() {

  // Limpa o teclado anterior.

  elements.keyboard.innerHTML = "";



  // Percorre todas as letras do alfabeto.

  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {

    const button = document.createElement("button");



    // Configura o botão.

    button.type = "button";

    button.className = "key";

    button.textContent = letter;

    button.dataset.letter = letter;

    button.setAttribute("aria-label", `Letra ${letter}`);



    // Ao clicar, tenta a letra correspondente.

    button.addEventListener("click", () => guessLetter(letter));



    // Adiciona o botão ao teclado.

    elements.keyboard.appendChild(button);

  });

}



// ============================================================

// TENTATIVA DE UMA LETRA

// ============================================================



// Verifica se a letra escolhida aparece na palavra secreta.

function guessLetter(letter) {

  // Impede jogadas quando a partida não está ativa.

  if (!state.playing) return;



  // Normaliza a letra para comparar sem acentos.

  const normalizedLetter = normalize(letter);



  // Impede que uma letra já utilizada seja escolhida novamente.

  if (state.guessedLetters.has(normalizedLetter) || state.wrongLetters.has(normalizedLetter)) return;



  // Normaliza a palavra secreta para facilitar a comparação.

  const normalizedWord = normalize(state.word);



  // Verifica se a palavra contém a letra escolhida.

  const correct = normalizedWord.includes(normalizedLetter);



  // Localiza o botão da letra no teclado.

  const key = $(`.key[data-letter="${normalizedLetter}"]`);



  // Conta a tentativa e desativa o botão escolhido.

  state.attemptsUsed += 1;

  key.disabled = true;



  // Aplica a classe visual de acerto ou erro.

  key.classList.add(correct ? "correct" : "wrong");



  // Se a letra estiver na palavra, registra o acerto.

  if (correct) {

    state.guessedLetters.add(normalizedLetter);

    setMessage(`Boa! A letra ${letter} está na palavra.`, "success");

    beep(540, 0.07);

  } else {

    // Caso contrário, registra o erro e aumenta os erros cometidos.

    state.wrongLetters.add(normalizedLetter);

    state.mistakes += 1;

    setMessage(`A letra ${letter} não aparece na palavra.`, "error");

    beep(180, 0.1);

  }



  // Atualiza a palavra, as tentativas e a pontuação.

  renderMaskedWord();

  renderAttempts();

  updateLiveScore();



  // Verifica se a partida terminou.

  evaluateGame();

}



// ============================================================

// TENTATIVA DA PALAVRA COMPLETA

// ============================================================



// Verifica a palavra inteira digitada pelo jogador.

function guessWholeWord(event) {

  // Impede o envio padrão do formulário e a propagação do evento.

  event.preventDefault();

  event.stopPropagation();



  // Só permite tentar enquanto a partida estiver ativa.

  if (!state.playing) return;



  // Recupera e normaliza o texto digitado.

  const guess = normalize(elements.wordGuess.value);



  // Exibe uma mensagem se o campo estiver vazio.

  if (!guess) {

    setMessage("Digite uma palavra antes de tentar.", "error");

    return;

  }



  // Registra o uso de uma tentativa.

  state.attemptsUsed += 1;



  // Compara a palavra digitada com a palavra secreta.

  if (guess === normalize(state.word)) {

    // Revela todas as letras da palavra correta.

    normalize(state.word).split("").forEach((letter) => {

      if (/[A-Z]/.test(letter)) state.guessedLetters.add(letter);

    });



    // Atualiza a exibição e encerra a partida como vitória.

    renderMaskedWord();

    finishGame(true);

  } else {

    // Se a palavra estiver errada, desconta uma tentativa.

    state.mistakes += 1;



    // Seleciona o texto digitado para facilitar uma nova tentativa.

    elements.wordGuess.select();



    setMessage("Não é essa palavra. Você perdeu uma tentativa.", "error");

    beep(180, 0.1);



    // Atualiza as informações da partida.

    renderAttempts();

    updateLiveScore();



    // Encerra o jogo se o limite de erros tiver sido atingido.

    if (state.mistakes >= DIFFICULTIES[state.difficulty].errors) finishGame(false);

  }

}



// ============================================================

// SISTEMA DE DICAS

// ============================================================



// Retorna uma dica específica ou cria uma dica alternativa.

function getWordHint() {

  // Primeiro, procura uma dica cadastrada para a palavra.

  const preset = WORD_HINTS[state.word] || WORD_HINTS[normalize(state.word)];

  if (preset) return preset;



  // Se não houver dica específica, utiliza uma dica da categoria.

  const category = selectedCategory();

  const base = CATEGORY_HINT_FALLBACKS[category.id] || `A resposta pertence ao tema “${category.name}”.`;



  // Conta as letras da palavra, ignorando espaços e símbolos.

  const letters = normalize(state.word).replace(/[^A-Z]/g, "");

  const uniqueLetters = new Set(letters).size;



  // Se a palavra tiver mais de três letras, informa a última letra.

  const endingClue = letters.length > 3 ? `, e termina com “${letters.slice(-1)}”` : "";



  // Junta as informações em uma dica.

  return `${base} Tem ${letters.length} letras, ${uniqueLetters} delas diferentes${endingClue}.`;

}



// Ativa a dica, descontando uma tentativa do jogador.

function useHint() {

  // Verifica se existe uma partida ativa.

  if (!state.playing) {

    showToast("A dica só está disponível durante uma partida.");

    return;

  }



  // Impede o uso de mais de uma dica na mesma partida.

  if (state.hintUsed) {

    showToast("Você já utilizou a dica desta palavra.");

    return;

  }



  // Calcula quantas tentativas ainda restam.

  const remaining = DIFFICULTIES[state.difficulty].errors - state.mistakes;



  // Exige que reste mais de uma tentativa para usar a dica.

  if (remaining <= 1) {

    setMessage("Você precisa preservar ao menos uma tentativa para usar a dica.", "error");

    showToast("Não há tentativas suficientes.");

    return;

  }



  // Marca a dica como utilizada e desconta uma tentativa.

  state.hintUsed = true;

  state.mistakes += 1;

  state.attemptsUsed += 1;



  // Exibe o texto da dica e desativa o botão.

  elements.hintText.textContent = getWordHint();

  elements.hintCard.hidden = false;

  elements.hintButton.disabled = true;



  // Atualiza o texto do botão para indicar que a dica já foi usada.

  elements.hintButton.querySelector("strong").textContent = "Dica utilizada";

  elements.hintButton.querySelector("small").textContent = "1 tentativa descontada";



  // Informa o jogador e atualiza as informações visuais.

  setMessage("Uma tentativa foi usada para revelar a dica.", "error");

  renderAttempts();

  updateLiveScore();

  beep(310, 0.08);

}



// ============================================================

// EXIBIÇÃO DA PALAVRA OCULTA

// ============================================================



// Mostra as letras descobertas e oculta as demais.

// O parâmetro revealAll permite revelar a palavra inteira.

function renderMaskedWord(revealAll = false) {

  // Cria um espaço visual para cada caractere da palavra.

  elements.maskedWord.innerHTML = [...state.word].map((character) => {

    // Espaços são representados por um elemento vazio.

    if (character === " ") return '<span class="letter-slot space" aria-hidden="true"></span>';



    // Símbolos, hífens e outros caracteres são exibidos diretamente.

    if (!/[A-ZÀ-Ü]/i.test(character)) return `<span class="letter-slot revealed">${escapeHTML(character)}</span>`;



    // Verifica se a letra deve aparecer.

    const revealed = revealAll || state.guessedLetters.has(normalize(character));



    // Exibe a letra caso ela tenha sido descoberta.

    return `<span class="letter-slot${revealed ? " revealed" : ""}">${revealed ? escapeHTML(character) : ""}</span>`;

  }).join("");



  // Cria uma descrição textual da palavra para leitores de tela.

  const spoken = [...state.word].map((character) => {

    if (character === " ") return "espaço";

    return state.guessedLetters.has(normalize(character)) ? character : "oculta";

  }).join(", ");



  // Define a descrição acessível do elemento.

  elements.maskedWord.setAttribute("aria-label", spoken);

}



// ============================================================

// ATUALIZAÇÃO DAS TENTATIVAS

// ============================================================



// Atualiza a quantidade de erros restantes e o desenho da forca.

function renderAttempts() {

  // Recupera o limite de erros da dificuldade atual.

  const limit = DIFFICULTIES[state.difficulty].errors;



  // Calcula quantas tentativas ainda estão disponíveis.

  const remaining = Math.max(0, limit - state.mistakes);



  // Atualiza o número exibido na interface.

  elements.attemptsLeft.textContent = remaining;



  // Desativa a dica quando não há partida, quando já foi usada

  // ou quando resta apenas uma tentativa.

  elements.hintButton.disabled = !state.playing || state.hintUsed || remaining <= 1;



  // Exibe uma explicação ao passar o mouse sobre o botão desativado.

  elements.hintButton.title = remaining <= 1 && !state.hintUsed

    ? "Você precisa de mais de uma tentativa para pedir uma dica."

    : "";



  // Cria os indicadores visuais de erros.

  // Os pontos usados recebem a classe "used".

  elements.mistakeDots.innerHTML = Array.from({ length: limit }, (_, index) =>

    `<span class="mistake-dot${index < state.mistakes ? " used" : ""}"></span>`

  ).join("");



  // Calcula quantas partes do desenho da forca devem aparecer.

  const visibleParts = Math.ceil((state.mistakes / limit) * 10);



  // Exibe as partes do desenho conforme a quantidade de erros.

  $$("[data-part]").forEach((part) => part.classList.toggle("visible", Number(part.dataset.part) <= visibleParts));

}



// ============================================================

// VERIFICAÇÃO DO FIM DA PARTIDA

// ============================================================



// Verifica se todas as letras foram descobertas ou se os erros acabaram.

function evaluateGame() {

  // Obtém as letras únicas da palavra, ignorando acentos e símbolos.

  const letters = [...new Set(normalize(state.word).replace(/[^A-Z]/g, ""))];



  // Se todas as letras foram descobertas, o jogador venceu.

  if (letters.every((letter) => state.guessedLetters.has(letter))) finishGame(true);



  // Caso o limite de erros tenha sido atingido, o jogador perdeu.

  else if (state.mistakes >= DIFFICULTIES[state.difficulty].errors) finishGame(false);

}



// ============================================================

// CÁLCULO DA PONTUAÇÃO

// ============================================================



// Calcula a pontuação final com base na palavra, no tempo,

// nos erros e na dificuldade escolhida.

function calculateScore() {

  // Se não houver palavra, retorna zero.

  if (!state.word) return 0;



  const difficulty = DIFFICULTIES[state.difficulty];



  // Conta as letras da palavra, desconsiderando espaços e símbolos.

  const letters = normalize(state.word).replace(/[^A-Z]/g, "").length;



  // Quanto menor o tempo, maior o bônus, limitado a zero.

  const timeBonus = Math.max(0, 300 - state.elapsed * 2);



  // Quanto menos erros, maior o bônus de precisão.

  const accuracyBonus = Math.max(0, difficulty.errors - state.mistakes) * 20;



  // Soma os pontos e aplica o multiplicador da dificuldade.

  return Math.round((letters * 50 + timeBonus + accuracyBonus) * difficulty.multiplier);

}



// Atualiza a pontuação parcial durante a partida.

function updateLiveScore() {

  // Soma pontos pelas letras descobertas e desconta pontos pelos erros.

  const partial = Math.max(0, state.guessedLetters.size * 25 - state.mistakes * 10);



  // Exibe a pontuação parcial.

  elements.liveScore.textContent = partial;

}



// ============================================================

// CRONÔMETRO

// ============================================================



// Calcula o tempo decorrido desde o início da partida.

function updateTimer() {

  state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000);



  // Atualiza o cronômetro na tela.

  elements.timer.textContent = formatTime(state.elapsed);

}



// Converte o tempo em segundos para o formato MM:SS.

function formatTime(seconds) {

  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

}



// ============================================================

// ENCERRAMENTO DA PARTIDA

// ============================================================



// Finaliza a partida e apresenta o resultado.

// O parâmetro won indica se o jogador venceu.

function finishGame(won) {

  // Evita que a função seja executada mais de uma vez.

  if (!state.playing) return;



  // Finaliza o estado da partida e para o cronômetro.

  state.playing = false;

  clearInterval(state.timerId);

  updateTimer();



  // Revela a palavra inteira ao terminar.

  renderMaskedWord(true);



  // Calcula a pontuação somente se o jogador venceu.

  const score = won ? calculateScore() : 0;

  elements.liveScore.textContent = score;



  // Atualiza a quantidade de partidas jogadas.

  state.stats.games += 1;



  // Se houve vitória, atualiza os dados de desempenho.

  if (won) {

    state.stats.wins += 1;

    state.stats.totalScore += score;

    state.stats.best = Math.max(state.stats.best, score);



    // Reproduz sons de vitória.

    beep(660, 0.1);

    setTimeout(() => beep(820, 0.13), 100);

  }



  // Salva as estatísticas e atualiza os recordes.

  saveJSON(STORAGE.stats, state.stats);

  updateRecords(won, score);

  renderStats();



  // Atualiza o conteúdo da janela de resultado.

  $("#result-seal").classList.toggle("lost", !won);

  $("#result-title").textContent = won ? "Você venceu!" : "Fim de jogo";

  $("#result-overline").textContent = won ? "Desafio concluído" : "As tentativas acabaram";

  $("#result-copy").textContent = won ? "Você descobriu a palavra" : "A palavra correta era";

  $("#result-word").textContent = state.word;

  $("#result-time").textContent = formatTime(state.elapsed);

  $("#result-score").textContent = score;

  $("#result-errors").textContent = state.mistakes;



  // Abre a janela de resultado após um pequeno atraso.

  setTimeout(() => elements.resultDialog.showModal(), 380);

}



// ============================================================

// ORGANIZAÇÃO DOS RECORDES

// ============================================================



// Corrige ou completa os dados dos recordes carregados.

// Isso ajuda a lidar com dados antigos ou incompletos.

function normalizeRecords() {

  const records = state.records && typeof state.records === "object" ? state.records : {};



  // Garante que todos os campos tenham valores válidos.

  state.records = {

    bestScore: Math.max(Number(records.bestScore) || 0, Number(state.stats.best) || 0),

    bestStreak: Number(records.bestStreak) || 0,

    currentStreak: Number(records.currentStreak) || 0,

    wordsGuessed: Math.max(Number(records.wordsGuessed) || 0, Number(state.stats.wins) || 0),



    // Mantém o menor número de tentativas se o valor for válido.

    fewestAttempts: Number.isFinite(records.fewestAttempts) && records.fewestAttempts > 0

      ? records.fewestAttempts

      : null,



    // Garante que o histórico seja um array e contenha partidas válidas.

    history: Array.isArray(records.history) ? records.history.filter((game) => game && game.id) : [],



    // Recupera o identificador da última partida registrada.

    lastGameId: records.lastGameId || null

  };

}



// Atualiza os recordes de acordo com o resultado da partida.

function updateRecords(won, score) {

  // Evita registrar duas vezes a mesma partida.

  if (state.records.lastGameId === state.gameId) return;



  state.records.lastGameId = state.gameId;



  // Em caso de vitória, atualiza os recordes positivos.

  if (won) {

    state.records.currentStreak += 1;

    state.records.bestStreak = Math.max(state.records.bestStreak, state.records.currentStreak);

    state.records.wordsGuessed += 1;

    state.records.bestScore = Math.max(state.records.bestScore, score);



    // Atualiza o menor número de tentativas usado em uma vitória.

    state.records.fewestAttempts = state.records.fewestAttempts === null

      ? state.attemptsUsed

      : Math.min(state.records.fewestAttempts, state.attemptsUsed);



    // Recupera a categoria da partida.

    const category = selectedCategory();



    // Adiciona os dados da partida ao histórico.

    state.records.history.push({

      id: state.gameId,

      score,

      difficulty: state.difficulty,

      category: category.name,

      word: state.word,

      date: new Date().toISOString(),

      attempts: state.attemptsUsed,

      elapsed: state.elapsed

    });



    // Ordena o histórico por pontuação e mantém apenas os 12 melhores resultados.

    state.records.history = state.records.history

      .sort((a, b) => b.score - a.score || a.elapsed - b.elapsed)

      .slice(0, 12);

  } else {

    // Uma derrota interrompe a sequência atual de vitórias.

    state.records.currentStreak = 0;

  }



  // Salva os recordes e atualiza a tela.

  saveJSON(STORAGE.records, state.records);

  renderRecords();

}



// ============================================================

// EXIBIÇÃO DOS RECORDES

// ============================================================



// Atualiza os indicadores e o histórico de partidas vencidas.

function renderRecords() {

  // Exibe os melhores resultados e estatísticas.

  $("#record-best-score").textContent = state.records.bestScore.toLocaleString("pt-BR");

  $("#record-best-streak").textContent = state.records.bestStreak;

  $("#record-words").textContent = state.records.wordsGuessed;

  $("#record-fewest").textContent = state.records.fewestAttempts ?? "—";



  // Exibe quantos resultados estão guardados no histórico.

  const history = state.records.history;

  $("#history-count").textContent = `${history.length} ${history.length === 1 ? "resultado" : "resultados"}`;



  // Se ainda não houver resultados, mostra uma mensagem vazia.

  if (!history.length) {

    elements.recordsHistory.innerHTML = `

      <div class="history-empty">

        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v4m-4 3h8" /></svg>

        <strong>Seu próximo recorde começa aqui</strong>

        <small>As melhores partidas vencidas aparecerão nesta galeria.</small>

      </div>

    `;

    return;

  }



  // Cria uma linha visual para cada resultado do histórico.

  elements.recordsHistory.innerHTML = history.map((game, index) => {

    // Converte a data salva para um objeto Date.

    const date = new Date(game.date);



    // Verifica se a data é válida e a formata para o padrão brasileiro.

    const validDate = Number.isNaN(date.getTime()) ? "Data indisponível" : date.toLocaleDateString("pt-BR");



    // Recupera o nome da dificuldade.

    const difficulty = DIFFICULTIES[game.difficulty]?.label || "Personalizado";



    // Retorna o HTML de uma partida do histórico.

    return `

      <article class="history-row">

        <div class="history-identity">

          <span class="history-rank">${String(index + 1).padStart(2, "0")}</span>

          <span><strong>${escapeHTML(game.category)}</strong><small>${escapeHTML(game.word)} · ${game.attempts} tentativas</small></span>

        </div>

        <span class="history-difficulty">${escapeHTML(difficulty)}</span>

        <time class="history-date" datetime="${escapeHTML(game.date)}">${validDate}</time>

        <strong class="history-score">${Number(game.score).toLocaleString("pt-BR")}</strong>

      </article>

    `;

  }).join("");

}



// ============================================================

// NAVEGAÇÃO ENTRE AS TELAS

// ============================================================



// Abre a tela de recordes.

// Se houver uma partida em andamento, pede confirmação antes de sair.

function openRecords() {

  if (state.playing && !window.confirm("Sair desta partida para ver seus recordes? O progresso atual será perdido.")) return;



  // Encerra o estado da partida e para o cronômetro.

  state.playing = false;

  clearInterval(state.timerId);



  // Fecha a janela de resultado, se estiver aberta.

  if (elements.resultDialog.open) elements.resultDialog.close();



  // Esconde as outras telas e exibe os recordes.

  elements.setup.hidden = true;

  elements.game.hidden = true;

  elements.recordsScreen.hidden = false;



  // Destaca o botão de recordes e atualiza os dados.

  $("#open-records").classList.add("active");

  renderRecords();



  // Volta para o topo da página.

  window.scrollTo({ top: 0, behavior: "smooth" });

}



// Retorna à tela inicial.

function showHome(event) {

  // Impede o comportamento padrão caso a função seja chamada por um link.

  event?.preventDefault();



  // Pede confirmação se houver uma partida em andamento.

  if (state.playing && !window.confirm("Sair desta partida? O progresso atual será perdido.")) return;



  // Encerra a partida e para o cronômetro.

  state.playing = false;

  clearInterval(state.timerId);



  // Fecha a janela de resultado, se estiver aberta.

  if (elements.resultDialog.open) elements.resultDialog.close();



  // Mostra a tela de configuração.

  elements.recordsScreen.hidden = true;

  elements.game.hidden = true;

  elements.setup.hidden = false;



  // Remove o destaque do botão de recordes.

  $("#open-records").classList.remove("active");



  // Atualiza as estatísticas e volta ao topo.

  renderStats();

  window.scrollTo({ top: 0, behavior: "smooth" });

}



// Sai da partida e volta para a tela inicial.

// É semelhante a showHome, mas não recebe um evento.

function leaveGame() {

  if (state.playing && !window.confirm("Sair desta partida? O progresso atual será perdido.")) return;



  state.playing = false;

  clearInterval(state.timerId);



  // Fecha o resultado, se necessário.

  if (elements.resultDialog.open) elements.resultDialog.close();



  // Exibe a tela inicial.

  elements.game.hidden = true;

  elements.recordsScreen.hidden = true;

  elements.setup.hidden = false;



  // Remove o destaque do botão de recordes.

  $("#open-records").classList.remove("active");



  renderStats();

  window.scrollTo({ top: 0, behavior: "smooth" });

}



// ============================================================

// ESTATÍSTICAS

// ============================================================



// Atualiza os números apresentados na tela inicial.

function renderStats() {

  // Total de partidas jogadas.

  elements.statGames.textContent = state.stats.games;



  // Calcula a porcentagem de vitórias.

  // Se nenhuma partida foi jogada, mostra 0%.

  elements.statWins.textContent = state.stats.games

    ? `${Math.round((state.stats.wins / state.stats.games) * 100)}%`

    : "0%";



  // Exibe a maior pontuação.

  elements.statBest.textContent = state.stats.best;

}



// ============================================================

// MENSAGENS E NOTIFICAÇÕES

// ============================================================



// Exibe uma mensagem na área de comunicação do jogo.

// O tipo pode ser usado pelo CSS para mudar a aparência.

function setMessage(message, type = "") {

  elements.gameMessage.textContent = message;

  elements.gameMessage.className = `game-message${type ? ` ${type}` : ""}`;

}



// Guarda o temporizador responsável por esconder as notificações.

let toastTimer;



// Exibe uma notificação temporária na tela.

function showToast(message) {

  elements.toast.textContent = message;

  elements.toast.classList.add("show");



  // Cancela o temporizador anterior para reiniciar a duração da notificação.

  clearTimeout(toastTimer);



  // Esconde a notificação depois de 2,2 segundos.

  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2200);

}



// ============================================================

// EFEITOS SONOROS

// ============================================================



// Reproduz um som simples usando a API de áudio do navegador.

// frequency define a frequência do som e duration define sua duração.

function beep(frequency, duration) {

  // Não reproduz nada se os sons estiverem desativados.

  if (!state.sound) return;



  try {

    // Cria o contexto de áudio.

    const context = new (window.AudioContext || window.webkitAudioContext)();



    // Cria o oscilador, que gera o som.

    const oscillator = context.createOscillator();



    // Cria o controle de volume.

    const gain = context.createGain();



    // Define a frequência do som.

    oscillator.frequency.value = frequency;



    // Define o volume inicial e faz o som diminuir gradualmente.

    gain.gain.setValueAtTime(0.035, context.currentTime);

    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);



    // Conecta o oscilador ao controle de volume e à saída de áudio.

    oscillator.connect(gain).connect(context.destination);



    // Inicia e encerra o som.

    oscillator.start();

    oscillator.stop(context.currentTime + duration);

  } catch {

    // O jogo continua funcionando mesmo se o navegador não oferecer Web Audio.

  }

}



// Ativa ou desativa os efeitos sonoros.

function toggleSound() {

  // Inverte o estado atual do som.

  state.sound = !state.sound;



  // Salva a preferência do jogador.

  localStorage.setItem(STORAGE.sound, state.sound ? "on" : "off");



  // Atualiza a aparência e a descrição acessível do botão.

  $("#sound-toggle").classList.toggle("muted", !state.sound);

  $("#sound-toggle").setAttribute("aria-label", state.sound ? "Desativar sons" : "Ativar sons");

}



// ============================================================

// TECLADO FÍSICO

// ============================================================



// Permite jogar usando o teclado do computador.

function handlePhysicalKeyboard(event) {

  // Só aceita letras durante uma partida ativa.

  // Também ignora combinações com Ctrl, Alt ou tecla Command.

  if (!state.playing || event.ctrlKey || event.metaKey || event.altKey) return;



  const target = event.target;



  // Não interfere quando o jogador está digitando em campos de texto.

  if (target.matches("input, textarea, select") || target.isContentEditable) return;



  // Verifica se a tecla pressionada é uma letra de A a Z.

  if (/^[a-zA-Z]$/.test(event.key)) {

    event.preventDefault();

    guessLetter(event.key.toUpperCase());

  }

}



// ============================================================

// ============================================================
// NOVO: LOGIN, CADASTRO E PONTUAÇÕES POR JOGADOR
// ============================================================

// Indica se o formulário está no modo de cadastro ou no modo de login.
let authMode = "login"; // Começa solicitando que o jogador entre.

// Lê as contas registradas neste navegador ou cria uma lista vazia.
function loadAccounts() { // Centraliza a leitura das contas locais.
  return loadJSON(STORAGE.accounts, []); // Retorna as contas guardadas no localStorage.
} // Finaliza a função de leitura das contas.

// Atualiza a mensagem da tela de autenticação.
function showAuthMessage(message, isError = true) { // Recebe o texto e o tipo da mensagem.
  const messageElement = $("#auth-message"); // Localiza o espaço reservado para avisos.
  messageElement.textContent = message; // Exibe o texto sem interpretar HTML.
  messageElement.style.color = isError ? "var(--red)" : "var(--green)"; // Diferencia erros e confirmações.
} // Finaliza a função de mensagens.

// Atualiza o texto dos botões conforme o modo selecionado.
function updateAuthMode() { // Ajusta os textos do formulário.
  const registering = authMode === "register"; // Verifica se o cadastro está ativo.
  $("#login-title").innerHTML = registering ? 'Crie sua <em>conta.</em>' : 'Entre no <em>desafio.</em>'; // Atualiza o título da tela.
  $("#auth-submit").textContent = registering ? "Criar conta" : "Entrar"; // Atualiza o botão principal.
  $("#auth-toggle").textContent = registering ? "Já tem conta? Entrar" : "Ainda não tem conta? Criar cadastro"; // Atualiza o botão secundário.
  $("#auth-password").setAttribute("autocomplete", registering ? "new-password" : "current-password"); // Ajusta o preenchimento automático.
  showAuthMessage(""); // Limpa mensagens antigas ao alternar o modo.
} // Finaliza a atualização do modo.

// Carrega os dados próprios da conta depois de um login bem-sucedido.
function loadUserData(username) { // Recebe o nome de usuário autenticado.
  STORAGE.stats = `forcaAtelier.stats.${username}`; // Define uma chave de estatísticas exclusiva da conta.
  STORAGE.records = `forcaAtelier.records.${username}`; // Define uma chave de recordes exclusiva da conta.
  state.stats = loadJSON(STORAGE.stats, { games: 0, wins: 0, best: 0, totalScore: 0 }); // Carrega as estatísticas desse jogador.
  state.records = loadJSON(STORAGE.records, { bestScore: 0, bestStreak: 0, currentStreak: 0, wordsGuessed: 0, fewestAttempts: null, history: [], lastGameId: null }); // Carrega os recordes desse jogador.
  normalizeRecords(); // Garante que os recordes tenham todos os campos esperados.
  saveJSON(STORAGE.stats, state.stats); // Inicializa o armazenamento de estatísticas se necessário.
  saveJSON(STORAGE.records, state.records); // Inicializa o armazenamento de recordes se necessário.
} // Finaliza o carregamento dos dados pessoais.

// Abre o jogo depois de identificar a conta ativa.
function enterGame(username) { // Recebe o nome de usuário que entrou.
  state.currentUser = username; // Registra a conta ativa no estado do jogo.
  loadUserData(username); // Carrega os resultados separados desse jogador.
  document.body.classList.remove("logged-out"); // Mostra o cabeçalho e as telas originais.
  $("#active-user").textContent = `Olá, ${username}`; // Exibe o nome da conta no cabeçalho.
  $("#active-user").hidden = false; // Mostra o nome do jogador.
  $("#logout-button").hidden = false; // Mostra o botão para sair da conta.
  renderStats(); // Atualiza as estatísticas para a conta autenticada.
  renderRecords(); // Atualiza os recordes para a conta autenticada.
  showHome(); // Garante que a tela inicial do jogo seja exibida.
} // Finaliza a entrada no jogo.

// Valida o formulário e realiza o login ou o cadastro.
function handleAuthSubmit(event) { // Recebe o envio do formulário.
  event.preventDefault(); // Impede que o navegador recarregue a página.
  const username = $("#auth-username").value.trim(); // Lê e limpa o nome de usuário.
  const password = $("#auth-password").value; // Lê a senha digitada.
  const normalizedUsername = username.toLocaleLowerCase("pt-BR"); // Compara nomes sem diferenciar maiúsculas.
  const accounts = loadAccounts(); // Recupera as contas existentes.
  const account = accounts.find((item) => item.username.toLocaleLowerCase("pt-BR") === normalizedUsername); // Procura a conta informada.
  if (authMode === "register") { // Trata a criação de uma conta nova.
    if (username.length < 3) return showAuthMessage("O usuário precisa ter pelo menos 3 caracteres."); // Valida o tamanho do usuário.
    if (password.length < 4) return showAuthMessage("A senha precisa ter pelo menos 4 caracteres."); // Valida o tamanho mínimo da senha.
    if (account) return showAuthMessage("Esse nome de usuário já está cadastrado."); // Evita nomes duplicados.
    accounts.push({ username, password }); // Adiciona a nova conta ao armazenamento local.
    saveJSON(STORAGE.accounts, accounts); // Salva a lista atualizada de contas.
    enterGame(username); // Entra automaticamente depois do cadastro.
    $("#auth-form").reset(); // Limpa os campos do formulário.
    return; // Encerra o processamento do formulário.
  } // Finaliza a lógica de cadastro.
  if (!account || account.password !== password) return showAuthMessage("Usuário ou senha incorretos."); // Recusa dados de login inválidos.
  enterGame(account.username); // Abre o jogo para a conta autenticada.
  $("#auth-form").reset(); // Limpa os campos do formulário.
} // Finaliza o processamento do login.

// Encerra a sessão atual sem apagar as pontuações salvas.
function logout() { // Volta à tela de autenticação.
  state.currentUser = null; // Remove a conta ativa da memória.
  document.body.classList.add("logged-out"); // Esconde o jogo até o próximo login.
  $("#active-user").hidden = true; // Esconde o nome da conta anterior.
  $("#logout-button").hidden = true; // Esconde o botão de sair.
  $("#auth-password").value = ""; // Limpa a senha anterior.
  $("#auth-username").value = ""; // Limpa o nome de usuário anterior.
  showAuthMessage("Você saiu da conta.", false); // Confirma que a sessão foi encerrada.
  authMode = "login"; // Retorna ao modo de login.
  updateAuthMode(); // Atualiza os textos da tela de autenticação.
} // Finaliza o encerramento da sessão.

// Conecta os eventos da tela de login e cadastro.
function bindAuthEvents() { // Registra os eventos do formulário de autenticação.
  $("#auth-form").addEventListener("submit", handleAuthSubmit); // Processa login e cadastro ao enviar o formulário.
  $("#auth-toggle").addEventListener("click", () => { // Permite alternar entre entrar e cadastrar.
    authMode = authMode === "login" ? "register" : "login"; // Alterna o modo atual.
    updateAuthMode(); // Atualiza título, botões e mensagem.
  }); // Finaliza o evento de alternância.
  $("#logout-button").addEventListener("click", logout); // Conecta o botão de sair.
} // Finaliza a conexão dos eventos de autenticação.

// EVENTOS DA INTERFACE

// ============================================================



// Conecta os elementos HTML às funções do JavaScript.

function bindEvents() {

  // Atualiza a lista de categorias enquanto o usuário pesquisa.

  elements.categorySearch.addEventListener("input", renderCategories);



  // Atualiza a prévia de palavras durante a pesquisa.

  elements.wordSearch.addEventListener("input", renderWordPreview);



  // Abre o formulário de criação de categoria.

  $("#open-manager").addEventListener("click", () => openCategoryDialog());



  // Conecta os botões de fechar os modais.

  $$(".close-modal").forEach((button) => button.addEventListener("click", closeCategoryDialog));



  // Salva o formulário de categorias quando ele é enviado.

  elements.categoryForm.addEventListener("submit", saveCategory);



  // Conecta os botões de dificuldade.

  $$(".difficulty").forEach((button) =>

    button.addEventListener("click", () => chooseDifficulty(button.dataset.level))

  );



  // Inicia ou reinicia uma partida.

  $("#start-game").addEventListener("click", startGame);

  $("#restart-game").addEventListener("click", startGame);



  // Conecta os botões para sair da partida e usar dicas.

  $("#leave-game").addEventListener("click", leaveGame);

  elements.hintButton.addEventListener("click", useHint);



  // Conecta o formulário de tentativa da palavra inteira.

  $("#word-guess-form").addEventListener("submit", guessWholeWord);



  // Impede que as teclas digitadas no campo de palavra

  // sejam interpretadas pelo teclado físico do jogo.

  elements.wordGuess.addEventListener("keydown", (event) => event.stopPropagation());

  elements.wordGuess.addEventListener("keyup", (event) => event.stopPropagation());

  elements.wordGuess.addEventListener("keypress", (event) => event.stopPropagation());



  // Escuta as teclas pressionadas em qualquer parte da página.

  document.addEventListener("keydown", handlePhysicalKeyboard);



  // Ativa ou desativa os sons.

  $("#sound-toggle").addEventListener("click", toggleSound);



  // Abre a tela de recordes e conecta os botões de navegação.

  $("#open-records").addEventListener("click", openRecords);

  $("#records-back").addEventListener("click", showHome);

  $("#home-link").addEventListener("click", showHome);



  // Fecha o resultado e inicia outra partida.

  $("#play-again").addEventListener("click", () => {

    elements.resultDialog.close();

    startGame();

  });



  // Volta para a tela inicial a partir do resultado.

  $("#result-home").addEventListener("click", leaveGame);



  // Fecha o modal de categorias quando o usuário clica fora do conteúdo.

  elements.categoryDialog.addEventListener("click", (event) => {

    if (event.target === elements.categoryDialog) closeCategoryDialog();

  });



  // Impede o fechamento automático do modal de resultado.

  // Em vez disso, chama a função que trata a saída da partida.

  elements.resultDialog.addEventListener("cancel", (event) => {

    event.preventDefault();

    leaveGame();

  });

}



// ============================================================

// INICIALIZAÇÃO

// ============================================================



// Prepara o jogo assim que o JavaScript é carregado.

function init() {

  // Mantém a aplicação bloqueada até o jogador entrar em uma conta.
  document.body.classList.add("logged-out"); // Exibe apenas a tela de autenticação inicialmente.
  bindAuthEvents(); // Conecta os botões e o formulário de login.
  updateAuthMode(); // Exibe os textos iniciais do modo de login.

  // Remove categorias personalizadas que estejam incompletas ou inválidas.

  state.customCategories = state.customCategories.filter((category) =>

    category && category.id && category.name && Array.isArray(category.words) && category.words.length

  );



  // Corrige a estrutura dos recordes e salva os dados ajustados.

  normalizeRecords();

  saveJSON(STORAGE.records, state.records);



  // Atualiza o botão de som de acordo com a preferência salva.

  $("#sound-toggle").classList.toggle("muted", !state.sound);



  // Renderiza as informações iniciais da interface.

  renderCategories();

  renderWordPreview();

  renderStats();

  renderRecords();



  // Aplica a dificuldade inicial.

  chooseDifficulty(state.difficulty);



  // Conecta os eventos dos elementos da página.

  bindEvents();

}



// Executa a inicialização do jogo.

init();