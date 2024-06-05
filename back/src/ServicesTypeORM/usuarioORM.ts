
import { usuarioModelo } from "../Config/data-source";
import { dtoUsers } from "../dtos/dtoUsers";
import { Usuario } from "../entities/Usuarios";





export const getUser = async () : Promise<Usuario[]|string> =>{
const usuarios : Usuario[] | undefined = await usuarioModelo.find( {relations:{credencial:true,turnos:true} , order:{id:"ASC"}})

  if(usuarios.length === 0) {
    return `no se registran usuarios`;
  }
  return usuarios;
}




export const idUser = async (id: number) : Promise<Usuario|string>=>{

const usuarioId : Usuario | null = await usuarioModelo.findOneBy({id:id});

if (!usuarioId){
  return `no se encontro usuario con id ingresado`
}

return usuarioId;

}



export const registerUser = async (user:dtoUsers) : Promise<string> =>{

const nuevoUsuario : Usuario = await usuarioModelo.create(user);
await usuarioModelo.save(nuevoUsuario);


return `usuario registrado`;
};