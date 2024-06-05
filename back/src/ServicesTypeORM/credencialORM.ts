
import { credencialModelo,usuarioModelo } from "../Config/data-source";
import { dtoCredentials } from "../dtos/dtoCred";
import { Credencial } from "../entities/Credenciales";
import { Usuario } from "../entities/Usuarios";




export const credentialsUser = async (credencial: dtoCredentials) : Promise<string>=>{

const inicioCredencial: Credencial = await credencialModelo.create(credencial);
await credencialModelo.save(inicioCredencial);

const user : Usuario | null= await usuarioModelo.findOneBy({id:credencial.usuarioId});

if(user){
    user.credencial = inicioCredencial;
    await usuarioModelo.save(user);

return `credencial asociada a usuario: ${user.nombre}`;
}
return `no se ha encontrado usuario con el id ingresado`;

};




export const verifCredentials = async (nombreUsuario: string ,contraseña: string) : Promise <string>=>{

    const user : Credencial | null= await credencialModelo.findOneBy({nombreUsuario:nombreUsuario});
    
    if(user){
        if(user.contraseña === contraseña){
            return `el numero de ID de la Credencial solicitada es: ${user.id}`;
        } else {
            return `contraseña incorrecta`;
        }  
    }
    return `usuario no encontrado`;

}