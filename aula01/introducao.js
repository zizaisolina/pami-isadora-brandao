console.log("Hello b1tch3sssss!!!");
// ponto chama tudo que está na palavra que a sucede (por exemplo, log está dentro do console.)

var Variavel01 = "Yayyyyy";
let Variavel02 = "Wassupppp";
const Variavel03 = "Buenas Noches";

// (* se clicar Ctrl + ; faz comentários... alternativa para duas barras.)

//Concatenação (trazer duas variáveis na mesma mensagem, organizando-as) de variáveis 
console.log(Variavel01 + Variavel02); // sem espaço
console.log(Variavel01, Variavel02); // insere espaço

Variavel01 = "Olá!";
console.log(Variavel01, Variavel02);

// Variavel03 = "Helloooo";
// Variaveis do tipo constante não podem
// Receber um novo valor que sobreescreva 
// o original

let teste = "texto";
console.log(typeof(teste));
Teste = 2;
console.log(typeof(Teste));
Teste = {nome: "Isadora", idade: 19};
console.log("O tipo agora é: ", typeof(Teste));
Teste = {1, 2};
console.log("O resultado do tipo de array é ", typeof(Teste));

