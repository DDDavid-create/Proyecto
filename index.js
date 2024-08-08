function ingresarTexto(msj){
    let mensaje = prompt(msj)
    return mensaje
}

function ingresarNumero(msj){
    let num = Number(prompt(msj))
    return num
}


let msj = ingresarTexto("Ingrese el nombre de usuario")
let num = ingresarNumero("Ingrese su numero de cel")

alert(`Su nombre es: ${msj} y su num de cel: ${num}`)


