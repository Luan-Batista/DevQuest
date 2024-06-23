let materiais = ['colher de pedreiro', 'betoneira','trena']

// Função para gerar os itens da lista
function gerarLista(materiais, listaId) {
  const lista = document.getElementById(listaId); // Obter a referência à lista pelo ID

  // Limpar a lista antes de adicionar os nomes
  lista.innerHTML = '';

  // Adicionar cada nome como um item de lista à lista
  arrayNomes.forEach(nome => {
    const li = document.createElement('li'); // Criar um elemento de lista
    li.textContent = nome; // Definir o texto do elemento de lista como o nome atual
    lista.appendChild(li); // Adicionar o elemento de lista à lista
  });
}

// Chamar a função para gerar as listas
gerarLista(materiais, 'lista1');

