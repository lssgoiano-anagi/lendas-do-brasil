// Lógica principal do jogo
// Arquivo: js/jogo.js

// Variáveis globais do jogo
let estadoAtual = "inicio";
let fragmentosColetados = 0;
let estadosVisitados = [];
let itens = [];
let progresso = {
    estadoAtual: "",
    fragmentos: 0,
    estados: [],
    inventario: []
};

// Elementos do DOM
const app = {
    telaInicio: document.getElementById('tela-inicio'),
    areaJogo: document.getElementById('area-jogo'),
    tituloCena: document.getElementById('titulo-cena'),
    textoHistoria: document.getElementById('texto-historia'),
    opcoes: document.getElementById('opcoes'),
    estadoAtual: document.getElementById('estado-atual'),
    fragmentos: document.getElementById('fragmentos'),
    barra: document.getElementById('barra'),
    listaItens: document.getElementById('lista-itens'),
    imagemCena: document.getElementById('imagem-cena'),
    modalMapa: document.getElementById('modal-mapa'),
    btnComecar: document.getElementById('btn-comecar'),
    btnMapa: document.getElementById('btn-mapa'),
    btnSom: document.getElementById('btn-som'),
    btnSalvar: document.getElementById('btn-salvar')
};

// Inicialização do jogo
function iniciarJogo() {
    // Event listeners
    app.btnComecar.addEventListener('click', () => {
        app.telaInicio.classList.remove('ativa');
        app.areaJogo.classList.add('ativa');
        carregarCena('inicio');
    });

    // Botões do menu
    app.btnMapa.addEventListener('click', abrirMapa);
    app.btnSom.addEventListener('click', toggleSom);
    app.btnSalvar.addEventListener('click', salvarJogo);

    // Fechar modal
    document.querySelector('.fechar-modal').addEventListener('click', () => {
        app.modalMapa.classList.remove('ativo');
    });

    // Carregar jogo salvo
    carregarJogoSalvo();
}

// Carregar uma cena
function carregarCena(cenaId) {
    const cena = historia[cenaId];
    
    if (!cena) {
        console.error('Cena não encontrada:', cenaId);
        return;
    }

    // Atualizar estado
    estadoAtual = cenaId;

    // AtualizarUI
    app.tituloCena.textContent = cena.titulo;
    app.estadoAtual.textContent = cena.estado || cena.titulo;
    
    // Animação de transição
    app.textoHistoria.classList.add('cena-transicao');
    
    setTimeout(() => {
        app.textoHistoria.innerHTML = cena.texto;
        app.textoHistoria.classList.remove('cena-transicao');
    }, 300);

    // Atualizar imagem (placeholder por agora)
    app.imagemCena.style.background = getBackgroundPorRegiao(cena.regiao);

    // Gerar opções
    gerarOpcoes(cena.opcoes);

    // Executar efeitos da cena
    if (cena.efeitos) {
        // Efeitos handled nas opções
    }

    // Rolar para o topo
    window.scrollTo(0, 0);
}

// Gerar botões de opção
function gerarOpcoes(opcoes) {
    app.opcoes.innerHTML = '';
    
    if (!opcoes) return;

    opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.className = 'botao-opcao';
        botao.textContent = opcao.texto;
        botao.style.animationDelay = `${0.6 + index * 0.1}s`;
        
        botao.addEventListener('click', () => {
            // Executar efeitos
            if (opcao.efeitos) {
                opcao.efeitos();
            }
            
            // Executar ação especial
            if (opcao.acao) {
                switch(opcao.acao) {
                    case 'abrir_mapa':
                        abrirMapa();
                        return;
                    case 'reiniciar':
                        reiniciarJogo();
                        return;
                }
            }

            // Ir para próxima cena
            if (opcao.proximo) {
                carregarCena(opcao.proximo);
            }
        });

        app.opcoes.appendChild(botao);
    });
}

// Funções de progresso
function adicionarFragmento() {
    fragmentosColetados++;
    app.fragmentos.textContent = `${fragmentosColetados}/27`;
    
    // Atualizar barra de progresso
    const percentual = (fragmentosColetados / 27) * 100;
    app.barra.style.width = `${percentual}%`;
    
    // Animação de feedback
    app.fragmentos.classList.add('pulsar');
    setTimeout(() => app.fragmentos.classList.remove('pulsar'), 500);
}

function atualizarProgresso(estado) {
    if (!estadosVisitados.includes(estado)) {
        estadosVisitados.push(estado);
    }
    app.estadoAtual.textContent = estado;
}

function adicionarItem(nomeItem) {
    if (!itens.includes(nomeItem)) {
        itens.push(nomeItem);
        atualizarInventario();
    }
}

function atualizarInventario() {
    if (itens.length === 0) {
        app.listaItens.innerHTML = '<li class="item-vazio">Nenhum item ainda...</li>';
        return;
    }

    app.listaItens.innerHTML = itens.map(item => 
        `<li>${item}</li>`
    ).join('');
}

// Funções auxiliares
function getBackgroundPorRegiao(regiao) {
    const backgrounds = {
        'Norte': 'linear-gradient(135deg, #1a5c1a, #0d3310)',
        'Nordeste': 'linear-gradient(135deg, #c9a227, #8b6914)',
        'Sudeste': 'linear-gradient(135deg, #1a472a, #0d1b0f)',
        'Sul': 'linear-gradient(135deg, #2c5282, #1a365d)',
        'Centro-Oeste': 'linear-gradient(135deg, #744210, #3d1f0d)',
        'Brasil': 'linear-gradient(135deg, #1a472a, #c9a227)'
    };
    return backgrounds[regiao] || backgrounds['Brasil'];
}

// Mapa interativo
function abrirMapa() {
    app.modalMapa.classList.add('ativo');
    renderizarMapa();
}

function renderizarMapa() {
    const mapaContainer = document.getElementById('mapa-brasil');
    if (!mapaContainer) return;

    // Criar grid de estados
    mapaContainer.innerHTML = `
        <div class="mapa-grid">
            ${estadosBrasil.map(estado => `
                <div class="estado-mapa ${estadosVisitados.includes(estado.nome) ? 'estado-desbloqueado' : 'estado-bloqueado'}" 
                     data-estado="${estado.nome}"
                     title="${estado.nome} - ${estado.lenda}">
                    <span class="sigla">${estado.sigla}</span>
                    <span class="nome">${estado.nome}</span>
                </div>
            `).join('')}
        </div>
    `;

    // Adicionar estilos inline para o mapa
    mapaContainer.innerHTML += `
        <style>
            .mapa-grid {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 5px;
                max-width: 400px;
                margin: 0 auto;
            }
            .estado-mapa {
                padding: 10px;
                text-align: center;
                border-radius: 5px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .estado-desbloqueado {
                background: #c9a227;
                color: #0d1b0f;
            }
            .estado-bloqueado {
                background: #333;
                color: #666;
            }
            @media (max-width: 500px) {
                .mapa-grid {
                    grid-template-columns: repeat(5, 1fr);
                }
            }
        </style>
    `;
}

// Sistema de áudio
let audioAtivo = true;

function toggleSom() {
    audioAtivo = !audioAtivo;
    const btn = app.btnSom;
    btn.textContent = audioAtivo ? '🔊' : '🔇';
    
    if (audioAtivo) {
        // Retomar áudio se tiver
    } else {
        // Pausar áudio
    }
}

// Salvar/Carregar jogo
function salvarJogo() {
    progresso = {
        estadoAtual: estadoAtual,
        fragmentos: fragmentosColetados,
        estados: estadosVisitados,
        inventario: itens,
        data: new Date().toISOString()
    };

    localStorage.setItem('lendasDoBrasil', JSON.stringify(progresso));
    
    alert('💾 Jogo salvo com sucesso!');
}

function carregarJogoSalvo() {
    const salvo = localStorage.getItem('lendasDoBrasil');
    if (salvo) {
        const dados = JSON.parse(salvo);
        
        // Verificar se quer continuar ou começar novo
        if (dados.fragmentos > 0) {
            const continuar = confirm('Você tem um jogo salvo! Deseja continuar onde parou?');
            
            if (continuar) {
                estadoAtual = dados.estadoAtual || 'inicio';
                fragmentosColetados = dados.fragmentos || 0;
                estadosVisitados = dados.estados || [];
                itens = dados.inventario || [];

                // Atualizar UI
                app.fragmentos.textContent = `${fragmentosColetados}/27`;
                app.barra.style.width = `${(fragmentosColetados / 27) * 100}%`;
                atualizarInventario();

                // Ir para cena salva
                app.telaInicio.classList.remove('ativa');
                app.areaJogo.classList.add('ativa');
                carregarCena(estadoAtual);
            }
        }
    }
}

function reiniciarJogo() {
    if (confirm('Tem certeza que deseja reiniciar? Todo o progresso será perdido!')) {
        localStorage.removeItem('lendasDoBrasil');
        location.reload();
    }
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarJogo);