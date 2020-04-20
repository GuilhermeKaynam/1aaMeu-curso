Number.prototype.entre = function (inicio, fin) {
    return this >= inicio && this <= fin
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)) {
        console.log('reprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    }else if(nota.entre(0,399)) {
        console.log('Reprovado')
    }else {
        console.log('Nota Invalida')
    }

    console.log('fin')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)                       