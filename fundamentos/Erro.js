function tratarErroELance(erro) {
    //throw new Error('...')
    throw 10
}

function imprimirNomeGritado(obj) {
   try {
        console.log(onj.name.perCase() + '!!!toUp')
   } catch (e) {
       tratarErroELancar(e)

   }
}
const obj = { nome : 'Roberto' }
imprimirNomeGritado(obj)