"use strict";
;
const usuario1 = {
    nombre: "nikin",
    edad: 15,
    nacionalidad: "argentino"
};
const usuario2 = {
    nombre: "eduardo",
    ocupacion: "albañil",
    antiguedad: 23,
};
const laborales = {
    trabajadores: [usuario1, usuario2]
};
console.log(laborales);
;
const persona = {
    nombre: "niki",
    apellido: "mainer",
    edad: 45,
    domicilio: {
        calle: "saavedra",
        altura: 4353
    }
};
console.log(persona);
const personita = {
    nombre: "niki",
    apellido: "mainer"
};
console.log(personita);
const numeros = [2, 3, 4, 5, 6];
const palabras = ["hola", "chau"];
var Userole;
(function (Userole) {
    Userole["ADMIN"] = "admin";
    Userole["GUEST"] = "guest";
    Userole["USER"] = "user";
})(Userole || (Userole = {}));
const NicoUser = {
    name: "nicolas",
    lastename: "mainer",
    age: 34,
    email: "mainermnicolas@gmail.com",
    role: Userole.GUEST
};
console.log(NicoUser);
const tallasdisponibles = (talla) => {
    if (talla === "S" || talla === "M") {
        return "no hay disponible";
    }
    return "disponible";
};
console.log(tallasdisponibles("M"));
console.log(tallasdisponibles("XL"));
