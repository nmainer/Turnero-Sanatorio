const ValidarRegister = (data)=>{
let errors = {};
if(!data.nameUser){
    errors.nameUser = "Debe ingresar usuario";
}
if(!data.password){
    errors.password = "Debe ingresar contraseña";
}
return errors;

}
 
export default ValidarRegister;