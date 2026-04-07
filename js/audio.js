// Sistema de áudio do jogo
// Arquivo: js/audio.js

class GerenciadorAudio {
    constructor() {
        this.audioContext = null;
        this.sons = {};
        this.musicaAtual = null;
        this.volumeGeral = 0.5;
        this.ativado = true;
        
        this.inicializar();
    }

    inicializar() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API não suportada');
        }
    }

    // Sons ambiente (usando oscillator para criar sons simples)
    tocarSomAmbiente(tipo) {
        if (!this.ativado || !this.audioContext) return;

        const sounds = {
            'floresta': { freq: 200, tipo: 'sine' },
            'rio': { freq: 150, tipo: 'triangle' },
            'noite': { freq: 100, tipo: 'sine' },
            'cidade': { freq: 300, tipo: 'square' }
        };

        const config = sounds[tipo] || sounds['floresta'];
        
        // Criar som simples (em produção, usaria arquivos de áudio reais)
        this.criarTom(config.freq, config.tipo, 0.1);
    }

    criarTom(frequencia, tipo, duracao) {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.type = tipo;
        oscillator.frequency.setValueAtTime(frequencia, this.audioContext.currentTime);

        gainNode.gain.setValueAtTime(this.volumeGeral * 0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duracao);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duracao);
    }

    // Efeitos sonoros
    tocarEfeito(efeito) {
        if (!this.ativado) return;

        const efeitos = {
            'click': () => this.criarTom(800, 'sine', 0.1),
            'sucesso': () => {
                this.criarTom(523, 'sine', 0.1);
                setTimeout(() => this.criarTom(659, 'sine', 0.1), 100);
                setTimeout(() => this.criarTom(784, 'sine', 0.2), 200);
            },
            'erro': () => {
                this.criarTom(200, 'sawtooth', 0.3);
            },
            'magia': () => {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        this.criarTom(300 + i * 100, 'sine', 0.2);
                    }, i * 100);
                }
            },
            'passos': () => this.criarTom(100, 'square', 0.05),
            'lenda': () => {
                this.criarTom(440, 'sine', 0.5);
                setTimeout(() => this.criarTom(330, 'sine', 0.5), 300);
            }
        };

        if (efeitos[efeito]) {
            efeitos[efeito]();
        }
    }

    // Controlar volume
    setVolume(valor) {
        this.volumeGeral = Math.max(0, Math.min(1, valor));
    }

    // Alternar som
    toggle() {
        this.ativado = !this.ativado;
        return this.ativado;
    }

    // Parar tudo
    parar() {
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }
}

// Criar instância global
const audioGame = new GerenciadorAudio();

// Funções de convenience
function tocarSom(efeito) {
    audioGame.tocarEfeito(efeito);
}

function tocarAmbiente(tipo) {
    audioGame.tocarSomAmbiente(tipo);
}

// Adicionar sons aos botões
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('botao-opcao') || 
        e.target.classList.contains('botao-magico') ||
        e.target.classList.contains('botao-menu')) {
        tocarSom('click');
    }
});