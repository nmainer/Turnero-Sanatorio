
import { Request, Response} from "express"
import { getUser, idUser , registerUser } from "../ServicesTypeORM/usuarioORM"
import { credentialsUser } from "../ServicesTypeORM/credencialORM";

export const getUserControler = async (req : Request, res : Response ) =>{

 const valoresUser = await getUser();

  res.status(200).json(valoresUser);
}

export const getIdControler =  async (req: Request , res : Response) =>{
  const {id} = req.params
  const valorUserId = await idUser(Number(id));

  res.status(200).json (valorUserId);
}

export const postRegisterControler = async ( req: Request , res : Response)=>{
  const { nombre,apellido,direccion,telefono,email,dni,urlFoto} : {nombre:string,apellido:string,direccion:string,telefono:number,email:string,dni:number,urlFoto:string} = req.body;
  
  const valorUs = await registerUser ({nombre,apellido,direccion,telefono,email,dni,urlFoto});

    res.status(200).json(valorUs);
}

export const createCredential = async ( req:Request, res:Response)=>{

  const {nombreUsuario,contraseña,usuarioId} = req.body;
  const nuevoLogin = await credentialsUser({nombreUsuario,contraseña,usuarioId});


  res.status(200).json(nuevoLogin);
}



