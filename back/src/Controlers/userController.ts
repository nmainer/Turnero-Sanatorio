
import { Request, Response} from "express"
import { getUser, idUser , registerUser, verifCredentials } from "../ServicesTypeORM/usuarioORM"






export const postRegisterControler = async (req: Request , res: Response)=> {

try {
  const {nombre,apellido,direccion,telefono,email,dni,urlFoto,nameUser,password} = req.body;

  await registerUser ({nombre,apellido,direccion,telefono,email,dni,urlFoto},{nameUser,password});
  
  res.status(201).send(`usuario registrado con exito`);
}catch(error){
  res.status(400).send(`error al crear usuario: ${error}`)
}

};




export const getUserControler = async (req : Request, res : Response ) =>{

 const valoresUser = await getUser();

  res.status(200).json(valoresUser);
}







export const getIdControler =  async (req: Request , res : Response) =>{
  
try{

  const {id} = req.params

  const valorUserId = await idUser(Number(id));
  
  
  res.status(200).json(valorUserId);
  

  } catch(error){
    res.status(404).send(`Usuario no encontrado : ${error}`);
  }
  
}

export const postLoginControler = async (req: Request , res: Response) =>{

try{
const {nameUser,password} = req.body;

const Loginuser = await verifCredentials (nameUser,password);

if ( typeof Loginuser === 'object' && Loginuser !== null && 'status' in Loginuser) {

  if (Loginuser.status === true){
    res.status(200).send("Login exitoso! Bienvenido!");
  }
} else  if (typeof Loginuser === 'object' && Loginuser !== null && 'error' in Loginuser && "mensaje" in Loginuser){

    if(Loginuser.error){
      res.status(401).send(Loginuser.mensaje);
    } 
}
}
catch(error){
  res.status(400).send(`ERROR: ${error}`)
}


}
