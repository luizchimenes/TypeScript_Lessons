const add = (a: number, b: number ): number => a + b
// type inference funciona somente com o retorno da função
// já os argumentos precisam ter annotation
console.log(add(2,3))

const subtract = (a: number, b: number) => { // Infere com void
    let sub = a - b;
    console.log(sub)
}

console.log(subtract(3,2))

function divide(a: number, b: number) {
    return a / b
}