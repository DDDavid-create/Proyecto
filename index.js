function ingresarTexto(msj){
    let mensaje = prompt(msj)
    return mensaje
}

let msj = ingresarTexto("Ingrese el nombre de usuario")
alert(msj)