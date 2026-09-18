//Declarações de variáveis
let nome: string = 'Isadora';
let idade: number = 25;
let estaAtivo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Nicol', 'Isadora', 'Tati'];
let misto: (string | number)[] = ['Nicol', 18, 'Tati', 42];
let misto2: Array<string | number> = ['Nicol', 18, 'Tati', 42];

//Tuplas
let pessoa: [string, number] = ['Murillo', 32];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para definir a estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Matheus',
    idade: 18
};

