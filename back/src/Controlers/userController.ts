
import { Request, Response} from "express"
import { getUser, idUser , registerUser } from "../Services/servicesUsers"


export const getUserControler = async (req : Request, res : Response ) =>{

 const valoresUser = await getUser();

  res.status(200).json(valoresUser);
}

export const getIdControler =  async (req: Request , res : Response) =>{
  const id : number = parseInt(req.params.id);
  const valorUserId = await idUser(id);

  res.status(200).json (valorUserId);
}

export const postRegisterControler = async ( req: Request , res : Response)=>{
  const {name,email,birthdate,nDni} : {name:string,email:string,birthdate:Date,nDni:number} = req.body;
  const {username} : {username: string} = req.body.credentialsId;
  const {password} : {password: string}= req.body.credentialsId;
  const valorUs = await registerUser ({name,email,birthdate,nDni},username,password);

    res.status(200).json(valorUs);
}

/*export const postLoginControler = async ( req: Request , res : Response)=>{

  res.status(200).json("Login del usuario");
}*/



