const cidades: string[] = ['São Paulo', 'Curitiba', 'Salvador', 'Belo Horizonte', 'Recife'];

function listarCidades(lista: string[]): void {
  lista.forEach((cidade) => {
    console.log(cidade);
  });
}

listarCidades(cidades);