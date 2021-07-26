export interface Cliente{
    cedula:string
    nombresCompletos:string
    correo:string
    direccion:string
    telefono:string
}

export interface ClienteResponse extends Cliente{
    estado:string
}

/*class Cliente{
    cedula:string
    nombres:string
    apellidos:string
    correo:string
    direccion:string
    telefono:string
    
}*/