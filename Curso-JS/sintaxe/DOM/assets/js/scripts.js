const botao = document.getElementById('mode-selector');


botao.addEventListener("click", mudarEstado);


function mudarEstado(){
    
    if(botao.innerHTML == 'Dark Mode'){
        document.getElementById('page-title').innerHTML = 'Dark Mode ON';
        botao.innerHTML = 'Light Mode';
    } else {
        document.getElementById('page-title').innerHTML = 'Light Mode ON';
        botao.innerHTML = 'Dark Mode';
    }

    document.body.classList.toggle('dark-mode');
    botao.classList.toggle('dark-mode');
    document.getElementById('foot').classList.toggle('dark-mode');
}