const cartas = document.querySelectorAll('.carta');
let cartaVirada = false;
let bloqueado = false;
let primeiraCarta, segundaCarta;

function virarCarta(){
    if(bloqueado) return;
    if(this === primeiraCarta) return;

    this.classList.add('virar');
    if(!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this;
        return
    }

    segundaCarta = this;
    cartaVirada = false;

    validarCartasIguais();

}

function validarCartasIguais() {
    if(primeiraCarta.dataset.card === segundaCarta.dataset.card) {
        desativarCartas();
        return;
    }
    desvirarCarta();
}


function desativarCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);

    redefinir();
}

function desvirarCarta() {
    bloqueado = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virar');
        segundaCarta.classList.remove('virar');

        redefinir();
    }, 1500);
}

function redefinir() {
    [cartaVirada, bloqueado] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

(function embaralhar() {
    cartas.forEach((card) => {
        let posicaoAleatoria = Math.floor(Math.random() * 12);
        card.style.order = posicaoAleatoria;
    })
})();

cartas.forEach((card) => {
    card.addEventListener('click', virarCarta);
});