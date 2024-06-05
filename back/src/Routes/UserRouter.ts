import {Router} from "express"
import { getUserControler,getIdControler,postRegisterControler, createCredential} from "../Controlers/userController";

const routerUsers: Router = Router();

routerUsers.get("/",getUserControler);
routerUsers.get("/:id",getIdControler);
routerUsers.post("/register", postRegisterControler);
routerUsers.post("/credencial",createCredential);
/*routerUsers.post("/login", postLoginControler );*/



export default routerUsers;