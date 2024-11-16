"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credencialModelo = exports.turnoModelo = exports.usuarioModelo = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Usuarios_1 = require("../entities/Usuarios");
const Turnos_1 = require("../entities/Turnos");
const Credenciales_1 = require("../entities/Credenciales");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Nic@1990",
    database: "hw_typeorm",
    synchronize: true,
    //dropSchema: true,
    logging: false,
    entities: [Usuarios_1.Usuario, Credenciales_1.Credencial, Turnos_1.Turno],
    subscribers: [],
    migrations: [],
});
exports.usuarioModelo = exports.AppDataSource.getRepository(Usuarios_1.Usuario);
exports.turnoModelo = exports.AppDataSource.getRepository(Turnos_1.Turno);
exports.credencialModelo = exports.AppDataSource.getRepository(Credenciales_1.Credencial);
