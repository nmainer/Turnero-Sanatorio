import {Router} from "express"
import { getUserControler,getIdControler,postRegisterControler,postLoginControler} from "../Controlers/userController";

const routerUsers: Router = Router();

routerUsers.get("/",getUserControler);
routerUsers.get("/:id",getIdControler);
routerUsers.post("/register", postRegisterControler);
routerUsers.post("/login", postLoginControler )



export default routerUsers;