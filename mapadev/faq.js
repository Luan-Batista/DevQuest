// BUSCAR OS ITENS DA TELA
const itemsPerguntasERespostas = document.querySelectorAll('.item');
    console.log(itemsPerguntasERespostas)
    
//ENTENDER QUE O ITEM FOI COOLOCADO 
itemsPerguntasERespostas.forEach(function(item){
    console.log(item)
    item.addEventListener('click',function(){
    console.log('clicouu')
    })
})

// VERIFICAR SE A PERGUNTA CLICADA ESTÁ ATIVA

 // SE A PERGUNTA NÃO ESTIVER ATIVA
    // ABRIR RESPOSTA ATUAL, MAS EU PRECISO FECHAR TODAS

//SE A ERGUNTA ESTIVER ATIVA
    //DESATIVAR (REMOVER CLASSE ATIVA )