import { Request, Response } from "express"
import {getAppo,newAppo,getDetallAppo, cancelAppo} from "../ServicesTypeORM/turnoORM"


export const appGetControler = async (req : Request , res : Response)=>{
try{
  const getAp  = await getAppo();
  res.status(200).json(getAp);
}catch(error){
  res.status(404).send(`ERROR usuario: ${error}`)
}
};


export const appDetalControler = async (req : Request , res : Response) =>{
try{
  const id : number = parseInt(req.params.id);
  const valorAppUs = await getDetallAppo(id);
  res.status(200).json(valorAppUs);
}catch(error){
  res.status(404).send(`ERROR: ${error}`)
}
    
}


export const newAppControler = async (req:Request ,res:Response) =>{
try{
  const {dia,hora,doctor,usuarioId} = req.body;
  const nApp = await newAppo ({dia,hora,doctor,usuarioId});
  res.status(201).send(nApp);
}catch(error){
  res.status(400).send(`datos incorrectos, ERROR: ${error}`)
}
}


export const appCancelControler = async (req : Request , res : Response) =>{
try{
  const {id} = req.params;
  const canApp = await cancelAppo(parseInt(id));
  res.status(200).json(canApp);

}catch (error){
res.status(404).send(`ERROR: ${error}`)
}
}
