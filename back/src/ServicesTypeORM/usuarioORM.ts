

import { credencialModelo, usuarioModelo } from "../Config/data-source";
import { createCreddto } from "../dtos/dtoCred";
import {  UserDTO, createUserDto} from "../dtos/dtoUsers";
import { Credencial } from "../entities/Credenciales";
import { Usuario } from "../entities/Usuarios";






export const getUser = async () : Promise<Usuario[]|string> =>{
const usuarios : Usuario[] | undefined = await usuarioModelo.find( {relations : ["credencial","turnos"], order:{id:"ASC"}})

  if(usuarios.length === 0) {
    return `no se registran usuarios`;
  }
  return usuarios;
}




    export const idUser = async (id:number)=>{

    const usuarioId : createUserDto |null = await usuarioModelo.findOne({where: {id:id} , relations : ["turnos"]});

    if(!usuarioId){
      return `usuario inexistente`
    } else {
      return usuarioId;
    }
        
    }
    



export const registerUser = async (user:createUserDto , cred: createCreddto)  =>{

  const nuevoUsuario : Usuario = await usuarioModelo.create(user);

  const creden : Credencial = await credencialModelo.create(cred);

  credencialModelo.save(creden);

  nuevoUsuario.credencial = creden ;

  await usuarioModelo.save(nuevoUsuario);
    
  
  return `usuario registrado`;
  };
    
    
  export const verifCredentials = async (nameUser: string ,password: string) : Promise <UserDTO|object>=>{

    const user : Credencial | null = await credencialModelo.findOne({where : {nameUser:nameUser} , relations : ["user"]});
    
    if(user){
        if(user.password === password){
         return {
          status: true,
          user: user.user
         }
        }    
    } 
      return { error: true , mensaje: "Usuario y/o contraseña incorrecta/s"};
  
  }

