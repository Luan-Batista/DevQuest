

        let nascimento = function(idade, mes, imprimir) {
            let mesAtual = 5;
            let anoNascimento = 2024 - idade;
            if (mes > mesAtual) anoNascimento--;
            imprimir(anoNascimento);
        }

        let imprimirAnoNascimento = (anoNascimento, anoId) => {
            const ano = document.getElementById(anoId);
            ano.innerHTML = '';

            const p = document.createElement('p');
            p.textContent = 'Seu ano de nascimento é: ' + anoNascimento;
            ano.appendChild(p);
        }

        nascimento(20, 8, imprimirAnoNascimento);
        let a,b
        if(a!=b){
            
        }