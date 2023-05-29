let apples: number = 10; // Type annotation
apples = 7;
let velocidade: string = 'slow';
velocidade = "mid"
let nomeado: boolean = true;
let dataAtual: Date = new Date(); // utiliza um objeto como valor que é do tipo Date

let cores: Array<string> = ["Azul", 'Verde']; // Utiliza o generics indicando qual o tipo de dado de um array

let numeros: number[] = [1,2,3,4,5] // Array de números - mesma coisa do generics

class Carro {}
let carro: Carro = new Carro();

let ponto: {x: string; y: boolean} = { // deve-se tipar as chaves de um objeto literal
    x: '20',
    y: true
}
//               tipo argumento e tipo retorno
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
} // void -> sem retorno

// Quando usar annotations
// 1) Função que retorna o tipo any
// JSON.parse() retorna o tipo ANY
// Any -> TS não tem ideia do que é ou o que será retornado
const json = '{"x": 10, "y": 20}';
const coordinates  : {x: number, y: number} = JSON.parse(json);
console.log(typeof coordinates)

// 2) Declarar uma variável e não inicializá-la na mesma linha
let num: number;
num = 2;

// 3) Quando uma variável não é inferida corretamente
let numbers = [-20, - 1 , 17];
let numberAboveZero: boolean | number = false;

for (let i of numbers) {
    if (i > 0) {
        numberAboveZero = i;
    }
}
console.log(numberAboveZero)

