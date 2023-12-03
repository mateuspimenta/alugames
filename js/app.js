function alterarStatus(numBotao) {
    let jogoSelecionado = document.getElementById(`game-${numBotao}`);
    let textoBotao = jogoSelecionado.querySelector('a');
    if (textoBotao.innerHTML == 'Alugar') {
        textoBotao.innerHTML = 'Devolver';
        jogoSelecionado.querySelector('div').classList.add('dashboard__item__img--rented');
        jogoSelecionado.querySelector('a').classList.add('dashboard__item__button--return');
    } else {
        textoBotao.innerHTML = 'Alugar';
        jogoSelecionado.querySelector('div').classList.remove('dashboard__item__img--rented');
        jogoSelecionado.querySelector('a').classList.remove('dashboard__item__button--return');
    }
}