const botaoAvancar = document.querySelector(".setaDir");
const slide = document.querySelectorAll(".slide");
const botaoVoltar = document.querySelector(".setaEsq");
let imagemAtual = 0;

botaoAvancar.addEventListener("click",()=>{
    if(imagemAtual === slide.length -1){
        return;
    }

    imagemAtual++;
    esconderImagemAberta();
    slide[imagemAtual].classList.add("mostrar")
    mostrarOuEsconderSetas(imagemAtual,slide.length);
})

botaoVoltar.addEventListener("click",()=>{
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;
    esconderImagemAberta()
    slide[imagemAtual].classList.add("mostrar");
    mostrarOuEsconderSetas(imagemAtual,slide.length)
})

function mostrarOuEsconderSetas(posicao, tamanhoArray){

    if(posicao !== 0){
        botaoVoltar.classList.remove("opacidade")
        botaoAvancar.classList.remove("opacidade")
    }
    
    if(posicao == slide.length -1){
        botaoAvancar.classList.add("opacidade")
    }
    if(posicao === 0)
    {
        botaoAvancar.classList.remove("opacidade")
        botaoVoltar.classList.add("opacidade")
    }
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}