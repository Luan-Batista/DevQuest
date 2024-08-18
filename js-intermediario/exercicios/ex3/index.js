let corOriginal = document.querySelector(".black");

corOriginal.addEventListener('click', ()=>{
    let contemAzul = corOriginal.classList.contains('azul');
    
    if(contemAzul){
        corOriginal.classList.remove("azul");
    }else{
        corOriginal.classList.add("azul");
    }
})

