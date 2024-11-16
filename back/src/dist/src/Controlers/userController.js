"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLoginControler = exports.getIdControler = exports.getUserControler = exports.postRegisterControler = void 0;
const usuarioORM_1 = require("../ServicesTypeORM/usuarioORM");
const postRegisterControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, direccion, telefono, email, dni, urlFoto, nameUser, password } = req.body;
        yield (0, usuarioORM_1.registerUser)({ nombre, apellido, direccion, telefono, email, dni, urlFoto }, { nameUser, password });
        res.status(200).send(`usuario registrado con exito`);
    }
    catch (error) {
        res.status(400).send(`error al crear usuario: ${error}`);
    }
});
exports.postRegisterControler = postRegisterControler;
const getUserControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const valoresUser = yield (0, usuarioORM_1.getUser)();
    res.status(200).json(valoresUser);
});
exports.getUserControler = getUserControler;
const getIdControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const valorUserId = yield (0, usuarioORM_1.idUser)(Number(id));
        res.status(200).json(valorUserId);
    }
    catch (error) {
        res.status(404).send(`Usuario no encontrado : ${error}`);
    }
});
exports.getIdControler = getIdControler;
const postLoginControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nameUser, password } = req.body;
        const Loginuser = yield (0, usuarioORM_1.verifCredentials)(nameUser, password);
        if (typeof Loginuser === 'object' && Loginuser !== null && 'status' in Loginuser) {
            if (Loginuser.status === true) {
                res.status(200).send(Loginuser);
            }
        }
        else if (typeof Loginuser === 'object' && Loginuser !== null && 'error' in Loginuser && "mensaje" in Loginuser) {
            if (Loginuser.error) {
                res.status(401).send(Loginuser.mensaje);
            }
        }
    }
    catch (error) {
        res.status(400).send(`ERROR: ${error}`);
    }
});
exports.postLoginControler = postLoginControler;
