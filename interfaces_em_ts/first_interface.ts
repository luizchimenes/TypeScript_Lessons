// Jeito longo de fazer
const carroAntigo = { // Usando um objeto
    nome: 'Civic',
    ano: 2000,
    quebrado: true
}

const printarCarro = (carroAntigo: {nome: string; ano: number; quebrado: boolean}): void => { // Annotation do argumento -> MUITO LONGO
    console.log(`
    Nome: ${carroAntigo.nome}
    Ano: ${carroAntigo.ano}
    Quebrado: ${carroAntigo.quebrado}`)
}

printarCarro(carroAntigo)

// Usando INTERFACE
interface Carro {
    nome: string,
    ano: number,
    quebrado: boolean
}

const printarCarro2 = (carroAntigo: Carro): void => {
    console.log(`
    Nome: ${carroAntigo.nome}
    Ano: ${carroAntigo.ano}
    Quebrado: ${carroAntigo.quebrado}`)
}

printarCarro2(carroAntigo)