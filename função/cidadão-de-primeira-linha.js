//função em JS é finrt-Class object (Citizens)
// higher-order function

//criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

//Armazena em um Array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[o](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return ' opa'}
console.log(obj.falar())

//passar função como param
function fun(fun) {
    fun()
}

fun(function () {console.log('execultando....')})

//um função pode retornar/conter em função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)