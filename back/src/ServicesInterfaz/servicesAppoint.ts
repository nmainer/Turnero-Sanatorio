/* import { IAppointment } from "../Interfaces/IAppointments";
import { IAppointDTO } from "../dtos/dtoAppointments";
import { idUser } from "./servicesUsers";
import { IUsers } from "../Interfaces/IUser";


const valorApp :IAppointment[] = [];

export const getAppo = async (): Promise <IAppointment[] | string>=>{

  if(valorApp.length === 0) {
    return `no se registran turnos`
  } 
 return  valorApp;
};

export const getDetallAppo = async (id:number) : Promise <IAppointment | undefined | string>=>{

    const App : IAppointment|undefined = valorApp.find((app)=> app.id === id);

if (App === undefined){
  
  return `no se registran turnos con ese ID`;
}
    return App;

}

let id : number = 1;
let status : string= "active";

export const newAppo = async(app:IAppointDTO) : Promise<string | number>=>{
 const idUs = app.userId;

 const valorUser : IUsers | undefined = await idUser(idUs);

 if(!valorUser){
  return `usuario inexistente, recuerde que los turnos solo se asignan a personas registradas`
 };

const newAp : IAppointment = {
  id : id,
  ... app,
  status: status
}

id = id+1;

valorApp.push(newAp);

return `turno generado N°: ${newAp.id}`;
    
}


export const cancelAppo = async (id:number) : Promise<string>=>{
    
  const App : IAppointment | undefined = await valorApp.find((elemento)=> elemento.id === id)

  if(!App){
    return `turno no encontrado`;
  } else {
    App.status = `cancelled`
    return `turno cancelado`
  }

}

*/