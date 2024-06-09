
import { IAppointDTO } from "../dtos/dtoAppointments";
import { turnoModelo,usuarioModelo } from "../Config/data-source";
import { Turno } from "../entities/Turnos";
import { Usuario } from "../entities/Usuarios";




export const getAppo = async (): Promise <Turno[] | string>=>{

  const turnos : Turno[] | undefined = await turnoModelo.find();
  
  if(turnos.length === 0) {
    
    return `no se registran turnos`
  } 
 return turnos;
};




export const getDetallAppo = async (id:number) : Promise <Turno|string>=>{

const turno : Turno|null = await turnoModelo.findOneBy({id:id});

if (!turno){
  
return `no se registran turnos con ese ID`;
}
return turno;

}



export const newAppo = async (turno:IAppointDTO) : Promise<string>=>{
  
 
  const app : Turno = await turnoModelo.create(turno);

  const user : Usuario | null= await usuarioModelo.findOneBy({id:turno.usuarioId});

  if(user){
    await turnoModelo.save(app);
  
    return `turno creado`;
  } else {
    return `usuario inexistente`
  }


  }
    
  
export const cancelAppo = async (id:number) : Promise<string>=>{
    
  const App : Turno | null = await turnoModelo.findOneBy({id:id})

  if(!App){
    return `turno no encontrado`;
  } else {
    App.estado = "cancelado";
    await turnoModelo.save(App);
    return `turno cancelado`
  }

}