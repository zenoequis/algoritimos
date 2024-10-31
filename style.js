const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        if (atual) {
            atual.classList.remove('ativo');
        }

        const dataProximo = this.getAttribute('data-proximo');
        if (dataProximo) {
            const proximoPasso = 'passo-' + dataProximo;
            const proximoElemento = document.getElementById(proximoPasso);
            if (proximoElemento) {
                proximoElemento.classList.add('ativo');
            }
        }
    });
});

