const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
               break
            case 8: case 7:
                console.log('Aprovado')
                break
            case 3: case 2: case 0:
                    console.log('Reprovado')
                break
            y7udefault:
                        console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.45)
imprimirResultado(2.3)
imprimirResultado(-1)