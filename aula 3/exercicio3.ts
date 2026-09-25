interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const meuLivro: Livro = {
  titulo: 'O Guia do Mochileiro das Galáxias',
  autor: 'Douglas Adams',
  anoPublicacao: 1979,
};

function exibirLivro(livro: Livro): void {
  console.log('Título: ' + livro.titulo);
  console.log('Autor: ' + livro.autor);
  console.log('Ano de Publicação: ' + livro.anoPublicacao);
}

exibirLivro(meuLivro);