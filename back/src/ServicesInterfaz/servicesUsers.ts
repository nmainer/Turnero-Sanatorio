/* import { IUsers } from "../Interfaces/IUser"
import { dtoUsers } from "../dtos/dtoUsers";
import { credentialsUser } from "./credentialService";



const valorUsers : IUsers[] = [];



export const getUser = async (): Promise<IUsers[] | string>=>{
  if(valorUsers.length === 0) {
    return `no se registran usuarios`;
  }
  return valorUsers;
}

export const idUser = async (id: number) : Promise <IUsers|undefined>=>{

const valor : IUsers|undefined =  valorUsers.find((elemento)=>elemento.id === id);

return valor;

}
let id = 1;

export const registerUser = async (User:dtoUsers , username: string , password : string) : Promise<string> =>{

const newCred : number  = await credentialsUser({username,password});

const newUser : IUsers  = {
    id: id,
    name: User.name,
    email: User.email,
    birthdate: User.birthdate,
    nDni: User.nDni,
    credentialsId: newCred ,
}
    valorUsers.push(newUser);

    id= id+1;

    return `Usuario registrado`;
};

*/