import { Request, Response } from "express"
import {getAppo,newAppo,getDetallAppo, cancelAppo} from "../Services/servicesAppoint"
import { IAppointment, IHorario } from "../Interfaces/IAppointments";



export const appGetControler = async (req : Request , res : Response)=>{

const getAp  = await getAppo();

  res.status(200).json(getAp);
};


export const appDetalControler = async (req : Request , res : Response) =>{

    const id : number = parseInt(req.params.id);
    const valorAppUs = await getDetallAppo(id);

    res.status(200).json(valorAppUs);
}


export const newAppControler = async (req : Request , res : Response) =>{


const {date,time,userId} : {date:string, time:IHorario ,userId:number} = req.body;
const dtoApp = {
  date,time,userId
}
  
const nApp = await newAppo (dtoApp);

res.status(200).json(nApp);

}


export const appCancelControler = async (req : Request , res : Response) =>{

    const {id} = req.body;
    const canApp = await cancelAppo(id);

    res.status(200).json(canApp);

}
