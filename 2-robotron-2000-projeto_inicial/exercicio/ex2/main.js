const estoque = document.querySelector(".estoque");

estoque.addEventListener('click', () => {
    manipulaLista();
})

function manipulaLista(visualizacao) {
    const controle = document.querySelector("[data-controle]");

    if(controle.style.display === 'block') {
        controle.style.display = 'none';
    }else{
        controle.style.display = 'block';
    }
}
