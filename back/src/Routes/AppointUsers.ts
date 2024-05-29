
import {Router} from "express";
import { appCancelControler,appDetalControler,appScheduleControler,appGetControler } from "../Controlers/AppointControllers";


const appointRout : Router = Router();


appointRout.get("/", appGetControler);
appointRout.get("/:id", appDetalControler);
appointRout.post("/schedule", appScheduleControler);
appointRout.put("/cancel", appCancelControler);

export  default appointRout;