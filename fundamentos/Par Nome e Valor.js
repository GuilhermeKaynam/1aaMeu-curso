// Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = ' falaaa' // contexto léxico
    return saudacao
}

// obetos são grupos aninhados de pares nome/valor
const Client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)