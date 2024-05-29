import {Router} from "express";
import routerUsers from "./UserRouter";
import appointRout from "./AppointUsers";

const routerIndex= Router();


routerIndex.use("/users",routerUsers);

routerIndex.use("/appointments",appointRout);


export default routerIndex;
