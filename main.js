document.addEventListener('DOMContentLoaded', () => {
    // Defina a data do seu aniversário (Ano, Mês-1, Dia)
    const dataAniversario = new Date('2025-10-08T00:00:00');

    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    function atualizarContador() {
        const agora = new Date();
        const diferenca = dataAniversario - agora;

        if (diferenca <= 0) {
            // Se a data já passou, para o contador
            clearInterval(intervalo);
            document.querySelector('.countdown__timer').innerHTML = '<h3 class="section-title">A celebração começou!</h3>';
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        // Adiciona um zero à esquerda se o número for menor que 10
        diasEl.textContent = String(dias).padStart(2, '0');
        horasEl.textContent = String(horas).padStart(2, '0');
        minutosEl.textContent = String(minutos).padStart(2, '0');
        segundosEl.textContent = String(segundos).padStart(2, '0');
    }

    // Atualiza o contador a cada segundo
    const intervalo = setInterval(atualizarContador, 1000);

    // Chama a função uma vez para não haver atraso na exibição
    atualizarContador();
});
