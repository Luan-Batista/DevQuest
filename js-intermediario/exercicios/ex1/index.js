let botaoTrocaCor = document.getElementById('botaoTrocaCor');
let corDaDiv = document.querySelector(".div-azul");
botaoTrocaCor.addEventListener("click", trocarCor)

function trocarCor(){
    corDaDiv.classList.add("div-amarelo");
}