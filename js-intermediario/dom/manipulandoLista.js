let nomeAutor;
        let i=0;

        // Obter o elemento com a classe 'nomeAutor'. 
        // Supondo que haja apenas um elemento com essa classe.
        nomeAutor = document.getElementsByClassName('nomeAutor')[0];

        // Verificar se o elemento foi encontrado antes de usar
        if (nomeAutor) {
            console.log(nomeAutor.textContent); // Exibir o conteúdo textual do elemento
        } else {
            console.log("Elemento com a classe 'nomeAutor' não encontrado.");
        }

        function publicar() {
            // Obter o campo de entrada de texto pelo ID 'inputConteudo'
            let inputConteudo = document.getElementById('inputConteudo');
            let conteudoDigitado;
            let novosComentarios;
            // Verificar se o campo de entrada foi encontrado antes de usar
                    conteudoDigitado = inputConteudo.value; // Obter o valor do campo de entrada
                    novosComentarios = document.getElementById('novos-comentarios')
                    novosComentarios.innerHTML = novosComentarios.innerHTML += 
                    `<p>novo comentario: ${conteudoDigitado} </p>`
          
        }