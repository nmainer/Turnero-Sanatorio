/*import { ICredentials } from "../Interfaces/ICredentials";
import { dtoCredentials } from "../dtos/dtoCred";

const valorCred : ICredentials[] = [];


let id = 1;

export const credentialsUser = async (credencial: dtoCredentials) : Promise<number>=>{

const newCredential : ICredentials  = {
id:id ,
username: credencial.username,
password: credencial.password
};
valorCred.push(newCredential);

id = id+1;


return newCredential.id;

};

const verifCredentials = async (username : string , password : string) : Promise <string>=>{

    const user = valorCred.find((user)=> user.username === username);
    
    if(user){
        if(user.password === password){
            return `el numero de ID de la Credencial solicitada es: ${user.id}`;
        } else {
            return `contraseña incorrecta`;
        }  
    }
    return `usuario no encontrado`;

}

*/
