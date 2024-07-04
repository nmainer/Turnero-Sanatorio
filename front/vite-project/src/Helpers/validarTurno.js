

const ValidarTurno = (input)=>{
 let error = {};

if (!input.dia){
    error.dia = " cuatro digitos para el año dos para el mes y dos para el dia ,separados de guion ej: 2024-06-55"
}
if(!input.hora){
    error.hora= "formato 24 horas con hs al final, ej : 15:00hs"
}
if(!input.doctor){
    error.doctor= "solo apellido del profesional"
}

return error;
}


export default ValidarTurno; 