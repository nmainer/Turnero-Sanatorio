import { Request, Response } from "express"
import {getAppo,newAppo,getDetallAppo, cancelAppo} from "../ServicesTypeORM/turnoORM"


export const appGetControler = async (req : Request , res : Response)=>{

const getAp  = await getAppo();

  res.status(200).json(getAp);
};


export const appDetalControler = async (req : Request , res : Response) =>{

    const id : number = parseInt(req.params.id);
    const valorAppUs = await getDetallAppo(id);

    res.status(200).json(valorAppUs);
}


export const newAppControler = async (req:Request ,res:Response) =>{


const {dia,hora,usuario} : {dia:string,hora:string,usuario:number} = req.body;

  
const nApp = await newAppo ({dia,hora,usuario});

res.status(200).send(nApp);

}


export const appCancelControler = async (req : Request , res : Response) =>{

    const {id} = req.body;
    const canApp = await cancelAppo(id);

    res.status(200).json(canApp);

}
