
"use strict";

// ======================================================
// 1. CATEGORIAS E PALAVRAS DO JOGO
// ======================================================

// Categorias que já vêm prontas no jogo.
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

// Configurações das dificuldades.
// O número de erros define as tentativas disponíveis.
// O multiplicador é usado no cálculo da pontuação.
const DIFFICULTIES = {
  easy: { label: "Fácil", errors: 10, multiplier: 1 },
  medium: { label: "Médio", errors: 8, multiplier: 1.35 },
  hard: { label: "Difícil", errors: 6, multiplier: 1.75 }
};

// Nomes usados para guardar informações no localStorage.
// Isso permite manter dados mesmo depois de fechar a página.
const STORAGE = {
  categories: "forcaAtelier.customCategories",
  stats: "forcaAtelier.stats",
  sound: "forcaAtelier.sound"
};

// ======================================================
// 2. ESTADO DO JOGO
// ======================================================

// Objeto que reúne as informações que mudam durante o uso.
const state = {
  // Carrega as categorias personalizadas salvas anteriormente.
  customCategories: loadJSON(STORAGE.categories, []),

  // Carrega as estatísticas ou cria valores iniciais.
  stats: loadJSON(STORAGE.stats, { games: 0, wins: 0, best: 0, totalScore: 0 }),

  selectedCategoryId: "animais",
  difficulty: "medium",
  word: "",

  // Set armazena letras sem permitir repetições.
  guessedLetters: new Set(),
  wrongLetters: new Set(),

  mistakes: 0,
  startedAt: 0,
  elapsed: 0,
  timerId: null,
  playing: false,

  // O som fica ativado, exceto se o usuário já o desativou.
  sound: localStorage.getItem(STORAGE.sound) !== "off"
};

// ======================================================
// 3. SELEÇÃO DOS ELEMENTOS HTML
// ======================================================

// Atalhos para selecionar elementos do HTML.
// $ seleciona um único elemento.
// $$ seleciona vários elementos e transforma o resultado em array.
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// Guarda os elementos HTML que serão usados várias vezes.
const elements = {
  setup: $("#setup-screen"),
  game: $("#game-screen"),
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
  toast: $("#toast")
};

// ======================================================
// 4. ARMAZENAMENTO E TRATAMENTO DE TEXTO
// ======================================================

// Lê um valor do localStorage e tenta convertê-lo de JSON.
// Se não existir ou ocorrer um erro, retorna o valor padrão.
function loadJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

// Converte um valor para JSON e salva no localStorage.
function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Padroniza textos para facilitar comparações.
// Remove acentos, transforma em maiúsculas e tira espaços nas pontas.
function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
}

// Junta as categorias prontas com as criadas pelo usuário.
function allCategories() {
  return [...BUILT_IN_CATEGORIES, ...state.customCategories];
}

// Retorna a categoria selecionada.
// Se ela não for encontrada, usa a primeira categoria disponível.
function selectedCategory() {
  return allCategories().find((category) => category.id === state.selectedCategoryId) || allCategories()[0];
}

// Cria uma abreviação com as primeiras letras das palavras do nome.
// Exemplo: "Corpo humano" vira "CH".
function initials(name) {
  return name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}

// ======================================================
// 5. EXIBIÇÃO E SELEÇÃO DE CATEGORIAS
// ======================================================

// Atualiza os cartões de categorias na tela inicial.
function renderCategories() {
  const query = normalize(elements.categorySearch.value);

  // Filtra as categorias pelo texto digitado na busca.
  const categories = allCategories().filter((category) => normalize(category.name).includes(query));

  elements.categoryCount.textContent = `${allCategories().length} temas`;
  elements.categoryGrid.innerHTML = "";

  // Mostra uma mensagem se nenhuma categoria corresponder à busca.
  if (!categories.length) {
    elements.categoryGrid.innerHTML = '<p class="empty-state">Nenhuma categoria encontrada.</p>';
    return;
  }

  // Cria um cartão para cada categoria encontrada.
  categories.forEach((category) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `category-card${category.id === state.selectedCategoryId ? " active" : ""}`;
    card.dataset.categoryId = category.id;
    card.setAttribute("aria-pressed", String(category.id === state.selectedCategoryId));

    // Verifica se a categoria foi criada pelo usuário.
    const isCustom = category.custom === true;

    // Monta o conteúdo visual do cartão.
    // escapeHTML protege os textos inseridos no HTML.
    card.innerHTML = `
      <span class="category-symbol">${initials(category.name)}</span>
      <span><strong>${escapeHTML(category.name)}</strong><small>${category.words.length} palavras</small></span>
      ${isCustom ? `<span class="card-actions">
        <span class="card-action edit-category" role="button" tabindex="0" title="Editar" aria-label="Editar ${escapeHTML(category.name)}">E</span>
        <span class="card-action delete-category" role="button" tabindex="0" title="Excluir" aria-label="Excluir ${escapeHTML(category.name)}">X</span>
      </span>` : ""}
    `;

    // Ao clicar, verifica se o usuário quer selecionar,
    // editar ou excluir a categoria.
    card.addEventListener("click", (event) => handleCategoryCard(event, category));

    // Permite usar Enter ou Espaço nos controles de editar e excluir.
    card.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.closest(".card-action")) {
        event.preventDefault();
        handleCategoryCard(event, category);
      }
    });

    elements.categoryGrid.appendChild(card);
  });
}

// Decide o que fazer quando um cartão de categoria é acionado.
function handleCategoryCard(event, category) {
  // Abre a edição quando o controle de editar é acionado.
  if (event.target.closest(".edit-category")) {
    event.stopPropagation();
    openCategoryDialog(category);
    return;
  }

  // Exclui a categoria quando o controle de excluir é acionado.
  if (event.target.closest(".delete-category")) {
    event.stopPropagation();
    deleteCategory(category);
    return;
  }

  // Caso contrário, seleciona a categoria para jogar.
  state.selectedCategoryId = category.id;
  elements.wordSearch.value = "";
  renderCategories();
  renderWordPreview();
}

// Exibe a lista de palavras da categoria selecionada.
function renderWordPreview() {
  const category = selectedCategory();
  const query = normalize(elements.wordSearch.value);

  // Filtra as palavras com base no campo de busca.
  const words = category.words.filter((word) => normalize(word).includes(query));

  $("#word-preview-title").textContent = category.name;

  // Mostra a quantidade de palavras encontradas.
  elements.previewTotal.textContent = query ? `${words.length}/${category.words.length}` : category.words.length;

  // Cria os elementos visuais das palavras ou uma mensagem vazia.
  elements.wordList.innerHTML = words.length
    ? words.map((word) => `<span class="word-pill">${escapeHTML(word)}</span>`).join("")
    : '<p class="empty-state">Nenhuma palavra encontrada.</p>';
}

// Escapa caracteres especiais para evitar que um texto seja interpretado como HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

// ======================================================
// 6. CRIAÇÃO, EDIÇÃO E EXCLUSÃO DE CATEGORIAS
// ======================================================

// Abre o formulário de categoria.
// Se receber uma categoria, preenche os campos para edição.
// Se não receber, abre o formulário vazio para criar uma nova.
function openCategoryDialog(category = null) {
  $("#category-modal-title").textContent = category ? "Editar categoria" : "Nova categoria";
  $("#editing-category-id").value = category?.id || "";
  $("#custom-category-name").value = category?.name || "";
  $("#custom-category-words").value = category?.words.join("\n") || "";
  $("#category-form-error").textContent = "";

  elements.categoryDialog.showModal();

  // Coloca o cursor no campo do nome após abrir o modal.
  setTimeout(() => $("#custom-category-name").focus(), 50);
}

// Fecha o formulário e limpa seus campos.
function closeCategoryDialog() {
  elements.categoryDialog.close();
  elements.categoryForm.reset();
}

// Valida e salva uma categoria criada ou editada.
function saveCategory(event) {
  event.preventDefault();

  const id = $("#editing-category-id").value;
  const name = $("#custom-category-name").value.trim();

  // Separa as palavras por quebra de linha, vírgula ou ponto e vírgula.
  // Também remove palavras repetidas e espaços desnecessários.
  const words = [...new Set($("#custom-category-words").value.split(/[\n,;]+/).map((word) => word.trim().toUpperCase()).filter(Boolean))];

  const error = $("#category-form-error");

  // Valida o tamanho do nome.
  if (name.length < 2) {
    error.textContent = "Digite um nome com pelo menos 2 caracteres.";
    return;
  }

  // Exige pelo menos três palavras diferentes.
  if (words.length < 3) {
    error.textContent = "Adicione pelo menos 3 palavras diferentes.";
    return;
  }

  // Impede que duas categorias tenham o mesmo nome.
  const duplicate = allCategories().find((category) => normalize(category.name) === normalize(name) && category.id !== id);
  if (duplicate) {
    error.textContent = "Já existe uma categoria com esse nome.";
    return;
  }

  // Se existe um ID, atualiza uma categoria já cadastrada.
  if (id) {
    const index = state.customCategories.findIndex((category) => category.id === id);
    state.customCategories[index] = { ...state.customCategories[index], name, words };
    state.selectedCategoryId = id;
    showToast("Categoria atualizada.");
  } else {
    // Caso contrário, cria uma nova categoria com ID próprio.
    const category = { id: `custom-${Date.now()}`, name, words, custom: true };
    state.customCategories.push(category);
    state.selectedCategoryId = category.id;
    showToast("Categoria criada.");
  }

  // Salva as mudanças e atualiza a interface.
  saveJSON(STORAGE.categories, state.customCategories);
  closeCategoryDialog();
  renderCategories();
  renderWordPreview();
}

// Exclui uma categoria personalizada após pedir confirmação.
function deleteCategory(category) {
  if (!window.confirm(`Excluir a categoria “${category.name}”?`)) return;

  // Remove a categoria da lista.
  state.customCategories = state.customCategories.filter((item) => item.id !== category.id);

  // Se ela estava selecionada, volta para a categoria Animais.
  if (state.selectedCategoryId === category.id) state.selectedCategoryId = "animais";

  saveJSON(STORAGE.categories, state.customCategories);
  renderCategories();
  renderWordPreview();
  showToast("Categoria excluída.");
}

// ======================================================
// 7. CONFIGURAÇÃO DA DIFICULDADE
// ======================================================

// Atualiza a dificuldade escolhida e o visual dos botões.
function chooseDifficulty(level) {
  state.difficulty = level;

  $$(".difficulty").forEach((button) => {
    const active = button.dataset.level === level;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

// ======================================================
// 8. INÍCIO DA PARTIDA
// ======================================================

// Prepara todos os dados e elementos necessários para começar.
function startGame() {
  const category = selectedCategory();

  // Sorteia uma palavra da categoria selecionada.
  state.word = category.words[Math.floor(Math.random() * category.words.length)].toUpperCase();

  // Reinicia os dados da partida.
  state.guessedLetters = new Set();
  state.wrongLetters = new Set();
  state.mistakes = 0;
  state.elapsed = 0;
  state.startedAt = Date.now();
  state.playing = true;

  // Limpa um cronômetro anterior e inicia um novo.
  clearInterval(state.timerId);
  state.timerId = setInterval(updateTimer, 1000);

  // Atualiza as informações apresentadas na tela.
  $("#game-category").textContent = category.name;
  $("#game-difficulty").textContent = DIFFICULTIES[state.difficulty].label;
  $("#word-hint").textContent = `A palavra tem ${[...state.word].filter((letter) => /[A-ZÀ-Ü]/i.test(letter)).length} letras`;

  elements.wordGuess.value = "";
  elements.gameMessage.textContent = "Escolha uma letra para começar";
  elements.gameMessage.className = "game-message";

  // Esconde a tela inicial e mostra a tela do jogo.
  elements.setup.hidden = true;
  elements.game.hidden = false;

  // Monta o teclado e atualiza os elementos da partida.
  buildKeyboard();
  renderMaskedWord();
  renderAttempts();
  updateLiveScore();

  // Rola a página para o topo suavemente.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======================================================
// 9. TECLADO E TENTATIVAS
// ======================================================

// Cria os botões de A até Z para o teclado virtual.
function buildKeyboard() {
  elements.keyboard.innerHTML = "";

  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "key";
    button.textContent = letter;
    button.dataset.letter = letter;
    button.setAttribute("aria-label", `Letra ${letter}`);

    // Cada botão chama a função que verifica a letra escolhida.
    button.addEventListener("click", () => guessLetter(letter));
    elements.keyboard.appendChild(button);
  });
}

// Verifica se a letra escolhida está presente na palavra.
function guessLetter(letter) {
  // Não permite jogar se a partida já terminou.
  if (!state.playing) return;

  const normalizedLetter = normalize(letter);

  // Impede que a mesma letra seja usada novamente.
  if (state.guessedLetters.has(normalizedLetter) || state.wrongLetters.has(normalizedLetter)) return;

  const normalizedWord = normalize(state.word);
  const correct = normalizedWord.includes(normalizedLetter);

  // Localiza o botão correspondente à letra.
  const key = $(`.key[data-letter="${normalizedLetter}"]`);
  key.disabled = true;
  key.classList.add(correct ? "correct" : "wrong");

  if (correct) {
    // Registra uma letra correta.
    state.guessedLetters.add(normalizedLetter);
    setMessage(`Boa! A letra ${letter} está na palavra.`, "success");
    beep(540, 0.07);
  } else {
    // Registra um erro e diminui as tentativas disponíveis.
    state.wrongLetters.add(normalizedLetter);
    state.mistakes += 1;
    setMessage(`A letra ${letter} não aparece na palavra.`, "error");
    beep(180, 0.1);
  }

  // Atualiza a palavra, as tentativas, a pontuação e o resultado.
  renderMaskedWord();
  renderAttempts();
  updateLiveScore();
  evaluateGame();
}

// Verifica uma tentativa em que o jogador digita a palavra inteira.
function guessWholeWord(event) {
  event.preventDefault();
  event.stopPropagation();

  if (!state.playing) return;

  const guess = normalize(elements.wordGuess.value);

  // Impede uma tentativa vazia.
  if (!guess) {
    setMessage("Digite uma palavra antes de tentar.", "error");
    return;
  }

  // Compara a palavra digitada com a palavra sorteada.
  if (guess === normalize(state.word)) {
    // Revela todas as letras corretas e encerra com vitória.
    normalize(state.word).split("").forEach((letter) => {
      if (/[A-Z]/.test(letter)) state.guessedLetters.add(letter);
    });

    renderMaskedWord();
    finishGame(true);
  } else {
    // Uma palavra errada consome uma tentativa.
    state.mistakes += 1;
    elements.wordGuess.select();
    setMessage("Não é essa palavra. Você perdeu uma tentativa.", "error");
    beep(180, 0.1);

    renderAttempts();
    updateLiveScore();

    // Encerra a partida se o limite de erros for atingido.
    if (state.mistakes >= DIFFICULTIES[state.difficulty].errors) finishGame(false);
  }
}

// ======================================================
// 10. EXIBIÇÃO DA PALAVRA E DAS TENTATIVAS
// ======================================================

// Mostra as letras descobertas e mantém as demais ocultas.
// revealAll permite revelar a palavra inteira ao terminar.
function renderMaskedWord(revealAll = false) {
  elements.maskedWord.innerHTML = [...state.word].map((character) => {
    // Espaços são representados sem uma letra.
    if (character === " ") return '<span class="letter-slot space" aria-hidden="true"></span>';

    // Caracteres que não são letras aparecem automaticamente.
    if (!/[A-ZÀ-Ü]/i.test(character)) return `<span class="letter-slot revealed">${escapeHTML(character)}</span>`;

    // Verifica se a letra já foi descoberta.
    const revealed = revealAll || state.guessedLetters.has(normalize(character));

    return `<span class="letter-slot${revealed ? " revealed" : ""}">${revealed ? escapeHTML(character) : ""}</span>`;
  }).join("");

  // Cria uma descrição acessível para leitores de tela.
  const spoken = [...state.word].map((character) => {
    if (character === " ") return "espaço";
    return state.guessedLetters.has(normalize(character)) ? character : "oculta";
  }).join(", ");

  elements.maskedWord.setAttribute("aria-label", spoken);
}

// Atualiza o número de tentativas restantes e o desenho da forca.
function renderAttempts() {
  const limit = DIFFICULTIES[state.difficulty].errors;

  // Calcula quantas tentativas ainda estão disponíveis.
  elements.attemptsLeft.textContent = Math.max(0, limit - state.mistakes);

  // Desenha os indicadores de erros.
  elements.mistakeDots.innerHTML = Array.from({ length: limit }, (_, index) =>
    `<span class="mistake-dot${index < state.mistakes ? " used" : ""}"></span>`
  ).join("");

  // Calcula quantas partes do desenho devem aparecer.
  const visibleParts = Math.ceil((state.mistakes / limit) * 10);

  // Mostra as partes da forca conforme os erros aumentam.
  $$("[data-part]").forEach((part) => part.classList.toggle("visible", Number(part.dataset.part) <= visibleParts));
}

// Verifica se todas as letras da palavra foram descobertas ou se acabaram as tentativas.
function evaluateGame() {
  // Cria uma lista sem letras repetidas e ignora espaços e sinais.
  const letters = [...new Set(normalize(state.word).replace(/[^A-Z]/g, ""))];

  // Se todas as letras foram descobertas, o jogador venceu.
  if (letters.every((letter) => state.guessedLetters.has(letter))) finishGame(true);

  // Se o limite de erros foi atingido, o jogador perdeu.
  else if (state.mistakes >= DIFFICULTIES[state.difficulty].errors) finishGame(false);
}

// ======================================================
// 11. PONTUAÇÃO E CRONÔMETRO
// ======================================================

// Calcula a pontuação final com base em letras, tempo,
// erros restantes e dificuldade escolhida.
function calculateScore() {
  if (!state.word) return 0;

  const difficulty = DIFFICULTIES[state.difficulty];
  const letters = normalize(state.word).replace(/[^A-Z]/g, "").length;

  // Quanto menor o tempo, maior pode ser o bônus.
  const timeBonus = Math.max(0, 300 - state.elapsed * 2);

  // Cada tentativa que sobrou acrescenta pontos.
  const accuracyBonus = Math.max(0, difficulty.errors - state.mistakes) * 20;

  // Aplica o multiplicador da dificuldade e arredonda o resultado.
  return Math.round((letters * 50 + timeBonus + accuracyBonus) * difficulty.multiplier);
}

// Atualiza a pontuação parcial durante a partida.
function updateLiveScore() {
  const partial = Math.max(0, state.guessedLetters.size * 25 - state.mistakes * 10);
  elements.liveScore.textContent = partial;
}

// Atualiza o tempo decorrido desde o início da partida.
function updateTimer() {
  state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  elements.timer.textContent = formatTime(state.elapsed);
}

// Transforma segundos em um formato de minutos e segundos.
// Exemplo: 95 segundos vira "01:35".
function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// ======================================================
// 12. FINALIZAÇÃO DA PARTIDA
// ======================================================

// Encerra a partida e apresenta o resultado.
function finishGame(won) {
  // Evita que a partida seja finalizada mais de uma vez.
  if (!state.playing) return;

  state.playing = false;
  clearInterval(state.timerId);
  updateTimer();

  // Revela a palavra correta ao terminar.
  renderMaskedWord(true);

  // Só calcula pontos se o jogador vencer.
  const score = won ? calculateScore() : 0;
  elements.liveScore.textContent = score;

  // Atualiza as estatísticas gerais.
  state.stats.games += 1;

  if (won) {
    state.stats.wins += 1;
    state.stats.totalScore += score;
    state.stats.best = Math.max(state.stats.best, score);

    // Toca os sons de vitória.
    beep(660, 0.1);
    setTimeout(() => beep(820, 0.13), 100);
  }

  // Salva e exibe as estatísticas atualizadas.
  saveJSON(STORAGE.stats, state.stats);
  renderStats();

  // Atualiza os textos e os valores da janela de resultado.
  $("#result-seal").classList.toggle("lost", !won);
  $("#result-title").textContent = won ? "Você venceu!" : "Fim de jogo";
  $("#result-overline").textContent = won ? "Desafio concluído" : "As tentativas acabaram";
  $("#result-copy").textContent = won ? "Você descobriu a palavra" : "A palavra correta era";
  $("#result-word").textContent = state.word;
  $("#result-time").textContent = formatTime(state.elapsed);
  $("#result-score").textContent = score;
  $("#result-errors").textContent = state.mistakes;

  // Abre a janela de resultado após um pequeno intervalo.
  setTimeout(() => elements.resultDialog.showModal(), 380);
}

// Sai da partida e retorna para a tela inicial.
function leaveGame() {
  // Pede confirmação se ainda existe uma partida em andamento.
  if (state.playing && !window.confirm("Sair desta partida? O progresso atual será perdido.")) return;

  state.playing = false;
  clearInterval(state.timerId);

  // Fecha a janela de resultado, caso esteja aberta.
  if (elements.resultDialog.open) elements.resultDialog.close();

  elements.game.hidden = true;
  elements.setup.hidden = false;

  renderStats();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Atualiza os dados exibidos no painel de estatísticas.
function renderStats() {
  elements.statGames.textContent = state.stats.games;

  // Calcula a porcentagem de vitórias.
  elements.statWins.textContent = state.stats.games
    ? `${Math.round((state.stats.wins / state.stats.games) * 100)}%`
    : "0%";

  elements.statBest.textContent = state.stats.best;
}

// Exibe uma mensagem para informar o jogador sobre o que aconteceu.
function setMessage(message, type = "") {
  elements.gameMessage.textContent = message;
  elements.gameMessage.className = `game-message${type ? ` ${type}` : ""}`;
}

// ======================================================
// 13. NOTIFICAÇÕES E EFEITOS SONOROS
// ======================================================

// Variável usada para controlar o tempo da notificação.
let toastTimer;

// Mostra uma notificação temporária na tela.
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  // Cancela o desaparecimento anterior, se houver.
  clearTimeout(toastTimer);

  // Esconde a notificação depois de 2,2 segundos.
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

// Toca um som simples usando a API de áudio do navegador.
function beep(frequency, duration) {
  // Não toca nada se o som estiver desativado.
  if (!state.sound) return;

  try {
    // Cria o contexto de áudio e os componentes do som.
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    // Define a frequência e o volume.
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.035, context.currentTime);

    // Faz o volume diminuir até o som terminar.
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);

    // Conecta os componentes ao áudio do navegador.
    oscillator.connect(gain).connect(context.destination);

    // Inicia e encerra o som.
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
  } catch {
    // O jogo continua funcionando mesmo se o navegador não suportar áudio.
  }
}

// Liga ou desliga os efeitos sonoros.
function toggleSound() {
  state.sound = !state.sound;

  // Salva a preferência do jogador.
  localStorage.setItem(STORAGE.sound, state.sound ? "on" : "off");

  // Atualiza a aparência e a descrição do botão.
  $("#sound-toggle").classList.toggle("muted", !state.sound);
  $("#sound-toggle").setAttribute("aria-label", state.sound ? "Desativar sons" : "Ativar sons");
}

// ======================================================
// 14. TECLADO FÍSICO
// ======================================================

// Permite jogar usando as letras do teclado do computador.
function handlePhysicalKeyboard(event) {
  // Só aceita teclas durante uma partida.
  if (!state.playing || event.ctrlKey || event.metaKey || event.altKey) return;

  const target = event.target;

  // Não interfere quando o usuário está digitando em campos de texto.
  if (target.matches("input, textarea, select") || target.isContentEditable) return;

  // Se a tecla pressionada for uma letra, registra a tentativa.
  if (/^[a-zA-Z]$/.test(event.key)) {
    event.preventDefault();
    guessLetter(event.key.toUpperCase());
  }
}

// ======================================================
// 15. EVENTOS DA INTERFACE
// ======================================================

// Conecta os botões, campos e janelas às funções do jogo.
function bindEvents() {
  // Atualiza as categorias enquanto o usuário digita na busca.
  elements.categorySearch.addEventListener("input", renderCategories);

  // Atualiza a prévia das palavras enquanto o usuário pesquisa.
  elements.wordSearch.addEventListener("input", renderWordPreview);

  // Abre o formulário para criar uma categoria.
  $("#open-manager").addEventListener("click", () => openCategoryDialog());

  // Fecha o formulário pelos botões com a classe close-modal.
  $$(".close-modal").forEach((button) => button.addEventListener("click", closeCategoryDialog));

  // Salva a categoria quando o formulário é enviado.
  elements.categoryForm.addEventListener("submit", saveCategory);

  // Configura os botões de dificuldade.
  $$(".difficulty").forEach((button) => button.addEventListener("click", () => chooseDifficulty(button.dataset.level)));

  // Inicia, reinicia ou encerra a partida.
  $("#start-game").addEventListener("click", startGame);
  $("#restart-game").addEventListener("click", startGame);
  $("#leave-game").addEventListener("click", leaveGame);

  // Permite tentar adivinhar a palavra inteira.
  $("#word-guess-form").addEventListener("submit", guessWholeWord);

  // Impede que os eventos do campo de palavra se propaguem.
  elements.wordGuess.addEventListener("keydown", (event) => event.stopPropagation());
  elements.wordGuess.addEventListener("keyup", (event) => event.stopPropagation());
  elements.wordGuess.addEventListener("keypress", (event) => event.stopPropagation());

  // Ativa o uso do teclado físico durante a partida.
  document.addEventListener("keydown", handlePhysicalKeyboard);

  // Liga e desliga os sons.
  $("#sound-toggle").addEventListener("click", toggleSound);

  // Fecha o resultado e inicia uma nova partida.
  $("#play-again").addEventListener("click", () => {
    elements.resultDialog.close();
    startGame();
  });

  // Retorna à tela inicial a partir do resultado.
  $("#result-home").addEventListener("click", leaveGame);

  // Fecha o modal de categoria ao clicar fora do conteúdo.
  elements.categoryDialog.addEventListener("click", (event) => {
    if (event.target === elements.categoryDialog) closeCategoryDialog();
  });

  // Impede o fechamento automático do resultado.
  // Ao cancelar, chama a função de retorno à tela inicial.
  elements.resultDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    leaveGame();
  });
}

// ======================================================
// 16. INICIALIZAÇÃO
// ======================================================

// Prepara os dados e a interface assim que o script é executado.
function init() {
  // Remove categorias salvas que não possuem os dados necessários.
  state.customCategories = state.customCategories.filter((category) =>
    category && category.id && category.name && Array.isArray(category.words) && category.words.length
  );

  // Atualiza o estado visual do botão de som.
  $("#sound-toggle").classList.toggle("muted", !state.sound);

  // Renderiza os elementos iniciais da tela.
  renderCategories();
  renderWordPreview();
  renderStats();

  // Seleciona a dificuldade inicial.
  chooseDifficulty(state.difficulty);

  // Conecta os eventos aos elementos da página.
  bindEvents();
}

// Executa a inicialização do jogo.
init();