const conteudo = document.querySelectorAll(".input")

conteudo.forEach(input =>{
   input.addEventListener('change',()=>{
        if(conteudo.item !== null){
            input.classList.add("corVerde");
        }

        if(conteudo.item === ''){
            input.classList.remove("corVerde");
        }
        
   });
});