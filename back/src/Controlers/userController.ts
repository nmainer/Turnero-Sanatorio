
import { Request, Response} from "express"
import { getUser, idUser , registerUser, loginUser } from "../Services/servicesUsers"

export const getUserControler = async (req : Request, res : Response ) =>{
  res.status(200).json ("Muestra todos los usuarios");
}

export const getIdControler =  async (req: Request , res : Response) =>{
    res.status(200).json ("Devuelve el usuario segun ID");
}

export const postRegisterControler = async ( req: Request , res : Response)=>{
    res.status(200).json("Registra usuario");
}

export const postLoginControler = async ( req: Request , res : Response)=>{
  res.status(200).json("Login del usuario");
}



