/* Estilos específicos do mapa */

.mapa-interativo {
    padding: 1rem;
}

.mapa-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-top: 1rem;
}

.estado-mapa {
    padding: 15px 5px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.estado-mapa .sigla {
    font-weight: bold;
    font-size: 1rem;
}

.estado-mapa .nome {
    font-size: 0.65rem;
    opacity: 0.8;
}

.estado-mapa:hover {
    transform: scale(1.05);
}

.estado-desbloqueado {
    background: linear-gradient(135deg, #c9a227, #8b6914);
    color: #0d1b0f;
    box-shadow: 0 0 10px rgba(201, 162, 39, 0.5);
}

.estado-bloqueado {
    background: #2a2a2a;
    color: #666;
    opacity: 0.6;
}

.estado-bloqueado:hover {
    opacity: 0.8;
}

/* Responsivo */
@media (max-width: 600px) {
    .mapa-grid {
        grid-template-columns: repeat(5, 1fr);
    }
    
    .estado-mapa {
        padding: 10px 3px;
    }
    
    .estado-mapa .sigla {
        font-size: 0.9rem;
    }
    
    .estado-mapa .nome {
        display: none;
    }
}

/* Legenda do mapa */
.legenda-mapa {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(201, 162, 39, 0.3);
}

.legenda-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
}

.legenda-cor {
    width: 15px;
    height: 15px;
    border-radius: 3px;
}

.legenda-cor.desbloqueado {
    background: #c9a227;
}

.legenda-cor.bloqueado {
    background: #2a2a2a;
}