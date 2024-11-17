
const ValidarRegister = (input)=>{
let error = {}

for (let elemento in input ){
if (!input[elemento]){
    error[elemento] = "Falta completar datos"
}
}

if (input.userName){
    if (input.nameUser.length <5 || input.nameUser.length > 8){
        error.nameUser = "Nombre de usuario debe contener de 5 a 8 caracteres"
    }
}



const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (input.email){
    if(!formatoEmail.test(input.email)){
        error.email="Formato email incorrecto"
    }
}
    


const dniRegex = /^\d+$/;

if(input.dni){
    if(!dniRegex.test(input.dni)){
        error.dni = "solo numeros sin puntos"
        }
}



const urlRegex = /\.(jpeg|jpg|png)$/;
if (input.urlFoto){
    if(!urlRegex.test(input.urlFoto.toLowerCase())){
        error.urlFoto = "Formato no valido , solo Jpeg,jpg y png"
        }
}



const upperCaseRegex = /[A-Z]/g;
const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

if(input.password){
    if(input.password.length >= 9){
         error.password = "La contraseña debe contener hasta 8 caracteres"
    }
    else if(!input.password.match(upperCaseRegex) ||input.password.match(upperCaseRegex).length < 2){
        error.password = "La contraseña debe contener dos letras mayuscula"
    }
    else if (!specialCharRegex.test(input.password)){
        error.password = "La contraseña debe contener al menos 1 caracter especial"
    }
}

if(input.password2){
    if(input.password2 !== input.password){
        error.password2 = "Las contraseñas deben coincidir"
    }
}

return error;

}

export default ValidarRegister;