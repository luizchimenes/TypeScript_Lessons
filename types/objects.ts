const perfil = {
    nome: "Luiz",
    idade: 20,
    coords: {
        lat: 0,
        long: 15
    },

    setAge(idade: number): void {
        this.idade = idade
    }
}
// Deve-se tipar a variável com as propriedades do objeto
const {nome}: {nome: string}= perfil
console.log(nome)
const {coords: {lat, long}}: {coords: {lat: number; long: number}} = perfil