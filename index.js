const avanca = document.querySelectorAll('.btn-proximo');  // Seleciona todos os botões de "Próximo"
const reiniciarBtn = document.getElementById('btn-reiniciar');  // Seleciona o botão de reinício

// Lida com os cliques nos botões de "Próximo"
avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');  // Seleciona o passo atual com a classe "ativo"
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');  // Obtém o próximo passo a partir do atributo "data-proximo"

        // Esconde o passo atual e mostra o próximo
        atual.classList.remove('ativo');
        const proximoElemento = document.getElementById(proximoPasso);

        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        } else {
            console.error(`Elemento com ID "${proximoPasso}" não encontrado.`);
        }
    });
});

// Reinicia o jogo ao clicar no botão de reinício
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        // Esconde o passo atual e mostra o primeiro passo
        const atual = document.querySelector('.ativo');
        if (atual) {
            atual.classList.remove('ativo');
        }
        document.getElementById('passo-0').classList.add('ativo');  // Exibe o passo 0
    });
}
