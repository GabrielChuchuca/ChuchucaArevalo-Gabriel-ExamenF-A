export interface Cliente{
    cedula:string
    nombres:string
    apellidos:string
    correo:string
    direccion:string
    telefono:string
}

export interface ClienteResponse extends Cliente{
    estadoCreacionUsuario:string
}

/*class Cliente{
    cedula:string
    nombres:string
    apellidos:string
    correo:string
    direccion:string
    telefono:string
    
}*/