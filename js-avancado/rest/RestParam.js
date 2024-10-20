const incentivaQuest = (mensagem, ...questers) => {
    console.log(`${mensagem}`)
    questers.forEach((quester) => {
        console.log(`${quester}!`);
    })

    const filtrados = questers.filter(nome => menorQueF(nome));
    console.log('nomes filtrados', filtrados.map(nome => nome.toUpperCase()));
}
function menorQueF(nome){
    return nome.toLowerCase() < 'f';
}
incentivaQuest('olá, parabens por chegar no modulo de js avançado', 'Fulano','Cicrano','Beltrano')