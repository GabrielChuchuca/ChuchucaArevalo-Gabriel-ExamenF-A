export interface Restaurante{
    nombre:string
    direccion:string
    telefono:string
    numAforo:string
}

export interface RestauranteResponse extends Restaurante{
    estado:string
}