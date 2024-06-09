import { Usuario } from "../entities/Usuarios";



export interface createUserDto {
    
    nombre:string,
    apellido:string,
    direccion: string,
    telefono: number,
    email: string,
    dni: number,
    urlFoto: string,
    
}

export interface UserDTO{
    status: boolean,
    user:Usuario
}