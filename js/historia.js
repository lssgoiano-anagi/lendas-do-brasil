# Criando os Arquivos do Projeto 📁

Você precisa criar os arquivos no seu computador! Vou te dar **todo o código pronto** para você copiar e colar.

---

## Estrutura de Pastas

Crie esta estrutura no seu computador:

```
lendas-do-brasil/
├── index.html
├── css/
│   ├── estilo.css
│   └── animacoes.css
├── js/
│   ├── historia.js
│   ├── jogo.js
│   └── audio.js
└── assets/
    └── imagens/
```

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Jornada das Lendas - Livro-Jogo Brasileiro</title>
    <link rel="stylesheet" href="/css/estilo.css">
    <link rel="stylesheet" href="/css/animacoes.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- Tela de Título -->
        <section id="tela-inicio" class="tela ativa">
            <div class="intro-animada">
                <div class="logo-container">
                    <h1 class="titulo-principal">A Jornada das Lendas</h1>
                    <div class="sublinhado-magico"></div>
                </div>
                <p class="subtitulo">Um livro-jogo interativo brasileiro</p>
                <div class="mapa-brasil-mini">🗺️</div>
                <button id="btn-comecar" class="botao-magico">
                    <span class="texto-botao">Iniciar Jornada</span>
                    <span class="efeito-botao"></span>
                </button>
                <p class="creditos">Explore as lendas de todos os 27 estados do Brasil</p>
            </div>
            <div class="particulas">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
        </section>

        <!-- Área do Jogo -->
        <section id="area-jogo" class="tela">
            <header class="cabecalho">
                <div class="progresso-container">
                    <div class="info-estado">
                        <span class="label">Local:</span>
                        <span id="estado-atual" class="valor">Início</span>
                    </div>
                    <div class="barra-progresso">
                        <div id="barra" class="preenchimento"></div>
                    </div>
                    <div class="info-fragmentos">
                        <span class="label">Fragmentos:</span>
                        <span id="fragmentos" class="valor">0/27</span>
                    </div>
                </div>
            </header>

            <main class="conteudo-historia">
                <div id="imagem-cena" class="imagem-animada">
                    <div class="overlay-imagem"></div>
                </div>
                <div class="container-texto">
                    <h2 id="titulo-cena" class="titulo-cena"></h2>
                    <div id="texto-historia" class="texto-narrativa"></div>
                </div>
                
                <div id="opcoes" class="container-opcoes">
                    <!-- Botões gerados dinamicamente -->
                </div>
            </main>

            <aside class="painel-itens">
                <div class="cabecalho-itens">
                    <h3>🎒 Inventário</h3>
                </div>
                <ul id="lista-itens" class="lista-itens">
                    <li class="item-vazio">Nenhum item ainda...</li>
                </ul>
            </aside>

            <nav class="menu-inferior">
                <button id="btn-mapa" class="botao-menu">🗺️ Mapa</button>
                <button id="btn-som" class="botao-menu">🔊 Som</button>
                <button id="btn-salvar" class="botao-menu">💾 Salvar</button>
            </nav>
        </section>

        <!-- Modal do Mapa -->
        <div id="modal-mapa" class="modal">
            <div class="conteudo-modal">
                <button class="fechar-modal">✕</button>
                <h2>Mapa do Brasil</h2>
                <div id="mapa-brasil" class="mapa-interativo">
                    <!-- Estados serão gerados aqui -->
                </div>
            </div>
        </div>
    </div>

    <script src="/js/historia.js"></script>
    <script src="/js/jogo.js"></script>
    <script src="/js/audio.js"></script>
</body>
</html>
```

---

## 🎨 `css/estilo.css`

```css
/* Reset e Variáveis */
:root {
    --cor-primaria: #1a472a;
    --cor-secundaria: #c9a227;
    --cor-fundo: #0d1b0f;
    --cor-texto: #e8e4d9;
    --cor-texto-escuro: #2c2c2c;
    --cor-destaque: #ff6b35;
    --sombra-magica: 0 0 30px rgba(201, 162, 39, 0.3);
    --fonte-titulo: 'Cinzel', serif;
    --fonte-texto: 'Lora', serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--fonte-texto);
    background: var(--cor-fundo);
    color: var(--cor-texto);
    min-height: 100vh;
    overflow-x: hidden;
}

/* Tela de Início */
#tela-inicio {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: 
        radial-gradient(ellipse at bottom, #1a472a 0%, transparent 50%),
        radial-gradient(ellipse at top, #0d1b0f 0%, #1a1a2e 100%);
    position: relative;
    overflow: hidden;
}

.intro-animada {
    text-align: center;
    z-index: 10;
    padding: 2rem;
}

.titulo-principal {
    font-family: var(--fonte-titulo);
    font-size: clamp(2.5rem, 8vw, 5rem);
    color: var(--cor-secundaria);
    text-shadow: var(--sombra-magica);
    margin-bottom: 0.5rem;
    animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
    0%, 100% { text-shadow: 0 0 20px rgba(201, 162, 39, 0.5); }
    50% { text-shadow: 0 0 40px rgba(201, 162, 39, 0.8), 0 0 60px rgba(201, 162, 39, 0.4); }
}

.subtitulo {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-bottom: 2rem;
    font-style: italic;
}

.botao-magico {
    font-family: var(--fonte-titulo);
    font-size: 1.3rem;
    padding: 1rem 3rem;
    background: linear-gradient(135deg, var(--cor-secundaria), #8b6914);
    color: var(--cor-fundo);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.botao-magico:hover {
    transform: scale(1.05);
    box-shadow: var(--sombra-magica), 0 0 60px rgba(201, 162, 39, 0.5);
}

.botao-magico::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: rotate(45deg);
    animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
    0%, 100% { left: -50%; }
    50% { left: 150%; }
}

/* Área do Jogo */
#area-jogo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #0d1b0f 0%, #1a2f1c 100%);
}

.cabecalho {
    background: linear-gradient(90deg, rgba(26,71,42,0.9), rgba(13,27,15,0.95));
    padding: 1rem;
    border-bottom: 2px solid var(--cor-secundaria);
}

.progresso-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.info-estado, .info-fragmentos {
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
}

.label {
    opacity: 0.7;
}

.valor {
    color: var(--cor-secundaria);
    font-weight: bold;
}

.barra-progresso {
    flex: 1;
    height: 10px;
    background: rgba(255,255,255,0.1);
    border-radius: 5px;
    overflow: hidden;
    min-width: 100px;
}

.preenchimento {
    height: 100%;
    background: linear-gradient(90deg, var(--cor-primaria), var(--cor-secundaria));
    border-radius: 5px;
    transition: width 0.5s ease;
    width: 0%;
}

/* Conteúdo Principal */
.conteudo-historia {
    flex: 1;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
}

.imagem-animada {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, var(--cor-primaria), #0d1b0f);
    border-radius: 15px;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--cor-secundaria);
}

.overlay-imagem {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(13,27,15,0.8) 100%);
}

.container-texto {
    background: rgba(26,71,42,0.3);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    border-left: 4px solid var(--cor-secundaria);
}

.titulo-cena {
    font-family: var(--fonte-titulo);
    font-size: 1.8rem;
    color: var(--cor-secundaria);
    margin-bottom: 1rem;
}

.texto-narrativa {
    line-height: 1.8;
    font-size: 1.1rem;
}

.texto-narrativa p {
    margin-bottom: 1rem;
}

/* Opções */
.container-opcoes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.botao-opcao {
    padding: 1.2rem;
    background: linear-gradient(135deg, rgba(26,71,42,0.8), rgba(13,27,15,0.9));
    border: 2px solid var(--cor-secundaria);
    color: var(--cor-texto);
    font-family: var(--fonte-texto);
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.botao-opcao:hover {
    background: linear-gradient(135deg, var(--cor-primaria), #2a5a3a);
    transform: translateX(10px);
    box-shadow: var(--sombra-magica);
}

/* Inventário */
.painel-itens {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(13,27,15,0.95);
    padding: 1rem;
    border-radius: 15px 0 0 15px;
    border: 2px solid var(--cor-secundaria);
    border-right: none;
    max-width: 200px;
}

.cabecalho-itens h3 {
    font-family: var(--fonte-titulo);
    color: var(--cor-secundaria);
    margin-bottom: 1rem;
    font-size: 1rem;
}

.lista-itens {
    list-style: none;
}

.lista-itens li {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: rgba(201,162,39,0.2);
    border-radius: 5px;
    font-size: 0.85rem;
}

.item-vazio {
    opacity: 0.5;
    font-style: italic;
}

/* Menu Inferior */
.menu-inferior {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(13,27,15,0.95);
    border-top: 2px solid var(--cor-secundaria);
}

.botao-menu {
    padding: 0.8rem 1.5rem;
    background: var(--cor-primaria);
    border: 1px solid var(--cor-secundaria);
    color: var(--cor-texto);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.botao-menu:hover {
    background: var(--cor-secundaria);
    color: var(--cor-fundo);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    z-index: 100;
    align-items: center;
    justify-content: center;
}

.modal.ativo {
    display: flex;
}

.conteudo-modal {
    background: linear-gradient(135deg, var(--cor-fundo), var(--cor-primaria));
    padding: 2rem;
    border-radius: 20px;
    border: 3px solid var(--cor-secundaria);
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
    position: relative;
}

.fechar-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--cor-texto);
    font-size: 1.5rem;
    cursor: pointer;
}

/* Responsivo */
@media (max-width: 768px) {
    .painel-itens {
        display: none;
    }
    
    .progresso-container {
        flex-direction: column;
        text-align: center;
    }
    
    .barra-progresso {
        width: 100%;
    }
    
    .imagem-animada {
        height: 200px;
    }
    
    .container-texto {
        padding: 1rem;
    }
}

/* Telas */
.tela {
    display: none;
}

.tela.ativa {
    display: flex;
}
```

---

## ✨ `css/animacoes.css`

```css
/* Animações de Entrada */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { 
        opacity: 0;
        transform: translateY(30px);
    }
    to { 
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Aplicar animações */
#area-jogo.ativa {
    animation: fadeIn 0.5s ease;
}

.titulo-cena {
    animation: slideUp 0.5s ease;
}

.texto-narrativa p {
    animation: slideUp 0.5s ease backwards;
}

.texto-narrativa p:nth-child(1) { animation-delay: 0.1s; }
.texto-narrativa p:nth-child(2) { animation-delay: 0.2s; }
.texto-narrativa p:nth-child(3) { animation-delay: 0.3s; }
.texto-narrativa p:nth-child(4) { animation-delay: 0.4s; }

.container-opcoes {
    animation: slideUp 0.5s ease 0.5s backwards;
}

.botao-opcao {
    animation: slideUp 0.3s ease backwards;
}

.botao-opcao:nth-child(1) { animation-delay: 0.6s; }
.botao-opcao:nth-child(2) { animation-delay: 0.7s; }
.botao-opcao:nth-child(3) { animation-delay: 0.8s; }
.botao-opcao:nth-child(4) { animation-delay: 0.9s; }

/* Efeito de digitação */
.typing-effect {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2s steps(40, end);
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

/* Pulsar */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.pulsar {
    animation: pulse 2s ease-in-out infinite;
}

/* Brilho */
@keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
}

.shimmer {
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(201,162,39,0.3) 50%, 
        transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
}

/* Partículas flutuantes (tela início) */
.particulas {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
}

.particulas span {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--cor-secundaria);
    border-radius: 50%;
    animation: float 15s infinite;
    opacity: 0.3;
}

.particulas span:nth-child(1) { left: 10%; animation-delay: 0s; }
.particulas span:nth-child(2) { left: 20%; animation-delay: 2s; }
.particulas span:nth-child(3) { left: 50%; animation-delay: 4s; }
.particulas span:nth-child(4) { left: 70%; animation-delay: 6s; }
.particulas span:nth-child(5) { left: 90%; animation-delay: 8s; }

@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.3;
    }
    90% {
        opacity: 0.3;
    }
    100% {
        transform: translateY(-100vh) rotate(720deg);
        opacity: 0;
    }
}

/* Transição de cenas */
.cena-transicao {
    animation: fadeOut 0.3s ease forwards;
}

@keyframes fadeOut {
    to {
        opacity: 0;
        transform: translateX(-20px);
    }
}

/* Hover nos estados do mapa */
.estado-mapa {
    transition: all 0.3s ease;
}

.estado-mapa:hover {
    transform: scale(1.1);
    filter: brightness(1.3);
}

.estado-desbloqueado {
    fill: var(--cor-secundaria);
    cursor: pointer;
}

.estado-bloqueado {
    fill: #333;
    opacity: 0.5;
}

/* loading */
.loading-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(201,162,39,0.3);
    border-top-color: var(--cor-secundaria);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

---

## 📚 `js/historia.js`

```javascript
// Banco de dados da história - Todas as cenas e conexões
const historia = {
    // ========== CAPÍTULO 1: AMAZONAS ==========
    "inicio": {
        titulo: "O Diário Misterioso",
        regiao: "Norte",
        estado: "Introdução",
        texto: `
            <p>Você segura nas mãos o diário velho e amarrotado de seu avô. As páginas estão amareladas pelo tempo, mas a escrita ainda é legível.</p>
            
            <p><em>"Se você está lendo isto, meu neto(a), significa que eu desapareci. Não foi um acidente. Fui atrás de algo que poucos acreditam existir: as <strong>Lendas Vivas do Brasil</strong>."</em></p>
            
            <p>Ele percorreu cada estado, encontrou criaturas que você acha que existem apenas em histórias para assustar crianças. Mas elas são <strong>reais</strong>.</p>
            
            <p><em>"E agora... alguém está atrás de mim. E provavelmente atrás de você também."</em></p>
            
            <p>Ao fechar o diário, você nota um mapa amassado cair no chão. É um mapa do Brasil com 27 locais marcados - um para cada estado.</p>
        `,
        opcoes: [
            {
                texto: "Seguir a primeira pista - Amazonas 🌴",
                proximo: "amazonas_chegada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas");
                }
            },
            {
                texto: "Examinar o mapa com mais cuidado",
                proximo: "examinar_mapa"
            }
        ]
    },

    "examinar_mapa": {
        titulo: "O Mapa das Lendas",
        regiao: "Norte",
        estado: "Introdução",
        texto: `
            <p>Você observa o mapa com mais atenção. Há anotações do seu avô em cada local:</p>
            
            <p><strong>• Amazonas:</strong> <em>"Comece onde a floresta é mais velha. O Guardião observa tudo."</em></p>
            
            <p><strong>• Bahia:</strong> <em>"A Água de Oxum guarda segredos antigos."</em></p>
            
            <p><strong>• Minas Gerais:</strong> <em>"O Caipora ensina lições aos orgulhosos."</em></p>
            
            <p>E assim por diante, 27 pistas para 27 estados.</p>
            
            <p>Você percebe: para completar a jornada e descobrir o que aconteceu com seu avô, precisará收集ar todos os fragmentos do diário - um em cada estado.</p>
        `,
        opcoes: [
            {
                texto: "Começar a jornada no Amazonas 🌴",
                proximo: "amazonas_chegada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas");
                }
            }
        ]
    },

    "amazonas_chegada": {
        titulo: "Chegada à Amazônia",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Após horas de viagem, você finalmente chega em Manaus. A floresta amazônica se estende até onde a vista alcança - um mar verde infinito de árvores centenárias.</p>
            
            <p>Você olha para as anotações do seu avô: <em>"Comece onde a floresta é mais velha. O Guardião observa tudo."</em></p>
            
            <p>No horizonte, três caminhos se apresentam:</p>
        `,
        opcoes: [
            {
                texto: "Entrar na trilha sonora da floresta 🌿",
                proximo: "encontro_curupira",
                efeitos: () => atualizarProgresso("Amazonas - Trilha")
            },
            {
                texto: "Seguir o rio Amazonas até a foz 🌊",
                proximo: "encontro_boto",
                efeitos: () => atualizarProgresso("Amazonas - Rio")
            },
            {
                texto: "Procurar uma comunidade ribeirinha 👤",
                proximo: "comunidade_ribeirinha",
                efeitos: () => atualizarProgresso("Amazonas - Comunidade")
            }
        ]
    },

    "encontro_curupira": {
        titulo: "O Guardião da Floresta",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você caminha por horas, o som da floresta envolvendo você - pássaros, insetos, o farfalhar das folhas. O sol começa a se pôr quando...</p>
            
            <p><strong>SNAP!</strong></p>
            
            <p>Um som atrás de você. Você se vira e quase cai de susto: um ser pequeno, com cabelos vermelhos como fogo e <strong>pés virados para trás</strong>, está parado entre as árvores.</p>
            
            <p>É o <strong>Curupira</strong>!</p>
            
            <p><em>"Você tem coragem de entrar na minha floresta, humano?"</em> - ele rosna, seus olhos brilhando como brasas.</p>
            
            <p>Você se lembra das lendas: o Curupira protege a floresta de intrusos, mas também pode ser friendly com quem respeita a natureza.</p>
        `,
        opcoes: [
            {
                texto: "Fazer uma reverência e pedir permissão",
                proximo: "curupira_amigo",
                efeitos: () => adicionarItem("Amuleto do Curupira")
            },
            {
                texto: "Tentar explicar que busca informações",
                proximo: "curupira_teste"
            },
            {
                texto: "Recuar lentamente",
                proximo: "curupira_fuga"
            }
        ]
    },

    "curupira_amigo": {
        titulo: "Aliado da Floresta",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você faz uma reverência profunda, como aprendeu nos livros sobre culturas indígenas.</p>
            
            <p><em>"Grande Curupira, peço permissão para entrar em suas terras. Busco respostas sobre meu avô, que desapareceu seguindo as lendas do Brasil."</em></p>
            
            <p>O Curupira inclina a cabeça, surpreso. Sua expressão se suaviza.</p>
            
            <p><em>"Seu avô... sim, eu me lembro dele. Ele respeitou minha floresta. Você tem o mesmo coração?"</em></p>
            
            <p>Ele estende a mão e oferece um pequeno amuleto - um pedaço de madeira com símbolos antigos.</p>
            
            <p><em>"Leve isto. Ele mostrará o caminho quando se perder. E aqui..."</em> - ele entrega um pedaço de papel amarelado - <em>"...o primeiro fragmento do diário dele. Ele deixou comigo para você encontrar."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e seguir para o próximo estado",
                proximo: "para_minas",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas - Completo");
                }
            }
        ]
    },

    "curupira_teste": {
        titulo: "O Teste do Curupira",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p><em>"Espere!"</em> - você diz, erguendo as mãos. <em>"Não quero causar problemas. Meu avô era um estudioso das lendas. Ele desapareceu e eu preciso encontrar respostas."</em></p>
            
            <p>O Curupira cruza os braços, desconfiado.</p>
            
            <p><em>"Muitos dizem isso. Poucos são verdadeiros. Prove sua sinceridade."</em></p>
            
            <p>Ele aponta para uma árvore próxima.</p>
            
            <p><em>"Plante uma muda e cuide dela. Se seu coração for puro, ela crescerá. Se não..."</em> - ele sorri de forma ominosa - <em>"...a floresta terá um novo alimento."</em></p>
        `,
        opcoes: [
            {
                texto: "Plantar a muda com cuidado",
                proximo: "curupira_sucesso"
            },
            {
                texto: "Questionar o teste",
                proximo: "curupira_falha"
            }
        ]
    },

    "curupira_sucesso": {
        titulo: "A Mágica da Floresta",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você se aproxima da árvore indicada e cave um buraco com as mãos. Com cuidado, planta uma pequena muda que encontra próxima.</p>
            
            <p>Enquanto a cobre com terra, sente uma warmth estranha. Olha para baixo e... a muda começa a crescer! Em segundos, transforma-se em uma árvore pequena, com folhas brilhando.</p>
            
            <p>O Curupira assente, impressionado.</p>
            
            <p><em>"Você tem um bom coração, humano. Seu avô tinha o mesmo."</em></p>
            
            <p>Ele lhe entrega um fragmento do diário.</p>
            
            <p><em>"Ele foi para Minas Gerais depois daqui. Busque o Caipora."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para Minas Gerais",
                proximo: "para_minas",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas - Completo");
                }
            }
        ]
    },

    "curupira_falha": {
        titulo: "A Ira da Floresta",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p><em>"Por que eu deveria provar qualquer coisa?"</em> - você diz, defensivo. <em>"Só quero encontrar meu avô."</em></p>
            
            <p>O Curupira rosna, e de repente, a floresta parece ficar mais escura. Você ouve sons ao redor - outros seres se aproximando.</p>
            
            <p><em>"Orgulho. O mesmo defeito de muitos que vieram antes."</em></p>
            
            <p>Você precisa fugir!</p>
        `,
        opcoes: [
            {
                texto: "Correr o mais rápido que puder",
                proximo: "curupira_fuga"
            }
        ]
    },

    "curupira_fuga": {
        titulo: "Fuga da Floresta",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você corre sem olhar para trás, galhos batendo no seu rosto. Depois do que parece uma eternidade, finalmente para em uma clareira.</p>
            
            <p>Está exausto, mas alive. Você não conseguiu o fragmento, mas pelo menos sobreviveu.</p>
            
            <p>Talvez deva tentar uma abordagem diferente na próxima vez...</p>
        `,
        opcoes: [
            {
                texto: "Tentar novamente no Amazonas",
                proximo: "amazonas_chegada"
            },
            {
                texto: "Segir para Minas Gerais mesmo assim",
                proximo: "para_minas"
            }
        ]
    },

    "encontro_boto": {
        titulo: "O Boto Cor-de-Rosa",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você segue o rio, a água cristalina refletindo o céu. Em determinada curva, nota algo se movendo na água.</p>
            
            <p>Um boto cor-de-rosa emerge, não como um animal comum, mas como um homem bonito - muito bonito - com cabelos molhados e sorriso sedutor.</p>
            
            <p>Você se lembra: o <strong>Boto</strong>, que se transforma em homem para conquistar mulheres!</p>
            
            <p><em>"Olá, bela pessoa"</em> - ele diz, sua voz melodiosa. <em>"Que bom encontrar você aqui, sozinha..."</em></p>
        `,
        opcoes: [
            {
                texto: "Fingir interesse para obter informações",
                proximo: "boto_conversa"
            },
            {
                texto: "Explicar que busca seu avô",
                proximo: "boto_ajuda"
            },
            {
                texto: "Afastar-se rapidamente",
                proximo: "boto_fuga"
            }
        ]
    },

    "boto_conversa": {
        titulo: "A Sedução do Boto",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você sorri, jogando o jogo dele. O boto parece pleased, aproximando-se mais.</p>
            
            <p><em>"Que interessante... você busca o velho estudioso? Sim, eu me lembro dele. Ele era muito... persuasivo."</em></p>
            
            <p>O boto ciranda ao seu redor.</p>
            
            <p><em>"Posso te ajudar, mas... que garantia tenho de que você não vai embora depois?"</em></p>
            
            <p>Você percebe que está em uma situação delicada...</p>
        `,
        opcoes: [
            {
                texto: "Tentar obter a informação e partir",
                proximo: "boto_trampa"
            },
                texto: "Ser honesta(o) sobre suas intenções",
                proximo: "boto_ajuda"
            }
        ]
    },

    "boto_trampa": {
        titulo: "A Armadilha do Boto",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você tenta pegar a informação e sair correndo, mas o boto é mais rápido. Ele ri, e de repente, você sente suas pernas pesadas.</p>
            
            <p>Ele se transforma parcialmente - corpo de homem, cauda de boto.</p>
            
            <p><em>"Humanos... sempre tentando enganar. Fique aqui comigo por um tempo. A floresta é tão solitária..."</em></p>
            
            <p>Você precisa escapar!</p>
        `,
        opcoes: [
            {
                texto: "Usar o amuleto (se tiver) ou gritar por ajuda",
                proximo: "boto_fuga"
            }
        ]
    },

    "boto_ajuda": {
        titulo: "O Boto Compreensivo",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p><em>"Olha, não estou aqui para joguinhos"</em> - você diz, sincera(o). <em>"Meu avô desapareceu. Estou tentando encontrá-lo. Não tenho tempo para // Continuando a história - adicione ao arquivo anterior

    "boto_ajuda": {
        titulo: "O Boto Compreensivo",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p><em>"Olha, não estou aqui para joguinhos"</em> - você diz, sincera(o). <em>"Meu avô desapareceu. Estou tentando encontrá-lo. Não tenho tempo para brincadeiras."</em></p>
            
            <p>O boto para,surpreso. Depois de um momento, suspira.</p>
            
            <p><em>"Honesto. Raro nos dias de hoje."</em></p>
            
            <p>Ele se transforma completamente em humano e senta ao seu lado.</p>
            
            <p><em>"Seu avô... ele era diferente. Respeitava a floresta. Ele foi para Minas Gerais depois daqui. Buscou o Caipora."</em></p>
            
            <p>Ele lhe entrega um fragmento do diário.</p>
            
            <p><em>"Vá. Encontre-o. Eda próxima vez... seja mais cuidadosa(o) com quem você encontra na água."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para Minas Gerais",
                proximo: "para_minas",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas - Completo");
                }
            }
        ]
    },

    "boto_fuga": {
        titulo: "Fuga Aquática",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você corre para a margem, longe da água. O boto ri, mas não te persegue.</p>
            
            <p><em>"Até breve, humana(o)..."</em></p>
            
            <p>Você conseguiu escapar, mas não obteve informações. Talvez deva tentar outra abordagem...</p>
        `,
        opcoes: [
            {
                texto: "Voltar e tentar ser mais honesto(a)",
                proximo: "encontro_boto"
            },
            {
                texto: "Seguir para Minas Gerais",
                proximo: "para_minas"
            }
        ]
    },

    "comunidade_ribeirinha": {
        titulo: "Os Saberes dos Ribeirinhos",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você encontra uma pequena comunidade ribeirinha. Uma anciã te observa chegar e acena para você se aproximar.</p>
            
            <p><em>"Você não é daqui"</em> - ela diz. <em>"Mas posso ver no seu rosto que carrega uma missão."</em></p>
            
            <p>Ela fala sobre o avô dele - ele passou por aqui há meses, buscando informações sobre as lendas.</p>
            
            <p><em>"Ele foi bravo. Entrou na floresta à noite. O Curupira o respeitou por isso."</em></p>
            
            <p>A anciã te oferece comida e um lugar para dormir, além de um fragmento do diário que o avô deixou para trás.</p>
        `,
        opcoes: [
            {
                texto: "Aceitar a hospitalidade e descansar",
                proximo: "ribeirinhos_descanso",
                efeitos: () => adicionarFragmento()
            },
            {
                texto: "Agradecer e partir logo",
                proximo: "para_minas",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas - Completo");
                }
            }
        ]
    },

    "ribeirinhos_descanso": {
        titulo: "Noite na Comunidade",
        regiao: "Norte",
        estado: "Amazonas",
        texto: `
            <p>Você aceita a hospitalidade. Durante a noite, a anciã conta histórias sobre as lendas da Amazônia - o Curupira, o Boto, a Cobra Grande...</p>
            
            <p><em>"Seu avô era um homem sábio"</em> - ela diz. <em>"Ele entendia que as lendas não são apenas histórias. São ensinamentos. Respeite a floresta, e ela te respeitará."</em></p>
            
            <p>Pela manhã, você se sente renovado. A anciã te dá um presente: um colar de sementes da floresta.</p>
            
            <p><em>"Ele te protegerá. Agora vá. Seu avô foi para Minas Gerais. Busque o Caipora lá."</em></p>
        `,
        opcoes: [
            {
                texto: "Partir para Minas Gerais",
                proximo: "para_minas",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Amazonas - Completo");
                    adicionarItem("Colar de Sementes");
                }
            }
        ]
    },

    // ========== CAPÍTULO 2: MINAS GERAIS ==========
    "para_minas": {
        titulo: "Rumando a Minas Gerais",
        regiao: "Sudeste",
        estado: "Viagem",
        texto: `
            <p>Você deixa a Amazônia atrás de si e embarca para Minas Gerais - o estado das montanhas e do ouro.</p>
            
            <p>Seu avô escreveu: <em>"O Caipora ensina lições aos orgulhosos. Encontre-o nas matas de Minas."</em></p>
            
            <p>Ao chegar, você se depara com uma paisagem diferente - campos, montanhas e matas de araucária. É belíssimo.</p>
            
            <p>Você está em uma região de mata quando ouve um som: cascos de cavalo... mas não há nenhum cavalo à vista.</p>
        `,
        opcoes: [
            {
                texto: "Investigar o som dos cascos",
                proximo: "encontro_caipora",
                efeitos: () => atualizarProgresso("Minas Gerais")
            },
            {
                texto: "Procurar a cidade mais próxima",
                proximo: "cidade_minas"
            }
        ]
    },

    "encontro_caipora": {
        titulo: "O Caipora",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p>Você segue o som dos cascos até uma clareira. E então o vê: um ser pequeno, peludo, com um chapéu velho e um cavalo branco que parece sair do nada.</p>
            
            <p>É o <strong>Caipora</strong>!</p>
            
            <p><em>"Hihihi! Mais um humano perdido na minha mata!"</em> - ele ri, sua voz estridente.</p>
            
            <p>Você se lembra: o Caipora é um ser travesso que adora pregar peças em viajantes, especialmente nos orgulhosos.</p>
            
            <p><em>"O que você busca aqui, pequeno humano?"</em></p>
        `,
        opcoes: [
            {
                texto: "Ser humilde e pedir informações",
                proximo: "caipora_ajuda"
            },
            {
                texto: "Tentar impressioná-lo",
                proximo: "caipora_teste"
            },
            {
                texto: "Tentar fugir",
                proximo: "caipora_peca"
            }
        ]
    },

    "caipora_ajuda": {
        titulo: "A Bondade do Caipora",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p><em>"Olá, senhor Caipora"</em> - você diz, fazendo uma reverência. <em>"Não quero causar problemas. Estou buscando meu avô, que desapareceu seguindo as lendas do Brasil."</em></p>
            
            <p>O Caipora para de rir,surpreso.</p>
            
            <p><em>"O velho estudioso? Sim, eu me lembro dele. Ele foi muito respeitoso. Diferente da maioria."</em></p>
            
            <p>O Caipora dá uma risadinha.</p>
            
            <p><em>"Ele foi para a Bahia depois daqui. Buscou a Água de Oxum. E você... bem, você também não é mal. Aqui, pegue isto."</em></p>
            
            <p>Ele te entrega um fragmento do diário.</p>
            
            <p><em>"Vá para a Bahia. E lembre-se: o sucesso pertence aos humildes."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para a Bahia",
                proximo: "para_bahia",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Minas Gerais - Completo");
                }
            }
        ]
    },

    "caipora_teste": {
        titulo: "O Teste do Caipora",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p><em>"Eu sou um investigador experiente!"</em> - você diz, orgulhoso. <em>"Já visitei vários estados e sobrevivi a muitas aventuras."</em></p>
            
            <p>O Caipora sorri de forma travessa.</p>
            
            <p><em>"Ah, é? Que interessante... então você não precisa de ajuda, não é?"</em></p>
            
            <p>De repente, você se sente perdido. A mata parece maior, os caminhos se multiplicam.</p>
            
            <p><em>"Vamos ver quão 'experiente' você é, hehehe!"</em></p>
        `,
        opcoes: [
            {
                texto: "Admitir que precisa de ajuda",
                proximo: "caipora_ajuda"
            },
            {
                texto: "Tentar encontrar o caminho sozinho",
                proximo: "caipora_perdido"
            }
        ]
    },

    "caipora_perdido": {
        titulo: "Perdido na Mata",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p>Você tenta encontrar o caminho sozinho, mas a cada passo, parece mais perdido. As árvores parecem se mover, os caminhos mudam.</p>
            
            <p>Horas se passam. Você está exausto e sem rumo.</p>
            
            <p>Finalmente, o Caipora aparece novamente.</p>
            
            <p><em>"Aprendeu a lição, pequeno humano?"</em></p>
        `,
        opcoes: [
            {
                texto: "Admitir erro e pedir ajuda",
                proximo: "caipora_ajuda"
            }
        ]
    },

    "caipora_peca": {
        titulo: "A Peça do Caipora",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p>Você tenta fugir, mas o Caipora é mais rápido. De repente, você está andando em círculos - a mesma clareira, o mesmo cavalo branco, o mesmo Caipora rindo.</p>
            
            <p><em>"Hihihi! Ninguém escapa do Caipora!"</em></p>
            
            <p>Você precisa aprender a lição...</p>
        `,
        opcoes: [
            {
                texto: "Pedir desculpas e ser humilde",
                proximo: "caipora_ajuda"
            }
        ]
    },

    "cidade_minas": {
        titulo: "A Cidade de Minas",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p>Você segue para a cidade mais próxima. É uma cidade histórica, com construções coloniais.</p>
            
            <p>Em uma praça, você encontra um idoso que te observa com interesse.</p>
            
            <p><em>"Você carrega algo consigo, não é?"</em> - ele diz. <em>"Posso sentir. É o diário do Seu João, não é?"</em></p>
            
            <p>Você fica surpreso. O idoso sorri.</p>
            
            <p><em>"Eu era amigo dele. Ele me falou sobre você. Disse que viria."</em></p>
        `,
        opcoes: [
            {
                texto: "Conversar com o idoso",
                proximo: "velho_amigo"
            }
        ]
    },

    "velho_amigo": {
        titulo: "O Amigo do Avô",
        regiao: "Sudeste",
        estado: "Minas Gerais",
        texto: `
            <p>O idoso te leva para sua casa e serve café - café mineiro, forte e delicioso.</p>
            
            <p><em>"Seu avô era um homem extraordinário"</em> - ele diz. <em>"Passou anos estudando as lendas. Ele acreditava que elas guardavam conhecimentos antigos, segredos do Brasil profundo."</em></p>
            
            <p>O velho te entrega um envelope.</p>
            
            <p><em>"Ele deixou isto comigo. Disse que você viria buscar. É um fragmento do diário, com uma pista para a Bahia."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para a Bahia",
                proximo: "para_bahia",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Minas Gerais - Completo");
                    adicionarItem("Mapa Antigo");
                }
            }
        ]
    },

    // ========== CAPÍTULO 3: BAHIA ==========
    "para_bahia": {
        titulo: "Rumando à Bahia",
        regiao: "Nordeste",
        estado: "Viagem",
        texto: `
            <p>Você embarca para a Bahia - terra de axé, Salvador e muitas lendas.</p>
            
            <p>Seu avô escreveu: <em>"A Água de Oxum guarda segredos antigos. Encontre as águas em Salvador."</em></p>
            
            <p>Ao chegar em Salvador, a energia é diferente - há música no ar, pessoas alegres, uma cultura rica e vibrante.</p>
            
            <p>Você precisa encontrar as águas sagradas de Oxum.</p>
        `,
        opcoes: [
            {
                texto: "Procurar uma casa de candomblé",
                proximo: "candomble",
                efeitos: () => atualizarProgresso("Bahia")
            },
            {
                texto: "Explorar o Pelourinho",
                proximo: "pelourinho"
            }
        ]
    },

    "candomble": {
        titulo: "A Casa de Candomblé",
        regiao: "Nordeste",
        estado: "Bahia",
        texto: `
            <p>Você encontra uma casa de candomblé e pede para falar com a mãe de santo. Uma mulher madura, com olhos sábios, te recebe.</p>
            
            <p><em>"Eu te esperava"</em> - ela diz. <em>"Seu avô veio aqui há meses. Ele buscava a sabedoria de Oxum."</em></p>
            
            <p>Ela explica que Oxum é a orixá das águas doces, do ouro, do amor e da fertilidade. Ela guarda conhecimentos antigos.</p>
            
            <p><em>"Vá ao rio. Lá você encontrará o que busca."</em></p>
        `,
        opcoes: [
            {
                texto: "Ir ao rio indicado",
                proximo: "encontro_oxum"
            }
        ]
    },

    "encontro_oxum": {
        titulo: "As Águas de Oxum",
        regiao: "Nordeste",
        estado: "Bahia",
        texto: `
            <p>Você chega a um rio tranquilo. A água brilha de forma especial ao pôr do sol.</p>
            
            <p>De repente, você vê uma mulher beautiful emergir das águas - sua pele brilha como ouro, seus cabelos fluem como a água.</p>
            
            <p>É <strong>Oxum</strong>!</p>
            
            <p><em>"Você busca seu avô"</em> - ela diz, sua voz melodiosa. <em>"Ele veio até mim. Eu o ajudei. Agora ajudo você."</em></p>
            
            <p>Oxum estende a mão e oferece um fragmento do diário.</p>
            
            <p><em>"Ele foi para o Nordeste buscar outras lendas. Vá para Pernambuco. Lá encontrará a Mula sem Cabeça."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para Pernambuco",
                proximo: "para_pernambuco",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Bahia - Completo");
                    adicionarItem("Água Sagrada de Oxum");
                }
            }
        ]
    },

    "pelourinho": {
        titulo: "Os Mistérios do Pelourinho",
        regiao: "Nordeste",
        estado: "Bahia",
        texto: `
            <p>Você caminha pelo Pelourinho, admirando as construções históricas. O lugar tem uma energia única - história, cultura e algo mais...</p>
            
            <p>Uma mulher te aborda.</p>
            
            <p><em>"Você não é daqui"</em> - ela diz. <em>"Mas posso sentir que tem um propósito. Seu avô? Ele passou por aqui."</em></p>
            
            <p>Ela se apresenta como uma filha de Oxum e oferece ajuda.</p>
        `,
        opcoes: [
            {
                texto: "Aceitar a ajuda",
                proximo: "encontro_oxum"
            }
        ]
    },

    // ========== CAPÍTULO 4: PERNAMBUCO ==========
    "para_pernambuco": {
        titulo: "Rumando a Pernambuco",
        regiao: "Nordeste",
        estado: "Viagem",
        texto: `
            <p>Você chega a Pernambuco - terra do frevo, do maracatu e... da Mula sem Cabeça!</p>
            
            <p>Seu avô escreveu: <em>"A Mula sem Cabeça galopa nas noites de quinta-feira. Encontre-a onde a lua brilha."</em></p>
            
            <p>Você está em uma área rural quando ouve o som de cascos... mas não há nenhum animal à vista.</p>
        `,
        opcoes: [
            {
                texto: "Investigar o som",
                proximo: "encontro_mula",
                efeitos: () => atualizarProgresso("Pernambuco")
            }
        ]
    },

    "encontro_mula": {
        titulo: "A Mula sem Cabeça",
        regiao: "Nordeste",
        estado: "Pernambuco",
        texto: `
            <p>Você segue o som até uma clareira. E então a vê - uma mula correndo em círculos, sem cavaleiro, sem cabeça!</p>
            
            <p>Do pescoço, sai um relincho horrível. Você se lembra: a Mula sem Cabeça é uma mulher amaldiçoada que transformed em mula às quintas-feiras.</p>
            
            <p>Você precisa ajudá-la a quebrar a maldição!</p>
        `,
        opcoes: [
            {
                texto: "Tentar conversar com ela",
                proximo: "mula_conversa"
            },
            {
                texto: "Observar de longe",
                proximo: "mula_observar"
            }
        ]
    },

    "mula_conversa": {
        titulo: "A História da Mula",
        regiao: "Nordeste",
        estado: "Pernambuco",
        texto: `
            <p><em>"Espere!"</em> - você grita. <em>"Quero ajudar!"</em></p>
            
            <p>A Mula para,ofegante. Depois de um momento, você ouve uma voz - feminina, triste.</p>
            
            <p><em>"Ajudar? Ninguém pode me ajudar. Fui amaldiçoada por quebrar um voto sagrado."</em></p>
            
            <p>Ela conta sua história - foi uma mulher que prometeu algo a Deus e não cumpriu. Agora paga com esta maldição.</p>
            
            <p><em>"Seu avô... ele tentou me ajudar também. Não conseguiu. Mas me deixou isto."</em></p>
            
            <p>Ela deixa cair um fragmento do diário.</p>
            
            <p><em>"Ele foi para o Rio de Janeiro. Buscou o Saci."</em></p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para o Rio de Janeiro",
                proximo: "para_rio",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Pernambuco - Completo");
                }
            }
        ]
    },

    "mula_observar": {
        titulo: "Observando a Mula",
        regiao: "Nordeste",
        estado: "Pernambuco",
        texto: `
            <p>Você observa de longe. A Mula corre em círculos por horas, até que o sol começa a nascer. Então, ela desaparece.</p>
            
            <p>Você encontra um objeto no chão - um fragmento do diário que ela deve ter deixado cair.</p>
        `,
        opcoes: [
            {
                texto: "Pegas o fragmento e partir para o Rio de Janeiro",
                proximo: "para_rio",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Pernambuco - Completo");
                }
            }
        ]
    },

    // ========== CAPÍTULO 5: RIO DE JANEIRO ==========
    "para_rio": {
        titulo: "Rumando ao Rio de Janeiro",
        regiao: "Sudeste",
        estado: "Viagem",
        texto: `
            <p>Você chega ao Rio de Janeiro - a cidade maravilhosa!</p>
            
            <p>Seu avô escreveu: <em>"O Saci vive nas florestas do Rio. Ele é travesso, mas guarda segredos importantes."</em></p>
            
            <p>Você está em uma floresta quando ouve uma risada travessa...</p>
        `,
        opcoes: [
            {
                texto: "Procurar a fonte do som",
                proximo: "encontro_saci",
                efeitos: () => atualizarProgresso("Rio de Janeiro")
            }
        ]
    },

    "encontro_saci": {
        titulo: "O Saci",
        regiao: "Sudeste",
        estado: "Rio de Janeiro",
        texto: `
            <p>Você olha ao redor e vê um ser pequeno, com um gorro vermelho, fumando um cachimbo. É o <strong>Saci</strong>!</p>
            
            <p><em>"Eita, um humano na minha mata!"</em> - ele ri. <em>"O que você quer, caranguejo?"</em></p>
            
            <p>O Saci é conhecido por ser travesso, mas também por ajudar quem ele considera merecedor.</p>
        `,
        opcoes: [
            {
                texto: "Ser respeitoso e pedir ajuda",
                proximo: "saci_ajuda"
            },
            {
                texto: "Tentar negociar",
                proximo: "saci_negocio"
            }
        ]
    },

    "saci_ajuda": {
        titulo: "O Saci Generoso",
        regiao: "Sudeste",
        estado: "Rio de Janeiro",
        texto: `
            <p><em>"Olá, Seu Saci"</em> - você diz respeitosamente. <em>"Estou buscando meu avô, que desapareceu. Ele era um estudioso das lendas."</em></p>
            
            <p>O Saci solta uma baforada de fumaça e te observa.</p>
            
            <p><em>"O velho? Ah, sim! Ele foi muito simpático. Me deu um bom cachimbo aquellas época."</em></p>
            
            <p>O Saci ri.</p>
            
            <p><em>"Ele foi para São Paulo depois daqui. Buscou o Cabeça de Frade. Tchau, tchau!"</em></p>
            
            <p>Ele te entrega um fragmento do diário.</p>
        `,
        opcoes: [
            {
                texto: "Agradecer e partir para São Paulo",
                proximo: "para_sao_paulo",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Rio de Janeiro - Completo");
                    adicionarItem("Gorro Vermelho do Saci");
                }
            }
        ]
    },

    "saci_negocio": {
        titulo: "Negociando com o Saci",
        regiao: "Sudeste",
        estado: "Rio de Janeiro",
        texto: `
            <p><em>"O que você quer em troca de informações?"</em> - você pergunta.</p>
            
            <p>O Saci sorri de forma travessa.</p>
            
            <p><em>"Hmm... interessante. Você é esperto. Gosto disso."</em></p>
            
            <p>Ele faz uma proposta.</p>
        `,
        opcoes: [
            {
                texto: "Aceitar o acordo",
                proximo: "saci_acordo"
            }
        ]
    },

    "saci_acordo": {
        titulo: "O Acordo",
        regiao: "Sudeste",
        estado: "Rio de Janeiro",
        texto: `
            <p>Você e o Saci fazem um acordo. Ele te dá informações em troca de um favor futuro.</p>
            
            <p><em>"Seu avô foi para São Paulo. Buscou o Cabeça de Frade. Agora vão, cumplice!"</em></p>
            
            <p>Ele te entrega um fragmento.</p>
        `,
        opcoes: [
            {
                texto: "Partir para São Paulo",
                proximo: "para_sao_paulo",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Rio de Janeiro - Completo");
                }
            }
        ]
    },

    // ========== CAPÍTULO 6: SÃO PAULO ==========
    "para_sao_paulo": {
        titulo: "Rumando a São Paulo",
        regiao: "Sudeste",
        estado: "Viagem",
        texto: `
            <p>Você chega em São Paulo - a maior cidade do Brasil!</p>
            
            <p>Seu avô escreveu: <em>"O Cabeça de Frade aparece nas praias de São Paulo. Encontre-o onde as ondas são fortes."</em></p>
            
            <p>Você vai até uma praia...</p>
        `,
        opcoes: [
            {
                texto: "Ir à praia ao pôr do sol",
                proximo: "encontro_cabeca_frade",
                efeitos: () => atualizarProgresso("São Paulo")
            }
        ]
    },

    "encontro_cabeca_frade": {
        titulo: "O Cabeça de Frade",
        regiao: "Sudeste",
        estado: "São Paulo",
        texto: `
            <p>Você está na praia quando nota algo estranho flutuando na água - uma cabeça humana, sem corpo!</p>
            
            <p>É o <strong>Cabeça de Frade</strong>!</p>
            
            <p>Ela se aproxima de você, seus olhos te fitando.</p>
            
            <p><em>"Você busca o velho"</em> - ela diz, sua voz hollow. <em>"Ele veio até mim. Perguntou sobre o final da jornada."</em></p>
        `,
        opcoes: [
            {
                texto: "Ouvir o que ela tem a dizer",
                proximo: "cabeca_revelacao"
            }
        ]
    },

    "cabeca_revelacao": {
        titulo: "A Revelação",
        regiao: "Sudeste",
        estado: "São Paulo",
        texto: `
            <p><em>"Seu avô descobriu a verdade"</em> - a Cabeça de Frade diz. <em>"As lendas não são apenas histórias. Elas são guardiãs de conhecimentos antigos. E há algo que está sendo guardado há séculos// Adicione esta continuação ao arquivo historia.js

    "cabeca_revelacao": {
        titulo: "A Revelação Final",
        regiao: "Sudeste",
        estado: "São Paulo",
        texto: `
            <p><em>"Seu avô descobriu a verdade"</em> - a Cabeça de Frade diz. <em>"As lendas não são apenas histórias. Elas são guardiãs de conhecimentos antigos. E há algo que está sendo guardado há séculos..."</em></p>
            
            <p>Ela se aproxima mais.</p>
            
            <p><em>"Seu avô foi atrás do segredo final. Ele foi para a Chapada Diamantina, na Bahia. Lá está a entrada para o mundo das lendas."</em></p>
            
            <p>Ela te entrega um fragmento do diário.</p>
            
            <p><em>"Colete todos os 27 fragmentos e encontrará a verdade. Boa sorte, jovem viajante."</em></p>
        `,
        opcoes: [
            {
                texto: "Partir para a Chapada Diamantina",
                proximo: "para_chapada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("São Paulo - Completo");
                }
            }
        ]
    },

    // ========== CAPÍTULO 7: CHAPADA DIAMANTINA ==========
    "para_chapada": {
        titulo: "Rumando à Chapada Diamantina",
        regiao: "Nordeste",
        estado: "Bahia - Chapada",
        texto: `
            <p>Você chega à Chapada Diamantina - uma região de montanhas, cachoeiras e mistérios.</p>
            
            <p>Seu avô escreveu: <em>"A verdade está onde o Diamante brilha no escuro. Encontre a caverna no topo da montanha."</em></p>
            
            <p>Você começa a subir a montanha...</p>
        `,
        opcoes: [
            {
                texto: "Subir até o topo",
                proximo: "caverna_secreta",
                efeitos: () => atualizarProgresso("Chapada Diamantina")
            }
        ]
    },

    "caverna_secreta": {
        titulo: "A Caverna Secreta",
        regiao: "Nordeste",
        estado: "Bahia - Chapada",
        texto: `
            <p>Você encontra uma caverna escondida. Dentro, há cristais que brilham no escuro - diamantes!</p>
            
            <p>No centro da caverna, há um altar antigo. E sobre ele... um diário completo.</p>
            
            <p>Você se aproxima e lê as últimas palavras do seu avô:</p>
        `,
        opcoes: [
            {
                texto: "Ler as últimas palavras do avô",
                proximo: "mensagem_avo"
            }
        ]
    },

    "mensagem_avo": {
        titulo: "A Mensagem do Avô",
        regiao: "Nordeste",
        estado: "Bahia - Chapada",
        texto: `
            <p><em>"Se você está lendo isto, meu neto(a), parabéns! Você completou a jornada.</em></p>
            
            <p><em>As lendas do Brasil são reais. Elas são guardiãs de conhecimentos antigos, passados de geração em geração. Cada criatura lendária protege um pedaço da sabedoria do nosso povo.</em></p>
            
            <p><em>Eu descobri que há um tesouro - não de ouro, mas de conhecimento. E agora, esse tesouro é seu.</em></p>
            
            <p><em>Continue a jornada. Explore os outros estados. Colete todas as lendas. E quando estiver pronto(a)... você saberá o que fazer.</em></p>
            
            <p><em>Com amor, Seu Avô."</em></p>
        `,
        opcoes: [
            {
                texto: "Aceitar o legado e continuar a jornada",
                proximo: "final_parte1"
            }
        ]
    },

    // ========== FINAIS ==========
    "final_parte1": {
        titulo: "O Início de Uma Nova Jornada",
        regiao: "Brasil",
        estado: "Conclusão - Parte 1",
        texto: `
            <p>Você aceita o legado do seu avô. Agora entende que sua jornada está apenas começando.</p>
            
            <p>Há 27 estados para explorar, cada um com suas próprias lendas e segredos.</p>
            
            <p>Você olha para o mapa. Há muito o que descobrir ainda...</p>
            
            <p><strong>PARABÉNS! Você completou a primeira parte da jornada!</strong></p>
            
            <p>Mas as lendas continuam esperando por você...</p>
        `,
        opcoes: [
            {
                texto: "Ver Mapa do Brasil - Próximos Estados",
                proximo: "mapa_estados",
                acao: "abrir_mapa"
            },
            {
                texto: "Recomeçar a história",
                proximo: "inicio",
                acao: "reiniciar"
            }
        ]
    },

    "mapa_estados": {
        titulo: "Mapa do Brasil - Explore Mais",
        regiao: "Brasil",
        estado: "Mapa",
        texto: `
            <p>Você tem o mapa completo agora. Cada estado brasileiro tem suas próprias lendas esperando para serem descobertas!</p>
            
            <p>Alguns exemplos de lendas que você pode explorar:</p>
            
            <p><strong>Nordeste:</strong> Iara (sereia), Negrinho do Pastoreio, Papa-Figo</p>
            <p><strong>Sul:</strong> Lobisomem, Mula sem Cabeça, Charque</p>
            <p><strong>Centro-Oeste:</strong> Boitatá, Pombero</p>
            <p><strong>Norte:</strong> Cobra Grande, Mapinguari</p>
            
            <p>A jornada nunca termina...</p>
        `,
        opcoes: [
            {
                texto: "Continuar explorando",
                proximo: "para_nordeste",
                efeitos: () => atualizarProgresso("Próximos Estados")
            }
        ]
    },

    // ========== ESTADOS ADICIONAIS ==========
    "para_nordeste": {
        titulo: "Explorando Mais Estados",
        regiao: "Nordeste",
        estado: "Viagem",
        texto: `
            <p>Você decide continuar sua jornada pelos estados brasileiros.</p>
            
            <p>Próximo destino: explorar as lendas do Nordeste!</p>
        `,
        opcoes: [
            {
                texto: "Viajar para o Ceará",
                proximo: "ceara_intro"
            }
        ]
    },

    "ceara_intro": {
        titulo: "Chegada ao Ceará",
        regiao: "Nordeste",
        estado: "Ceará",
        texto: `
            <p>Você chega ao Ceará - terra do sol, do mar e de muitas lendas!</p>
            
            <p>Seu avô escreveu sobre o estado: <em>"No Ceará, a Iara espera nas águas. Cuidado com seu canto..."</em></p>
            
            <p>Você está na praia quando ouve um canto lindo, irresistível...</p>
        `,
        opcoes: [
            {
                texto: "Investigar o canto",
                proximo: "encontro_iara"
            },
            {
                texto: "Ignorar e explorar a cidade",
                proximo: "fortaleza_explorar"
            }
        ]
    },

    "encontro_iara": {
        titulo: "A Iara",
        regiao: "Nordeste",
        estado: "Ceará",
        texto: `
            <p>Você segue o canto até a água. Uma mulher beautiful emerge - cabelos negros molhados, pele morena, olhos que hipnotizam.</p>
            
            <p>É a <strong>Iara</strong>!</p>
            
            <p><em>"Você veio até mim"</em> - ela diz, sua voz melodiosa. <em>"Seu avô também veio. Ele foi forte, resistiu ao meu canto. Você será igual?"</em></p>
            
            <p>Você precisa resistir à sua magia!</p>
        `,
        opcoes: [
            {
                texto: "Resistir ao canto",
                proximo: "iara_resiste"
            },
            {
                texto: "Aproximar-se",
                proximo: "iara_encanto"
            }
        ]
    },

    "iara_resiste": {
        titulo: "Força de Vontade",
        regiao: "Nordeste",
        estado: "Ceará",
        texto: `
            <p>Você fecha os olhos e se concentra. Pensando no seu avô, na sua missão, na jornada que ainda tem pela frente.</p>
            
            <p>O canto tenta te envolver, mas você resiste!</p>
            
            <p>A Iara sorri, impressionada.</p>
            
            <p><em>"Você é forte. Seu avô também foi. Aqui está o que ele deixou para você."</em></p>
            
            <p>Ela te entrega um fragmento do diário.</p>
        `,
        opcoes: [
            {
                texto: "Agradecer e continuar",
                proximo: "continuar_jornada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Ceará - Completo");
                }
            }
        ]
    },

    "iara_encanto": {
        titulo: "Sob o Encanto",
        regiao: "Nordeste",
        estado: "Ceará",
        texto: `
            <p>Você se aproxima da Iara. Ela estende a mão...</p>
            
            <p>Mas então, você se lembra do amuleto do Curupira! Ele brilha e você acorda do transe!</p>
            
            <p>A Iara ri.</p>
            
            <p><em>"Quase! Seu avô tinha algo para te proteger também, não é?"</em></p>
            
            <p>Ela te dá um fragmento.</p>
        `,
        opcoes: [
            {
                texto: "Continuar a jornada",
                proximo: "continuar_jornada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Ceará - Completo");
                }
            }
        ]
    },

    "fortaleza_explorar": {
        titulo: "Explorando Fortaleza",
        regiao: "Nordeste",
        estado: "Ceará",
        texto: `
            <p>Você ignora o canto e explora a cidade de Fortaleza.</p>
            
            <p>Em uma livraria antiga, você encontra um livro sobre lendas do Ceará. Dentro, há um fragmento do diário do seu avô!</p>
        `,
        opcoes: [
            {
                texto: "Pegas o fragmento e continuar",
                proximo: "continuar_jornada",
                efeitos: () => {
                    adicionarFragmento();
                    atualizarProgresso("Ceará - Completo");
                }
            }
        ]
    },

    "continuar_jornada": {
        titulo: "A Jornada Continua",
        regiao: "Brasil",
        estado: "Em Andamento",
        texto: `
            <p>Sua jornada pelos estados brasileiros continua!</p>
            
            <p>Há muito mais lendas para descobrir:</p>
            
            <p>🌊 <strong>Piauí</strong> - O Negreiro</p>
            <p>🏜️ <strong>Rio Grande do Norte</strong> - O Lobisomem</p>
            <p>🌴 <strong>Maranhão</strong> - O Bicho Papão</p>
            <p>🦅 <strong>Goiás</strong> - O Buraco das Araras</p>
            <p>❄️ <strong>Rio Grande do Sul</strong> - O keber</p>
            
            <p>A cada estado, você fica mais próximo da verdade completa!</p>
        `,
        opcoes: [
            {
                texto: "Escolher próximo estado",
                proximo: "escolher_estado"
            }
        ]
    },

    "escolher_estado": {
        titulo: "Escolha Seu Próximo Destino",
        regiao: "Brasil",
        estado: "Mapa",
        texto: `
            <p>Abra o mapa e escolha para onde ir!</p>
            
            <p>Cada estado tem:</p>
            <p>✓ Uma lenda única</p>
            <p>✓ Um fragmento do diário</p>
            <p>✓ Novos itens e descobertas</p>
        `,
        opcoes: [
            {
                texto: "Abrir Mapa",
                proximo: "mapa_aberto",
                acao: "abrir_mapa"
            }
        ]
    },

    "mapa_aberto": {
        titulo: "Mapa do Brasil",
        regiao: "Brasil",
        estado: "Mapa",
        texto: `
            <p>🎯 <strong>Selecione um estado no mapa!</strong></p>
            
            <p>Estados já visitados: <span id="estados-visitados">0</span></p>
            <p>Fragmentos coletados: <span id="fragmentos-coletados">0</span></p>
        `,
        opcoes: [
            {
                texto: "Voltar ao jogo",
                proximo: "continuar_jornada"
            }
        ]
    }
};

// ========== DADOS DOS ESTADOS ==========
const estadosBrasil = [
    { sigla: "AC", nome: "Acre", regiao: "Norte", lenda: "Cobra Grande" },
    { sigla: "AL", nome: "Alagoas", regiao: "Nordeste", lenda: "Cachorro do Inferno" },
    { sigla: "AP", nome: "Amapá", regiao: "Norte", lenda: "Mapinguari" },
    { sigla: "AM", nome: "Amazonas", regiao: "Norte", lenda: "Curupira" },
    { sigla: "BA", nome: "Bahia", regiao: "Nordeste", lenda: "Iara" },
    { sigla: "CE", nome: "Ceará", regiao: "Nordeste", lenda: "Iara" },
    { sigla: "DF", nome: "Distrito Federal", regiao: "Centro-Oeste", lenda: "Saci" },
    { sigla: "ES", nome: "Espírito Santo", regiao: "Sudeste", lenda: "Mula sem Cabeça" },
    { sigla: "GO", nome: "Goiás", regiao: "Centro-Oeste", lenda: "Boitatá" },
    { sigla: "MA", nome: "Maranhão", regiao: "Nordeste", lenda: "Bicho Papão" },
    { sigla: "MT", nome: "Mato Grosso", regiao: "Centro-Oeste", lenda: "Curupira" },
    { sigla: "MS", nome: "Mato Grosso do Sul", regiao: "Centro-Oeste", lenda: "Pombero" },
    { sigla: "MG", nome: "Minas Gerais", regiao: "Sudeste", lenda: "Caipora" },
    { sigla: "PA", nome: "Pará", regiao: "Norte", lenda: "Cobra Grande" },
    { sigla: "PB", nome: "Paraíba", regiao: "Nordeste", lenda: "Negrinho do Pastoreio" },
    { sigla: "PR", nome: "Paraná", regiao: "Sul", lenda: "Lobisomem" },
    { sigla: "PE", nome: "Pernambuco", regiao: "Nordeste", lenda: "Mula sem Cabeça" },
    { sigla: "PI", nome: "Piauí", regiao: "Nordeste", lenda: "Negreiro" },
    { sigla: "RJ", nome: "Rio de Janeiro", regiao: "Sudeste", lenda: "Saci" },
    { sigla: "RN", nome: "Rio Grande do Norte", regiao: "Nordeste", lenda: "Lobisomem" },
    { sigla: "RS", nome: "Rio Grande do Sul", regiao: "Sul", lenda: "Keber" },
    { sigla: "RO", nome: "Rondônia", regiao: "Norte", lenda: "Curupira" },
    { sigla: "RR", nome: "Roraima", regiao: "Norte", lenda: "Mapinguari" },
    { sigla: "SC", nome: "Santa Catarina", regiao: "Sul", lenda: "Mula sem Cabeça" },
    { sigla: "SP", nome: "São Paulo", regiao: "Sudeste", lenda: "Cabeça de Frade" },
    { sigla: "SE", nome: "Sergipe", regiao: "Nordeste", lenda: "Iara" },
    { sigla: "TO", nome: "Tocantins", regiao: "Norte", lenda: "Cobra Grande" }
];

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { historia, estadosBrasil };
}