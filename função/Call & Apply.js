function getPreço(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 + imposto)}`
}

const produto = {
    nome: 'Iphone 11',
    Preco: 4589,
    desc: 0.15,
    getPreço
}

global.preco = 20
global.desc = 0.1
console.log(getPreço())
console.log(produto.getPreço())

const carro = { preco: 49990, desc: 0.20}

console.log(getPreço.call(carro))
console.log(getPreço.apply(carro))

console.log(getPreço.call(carro, 0.17, '$'))
console.log(getPreço.apply(carro, [0.17, '$']))