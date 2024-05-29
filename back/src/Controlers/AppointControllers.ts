import { Request, Response } from "express"
import { getAppo, deleteAppo, scheduleAppo ,getDetallAppo } from "../Services/servicesAppoint"

export const appGetControler = async (req : Request , res : Response) =>{
  res.status(200).json("Muestra todos los turnos registrados");
}
export const appDetalControler = async (req : Request , res : Response) =>{
    res.status(200).json("Muestra el turno segun ID");

}
export const appScheduleControler = async (req : Request , res : Response) =>{
    res.status(200).json("Agenda nuevo turno");
}
export const appCancelControler = async (req : Request , res : Response) =>{
    res.status(200).json("Cancela turno");

}
