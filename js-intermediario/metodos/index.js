let usuario = {
    nome: 'luan',
    idade: 20,
    id: 1,
    excluir: function name(params) {
        console.log("o usuario de id " + this.id + " foi excluido");
        this.nome = " ";
        this.idade = 0;
        console.log("o usuario foi excluido!!", this.nome, this.idade);
    }


}

usuario.excluir();
