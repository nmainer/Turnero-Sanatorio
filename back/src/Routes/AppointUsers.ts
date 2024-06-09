
import {Router} from "express";
import { appCancelControler,appDetalControler,newAppControler,appGetControler } from "../Controlers/AppointControllers";


const appointRout : Router = Router();


appointRout.get("/", appGetControler);
appointRout.get("/:id", appDetalControler);
appointRout.post("/App", newAppControler);
appointRout.put("/cancel/:id", appCancelControler);

export  default appointRout;