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
exports.verifCredentials = exports.registerUser = exports.idUser = exports.getUser = void 0;
const data_source_1 = require("../Config/data-source");
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield data_source_1.usuarioModelo.find({ relations: ["credencial", "turnos"], order: { id: "ASC" } });
    if (usuarios.length === 0) {
        return `no se registran usuarios`;
    }
    return usuarios;
});
exports.getUser = getUser;
const idUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioId = yield data_source_1.usuarioModelo.findOne({ where: { id: id }, relations: ["turnos"] });
    if (!usuarioId) {
        return `usuario inexistente`;
    }
    else {
        return usuarioId;
    }
});
exports.idUser = idUser;
const registerUser = (user, cred) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoUsuario = yield data_source_1.usuarioModelo.create(user);
    const creden = yield data_source_1.credencialModelo.create(cred);
    data_source_1.credencialModelo.save(creden);
    nuevoUsuario.credencial = creden;
    yield data_source_1.usuarioModelo.save(nuevoUsuario);
    return `usuario registrado`;
});
exports.registerUser = registerUser;
const verifCredentials = (nameUser, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.credencialModelo.findOne({ where: { nameUser: nameUser }, relations: ["user"] });
    if (user) {
        if (user.password === password) {
            return {
                status: true,
                user: user.user.id
            };
        }
    }
    return { error: true, mensaje: "Usuario y/o contraseña incorrecta/s" };
});
exports.verifCredentials = verifCredentials;
